import type { Metadata } from "next";
import { TermsPage } from "@/components/terms/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Pickmymaid",
  description:
    "Read the Terms of Service for Pickmymaid. Understand your rights and responsibilities when using our platform to connect with domestic helpers in the UAE.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsPage />;
}
