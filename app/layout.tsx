import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GlobalLogic } from "@/components/providers/GlobalLogic";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-zen", // Now used globally
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heiwa.fun"),
  title: "Heiwa - Ambient Soundscapes for Focus, Relax & Sleep",
  description: "Discover Heiwa, your sanctuary for ambient sounds. Experience a journey of balance and mindfulness with high-quality soundscapes tailored for focus, relaxation, and deep sleep.",
  openGraph: {
    title: "Heiwa - Ambient Soundscapes for Focus, Relax & Sleep",
    description: "Discover Heiwa, your sanctuary for ambient sounds. Experience a journey of balance and mindfulness with high-quality soundscapes tailored for focus, relaxation, and deep sleep.",
    url: "https://heiwa.fun",
    siteName: "Heiwa",
    images: [
      {
        url: "https://heiwa.fun/og-image.png?v=3",
        width: 1200,
        height: 630,
        alt: "Heiwa Ambient Soundscape",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heiwa - Ambient Soundscapes for Focus, Relax & Sleep",
    description: "Discover Heiwa, your sanctuary for ambient sounds. Experience a journey of balance and mindfulness with high-quality soundscapes tailored for focus, relaxation, and deep sleep.",
    images: ["https://heiwa.fun/og-image.png?v=3"],
    creator: "@heiwa_fun", // Optional, if they have a handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        notoSansJP.variable,
        "font-display min-h-screen relative selection:bg-primary/30 font-sans"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GlobalLogic />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
