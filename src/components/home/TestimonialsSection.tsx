"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
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
      "I contacted three agencies. All of them asked for a lot of money just to get started. I could not pay that much. A colleague told me about Pick My Maid. I signed up, looked at a few profiles, and called two maids directly. I hired one within 4 days.",
    name: "Fatima Rehman, Dubai",
    role: "Parent of two",
    initials: "FR",
    avatarBg: "bg-amber-200",
  },
  {
    id: 2,
    quote:
      "Our maid left without notice. My wife was doing everything at home alone. It was very hard. We found Pick My Maid and registered the same night. The profiles had all the details we needed. We called a few candidates and hired someone within a week. Things are much better now",
    name: "Mohammed Abbas, Abu Dhabi",
    role: "Career-focused mom",
    initials: "MA",
    avatarBg: "bg-rose-200",
  },
  {
    id: 3,
    quote:
      "After my delivery I needed a nanny quickly. I did not want to use an agency again. Last time we paid a lot and it did not work out. This time I used Pick My Maid. I filtered by newborn experience, spoke to a few candidates, and found the right person in 5 days. She is great with my baby.",
    name: "Sarah, Sharjah",
    role: "Parent of three",
    initials: "SA",
    avatarBg: "bg-teal-200",
  },
  {
    id: 4,
    quote:
      "I was looking for a part-time maid for weeks on WhatsApp groups. Nothing worked. My colleague suggested Pick My Maid. I registered, used the filters, and found someone in 3 days. The process was simple and there were no hidden charges.",
    name: "Priya Mathew, Dubai",
    role: "Parent of two",
    initials: "PM",
    avatarBg: "bg-purple-200",
  },
  {
    id: 5,
    quote:
      "Finding a reliable helper used to be so stressful. Pick My Maid made it effortless — I had a match within days.",
    name: "Sarah Al Mansoori",
    role: "Working mom",
    initials: "SA",
    avatarBg: "bg-blue-200",
  },
  {
    id: 6,
    quote:
      "The agencies in Ajman wanted a big deposit and said it would take months. We could not wait. We tried Pick My Maid. We paid a small one-time fee, spoke to the maid directly, and she started within 10 days. Thank you!",
    name: "Omar T, Ajman",
    role: "Parent of four",
    initials: "OT",
    avatarBg: "bg-emerald-200",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-white"
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
        <Stars />
        <p className="text-sm text-white/90 leading-relaxed">"{quote}"</p>
      </div>
      <div className="flex items-center gap-3 mt-8">
        <div
          className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-xs font-bold text-dark">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/60">{role}</p>
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
      style={{
        background: `radial-gradient(66.83% 134.9% at 6.3% -2.87%, #E8A25D 0%, #E89455 12.6%, #E87342 30.91%, #E6693C 43.81%, var(--Shades-Orange-orange-700, #B5522F) 100%)`
      }}
      className="py-12 lg:py-20 relative overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 z-10 relative">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center justify-center lg:justify-start gap-1 text-white/60 text-xs font-medium mb-4 lg:mb-6">
            <ChevronsRight className="w-4 h-4" />
            <span>Testimonials</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-end lg:justify-between gap-3 lg:gap-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-sm">
              Check Out What UAE Families Say!
            </h2>
            <p className="text-sm lg:text-base text-center lg:text-left text-white/70 leading-relaxed lg:max-w-lg">
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
                className="flex-[0_0_85%] sm:flex-[0_0_50%] xl:flex-[0_0_25%] pr-4 xl:pr-5"
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
