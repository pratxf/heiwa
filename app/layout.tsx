import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import { APP_STORE_ID } from "@/lib/app-store";
import { JsonLd, organizationJsonLd, SITE_URL, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8f3e8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Heiwa Sleep Sounds App | Create Personal Soundscapes",
    template: "%s | Heiwa",
  },
  description: "Mix rain, fire, wind, forest, ocean, and calming noise into personal soundscapes for sleep, focus, reading, and relaxation.",
  applicationName: "Heiwa",
  keywords: [
    "sleep sounds app",
    "soundscape app",
    "rain sounds for sleep",
    "relaxing sounds",
    "nature sounds app",
    "white noise app",
    "brown noise app",
    "focus sounds",
    "ambient sounds",
    "sound mixer app",
    "sleep timer app",
  ],
  authors: [{ name: "Heiwa", url: SITE_URL }],
  creator: "Heiwa",
  publisher: "Heiwa",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Heiwa",
    title: "Heiwa Sleep Sounds App | Create Personal Soundscapes",
    description: "Build personal soundscapes with rain, fire, wind, forest, ocean, and more.",
    images: [{ url: "/images/curated-forest.webp", width: 1536, height: 1024, alt: "A calm sunlit forest representing Heiwa soundscapes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heiwa Sleep Sounds App",
    description: "Create personal soundscapes for sleep, focus, and relaxation.",
    images: ["/images/curated-forest.webp"],
  },
  icons: {
    icon: "/screenshots/app-icon.png",
    apple: "/screenshots/app-icon.png",
  },
  manifest: "/manifest.webmanifest",
  category: "health",
  other: {
    "apple-itunes-app": `app-id=${APP_STORE_ID}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z8GC23YG8M" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z8GC23YG8M');`}
        </Script>
      </body>
    </html>
  );
}
