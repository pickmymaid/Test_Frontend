import type { Metadata } from "next";
import { FavoritesPage } from "@/components/favorites/FavoritesPage";

export const metadata: Metadata = {
  title: "Saved Profiles",
  description: "View and manage the maid and nanny profiles you have saved.",
  alternates: { canonical: "/favorites" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FavoritesPage />;
}
