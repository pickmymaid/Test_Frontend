"use client";

import { useEffect } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-M7WGQXM";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "4436313626504462";

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

type FbqFn = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: FbqFn;
  loaded?: boolean;
  version?: string;
};

function injectMetaPixel() {
  const w = window as Window & { fbq?: FbqFn; _fbq?: FbqFn };
  if (w.fbq) return;

  const fbq: FbqFn = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as FbqFn;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";

  w.fbq = fbq;
  w._fbq = fbq;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);

  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
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
      injectMetaPixel();
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
