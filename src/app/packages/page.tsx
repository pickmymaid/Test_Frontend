import { Suspense } from "react";
import type { Metadata } from "next";
import { PackagesPage } from "@/components/packages/PackagesPage";

export const metadata: Metadata = {
  title: "Hire a Nanny or Maid in UAE-With Flexible Pricing Options",
  description:
    "Choose the right access plan to find and hire verified maids and nannies in the UAE. One-time payment, no hidden charges, no automatic renewals.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Hire a Nanny or Maid in UAE-With Flexible Pricing Options",
    description:
      "Choose the right access plan to find and hire verified maids and nannies in the UAE. One-time payment, no hidden charges, no automatic renewals.",
    url: "/packages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Nanny or Maid in UAE-With Flexible Pricing Options",
    description:
      "Choose the right access plan to find and hire verified maids and nannies in the UAE. One-time payment, no hidden charges, no automatic renewals.",
  },
};

export default function Page() {
  return (
    <Suspense>
      <PackagesPage />
    </Suspense>
  );
}
