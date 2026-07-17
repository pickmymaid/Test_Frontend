import { Suspense } from "react";
import type { Metadata } from "next";
import { PaymentSuccessPage } from "@/components/payment/PaymentSuccessPage";

export const metadata: Metadata = {
  title: "Payment Successful — Pickmymaid",
  description: "Your subscription is now active. Start browsing maids and nannies.",
  robots: "noindex",
};

export default function Page() {
  return (
    <Suspense>
      <PaymentSuccessPage />
    </Suspense>
  );
}
