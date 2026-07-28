"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Check, ChevronsRight, Loader2, X } from "lucide-react";
import { useAuthStore, useSubscription } from "@/store/auth";
import { createPayment } from "@/lib/api";
import { PLANS, type Plan } from "@/config/plans.config";

function PlanCard({
  plan,
  isActivePlan,
  loadingType,
  onGetStarted,
}: {
  plan: Plan;
  isActivePlan: boolean;
  loadingType: 0 | 1 | 2 | null;
  onGetStarted: (type: 0 | 1 | 2) => void;
}) {
  return (
    <div
      className={`group flex flex-col gap-6 rounded-3xl p-7 lg:p-8 bg-white transition-all duration-300 relative ${
        isActivePlan
          ? "ring-2 ring-[#6DA544] shadow-[0px_24px_48px_0px_rgba(109,165,68,0.12)]"
          : "border-2 border-gray-100 shadow-[0px_19px_40px_0px_rgba(0,0,0,0.05)] hover:border-primary hover:shadow-[0px_19px_40px_0px_rgba(255,116,66,0.15)] hover:-translate-y-3"
      }`}
    >
      {isActivePlan ? (
        <span className="absolute top-7 right-7 lg:top-8 lg:right-8 text-[10px] font-bold text-[#6DA544] tracking-[0.75px] uppercase bg-[#6DA544]/10 border border-[#6DA544]/30 rounded-full px-3 py-1">
          Active Plan
        </span>
      ) : plan.isBestChoice ? (
        <span className="absolute top-7 right-7 lg:top-8 lg:right-8 text-[10px] font-bold text-primary tracking-[0.75px] uppercase bg-primary-50 border border-primary/30 rounded-full px-3 py-1">
          Best Choice
        </span>
      ) : null}

      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold text-dark">{plan.name}</p>
        <div className="flex items-end gap-1.5">
          <span className="text-4xl lg:text-5xl font-bold text-dark tracking-tight">
            AED {plan.price}
          </span>
          <span className="text-sm text-muted mb-1.5">/ {plan.duration}</span>
        </div>
        <p className="text-sm text-muted leading-relaxed tracking-[0.25px]">
          {plan.description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => !isActivePlan && onGetStarted(plan.type)}
        disabled={isActivePlan || loadingType !== null}
        className={`w-full rounded-2xl py-3.5 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed ${
          isActivePlan
            ? "bg-[#6DA544]/10 text-[#6DA544] border border-[#6DA544]/30"
            : "bg-primary text-white hover:bg-primary-600 disabled:opacity-70"
        }`}
      >
        {isActivePlan ? (
          "Current Plan"
        ) : loadingType === plan.type ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing…
          </>
        ) : (
          "Buy Plan"
        )}
      </button>

      <div className="h-px bg-gray-100" />

      <ul className="flex flex-col gap-3">
        {plan.benefits.map((benefit) => (
          <li key={benefit.text} className="flex items-start gap-2.5">
            <span
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                benefit.included ? "bg-primary-50 text-primary" : "bg-gray-100 text-muted"
              }`}
            >
              {benefit.included ? (
                <Check className="w-3 h-3" strokeWidth={2.5} />
              ) : (
                <X className="w-3 h-3" strokeWidth={2.5} />
              )}
            </span>
            <span
              className={`text-sm leading-relaxed tracking-[0.25px] ${
                benefit.included ? "text-dark/75" : "text-muted line-through"
              }`}
            >
              {benefit.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SubscriptionPlansSection() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { isSubscribed, tier } = useSubscription();
  const [loadingType, setLoadingType] = useState<0 | 1 | 2 | null>(null);

  async function handleGetStarted(type: 0 | 1 | 2) {
    if (!isAuthenticated) {
      toast("Please register or log in to get started.");
      router.push("/register");
      return;
    }
    if (loadingType !== null) return;
    setLoadingType(type);
    try {
      const res = await createPayment(type);
      window.location.assign(res.data.payment_url);
    } catch {
      toast.error("Could not initiate payment. Please try again.");
      setLoadingType(null);
    }
  }

  return (
    <section
      id="pricing"
      className="py-12 lg:py-20 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, var(--color-primary-50) 0%, #ffffff 70%)",
      }}
      aria-label="Subscription Plans"
    >
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-start text-left gap-5 mb-12 lg:mb-16">
          
           <div className="flex justify-center md:justify-normal items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
            <ChevronsRight className="w-8 h-8  md:w-11 md:h-11 font-thin" />
            <span className='text-lg  font-medium'>Subscription Plans</span>
          </div>

          <div className="flex items-center justify-start">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark leading-tight">
              Simple and transparent
              <br />
              <span className="text-primary text-[42px] lg:text-6xl">
                Pricing
              </span>
            </h2>
          </div>

          <p className="text-sm lg:text-base text-muted leading-relaxed max-w-lg text-left">
            Choose how long you need access. All plans include direct contact
            with verified candidates — a one-time payment, no recurring
            charges.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-center">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isActivePlan={isSubscribed && tier === plan.id}
              loadingType={loadingType}
              onGetStarted={handleGetStarted}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 lg:mt-12">
          <Link
            href="/pricing"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View full plan details &amp; FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
