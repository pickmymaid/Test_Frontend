import { Suspense } from "react";
import type { Metadata } from "next";
import { PaymentVerificationPage } from "@/components/payment/PaymentVerificationPage";

export const metadata: Metadata = {
  title: "Verifying Payment — Pickmymaid",
  description: "Please wait while we verify your payment.",
  robots: "noindex",
};

export default function Page() {
  return (
    <Suspense>
      <PaymentVerificationPage />
    </Suspense>
  );
}
