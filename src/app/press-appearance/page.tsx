import type { Metadata } from "next";
import { KhaleejTimesPage } from "@/components/press/KhaleejTimesPage";

export const metadata: Metadata = {
  title: "Featured in Khaleej Times",
  description:
    "Pickmymaid was featured in Khaleej Times for helping over 5,900 maids find employment in the UAE — a milestone in revolutionizing the domestic help industry.",
  alternates: { canonical: "/press-appearance" },
  openGraph: {
    title: "Pickmymaid Featured in Khaleej Times",
    description:
      "Pickmymaid was featured in Khaleej Times for helping over 5,900 maids find employment in the UAE.",
    url: "/press-appearance",
    images: [
      {
        url: "/images/home/khaleej logo.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pickmymaid Featured in Khaleej Times",
    description:
      "Pickmymaid was featured in Khaleej Times for helping over 5,900 maids find employment in the UAE.",
  },
};

export default function Page() {
  return <KhaleejTimesPage />;
}
