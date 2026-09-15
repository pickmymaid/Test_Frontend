"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";
import { resetPassword, ApiError } from "@/lib/api";

interface FormData {
  password: string;
  confirm_password: string;
}

export function ResetPasswordPage({ token }: { token: string }) {
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-dark text-sm outline-none transition-colors pr-11 ${
      hasError
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : "border-gray-200 bg-white focus:border-primary"
    }`;

  async function onSubmit(data: FormData) {
    setServerError(null);
    try {
      await resetPassword(token, {
        password: data.password,
        confirm_password: data.confirm_password,
      });
      setDone(true);
    } catch (err) {
      const msg = (err instanceof Error ? err.message : "").toLowerCase();
      const isTokenIssue =
        msg.includes("expired") ||
        msg.includes("invalid") ||
        (err instanceof ApiError && err.status === 401);
      setServerError(
        isTokenIssue
          ? "This reset link has expired or is invalid. Please request a new one."
          : "Something went wrong. Please try again.",
      );
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
          {done ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center flex-1 gap-5 text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                <CheckCircle
                  className="w-8 h-8 text-primary"
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dark tracking-[-0.5px] mb-2">
                  Password updated!
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  Your password has been reset successfully. You can now log in
                  with your new password.
                </p>
              </div>
              <Link
                href="/login"
                className="mt-2 w-full py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm tracking-wide hover:bg-primary-600 transition-colors text-center"
              >
                Go to Login
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
                  <p className="text-primary font-bold text-lg mb-0.5 lg:hidden">
                    Pickmymaid
                  </p>
                  <h1 className="text-2xl font-bold text-dark tracking-[-0.5px]">
                    Set a new password
                  </h1>
                  <p className="text-sm text-muted mt-0.5 leading-relaxed">
                    Choose a strong password for your account.
                  </p>
                </div>
              </div>

              {serverError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
                  {serverError}{" "}
                  {serverError.includes("expired") && (
                    <Link
                      href="/forgot-password"
                      className="font-semibold underline"
                    >
                      Request a new link
                    </Link>
                  )}
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
                noValidate
              >
                {/* New password */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-dark"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      autoComplete="new-password"
                      autoFocus
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className={inputCls(!!errors.password)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" strokeWidth={1.75} />
                      ) : (
                        <Eye className="w-4 h-4" strokeWidth={1.75} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm password */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="confirm_password"
                    className="text-sm font-medium text-dark"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm_password"
                      type={showConfirm ? "text" : "password"}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      {...register("confirm_password", {
                        required: "Please confirm your password",
                        validate: (v) =>
                          v === watch("password") || "Passwords do not match",
                      })}
                      className={inputCls(!!errors.confirm_password)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors"
                      aria-label={
                        showConfirm ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirm ? (
                        <EyeOff className="w-4 h-4" strokeWidth={1.75} />
                      ) : (
                        <Eye className="w-4 h-4" strokeWidth={1.75} />
                      )}
                    </button>
                  </div>
                  {errors.confirm_password && (
                    <p className="text-xs text-red-500">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 w-full py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm tracking-wide hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Updating…" : "Reset Password"}
                </button>
              </form>
            </div>
          )}

          {!done && (
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
