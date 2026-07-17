"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  letter: string;
  title: string;
  questions: string[];
  imageSrc: string;
}

const INITIAL_COUNT = 5;

export function InterviewCategoryCard({
  letter,
  title,
  questions,
  imageSrc,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const visible = expanded ? questions : questions.slice(0, INITIAL_COUNT);
  const hasMore = questions.length > INITIAL_COUNT;

  return (
    <div className="border border-primary rounded-3xl overflow-hidden shadow-[0px_4px_20px_0px_rgba(255,116,66,0.08)]">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="relative flex items-stretch bg-[#C4A882] min-h-[110px] lg:min-h-[130px]">

        {/* Title */}
        <div className="flex-1 flex items-center justify-center px-6 py-6">
          <h3 className="text-lg lg:text-[26px] font-bold text-white text-center leading-snug tracking-[0.25px]">
            {letter} - {title}
          </h3>
        </div>
      </div>

      {/* ── Questions ──────────────────────────────────────────── */}
      <div className="bg-white px-5 lg:px-8 py-6 lg:py-7">
        <ol className="flex flex-col gap-3">
          {visible.map((q, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm lg:text-base text-dark/75 leading-relaxed tracking-[0.25px]"
            >
              <span className="shrink-0 font-medium text-dark/50">
                {i + 1}.
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ol>

        {hasMore && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-75 transition-opacity"
            >
              {expanded ? "Read less" : "Read more"}
              {expanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
