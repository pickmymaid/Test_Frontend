import type { Metadata } from "next";
import { HowItWorksPage } from "@/components/how-it-works/HowItWorksPage";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how to hire a maid or nanny in five simple steps — search verified profiles, shortlist candidates, interview directly, complete hiring, and welcome your helper.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works — Pickmymaid",
    description:
      "Learn how to hire a maid or nanny in five simple steps — search verified profiles, shortlist candidates, interview directly, complete hiring, and welcome your helper.",
    url: "/how-it-works",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — Pickmymaid",
    description:
      "Learn how to hire a maid or nanny in five simple steps — search verified profiles, shortlist candidates, interview directly, complete hiring, and welcome your helper.",
  },
};

export default function Page() {
  return <HowItWorksPage />;
}
