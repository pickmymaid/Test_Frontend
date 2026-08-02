import Link from "next/link";

interface ExplorePill {
  label: string;
  variant: "solid" | "outline";
  params: Record<string, string>;
}

const PILLS: ExplorePill[] = [
  { label: "Salaries From 1,300 AED", variant: "solid", params: { salary: "1300-1500" } },
  { label: "Salaries From 1,500 AED", variant: "solid", params: { salary: "1500-1800" } },
  { label: "Hire Maid Dubai", variant: "solid", params: { service: "Maid", location: "Dubai" } },
  { label: "House Maid Dubai", variant: "solid", params: { q: "House maid", location: "Dubai" } },
  { label: "Maid Service Dubai", variant: "solid", params: { q: "Maid service", location: "Dubai" } },
  { label: "Domestic Helper Dubai", variant: "solid", params: { q: "Domestic helper", location: "Dubai" } },
  { label: "Live-in Maid Dubai", variant: "solid", params: { option: "Live In", service: "Maid", location: "Dubai" } },
  { label: "Live-out Maid Dubai", variant: "solid", params: { option: "Live Out", service: "Maid", location: "Dubai" } },
  { label: "Part-time Maid Dubai", variant: "solid", params: { q: "Part-time maid", location: "Dubai" } },
  { label: "Full-time Maid Dubai", variant: "solid", params: { q: "Full-time maid", location: "Dubai" } },
  { label: "Hire Nanny Dubai", variant: "solid", params: { service: "Nanny", location: "Dubai" } },
  { label: "Housekeeper Dubai", variant: "solid", params: { q: "Housekeeper", location: "Dubai" } },
  { label: "Newborn Nanny Dubai", variant: "solid", params: { service: "Nanny", q: "Newborn", location: "Dubai" } },
  { label: "Cooking Maid Dubai", variant: "solid", params: { service: "Cook", location: "Dubai" } },
  { label: "Maid Agency Dubai", variant: "solid", params: { q: "Maid agency", location: "Dubai" } },
  { label: "Maid Abu Dhabi", variant: "solid", params: { service: "Maid", location: "Abu Dhabi" } },
  { label: "Maids in Abu Dhabi", variant: "solid", params: { service: "Maid", location: "Abu Dhabi" } },
  { label: "Filipino Maids Dubai", variant: "outline", params: { nationality: "Philippines", service: "Maid", location: "Dubai" } },
  { label: "Indian Maids Dubai", variant: "outline", params: { nationality: "India", service: "Maid", location: "Dubai" } },
  { label: "Sri Lankan Maids Dubai", variant: "outline", params: { nationality: "Sri Lanka", service: "Maid", location: "Dubai" } },
  { label: "Indonesian Maids Dubai", variant: "outline", params: { nationality: "Indonesia", service: "Maid", location: "Dubai" } },
  { label: "Nepali Maids Dubai", variant: "outline", params: { nationality: "Nepal", service: "Maid", location: "Dubai" } },
  { label: "Pakistani Maids Dubai", variant: "outline", params: { nationality: "Pakistan", service: "Maid", location: "Dubai" } },
  { label: "Ethiopian Maids Dubai", variant: "outline", params: { nationality: "Ethiopia", service: "Maid", location: "Dubai" } },
  { label: "Own Visa Maids Dubai", variant: "outline", params: { visa: "Own Visa", service: "Maid", location: "Dubai" } },
  { label: "Live-out Nanny Dubai", variant: "outline", params: { option: "Live Out", service: "Nanny", location: "Dubai" } },
  { label: "Live-in Nanny Dubai", variant: "outline", params: { option: "Live In", service: "Nanny", location: "Dubai" } },
];

function buildHref(params: Record<string, string>): string {
  return `/search?${new URLSearchParams(params).toString()}`;
}

export function ExploreMaidsSection() {
  return (
    <section
      className="bg-white py-12 lg:py-20"
      aria-label="Explore Maids in Dubai & UAE"
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl lg:text-4xl font-semibold text-dark text-center mb-8 lg:mb-10">
          Explore Maids in Dubai & UAE
        </h2>
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {PILLS.map((pill) => (
            <Link
              key={pill.label}
              href={buildHref(pill.params)}
              className={
                pill.variant === "solid"
                  ? "rounded-full bg-primary px-5 py-3 text-sm lg:text-base font-semibold text-white whitespace-nowrap transition hover:bg-primary-600"
                  : "rounded-full border border-primary bg-white px-5 py-3 text-sm lg:text-base font-medium text-primary whitespace-nowrap transition hover:bg-primary-50"
              }
            >
              {pill.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
