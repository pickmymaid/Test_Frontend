import { Suspense } from "react";
import type { Metadata } from "next";
import { LoginPage } from "@/components/auth/LoginPage";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Pickmymaid account to find and manage your domestic helpers.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
