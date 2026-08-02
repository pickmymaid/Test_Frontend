"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth";
import { registerCustomer } from "@/lib/api";
import { SplitButton } from "@/components/ui/SplitButton";

/* ─── Constants ─────────────────────────────────────────────── */

const EMIRATES = [
  "Abu Dhabi",
  "Al Ain",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaima",
  "Fujairah",
];

const POSITIONS = [
  "Nanny",
  "Maid",
  "Caregiver",
  "Private Nurse",
  "Private Tutor",
  "Postpartum Care",
  "Cook",
];

const COUNTRY_CODES = [
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
];

/* ─── Types ──────────────────────────────────────────────────── */

interface FormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  country_code: string;
  mobile: string;
  emirate_of_residence: string;
  position_required: string;
}

/* ─── RegisterPage ───────────────────────────────────────────── */

export function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setAuth = useAuthStore((s) => s.setAuth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rawReturn = searchParams.get("returnTo") ?? "";
  const returnTo = rawReturn.startsWith("/") && !rawReturn.startsWith("//") ? rawReturn : "/search";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { country_code: "+971" },
  });

  async function onSubmit(data: FormData) {
    setServerError(null);
    const nameParts = data.name.trim().split(/\s+/);
    const first_name = nameParts[0];
    const last_name = nameParts.slice(1).join(" ") || nameParts[0];

    try {
      const res = await registerCustomer({
        first_name,
        last_name,
        email: data.email,
        password: data.password,
        emirate_of_residence: data.emirate_of_residence,
        position_required: data.position_required,
        phone: `${data.country_code}${data.mobile}`,
      });
      setAuth({
        id: res.data.user_id,
        email: data.email,
        name: data.name.trim(),
        isSubscribed: false,
      });
      toast.success("Account created! Welcome to Pickmymaid.");
      router.push(returnTo);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (/exist|already|duplicate|registered/i.test(msg)) {
        setServerError("An account with this email already exists. Please log in instead.");
      } else {
        setServerError("Registration failed. Please try again.");
      }
    }
  }

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-dark text-sm outline-none transition-colors ${
      hasError
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : "border-gray-200 bg-white focus:border-primary"
    }`;

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center py-26 px-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-4">
        {/* ── Left panel — image only (desktop) ── */}
        <div className="hidden lg:block relative rounded-3xl overflow-hidden min-h-160">
          <Image
            src="/images/others/register-banner.webp"
            alt="Find trusted domestic help in UAE"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 50vw"
            priority
          />
          {/* Subtle gradient overlay for branding */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white font-bold text-xl">Pickmymaid</p>
            <p className="text-white/80 text-sm mt-1">
              Trusted domestic help across all 7 Emirates.
            </p>
          </div>
        </div>

        {/* ── Right form card ── */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col">
          {/* Header */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-dark tracking-[-0.5px]">
              Free Registration
            </h1>
            <p className="text-sm text-muted mt-1">
              Fill in your details below and get instant access to verified candidates.
            </p>
          </div>

          {/* Server error */}
          {serverError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 flex-1"
            noValidate
          >
            <div className="flex flex-col lg:flex-row gap-1.5 w-full">
              {/* Full Name */}
              <div className="flex flex-col flex-1 gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-dark">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={inputCls(!!errors.name)}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col flex-1 gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-dark"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={inputCls(!!errors.email)}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm font-medium text-dark"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 6 characters"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`${inputCls(!!errors.password)} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
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

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirm_password"
                className="text-sm font-medium text-dark"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirm_password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className={`${inputCls(!!errors.confirm_password)} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
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

            {/* Mobile */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile" className="text-sm font-medium text-dark">
                Mobile Number
              </label>
              <div
                className={`flex rounded-xl border overflow-hidden transition-colors ${
                  errors.mobile
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200 bg-white"
                } focus-within:border-primary`}
              >
                {/* Country code */}
                <div className="relative shrink-0 border-r border-gray-200">
                  <select
                    {...register("country_code")}
                    className="h-full pl-3 pr-7 py-3 text-sm text-dark bg-transparent appearance-none outline-none cursor-pointer"
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map(({ code, flag, name }) => (
                      <option key={`${code}-${name}`} value={code}>
                        {flag} {code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none"
                    strokeWidth={2}
                  />
                </div>
                {/* Phone input */}
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  autoComplete="tel-national"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9\s\-]{7,15}$/,
                      message: "Enter a valid mobile number",
                    },
                  })}
                  className="flex-1 px-3 py-3 text-sm text-dark bg-transparent outline-none placeholder:text-muted"
                />
              </div>
              {errors.mobile && (
                <p className="text-xs text-red-500">{errors.mobile.message}</p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-1.5 w-full">
              {/* Emirate */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label
                  htmlFor="emirate_of_residence"
                  className="text-sm font-medium text-dark"
                >
                  Emirate of Residence
                </label>
                <div className="relative">
                  <select
                    id="emirate_of_residence"
                    {...register("emirate_of_residence", {
                      required: "Please select your emirate",
                    })}
                    className={`${inputCls(!!errors.emirate_of_residence)} appearance-none pr-10 cursor-pointer`}
                  >
                    <option value="">Select your emirate</option>
                    {EMIRATES.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
                    strokeWidth={2}
                  />
                </div>
                {errors.emirate_of_residence && (
                  <p className="text-xs text-red-500">
                    {errors.emirate_of_residence.message}
                  </p>
                )}
              </div>

              {/* Position */}
              <div className="flex flex-1 flex-col gap-1.5">
                <label
                  htmlFor="position_required"
                  className="text-sm font-medium text-dark"
                >
                  What Are You Looking For
                </label>
                <div className="relative">
                  <select
                    id="position_required"
                    {...register("position_required", {
                      required: "Please select a position",
                    })}
                    className={`${inputCls(!!errors.position_required)} appearance-none pr-10 cursor-pointer`}
                  >
                    <option value="">Select Service</option>
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
                    strokeWidth={2}
                  />
                </div>
                {errors.position_required && (
                  <p className="text-xs text-red-500">
                    {errors.position_required.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="mx-auto mt-2 w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 w-full py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm tracking-wide hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Creating account…" : "Register"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-sm text-muted text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:text-primary-600 transition-colors"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
