"use client";

import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { ContactInfoCard } from "./ContactInfoCard";
import { SplitButton } from "@/components/ui/SplitButton";
import { useAuthStore } from "@/store/auth";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.pickmymaid.com/api";

interface ContactData {
  phone?: string;
  whatsapp?: string;
  botim?: string;
  email?: string;
}

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
      router.push(`/register?returnTo=/packages`);
    } else {
      router.push("/packages");
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

export function ContactSection({
  id,
  maidRefNumber,
  maidName,
}: {
  id: string;
  maidRefNumber: string;
  maidName: string;
}) {
  const [contacts, setContacts] = useState<ContactData | null>(null);
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/v1/job/id`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ id }),
    })
      .then((r) => r.json())
      .then((data) => {
        const job = data?.data?.jobApplication;
        const { whatsapp_no, uae_no, botim, email } = job ?? {};
        if (whatsapp_no || uae_no || botim || email) {
          setContacts({
            phone: uae_no,
            whatsapp: whatsapp_no,
            botim: botim,
            email,
          });
        } else {
          setLocked(true);
        }
      })
      .catch(() => setLocked(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <ContactSkeleton />;
  if (locked || !contacts)
    return (
      <LockedContactCard maidRefNumber={maidRefNumber} maidName={maidName} />
    );
  return <ContactInfoCard {...contacts} />;
}
