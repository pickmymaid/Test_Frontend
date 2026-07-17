"use client";
import { useState, useMemo, useEffect } from "react";
import { MaidsCarousel } from "./MaidsCarousel";
import type { Profile } from "@/components/cards/ProfileCard";
import type { FeaturedJob } from "@/types";
import { ArrowUpRight, Check, Calendar } from "lucide-react";
import Link from "next/link";

const ASSET_BASE = "https://assets.pickmymaid.com";

const AVATAR_COLORS = [
  "bg-rose-300",
  "bg-amber-300",
  "bg-teal-300",
  "bg-purple-300",
  "bg-blue-300",
  "bg-emerald-300",
  "bg-pink-300",
  "bg-indigo-300",
];

const IMAGE_GRADIENTS = [
  "from-slate-300 via-slate-400 to-slate-600",
  "from-stone-300 via-stone-400 to-stone-600",
  "from-zinc-300 via-zinc-400 to-zinc-600",
  "from-neutral-300 via-neutral-400 to-neutral-600",
  "from-gray-300 via-gray-400 to-gray-600",
  "from-slate-400 via-slate-500 to-slate-700",
  "from-stone-400 via-stone-500 to-stone-700",
  "from-zinc-400 via-zinc-500 to-zinc-700",
];

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2)
    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
  return words[0].slice(0, 2).toUpperCase();
}

const getSalary = (from: number, to: number): string => {
    if (from === 0 && to === 0) return "Negotiable";
    return `AED ${from} - ${to}`;
  };

function mapJobToProfile(job: FeaturedJob, index: number): Profile {
  const photo = job.profile
    ? job.profile.startsWith("http")
      ? job.profile
      : `${ASSET_BASE}/${job.profile}`
    : undefined;
  return {
    id: job.ref_number as number,
    name: job.name,
    isNew: true,
    country: job.country ?? job.nationality ?? "",
    experience: `${(job.employmentHistory || []).reduce((acc, exp) => acc + exp.experiance, 0).toFixed(0).toString()} years`,
    desiredSalary: getSalary(job.salary.from, job.salary.to),
    desiredJob: job.option,
    service: job.service ?? job.option,
    availability: job.available_from,
    youtubeLink: job.youtube_link?.trim() || undefined,
    secondaryAction: "hire",
    avatarBg: AVATAR_COLORS[index % AVATAR_COLORS.length],
    initials: getInitials(job.name),
    imageBg: IMAGE_GRADIENTS[index % IMAGE_GRADIENTS.length],
    image: photo,
    maidId: String(job._id),
    isInWishlist: job.is_in_wishlist,
    postedOn: job.date,
  };
}

interface Props {
  featuredJobs: FeaturedJob[];
}

const todayLabel = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function AvailableMaidsSection({ featuredJobs }: Props) {
  const countries = useMemo(() => {
    const unique = Array.from(
      new Set(
        featuredJobs
          .map((j) => j.nationality ?? j.country)
          .filter(Boolean) as string[],
      ),
    );
    return ["All", ...unique];
  }, [featuredJobs]);

  const [selectedCountry, setSelectedCountry] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const currentHref = window.location.pathname + window.location.search;
    const raw = sessionStorage.getItem("pmm-nav-return");
    const navReturn = raw ? (JSON.parse(raw) as { href: string }) : null;
    const key = `pmm-scroll|${currentHref}`;
    if (navReturn?.href === currentHref) {
      sessionStorage.removeItem("pmm-nav-return");
      const saved = sessionStorage.getItem(key);
      if (saved) {
        sessionStorage.removeItem(key);
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            window.scrollTo({ top: parseInt(saved, 10), behavior: "instant" }),
          ),
        );
      }
    } else {
      sessionStorage.removeItem(key);
    }
  }, []);

  const profiles = useMemo<Profile[]>(() => {
    return featuredJobs.map(mapJobToProfile);
  }, [featuredJobs, selectedCountry]);

  return (
    <section
      className="py-12 lg:py-16 bg-[#F5F5F5]"
      aria-label="Available Maids and Nannies"
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mb-8">
          <h2 className="text-2xl text-left lg:text-3xl font-bold text-dark mb-3">
            Available Maids &amp; Nannies in UAE
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-muted shrink-0" />
                <span className="text-sm text-muted">Last Updated: {todayLabel}</span>
              </div>
            </div>
            <Link
              href="/search"
              className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary rounded-xl px-4 py-2.5 hover:bg-primary-50 transition-colors shrink-0"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <MaidsCarousel profiles={profiles} />
      </div>
    </section>
  );
}
