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
  title: "Heiwa | Ambient Soundscape",
  description: "Breathe in. Breathe out. A journey to tranquility.",
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
