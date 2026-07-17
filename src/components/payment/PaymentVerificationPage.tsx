"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { acknowledgePayment } from "@/lib/api";

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

    acknowledgePayment(ref)
      .then((res) => {
        const { status, type, expiryDate, paymentDate } = res.data;
        if (status === 1) {
          const params = new URLSearchParams({
            type: String(type),
            expiry: expiryDate ?? "",
            paid: paymentDate ?? "",
            ref,
          });
          router.replace(`/payment-status/success?${params.toString()}`);
        } else {
          router.replace("/payment-status/failed");
        }
      })
      .catch(() => {
        router.replace("/payment-status/failed");
      });
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
