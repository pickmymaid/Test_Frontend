"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { forgotPassword, ApiError, NetworkError } from "@/lib/api";

interface FormData {
  email: string;
}

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-dark text-sm outline-none transition-colors ${
      hasError
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : "border-gray-200 bg-white focus:border-primary"
    }`;

  async function onSubmit(data: FormData) {
    setServerError(null);
    try {
      await forgotPassword({ email: data.email });
      setSent(true);
    } catch (err) {
      if (err instanceof NetworkError || err instanceof ApiError) {
        setServerError(err.message);
      } else {
        setServerError("Something went wrong. We couldn't send the reset email — please try again.");
      }
    }
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center py-26 px-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-4">

        {/* ── Left panel — image (desktop only) ── */}
        <div className="hidden lg:block relative rounded-3xl overflow-hidden min-h-160">
          <Image
            src="/images/others/register-banner.webp"
            alt="Find trusted domestic help in UAE"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white font-bold text-xl">Pickmymaid</p>
            <p className="text-white/80 text-sm mt-1">
              Trusted domestic help across all 7 Emirates.
            </p>
          </div>
        </div>

        {/* ── Right form card ── */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[520px]">

          {sent ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center flex-1 gap-5 text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dark tracking-[-0.5px] mb-2">
                  Check your inbox
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  We sent a password reset link to{" "}
                  <span className="font-semibold text-dark">{getValues("email")}</span>
                </p>
              </div>
              <Link
                href="/login"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                Back to Login
              </Link>
            </div>
          ) : (
            /* ── Form state ── */
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Link
                  href="/login"
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors shrink-0"
                  aria-label="Back to login"
                >
                  <ArrowLeft className="w-4 h-4 text-dark" strokeWidth={2} />
                </Link>
                <div>
                  <p className="text-primary font-bold text-lg mb-0.5 lg:hidden">Pickmymaid</p>
                  <h1 className="text-2xl font-bold text-dark tracking-[-0.5px]">
                    Forgot your password?
                  </h1>
                  <p className="text-sm text-muted mt-0.5 leading-relaxed">
                    Enter your email and we&apos;ll send you a reset link.
                  </p>
                </div>
              </div>

              {serverError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-dark">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" strokeWidth={1.75} />
                    <input
                      id="email"
                      type="email"
                      placeholder="sarah@example.com"
                      autoComplete="email"
                      autoFocus
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`${inputCls(!!errors.email)} pl-10`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 w-full py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm tracking-wide hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Sending…" : "Send Reset Link"}
                </button>
              </form>
            </div>
          )}

          {/* Footer */}
          {!sent && (
            <p className="text-sm text-muted text-center mt-8">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-primary font-semibold hover:text-primary-600 transition-colors"
              >
                Log In
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
