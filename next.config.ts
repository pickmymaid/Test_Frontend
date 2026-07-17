import type { NextConfig } from "next";

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
  },
};

export default nextConfig;
