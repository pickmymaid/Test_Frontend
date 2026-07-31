import { Search, ListChecks, PhoneCall, FileCheck2, HeartHandshake, type LucideIcon } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

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

function StepCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-6 w-[75vw] sm:w-[50vw] lg:w-auto">
      <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-base font-semibold text-dark">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
      <div>
        <button className="border border-gray-300 rounded-xl px-4 py-2 text-xs font-medium text-dark hover:border-primary hover:text-primary transition-colors">
          Know More
        </button>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="py-12 lg:py-20 bg-white" aria-label="How It Works">
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader
          breadcrumb="How It Works"
          heading="How to Hire a Maid or Nanny in UAE"
          subheading="Hiring a maid or nanny in the UAE involves finding a verified candidate, interviewing them directly, and completing the hiring documentation. With Pick My Maid, the entire process can be done online in a few days."
        />

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
        </div>
      </div>
    </section>
  );
}
