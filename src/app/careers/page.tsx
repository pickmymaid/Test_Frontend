import type { Metadata } from "next";
import { CareersPage } from "@/components/careers/CareersPage";

export const metadata: Metadata = {
  title: "Find a Job",
  description:
    "Find domestic work in Dubai, Abu Dhabi, and across the UAE. Browse job listings posted by families looking for maids, nannies, caregivers, and more.",
  alternates: { canonical: "/careers" },
};

export default function Page() {
  return <CareersPage />;
}
