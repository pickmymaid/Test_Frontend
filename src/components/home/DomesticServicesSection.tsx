import { Sparkles, Baby, Clock, HeartHandshake, Check } from "lucide-react";
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

function ServiceCard({ icon: Icon, title, intro, items }: (typeof services)[number]) {
  return (
    <div className="group bg-white hover:bg-primary rounded-3xl border border-gray-100 hover:border-primary p-7 lg:p-8 flex flex-col gap-6 shadow-[0px_19px_40px_0px_rgba(0,0,0,0.05)] transition-colors duration-300">
      <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-primary-50 group-hover:bg-white/15 flex items-center justify-center shrink-0 transition-colors duration-300">
        <Icon className="w-8 h-8 lg:w-9 lg:h-9 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl lg:text-2xl font-bold text-dark group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-sm text-muted group-hover:text-white/80 leading-relaxed transition-colors duration-300">{intro}</p>
      </div>

      <div className="h-px bg-gray-100 group-hover:bg-white/20 transition-colors duration-300" />

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-50 group-hover:bg-white/20 text-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
              <Check className="w-3 h-3" strokeWidth={2.5} />
            </span>
            <span className="text-sm text-dark/75 group-hover:text-white/90 leading-relaxed tracking-[0.25px] transition-colors duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DomesticServicesSection() {
  return (
    <section
      className="py-12 lg:py-20 bg-white"
      aria-label="Domestic Helper Services"
    >
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader
          breadcrumb="Our Services"
          heading="Domestic Helper Services for UAE Families"
          subheading="We connect UAE families with the right domestic help for their specific needs. Whether you need maid services UAE, a nanny, or someone for a specific role — you will find them here."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
