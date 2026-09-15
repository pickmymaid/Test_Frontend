"use client";

import { Lock, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { ContactInfoCard } from "./ContactInfoCard";
import { SplitButton } from "@/components/ui/SplitButton";
import { useAuthStore } from "@/store/auth";
import { useMaidSession } from "./MaidSessionContext";

/* Blurred placeholder shown behind the lock overlay */
function BlurredPlaceholder() {
  return (
    <div
      className="h-full rounded-3xl p-6 overflow-hidden select-none pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #E8683C 0%, #F18C4F 50%, #FAAD62 100%)",
      }}
      aria-hidden="true"
    >
      <div className="h-5 w-40 bg-white/30 rounded-full mb-5" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
            <div className="w-11 h-11 rounded-full bg-white/30 shrink-0" />
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-24 bg-white/30 rounded-full" />
              <div className="h-4 w-36 bg-white/40 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LockedContactCard({
  maidRefNumber,
  maidName,
}: {
  maidRefNumber: string;
  maidName: string;
}) {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  function handleUnlock() {
    sessionStorage.setItem(
      "pmm-pending-hire",
      JSON.stringify({ id: maidRefNumber, name: maidName }),
    );
    if (!isAuthenticated) {
      router.push(`/register?returnTo=/pricing`);
    } else {
      router.push("/pricing");
    }
  }

  return (
    <div className="h-full relative rounded-3xl overflow-hidden">
      {/* Blurred card behind */}
      <div className="h-full blur-sm">{<BlurredPlaceholder />}</div>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 bg-black/20 backdrop-blur-[3px] rounded-3xl">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <Lock className="w-6 h-6 text-white" />
        </div>
        <p className="text-white text-sm font-medium text-center leading-snug">
          Login or Upgrade to view details
        </p>
        <SplitButton
          label="Unlock Contact Info"
          variant="secondary"
          onClick={handleUnlock}
        />
      </div>
    </div>
  );
}

function ContactSkeleton() {
  return <div className="rounded-3xl h-[220px] bg-gray-200 animate-pulse" />;
}

function ContactErrorCard({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="h-full relative rounded-3xl overflow-hidden">
      <div className="h-full blur-sm">{<BlurredPlaceholder />}</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 bg-black/20 backdrop-blur-[3px] rounded-3xl">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <p className="text-white text-sm font-medium text-center leading-snug">
          Couldn&apos;t load contact details. Please try again.
        </p>
        <SplitButton label="Retry" variant="secondary" onClick={onRetry} />
      </div>
    </div>
  );
}

export function ContactSection({
  maidRefNumber,
  maidName,
}: {
  maidRefNumber: string;
  maidName: string;
}) {
  const { state, retry } = useMaidSession();

  if (state.status === "loading") return <ContactSkeleton />;
  if (state.status === "error") return <ContactErrorCard onRetry={retry} />;

  const { phone, whatsapp, botim, email } = state.data;
  if (!phone && !whatsapp && !botim && !email) {
    return (
      <LockedContactCard maidRefNumber={maidRefNumber} maidName={maidName} />
    );
  }

  return (
    <ContactInfoCard phone={phone} whatsapp={whatsapp} botim={botim} email={email} />
  );
}
