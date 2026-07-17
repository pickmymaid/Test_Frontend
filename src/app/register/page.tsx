import { Suspense } from "react";
import type { Metadata } from "next";
import { RegisterPage } from "@/components/auth/RegisterPage";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Register with Pick My Maid to start finding verified maids, nannies, and domestic helpers across the UAE.",
  alternates: { canonical: "/register" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense>
      <RegisterPage />
    </Suspense>
  );
}
