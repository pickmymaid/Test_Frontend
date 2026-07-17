import Image from "next/image";
import Link from "next/link";

export function KhaleejTimesPage() {
  return (
    <div className="bg-white min-h-screen py-26 lg:py-28">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
        {/* ── Heading ─────────────────────────────────────────── */}
        <h1 className="text-center text-[26px] lg:text-[48px] font-bold text-dark leading-[34px] lg:leading-[58px] tracking-[-0.5px] lg:tracking-[-1.5px] mb-10 lg:mb-16">
          Pickmymaid Featured in Khaleej{" "}
          <span className="relative inline-block">
            Times
            <svg
              viewBox="0 0 140 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-1 left-0 w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 7 C25 2, 55 9, 70 4 C85 -1, 115 8, 138 4"
                stroke="#FF7442"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* ── Two-column layout ────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start max-w-6xl mx-auto">
          {/* Laptop image */}
          <div className="w-full lg:w-[52%] shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0F0F0]">
              <Image
                src="/images/khaleej-lap.webp"
                alt="Khaleej Times article — 5,900 maids find employment through Pickmymaid"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-5 lg:pt-2">
            <h2 className="text-[22px] lg:text-[34px] font-semibold text-dark leading-[30px] lg:leading-[42px] tracking-[-0.25px] lg:tracking-[-0.5px]">
              5,900 Maids Successfully Employed
            </h2>

            <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px]">
              We are thrilled to be recognized by Khaleej Times for achieving a
              significant milestone — helping over 5,900 maids find employment
              in the UAE!
            </p>

            <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px]">
              At Pickmymaid, our mission is simple: to connect skilled domestic
              workers with families in need of reliable household help. Through
              our seamless online platform, we make the hiring process easier,
              faster, and more transparent for both employers and workers.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px] italic">
                &ldquo;Our platform is designed to create a win-win situation —
                offering employment opportunities while simplifying the hiring
                process for UAE residents.&rdquo;
              </p>
              <p className="mt-2 text-xs lg:text-sm font-semibold text-dark/50 tracking-[0.5px] not-italic">
                — Mohammed Ibrahim, Manager of Pickmymaid
              </p>
            </blockquote>

            <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px]">
              This feature highlights our dedication to revolutionizing the
              domestic help industry in the UAE. As we continue to grow, we
              remain committed to providing trusted, efficient, and ethical
              solutions for families and domestic workers alike.
            </p>

            <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px]">
              Looking for a reliable maid?{" "}
              <Link
                href="/search"
                className="text-primary font-semibold hover:underline underline-offset-2"
              >
                Find one Today
              </Link>
            </p>

            {/* Khaleej Times logo badge + article link */}
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-3 bg-dark rounded-2xl px-4 py-3 self-start">
                <span className="text-xs font-medium text-white/50 tracking-[0.5px]">
                  As featured in
                </span>
                <Image
                  src="/images/home/khaleej logo.webp"
                  alt="Khaleej Times"
                  width={110}
                  height={28}
                  className="object-contain"
                />
              </div>
              <a
                href="https://www.khaleejtimes.com/kt-network/5900-maids-find-employment-through-pickmymaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:underline underline-offset-2 tracking-[0.5px]"
              >
                Read the article →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
