import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics";
import { seoConfig } from "@/config/seo.config";
import { Toaster } from "sonner";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";


export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.defaultDescription,
  openGraph: {
    type: "website",
    siteName: seoConfig.siteName,
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitterHandle,
    images: [seoConfig.defaultOgImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png" },
    other: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.pickmymaid.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.pickmymaid.com" />
        <link rel="dns-prefetch" href="https://api.pickmymaid.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4436313626504462');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4436313626504462&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* <NoRightClick /> */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              fontFamily: "var(--font-sans)",
              borderRadius: "16px",
              fontSize: "14px",
              fontWeight: "500",
            },
            classNames: {
              toast: `shadow-[0px_19px_40px_0px_rgba(0,0,0,0.08)]`,
              success: `!bg-white !text-[#1A1A1A] [&_[data-icon]_svg]:!text-green-500`,
              error: `!bg-white !text-[#1A1A1A] [&_[data-icon]_svg]:!text-red-500`,
              warning: `!bg-white !text-[#1A1A1A] [&_[data-icon]_svg]:!text-yellow-500`,
              info: `!bg-white !text-[#1A1A1A] [&_[data-icon]_svg]:!text-blue-500`,
            },
          }}
        />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
