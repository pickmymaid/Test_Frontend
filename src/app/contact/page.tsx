import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Pickmymaid",
  description:
    "Get in touch with the Pickmymaid team. We're available Monday to Sunday, 9:00 AM – 10:00 PM. Reach us at support@pickmymaid.com or call +971 566369736.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Pickmymaid",
    description:
      "Get in touch with the Pickmymaid team. We're available Monday to Sunday, 9:00 AM – 10:00 PM.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Pickmymaid",
    description:
      "Get in touch with the Pickmymaid team. We're available Monday to Sunday, 9:00 AM – 10:00 PM.",
  },
};

export default function Page() {
  return <ContactPage />;
}
