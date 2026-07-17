import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SplitButton } from "@/components/ui/SplitButton";

const ARTICLE_URL =
  "https://www.khaleejtimes.com/kt-network/5900-maids-find-employment-through-pickmymaid";

export function BannerSection() {
  return (
    <section
      style={{ background: "linear-gradient(135deg, #e86a3c 0%, #FF7442 100%)" }}
      className="py-10 lg:py-18 relative overflow-hidden"
      aria-label="Social proof banner"
    >
      {/* Subtle ambient glow */}
      <span
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(255,183,3,0.35) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

        {/* ── Desktop ── */}
        <div className="hidden lg:flex items-center justify-between gap-30">
          {/* Left: Featured on + logo */}
          <div className="flex flex-col gap-7 shrink-0">
            <p className="text-lg font-light font-medium text-white/80 tracking-[0.13px]">
              Featured on
            </p>
            <Image
              src="/images/home/khaleej logo.svg"
              alt="Khaleej Times"
              width={240}
              height={57}
              className="w-55 h-auto"
              loading="lazy"
            />
          </div>

          {/* Center: left border + headline */}
          <div className="flex-1 flex items-center justify-between gap-10 border-l-1 border-white pl-10">
            <h2 className="flex-1 text-[40px] font-medium text-white max-w-[500px] leading-13.5 tracking-[-1px]">
              5,900 Families Found perfect maid through{" "}
              <span className="font-semibold">Pickmymaid</span>
            </h2>

            {/* Right: CTA */}
            <div className="shrink-0">
              <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer">
                <SplitButton label="View Article" variant="secondary" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="flex flex-col items-center gap-7 lg:hidden">
          {/* Featured on + logo */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-white/70 tracking-[0.5px]">
              Featured on
            </p>
            <Image
              src="/images/home/khaleej logo.svg"
              alt="Khaleej Times"
              width={160}
              height={40}
              className="h-8 w-auto"
              loading="lazy"
            />
          </div>

          {/* Headline with top border */}
          <div className="border-t-1 border-white pt-6">
            <h2 className="text-2xl font-medium text-center text-white leading-8.5 tracking-[-0.5px]">
              5,900 Families Found perfect maid through{" "}
              <span className="font-semibold">Pickmymaid</span>
            </h2>
          </div>

          {/* CTA */}
          <a
            href={ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-white border border-white/60 rounded-xl px-4 py-2.5 hover:border-white transition-colors"
          >
            View Article
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
