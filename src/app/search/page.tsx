import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchHeroSection } from "@/components/search/SearchHeroSection";
import { SearchResultsSection } from "@/components/search/SearchResultsSection";

export const metadata: Metadata = {
  title: "Search Maids & Nannies",
  description:
    "Find verified, professional maids and nannies across the UAE. Filter by nationality, religion, location, and more.",
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search Maids & Nannies — Pickmymaid",
    description:
      "Find verified, professional maids and nannies across the UAE. Filter by nationality, religion, location, and more.",
    url: "/search",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Maids & Nannies — Pickmymaid",
    description:
      "Find verified, professional maids and nannies across the UAE. Filter by nationality, religion, location, and more.",
  },
};

export default function SearchPage() {
  return (
    <>
      <Suspense>
        <SearchHeroSection />
      </Suspense>
      <Suspense fallback={<div className="bg-[#F5F5F5] min-h-screen" />}>
        <SearchResultsSection />
      </Suspense>
    </>
  );
}
