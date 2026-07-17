import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Pickmymaid",
  description:
    "Read the Privacy Policy for Pickmymaid. Learn how we collect, use, and protect your personal information when using our platform in the UAE.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyPage />;
}
