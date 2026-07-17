import type { Metadata } from "next";
import { ForgotPasswordPage } from "@/components/auth/ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your Pickmymaid account password.",
  alternates: { canonical: "/forgot-password" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPasswordPage />;
}
