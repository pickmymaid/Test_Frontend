import {
  ChevronsRight,
  Search,
  ListChecks,
  PhoneCall,
  FileCheck2,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    description: "Your maid or nanny starts work with ongoing support available",
  },
];

export function HowItWorksPage() {
  return (
    <>
      {/* ── Banner ───────────────────────────────────────────────── */}
      <section
        className="relative bg-white overflow-hidden py-26 lg:py-32"
        aria-label="How It Works"
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
              <span>How It Works</span>
            </div>
            <h1 className="text-[36px] lg:text-[64px] font-semibold leading-[44px] lg:leading-[72px] tracking-[-0.5px] lg:tracking-[-2px] text-dark">
              Hire in five simple{" "}
              <span className="text-primary">steps.</span>
            </h1>
            <p className="mt-4 lg:mt-6 text-base lg:text-xl text-dark/70 leading-relaxed tracking-[0.25px]">
              You do not need to be an expert. Our team is here to guide you
              through every step.
            </p>
          </div>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20 bg-white" aria-label="Steps">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <SectionHeader
            breadcrumb="The Process"
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
    </>
  );
}
