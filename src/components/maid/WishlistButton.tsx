"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { HeartStraight } from "@/components/icons/HeartStraight";
import { useAuthStore } from "@/store/auth";
import { toggleWishlist } from "@/lib/api";
import { useMaidSession } from "./MaidSessionContext";

export function WishlistButton({ maidId }: { maidId: string }) {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { state } = useMaidSession();

  // `override` holds the user's own toggle once they click — until then the
  // button reflects the authenticated wishlist status from MaidSessionContext.
  // The server-rendered `maid` prop is always fetched without the visitor's
  // session, so it can never carry this on its own.
  const [override, setOverride] = useState<boolean | null>(null);
  const [isPending, setIsPending] = useState(false);

  const remoteSaved = state.status === "ready" && state.data.isInWishlist;
  const saved = override ?? remoteSaved;

  async function handleFavorite() {
    if (!isAuthenticated || !user?.id) {
      toast("Please log in to save to favourites.");
      router.push("/login");
      return;
    }
    if (isPending) return;

    const nextSaved = !saved;
    setOverride(nextSaved);
    setIsPending(true);
    try {
      await toggleWishlist({ maidId, user_id: user.id });
      toast(nextSaved ? "Saved to favourites." : "Removed from favourites.");
    } catch {
      setOverride(!nextSaved);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleFavorite}
      disabled={isPending}
      aria-label={saved ? "Remove from favourites" : "Add to favourites"}
      className="bg-white/20 backdrop-blur-sm shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] p-2.5 rounded-full hover:bg-white/30 transition-colors cursor-pointer disabled:opacity-50"
    >
      <HeartStraight className="w-5 h-5 text-white" filled={saved} />
    </button>
  );
}
