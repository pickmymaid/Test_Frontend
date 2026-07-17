import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { StatsSection } from "./StatsSection";
import { CheckCircleIcon } from "../icons/CheckCircleIcon";

export function HeroSection() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/home/hero-maid-mobile.webp"
        fetchPriority="high"
        media="(max-width: 1023px)"
      />
      <section className="relative bg-white overflow-hidden" aria-label="Hero">
        <h1 className="sr-only">Hire Verified Maids &amp; Nannies in UAE Quickly</h1>
        {/* ── Mobile layout ── */}
        <div className="lg:hidden flex flex-col items-center text-center pt-30 px-4 pb-0 relative overflow-hidden">
          {/* Decorative background glow */}
          <div
            aria-hidden="true"
            className="right-0 bottom-0 translate-x-[20%] translate-y-[30%] z-0 bg-[#ff9068] w-[80%] aspect-square absolute blur-[80px] rounded-full pointer-events-none will-change-transform"
          />
          <div
            aria-hidden="true"
            className="right-0 top-0 translate-x-[50%] z-0 bg-white w-[20%] aspect-square absolute blur-[60px] rounded-full pointer-events-none"
          />

          {/* Heading + description */}
          <div className="flex flex-col gap-3 z-10 mb-8 relative">
            <div aria-hidden="true" className="text-[32px] font-semibold leading-[42px] tracking-[-0.5px] text-dark">
              Hire Verified{" "}
              <span className="text-primary">Maids & Nannies</span> in UAE
              Quickly
            </div>
            <p className="text-[14px] text-dark/80 leading-5 tracking-[0.5px]">
              Find verified live-out maids, full-time maids, nannies, and caregivers across the UAE, including Dubai, Abu Dhabi, Sharjah, and all emirates.
            </p>
          </div>

          {/* Keyword search */}
          <div className="w-full z-10 mb-8 relative">
            <SearchBar />
          </div>

          {/* Maid image + People Hired pill */}
          <div className="relative w-full z-10 h-[364px] mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/hero-maid-mobile.webp"
              alt="Professional maid"
              fetchPriority="high"
              decoding="sync"
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              width={400}
              height={400}
            />
            {/* People Hired pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-[inset_0.5px_0.5px_1px_rgba(0,0,0,0.1)] rounded-xl px-3 py-2 whitespace-nowrap">
              <div className="flex -space-x-3 shrink-0">
                <div className="w-8 h-8 rounded-full bg-orange-300 border border-white shrink-0">
                  <Image
                    src="/images/home/hired-people2.webp"
                    alt="People Hired"
                    width={64}
                    height={64}
                    className="object-cover"
                    fetchPriority="high"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-300 border border-white shrink-0">
                  <Image
                    src="/images/home/hired-people1.webp"
                    alt="People Hired"
                    width={64}
                    height={64}
                    className="object-cover"
                    fetchPriority="high"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-dark border-2 border-white flex items-center justify-center text-white text-[10px] font-semibold shrink-0">
                  2k+
                </div>
              </div>
              <div className="text-left">
                <p className="text-[12px] font-medium text-dark/50 leading-[18px] tracking-[0.5px]">
                  People Hired
                </p>
                <p className="text-[12px] font-semibold text-dark leading-[18px] tracking-[0.5px]">
                  This Month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden lg:flex min-h-screen">
          {/* Decorative background glow */}
          <div
            aria-hidden="true"
            className="right-0 bottom-0 translate-x-[20%] translate-y-[30%] z-0 bg-[#ff9068] w-[50%] aspect-square absolute blur-[120px] rounded-full pointer-events-none will-change-transform"
          />
          <div
            aria-hidden="true"
            className="right-0 top-0 translate-x-[50%] z-0 bg-white w-[20%] aspect-square absolute blur-[100px] rounded-full pointer-events-none will-change-transform"
          />
          <div className="flex flex-col z-10 justify-between w-[58%] xl:w-[55%] px-8 lg:px-16 xl:px-[80px] pt-[152px] pb-[120px]">
            {/* Heading + description */}
            <div className="flex flex-col gap-8">
              <div aria-hidden="true" className="text-[72px] font-semibold leading-[80px] tracking-[-2px] text-dark">
                Hire Verified <br />{" "}
                <span className="text-primary">Maids & Nannies</span> in UAE
                Quickly
              </div>
              <p className="text-[20px] text-dark/80 leading-[30px] tracking-[0.25px]">
                Find verified live-out maids, full-time maids, nannies, and caregivers across the UAE, including Dubai, Abu Dhabi, Sharjah, and all emirates.
              </p>
            </div>

            {/* Search bar */}
            <SearchBar />

            {/* Stats */}
            <StatsSection />
          </div>

          {/* Right column: decorative circles + image + floating cards */}
          <div className="flex-1 z-10 relative overflow-hidden">
            {/* Maid image fills full column */}
            <div className="absolute inset-0 z-[1]">
              <Image
                src="/images/home/hero-maid.webp"
                alt="Professional maid holding cleaning supplies"
                width={800}
                height={1000}
                priority
                sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 42vw"
                quality={90}
                fetchPriority="high"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "85%",
                  bottom: 0,
                  left: 0,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>

            {/* Floating card: Verified Professionals (bottom-left of image) */}
            <div className="absolute bottom-35 left-6 z-[2] bg-white/80 backdrop-blur-xl shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] rounded-3xl px-6 py-5 max-w-[381px]">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircleIcon className="w-6 h-6 text-primary shrink-0" />
                <p className="text-[20px] font-semibold leading-[30px] tracking-[0.25px] text-primary whitespace-nowrap">
                  Verified Professionals
                </p>
              </div>
              <p className="text-base text-dark/80 leading-6 tracking-[0.25px]">
                Our thoroughly vetted experts ensure your home is safe and
                spotless.
              </p>
            </div>

            {/* Floating card: People Hired (top-right of image) */}
            <div className="absolute top-[44%] right-6 z-[2] bg-white/80 backdrop-blur-xl shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] rounded-3xl px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-6 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-orange-300 border-2 border-white shrink-0">
                    <Image
                      src="/images/home/hired-people1.webp"
                      alt="People Hired"
                      width={64}
                      height={64}
                      className="object-cover"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-300 border-2 border-white shrink-0">
                    <Image
                      src="/images/home/hired-people2.webp"
                      alt="People Hired"
                      width={64}
                      height={64}
                      className="object-cover"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-dark border-2 border-white flex items-center justify-center text-white text-base font-semibold shrink-0">
                    2k+
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-dark/50 leading-6 tracking-[0.25px]">
                    People Hired
                  </p>
                  <p className="text-base font-semibold text-dark leading-6 tracking-[0.25px]">
                    This Month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
