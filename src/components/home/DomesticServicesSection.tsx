import { Sparkles, Baby, Clock, HeartHandshake } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import type { LucideIcon } from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  intro: string;
  items: string[];
}[] = [
  {
    icon: Sparkles,
    title: "Hire a Maid in UAE",
    intro: "Verified full time maids in UAE available for:",
    items: [
      "Cleaning",
      "Laundry",
      "Cooking",
      "Household support",
      "Live-in & live-out arrangements",
    ],
  },
  {
    icon: Baby,
    title: "Hire a Nanny in UAE",
    intro: "Experienced nannies for:",
    items: [
      "Infant care",
      "Babysitting",
      "School support",
      "After-school care",
    ],
  },
  {
    icon: Clock,
    title: "Babysitters",
    intro: "Flexible part-time babysitters available for:",
    items: [
      "Weekend childcare",
      "Evening babysitting",
      "Temporary child care support",
      "Flexible part-time availability",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Elderly Caregivers",
    intro: "Compassionate caregivers available for:",
    items: [
      "Senior daily assistance",
      "Mobility and companionship support",
      "Medication reminders",
      "Post-recovery home care",
    ],
  },
];

function ServiceCard({
  icon: Icon,
  title,
  intro,
  items,
  index,
}: (typeof services)[number] & { index: number }) {
  return (
    <div className="bg-[#F5F5F5] rounded-3xl p-7 lg:p-9 flex flex-col gap-6">
      {/* Top row: icon box + editorial number */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        <span
          aria-hidden="true"
          className="text-5xl font-bold leading-none text-dark/[0.07] tabular-nums select-none"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title + intro */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl lg:text-2xl font-bold text-dark">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{intro}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Items as chips */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3.5 py-1.5 bg-white rounded-xl text-xs font-medium text-dark border border-gray-100 shadow-[0px_1px_4px_rgba(0,0,0,0.04)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DomesticServicesSection() {
  return (
    <section
      className="py-12 lg:py-20 bg-white"
      aria-label="Domestic Helper Services"
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          breadcrumb="Our Services"
          heading="Domestic Helper Services for UAE Families"
          subheading="We connect UAE families with the right domestic help for their specific needs. Whether you need maid services UAE, a nanny, or someone for a specific role — you will find them here."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
