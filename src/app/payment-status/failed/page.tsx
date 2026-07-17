import type { Metadata } from "next";
import { PaymentFailedPage } from "@/components/payment/PaymentFailedPage";

export const metadata: Metadata = {
  title: "Payment Failed — Pickmymaid",
  description: "Something went wrong with your payment. Please try again.",
  robots: "noindex",
};

export default function Page() {
  return <PaymentFailedPage />;
}
