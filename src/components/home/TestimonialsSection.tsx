"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { OutlineButton } from "../ui/OutlineButton";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I was amazed by how quickly Pick My Maid found us the perfect helper. She's become part of our family!",
    name: "Layla Al Farsi",
    role: "Parent of two, Sharjah",
    initials: "LA",
    avatarBg: "bg-amber-200",
  },
  {
    id: 2,
    quote:
      "I appreciate the thorough background checks. It gave us peace of mind knowing our home is in safe hands.",
    name: "Maya Johnson",
    role: "Career-focused mom, Ajman",
    initials: "MJ",
    avatarBg: "bg-rose-200",
  },
  {
    id: 3,
    quote:
      "The team is professional, friendly, and genuinely invested in finding the right match for your family. Highly recommend!",
    name: "Omar Khalid",
    role: "Parent of three, Ras Al Khaimah",
    initials: "OK",
    avatarBg: "bg-teal-200",
  },
  {
    id: 4,
    quote:
      "I'm so grateful for Pick My Maid. They truly understand the needs of busy families and deliver exceptional service.",
    name: "Mohammed Aslam",
    role: "Parent of two, Sharjah",
    initials: "MA",
    avatarBg: "bg-purple-200",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-7 h-7 fill-white"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  avatarBg,
}: Testimonial) {
  return (
    <article
      style={{
        background: `radial-gradient(
      105.12% 122.92% at 9.22% 6.51%,
      rgba(255, 255, 255, 0.20) 0%,
      rgba(255, 255, 255, 0) 100%
      ),
    rgba(255, 255, 255, 0.16)`,
      }}
      className="h-full rounded-3xl border border-white/30 backdrop-blur-[134px] p-6 flex flex-col justify-between select-none"
    >
      <div>
        <Stars/>
        <p className="text-xl text-white leading-relaxed">"{quote}"</p>
      </div>
      <div className="flex items-center gap-3 mt-[200px] xl:mt-[280px]">
        <div
          className={`w-11 h-11 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-xs font-bold text-dark">{initials}</span>
        </div>
        <div>
          <p className="text-base font-semibold text-white">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    sync();
    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      style={{
        background: `radial-gradient(66.83% 134.9% at 6.3% -2.87%, #E8A25D 0%, #E89455 12.6%, #E87342 30.91%, #E6693C 43.81%, var(--Shades-Orange-orange-700, #B5522F) 100%)`
      }}
      className="py-12 lg:py-20 relative overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="max-w-[1900px]  mx-auto px-4 sm:px-6 lg:px-20 z-10 relative">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start lg:justify-between gap-3 lg:gap-20">
            <h2 className="text-3xl lg:text-5xl font-medium text-white leading-tight max-w-xl">
              Check Out What Our Families Are Saying!
            </h2>
            <p className="text-sm lg:text-lg text-center lg:text-left text-white leading-relaxed lg:max-w-lg lg:pt-2">
              We ensure your family&apos;s well-being by thoroughly vetting each
              professional, guaranteeing top-tier service and reliability.
            </p>
          </div>
        </div>

        {/* Embla carousel — touch/drag + button nav */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] xl:flex-[0_0_33.3333%] 2xl:flex-[0_0_25%] pr-4 xl:pr-5"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center lg:justify-start gap-3 mt-8">
          <OutlineButton
            stroke="#fff"
            curve="right"
            onClick={prev}
            aria-label="Previous testimonial"
            disabled={!canPrev}
          >
            <ArrowLeft className="w-5 h-5" stroke="#fff" strokeWidth={1.5} />
          </OutlineButton>
          <OutlineButton
            stroke="#fff"
            curve="left"
            onClick={next}
            disabled={!canNext}
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" stroke="#fff" strokeWidth={1.5} />
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
