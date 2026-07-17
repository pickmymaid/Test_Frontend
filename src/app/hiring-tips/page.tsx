import type { Metadata } from "next";
import { HiringTipsPage } from "@/components/hiring-tips/HiringTipsPage";

export const metadata: Metadata = {
  title: "Key Tips for Hiring",
  description:
    "Follow these essential tips to find and hire the perfect maid or nanny in the UAE — browse listings, filter candidates, conduct interviews, and more.",
  alternates: { canonical: "/hiring-tips" },
  openGraph: {
    title: "Key Tips for Hiring — Pickmymaid",
    description:
      "Follow these essential tips to find and hire the perfect maid or nanny in the UAE — browse listings, filter candidates, conduct interviews, and more.",
    url: "/hiring-tips",
    images: [{ url: "/images/home/logo orange.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Tips for Hiring — Pickmymaid",
    description:
      "Follow these essential tips to find and hire the perfect maid or nanny in the UAE — browse listings, filter candidates, conduct interviews, and more.",
  },
};

export default function Page() {
  return <HiringTipsPage />;
}
