import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Canonical maid URL is /maid/[numeric-id]/[slug].
        // Redirect the reversed format /maid/[slug]/[numeric-id] → /maid/[id]/[slug].
        source: "/maid/:slug([a-z][a-z0-9-]+)/:id(\\d+)",
        destination: "/maid/:id/:slug",
        permanent: true,
      },
      {
        // /packages was renamed to /pricing.
        source: "/packages",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.pickmymaid.com", pathname: "/**" },
    ],
    qualities: [75, 90],
    formats: ["image/webp"],
  },
};

// Gives local `next dev` access to Cloudflare bindings (KV, etc.) via
// `getCloudflareContext()`. No-op when actually running on Workers.
initOpenNextCloudflareForDev();

export default nextConfig;
