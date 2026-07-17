"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MapPin, Clock, Mail, Phone, Loader2, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { createContact } from "@/lib/api";

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

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "The Iridium Building, Al Barsha, Dubai, United Arab Emirates",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Monday to Sunday, 9:00 AM – 10:00 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@pickmymaid.com",
    href: "mailto:support@pickmymaid.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 566369736",
    href: "tel:+971566369736",
  },
];

interface ContactForm {
  name: string;
  country_code: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-dark">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-dark text-sm outline-none transition-colors placeholder:text-dark/30 ${
    hasError
      ? "border-red-300 bg-red-50 focus:border-red-400"
      : "border-gray-200 bg-white focus:border-primary"
  }`;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ defaultValues: { country_code: "+971" } });

  async function onSubmit(data: ContactForm) {
    try {
      await createContact({
        name: data.name,
        email: data.email,
        mobile: data.country_code + data.phone,
        subject: data.subject,
        message: data.message,
      });
      setSubmitted(true);
      reset();
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Could not send your message. Please try again.");
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16 py-26 lg:py-20">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-start">
          {/* ── Left column: image + contact info ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] w-full shadow-[0px_19px_40px_0px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/others/register-banner.webp"
                alt="Pickmymaid office team"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Contact info grid */}
            <div className="grid grid-cols-2 border border-gray-100 rounded-2xl overflow-hidden divide-x divide-y divide-gray-100">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex flex-col gap-2 p-4 lg:p-5">
                  <div className="flex items-center gap-2">
                    <Icon
                      className="w-4 h-4 text-primary shrink-0"
                      strokeWidth={1.75}
                    />
                    <span className="text-xs font-semibold text-dark tracking-[0.5px]">
                      {label}
                    </span>
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-muted leading-5.5 tracking-[0.25px] hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted leading-5.5 tracking-[0.25px]">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark tracking-[-0.5px]">
              Get in touch
            </h2>
            <p className="mt-2 text-sm text-muted leading-5.5 tracking-[0.25px] max-w-sm">
              Have an inquiry or some feedback for us? Fill out the form below
              to contact our team.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 mt-7"
              noValidate
            >
              {/* Name */}
              <FormField label="Name" required error={errors.name?.message}>
                <input
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  {...register("name", { required: "Name is required" })}
                  className={inputCls(!!errors.name)}
                />
              </FormField>

              {/* Phone */}
              <FormField label="Phone" required error={errors.phone?.message}>
                <div
                  className={`flex rounded-xl border overflow-hidden transition-colors focus-within:border-primary ${
                    errors.phone
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {/* Country code select */}
                  <div className="relative shrink-0 border-r border-gray-200">
                    <select
                      {...register("country_code")}
                      aria-label="Country code"
                      className="h-full pl-3 pr-7 py-3 text-sm text-dark bg-transparent appearance-none outline-none cursor-pointer"
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
                  {/* Number input */}
                  <input
                    type="tel"
                    placeholder="50 123 4567"
                    autoComplete="tel-national"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9\s\-]{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="flex-1 px-3 py-3 text-sm text-dark bg-transparent outline-none placeholder:text-muted min-w-0"
                  />
                </div>
              </FormField>

              {/* Email */}
              <FormField label="Email" required error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
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
              </FormField>

              {/* Subject */}
              <FormField
                label="Subject"
                required
                error={errors.subject?.message}
              >
                <input
                  type="text"
                  placeholder="Inquiry about maid services"
                  {...register("subject", { required: "Subject is required" })}
                  className={inputCls(!!errors.subject)}
                />
              </FormField>

              {/* Message */}
              <FormField label="Message" error={errors.message?.message}>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  {...register("message")}
                  className={`${inputCls(!!errors.message)} resize-none`}
                />
              </FormField>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm tracking-wide hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
