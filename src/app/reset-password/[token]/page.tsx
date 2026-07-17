import type { Metadata } from "next";
import { ResetPasswordPage } from "@/components/auth/ResetPasswordPage";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your Pickmymaid account.",
  alternates: { canonical: "/reset-password" },
  robots: { index: false, follow: false },
};

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return <ResetPasswordPage token={token} />;
}
