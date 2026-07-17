"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, SplitIcon } from "lucide-react";
import { SplitButton } from "../ui/SplitButton";

const LOCATIONS = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
  "Al Ain",
];
const TYPES = [
  "Maid",
  "Nanny",
  "Caregiver",
  "Private Nurse",
  "Private Tutor",
  "Driver",
  "Postpartum care",
  "Cook",
];
const NATIONALITIES = [
  "Philippines",
  "India",
  "Nepal",
  "Indonesia",
  "Bangladesh",
  "Pakistan",
  "Myanmar",
  "Bhutan",
  "Sri Lanka",
  "Ethiopia",
  "Eritrea",
];

function SearchButton({
  onClick,
  small,
}: {
  onClick?: () => void;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Search"
      className="flex shrink-0 self-stretch"
    >
      <svg
        className={`shrink-0 ${small ? "w-3" : "w-3.5"}`}
        style={{ height: "100%" }}
        viewBox="0 0 14 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M14 0 C0 0,0 56,14 56 L14 0 Z" fill="#1a1a1a" />
      </svg>
      <span
        className={`bg-dark text-white flex items-center justify-center rounded-tr-2xl rounded-br-2xl ${small ? "pl-0.5 pr-3.5" : "pl-0.5 pr-4"}`}
      >
        <Search className={small ? "w-5 h-5" : "w-6 h-6"} strokeWidth={1.5} />
      </span>
    </button>
  );
}

export function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("Dubai");
  const [type, setType] = useState("Maid");
  const [nationality, setNationality] = useState("Philippines");
  const [mobileQuery, setMobileQuery] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({
      location,
      service: type,
      nationality: nationality === "Sri Lanka" ? "Srilanka" : nationality,
      page: "1",
    });
    router.push(`/search?${params.toString()}`);
  };

  const handleMobileSearch = () => {
    const params = new URLSearchParams({ q: mobileQuery.trim(), page: "1" });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      {/* Desktop search bar */}
      <div className="hidden lg:flex backdrop-blur-[34px] bg-white/70 border border-white rounded-2xl drop-shadow-[0px_19px_20px_rgba(0,0,0,0.1)] mt-10 overflow-hidden p-2">
        {/* Location */}
        <div className="flex-1 px-6 min-w-0">
          <p className="text-base font-medium text-dark/50 leading-6 tracking-[0.25px] mb-2">
            Location
          </p>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full text-base font-semibold text-dark bg-transparent border-none outline-none cursor-pointer appearance-none truncate leading-6 tracking-[0.25px]"
            aria-label="Select location"
          >
            {LOCATIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="w-px self-stretch bg-dark/10 my-5" />

        {/* Type */}
        <div className="flex-1 px-6 min-w-0">
          <p className="text-base font-medium text-dark/50 leading-6 tracking-[0.25px] mb-2">
            Service
          </p>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full text-base font-semibold text-dark bg-transparent border-none outline-none cursor-pointer appearance-none truncate leading-6 tracking-[0.25px]"
            aria-label="Select service"
          >
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="w-px self-stretch bg-dark/10 my-5" />

        {/* Language */}
        <div className="flex-1 px-6 min-w-0">
          <p className="text-base font-medium text-dark/50 leading-6 tracking-[0.25px] mb-2">
            Nationality
          </p>
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="w-full text-base font-semibold text-dark bg-transparent border-none outline-none cursor-pointer appearance-none truncate leading-6 tracking-[0.25px]"
            aria-label="Select nationality"
          >
            {NATIONALITIES.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <SplitButton
          aria-label="Search"
          icon={<Search />}
          onClick={handleSearch}
        />
      </div>

      {/* Mobile search bar */}
      <div className="flex lg:hidden backdrop-blur-[34px] bg-white/70 border border-white rounded-2xl drop-shadow-[0px_19px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <input
          type="text"
          placeholder="Search Keywords"
          value={mobileQuery}
          onChange={(e) => setMobileQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleMobileSearch()}
          className="flex-1 text-base font-medium text-dark placeholder:text-dark/50 pl-4 py-3 bg-transparent border-none outline-none min-w-0 tracking-[0.25px] leading-6"
          aria-label="Search keywords"
        />
        <SplitButton
          aria-label="Search"
          icon={<Search />}
          onClick={handleMobileSearch}
        />
      </div>
    </>
  );
}
