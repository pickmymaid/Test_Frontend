import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BannerSection } from "@/components/home/BannerSection";
import { BelowFoldClient } from "@/components/home/BelowFoldClient";
import { HomeJsonLd } from "@/components/home/HomeJsonLd";
import { getFeaturedJobs } from "@/lib/api";
import { seoConfig } from "@/config/seo.config";

const BlogSection = dynamic(() =>
  import("@/components/home/BlogSection").then((m) => m.BlogSection),
);

export const revalidate = 1800;

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: seoConfig.openGraphTitle,
    description: seoConfig.openGraphDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
};

export default async function HomePage() {
  const featuredJobs = await getFeaturedJobs()
    .then((r) => r?.data ?? [])
    .catch(() => []);

  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <div className="lg:hidden">
        <StatsSection />
      </div>
      <BannerSection />
      <BelowFoldClient featuredJobs={featuredJobs} />
      <BlogSection />
    </>
  );
}
