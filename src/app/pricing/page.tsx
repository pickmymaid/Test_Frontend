import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Hire a Nanny or Maid in UAE-With Flexible Pricing Options",
  description:
    "Choose the right access plan to find and hire verified maids and nannies in the UAE. One-time payment, no hidden charges, no automatic renewals.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Hire a Nanny or Maid in UAE-With Flexible Pricing Options",
    description:
      "Choose the right access plan to find and hire verified maids and nannies in the UAE. One-time payment, no hidden charges, no automatic renewals.",
    url: "/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Nanny or Maid in UAE-With Flexible Pricing Options",
    description:
      "Choose the right access plan to find and hire verified maids and nannies in the UAE. One-time payment, no hidden charges, no automatic renewals.",
  },
};

export default function Page() {
  return <PricingPage />;
}
