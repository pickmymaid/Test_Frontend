"use client";

import { useEffect } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-M7WGQXM";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

function injectGTM() {
  const w = window as Window & { dataLayer?: object[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

function injectClarity() {
  if (!CLARITY_ID) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(s);
}

export function Analytics() {
  useEffect(() => {
    let fired = false;

    function fire() {
      if (fired) return;
      fired = true;
      EVENTS.forEach((e) => window.removeEventListener(e, fire));
      clearTimeout(fallback);
      injectGTM();
      injectClarity();
    }

    const EVENTS = ["mousedown", "mousemove", "keydown", "touchstart", "scroll"] as const;
    EVENTS.forEach((e) => window.addEventListener(e, fire, { once: true, passive: true }));

    // Fallback: load after 4 s even with no interaction
    const fallback = setTimeout(fire, 4000);

    return () => {
      clearTimeout(fallback);
      EVENTS.forEach((e) => window.removeEventListener(e, fire));
    };
  }, []);

  return null;
}
