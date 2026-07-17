"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface NavReturn {
  href: string;
  scrollY: number;
  label: string;
}

export function BackButton() {
  const router = useRouter();
  const [navReturn, setNavReturn] = useState<NavReturn | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("pmm-nav-return");
    if (raw) {
      try {
        setNavReturn(JSON.parse(raw));
      } catch {
        // malformed entry — ignore
      }
    }
  }, []);

  function handleBack() {
    if (!navReturn) {
      router.back();
      return;
    }
    sessionStorage.setItem(`pmm-scroll|${navReturn.href}`, String(navReturn.scrollY));
    router.push(navReturn.href, { scroll: false });
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white shadow-sm rounded-2xl px-4 py-2.5 text-sm font-medium text-dark hover:bg-white transition-colors cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {navReturn?.label ?? "Back to Results"}
    </button>
  );
}
