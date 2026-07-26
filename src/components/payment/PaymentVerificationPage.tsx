"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { acknowledgePayment } from "@/lib/api";

// The gateway redirects the browser back the instant the charge completes,
// but its server-to-server webhook (which is what actually activates the
// subscription in the backend) can lag a few seconds behind. Retry with
// backoff before concluding the payment genuinely failed, so that race
// doesn't get reported to the user as a failed charge.
const RETRY_DELAYS_MS = [1500, 2000, 3000, 4000];

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function PaymentVerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const ref = searchParams.get("ref");
    if (!ref) {
      router.replace("/payment-status/failed");
      return;
    }

    let cancelled = false;

    const verify = async () => {
      for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
        try {
          const res = await acknowledgePayment(ref);
          const { status, type, expiryDate, paymentDate } = res.data;
          if (status === 1) {
            if (cancelled) return;
            const params = new URLSearchParams({
              type: String(type),
              expiry: expiryDate ?? "",
              paid: paymentDate ?? "",
              ref,
            });
            router.replace(`/payment-status/success?${params.toString()}`);
            return;
          }
        } catch (err) {
          console.error("Payment acknowledgement attempt failed:", err);
        }

        if (cancelled) return;
        if (attempt < RETRY_DELAYS_MS.length) {
          await wait(RETRY_DELAYS_MS[attempt]);
          if (cancelled) return;
        }
      }

      if (!cancelled) router.replace("/payment-status/failed");
    };

    verify();

    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-6 max-w-sm w-full shadow-[0px_19px_40px_0px_rgba(0,0,0,0.05)]">
        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold text-dark mb-2">Verifying Payment</h1>
          <p className="text-sm text-muted leading-relaxed">
            Please wait while we confirm your payment. Do not close or refresh this page.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Processing securely via ngenius
        </div>
      </div>
    </div>
  );
}
