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

const POPULAR = PILLS.filter((p) => p.variant === "solid");
const REFINE = PILLS.filter((p) => p.variant === "outline");

export function ExploreMaidsSection() {
  return (
    <section
      className="bg-white py-12 lg:py-20"
      aria-label="Explore Maids in Dubai & UAE"
    >
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-2xl lg:text-4xl font-semibold text-dark">
            Explore Maids in Dubai & UAE
          </h2>
          <p className="mt-2 text-sm lg:text-base text-muted">
            Jump straight to the search that matches what you need.
          </p>
        </div>

        <div className="bg-[#F5F5F5] rounded-2xl lg:rounded-3xl p-4 lg:p-10 flex flex-col gap-6 lg:gap-10">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.5px] text-muted uppercase mb-3 lg:mb-4">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {POPULAR.map((pill) => (
                <Link
                  key={pill.label}
                  href={buildHref(pill.params)}
                  className="rounded-full bg-white border border-gray-200 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04)] px-4 py-2.5 text-[13px] lg:text-sm font-semibold text-dark whitespace-nowrap transition-colors hover:bg-primary hover:border-primary hover:text-white"
                >
                  {pill.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0 border-t border-gray-200 pt-6 lg:pt-10">
            <p className="text-xs font-medium tracking-[0.5px] text-muted uppercase mb-3 lg:mb-4">
              Filter by Nationality & Visa
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {REFINE.map((pill) => (
                <Link
                  key={pill.label}
                  href={buildHref(pill.params)}
                  className="rounded-full bg-primary px-4 py-2.5 text-[13px] lg:text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-primary-600"
                >
                  {pill.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
