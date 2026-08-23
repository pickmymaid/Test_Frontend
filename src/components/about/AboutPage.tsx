import {
  ChevronsRight,
  Zap,
  Eye,
  Scale,
  Flag,
  Lightbulb,
  Search,
  ListChecks,
  PhoneCall,
  FileCheck2,
  HeartHandshake,
  ShieldCheck,
  UserCheck,
  FileText,
  CheckCircle,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SplitButton } from "@/components/ui/SplitButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamSection } from "../home/TeamSection";

// ─── Data ─────────────────────────────────────────────────────

const stats = [
  { value: "5,900+", label: "Workers Helped" },
  { value: "3", label: "UAE Cities" },
  { value: "100%", label: "Direct Hire" },
  { value: "SHAMS", label: "Registered" },
];

const differentiators = [
  {
    title: "No agency fees",
    desc: "Pay a small platform fee, not thousands in agency charges",
  },
  {
    title: "SHAMS registered",
    desc: "A legitimate, regulated business in the UAE",
  },
  {
    title: "Dubai · Abu Dhabi · Sharjah",
    desc: "Serving families across all major UAE cities",
  },
  {
    title: "Direct contact",
    desc: "Speak to candidates yourself — no middlemen",
  },
];

const beliefs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "Simplicity",
    description:
      "You can browse hundreds of profiles, filter by location, salary, and nationality, and contact a candidate directly - all in one place. No back-and-forth with an agency.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every profile shows real details - experience, expected salary, visa status, and skills. No surprises. No hidden information.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description:
      "Families get more choice and pay less. Domestic workers get direct access to opportunities without agency barriers standing in the way.",
  },
];

const steps: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: Search,
    title: "Search Verified Profiles",
    description: "Filter by location, salary, nationality, and job type",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Shortlist Candidates",
    description: "Review experience, skills, and work history",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Interview Directly",
    description: "Call or message candidates through the platform",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Complete Hiring",
    description: "Proceed with hiring and visa support if required",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Welcome Your Helper",
    description:
      "Your maid or nanny starts work with ongoing support available",
  },
];

const team: {
  name: string;
  role: string;
  description: string;
  bg: string;
  initials: string;
}[] = [
  {
    name: "Samjhana",
    role: "HR & Administration Manager",
    description:
      "Samjhana keeps our recruitment and operations running smoothly while supporting families through every step of the hiring process. She makes sure every maid and nanny on our platform meets the standard we promise.",
    bg: "bg-rose-300",
    initials: "SA",
  },
  {
    name: "Shahida",
    role: "HR Specialist",
    description:
      "Shahida carefully screens and selects every domestic worker before they appear on our platform. Her thorough approach means families can browse knowing every profile has already been reviewed and approved.",
    bg: "bg-amber-300",
    initials: "SH",
  },
  {
    name: "Yasmin",
    role: "HR Assistant",
    description:
      "Yasmin works directly with maids and nannies — interviewing them, guiding them, and preparing them before they join the platform. Fluent in Arabic, she makes sure nothing gets lost between candidates and families.",
    bg: "bg-teal-300",
    initials: "YA",
  },
];

const whoWeHelp: string[] = [
  "Expat families looking for a trusted, long-term domestic helper",
  "Parents with young children who need reliable childcare",
  "Households with elderly family members who need a caregiver",
  "Couples where both partners work full-time and need help at home",
];

const trustPoints: { icon: LucideIcon; title: string; description: string }[] =
  [
    {
      icon: ShieldCheck,
      title: "SHAMS Registered",
      description: "A legitimate, regulated business operating in the UAE",
    },
    {
      icon: UserCheck,
      title: "Pre-screened Profiles",
      description:
        "Every candidate is reviewed for identity, experience, and work history before being listed",
    },
    {
      icon: Scale,
      title: "No Hidden Fees",
      description:
        "We do not take a cut from the worker's salary or charge based on nationality",
    },
    {
      icon: FileText,
      title: "Featured in Khaleej Times",
      description:
        "Recognised for the real impact we have made in domestic worker employment across the UAE",
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description: "What you see is what you pay — no surprises",
    },
  ];



export function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative bg-white overflow-hidden py-26 lg:py-32"
        aria-label="About Us"
      >
        <div
          className="absolute right-[-120px] top-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #FFDDD0 0%, #FFF0EB 45%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-[-160px] bottom-[-120px] w-[480px] h-[480px] rounded-full pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle, #FFF0EB 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
              <ChevronsRight className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h1 className="text-[36px] lg:text-[64px] font-semibold leading-[44px] lg:leading-[72px] tracking-[-0.5px] lg:tracking-[-2px] text-dark">
              Trusted Maid & Nanny Platform{" "}
              <span className="text-primary">in the UAE.</span>
            </h1>
            <p className="mt-4 lg:mt-6 text-base lg:text-xl text-dark/70 leading-relaxed tracking-[0.25px]">
              Just the right match for your home.
            </p>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#f5f5f5] rounded-2xl p-4 lg:p-6 text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-primary leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm text-muted tracking-[0.5px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Band ───────────────────────────────────── */}
      <div className="bg-primary-50 border-y border-primary-100">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-8 py-4 lg:py-5">
            {[
              { stat: "1,561+", label: "Maids" },
              { stat: "10+", label: "Nationalities" },
              { stat: "3,000+", label: "Happy Families" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="flex items-center gap-3 lg:gap-8"
              >
                <p className="text-sm lg:text-base font-semibold text-dark tracking-[0.25px] whitespace-nowrap">
                  <span className="text-primary">{item.stat}</span> {item.label}
                </p>
                {i < arr.length - 1 && (
                  <span className="text-primary/30 select-none">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Who We Are ───────────────────────────────────── */}
      <section className="py-12 lg:py-20 bg-[#FAFAFA]" aria-label="Who We Are">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
                <ChevronsRight className="w-4 h-4" />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight mb-6">
                Not an agency. A platform built for families.
              </h2>
              <div className="flex flex-col gap-4 text-base text-muted leading-relaxed tracking-[0.25px]">
                <p>
                  Finding a trusted maid or nanny in the UAE should not be
                  stressful or expensive.
                </p>
                <p>
                  Pickmymaid is a{" "}
                  <span className="font-semibold text-dark">
                    SHAMS-registered platform
                  </span>{" "}
                  that connects families across Dubai, Abu Dhabi, and Sharjah
                  directly with verified maids, nannies, and domestic helpers —
                  without going through a traditional agency.
                </p>
                <p>
                  We are not an agency. We are a platform built for families who
                  want more choice, more transparency, and a simpler way to
                  hire.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[360px] shrink-0">
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0px_19px_40px_0px_rgba(0,0,0,0.05)]">
                <p className="text-xs font-semibold text-muted tracking-[1px] uppercase mb-6">
                  What makes us different
                </p>
                <div className="flex flex-col gap-4">
                  {differentiators.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-dark">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Started ───────────────────────────────── */}
      <section className="py-12 lg:py-20 bg-white" aria-label="Why We Started">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
                <ChevronsRight className="w-4 h-4" />
                <span>Why We Started</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight mb-6">
                We saw the problem firsthand — and built the solution.
              </h2>
              <div className="flex flex-col gap-4 text-base text-muted leading-relaxed tracking-[0.25px]">
                <p>
                  For years, families in the UAE had limited options when it
                  came to hiring domestic help. Most had to go through agencies
                  that charged thousands of dirhams in fees, offered very few
                  candidates, and gave families almost no say in who came to
                  their home.
                </p>
                <p>
                  We saw this problem firsthand. Families were frustrated.
                  Workers were undervalued. The hiring process was slow,
                  expensive, and unclear.
                </p>
                <p>So we built Pick My Maid.</p>
                <p>
                  Our goal was simple - give families in the UAE a direct way to
                  browse real profiles, talk to candidates themselves, and hire
                  the right person without paying an agency to do it for them.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[300px] shrink-0">
              <div className="bg-primary-50 rounded-3xl p-8 lg:p-10 text-center">
                <p className="text-5xl lg:text-6xl font-bold text-primary leading-none mb-3">
                  5,900+
                </p>
                <p className="text-base font-semibold text-dark leading-snug mb-2">
                  Domestic Workers Helped
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Since launching, we have helped over 5,900 domestic workers
                  find employment across the UAE. Every week, new families join
                  and find their perfect match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────── */}
      <section
        className="py-12 lg:py-20 bg-white"
        aria-label="Mission and Vision"
      >
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
            <div className="flex justify-center items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
              <ChevronsRight className="w-4 h-4" />
              <span>Mission & Vision</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
              What drives us every day
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-primary rounded-3xl p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/60 tracking-[1px] uppercase mb-2">
                  Mission
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                  Simple. Transparent. Affordable.
                </h3>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                To make hiring maids and nannies simple, transparent, and
                affordable - by connecting families directly with workers.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-3xl p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-dark" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted tracking-[1px] uppercase mb-2">
                  Vision
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-dark leading-snug">
                  The UAE&apos;s most trusted domestic platform.
                </h3>
              </div>
              <p className="text-base text-muted leading-relaxed">
                To become the most trusted platform for domestic help in the
                UAE, where families hire without middlemen and workers get
                better opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Believe In ───────────────────────────── */}
      <section
        className="py-12 lg:py-20 bg-[#FAFAFA]"
        aria-label="What We Believe In"
      >
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeader
            breadcrumb="What We Believe In"
            heading="Built around three things"
            subheading="Every decision we make comes back to these three principles."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {beliefs.map((belief) => {
              const Icon = belief.icon;
              return (
                <div
                  key={belief.title}
                  className="bg-white rounded-3xl p-6 lg:p-8 flex flex-col gap-6"
                >
                  <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center bg-white shrink-0">
                    <Icon className="w-5 h-5 text-dark" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-primary">
                      {belief.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to Hire ──────────────────────────────────── */}
      <section className="py-12 lg:py-20 bg-white" aria-label="How to Hire">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeader
            breadcrumb="How to Hire"
            heading="Five simple steps to find your match"
            subheading="You do not need to be an expert. Our team is here to guide you through every step."
          />

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-2xl font-bold text-dark/10 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-dark">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden -mx-4 sm:-mx-6 overflow-x-auto no-scrollbar">
            <div className="flex gap-3 px-4 sm:px-6 pb-2">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-[#F5F5F5] rounded-2xl p-5 flex flex-col gap-4 w-[200px] shrink-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-full bg-dark flex items-center justify-center shrink-0">
                        <Icon
                          className="w-4 h-4 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-2xl font-bold text-dark/10 leading-none">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-semibold text-dark">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <TeamSection />

      {/* ── Who We Help ──────────────────────────────────── */}
      <section className="py-12 lg:py-20 bg-white" aria-label="Who We Help">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
                <ChevronsRight className="w-4 h-4" />
                <span>Who We Help</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight mb-4">
                Families all across the UAE
              </h2>
              <p className="text-base text-muted leading-relaxed tracking-[0.25px] mb-8 lg:mb-10">
                Pickmymaid is used by families all across the UAE — from working
                couples in Dubai to new parents in Abu Dhabi and family homes in
                Sharjah.
              </p>
              <SplitButton label="Find Your Match" href="/search" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-muted tracking-[0.5px] uppercase mb-4">
                Most of our users are
              </p>
              <div className="flex flex-col gap-3">
                {whoWeHelp.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[#f5f5f5] rounded-2xl px-4 py-4"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm text-dark leading-relaxed">{item}</p>
                  </div>
                ))}
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  If any of this sounds familiar, Pickmymaid was built for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Families Trust ───────────────────────────── */}
      <section
        className="py-12 lg:py-20 bg-[#FAFAFA]"
        aria-label="Why Families Trust Pickmymaid"
      >
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
            <div className="flex justify-center items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
              <ChevronsRight className="w-4 h-4" />
              <span>Why Families Trust Pickmymaid</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
              Registered. Verified. Transparent.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-3xl p-6 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-dark mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ready to Find the Right Match? ───────────────── */}
      <section
        className="py-12 lg:py-20 bg-primary-50"
        aria-label="Ready to Find the Right Match"
      >
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight mb-6">
              Ready to Find the Right Match?
            </h2>
            <div className="flex flex-col gap-3 text-base text-muted leading-relaxed tracking-[0.25px] mb-8">
              <p>
                You have spent enough time searching. The right person is
                already on our platform.
              </p>
              <p>
                Whether you need a full-time maid in Dubai, a nanny in Abu
                Dhabi, or a part-time helper in Sharjah — they are here,
                verified and ready.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SplitButton label="Browse Maid Profiles" href="/search" />
              <OutlineButton curve="right" href="/contact">
                Contact Our Team
              </OutlineButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
