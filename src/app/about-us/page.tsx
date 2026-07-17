import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pick My Maid is a SHAMS-registered platform connecting UAE families with verified maids, nannies, and domestic helpers — without agency fees.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us — Pickmymaid",
    description:
      "Pick My Maid is a SHAMS-registered platform connecting UAE families with verified maids, nannies, and domestic helpers — without agency fees.",
    url: "/about-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Pickmymaid",
    description:
      "Pick My Maid is a SHAMS-registered platform connecting UAE families with verified maids, nannies, and domestic helpers — without agency fees.",
  },
};

export default function Page() {
  return (
    <>
      <AboutPage />
    </>
  );
}
