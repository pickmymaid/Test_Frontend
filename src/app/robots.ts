import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/payment-verification", "/payment-status/", "/login", "/register", "/favorites"],
    },
    sitemap: "https://www.pickmymaid.com/sitemap.xml",
  };
}
