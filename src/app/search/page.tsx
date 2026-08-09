import { Suspense } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";
import { SearchHeroSection } from "@/components/search/SearchHeroSection";
import {
  SearchResultsSection,
  type SearchResultsInitialData,
} from "@/components/search/SearchResultsSection";
import { findMaids } from "@/lib/api";
import { buildFindMaidsParams, mapMaidToProfile } from "@/lib/searchFilters";

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

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // Force this route to render dynamically per-request so the client
  // components below (which read useSearchParams) can be server-rendered
  // with real content instead of bailing to an empty client-only shell.
  await connection();

  const rawParams = await searchParams;
  const urlParams = new URLSearchParams();
  for (const [key, val] of Object.entries(rawParams)) {
    if (val === undefined) continue;
    urlParams.set(key, Array.isArray(val) ? val.join(",") : val);
  }
  const page = Math.max(1, parseInt(urlParams.get("page") ?? "1", 10) || 1);

  let initialData: SearchResultsInitialData | null = null;
  try {
    const res = await findMaids(buildFindMaidsParams(urlParams, page));
    const maids = res.data?.maids ?? [];
    initialData = {
      profiles: maids.map((maid, i) => mapMaidToProfile(maid, (page - 1) * maids.length + i)),
      total: res.data?.count ?? 0,
      perPage: maids.length,
    };
  } catch {
    // Fall back to the client-side fetch (loading skeleton) on API failure.
    initialData = null;
  }

  return (
    <>
      <Suspense>
        <SearchHeroSection />
      </Suspense>
      <Suspense fallback={<div className="bg-[#F5F5F5] min-h-screen" />}>
        <SearchResultsSection initialData={initialData} />
      </Suspense>
    </>
  );
}
