"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { APP_STORE_URL } from "@/lib/app-store";
import ReadingProgress from "./ReadingProgress";

export function SiteLogo({ large = false }: { large?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 font-semibold tracking-[-0.06em] text-[#10231c]">
      <span className={`relative overflow-hidden ${large ? "h-12 w-12 rounded-[16px]" : "h-9 w-9 rounded-xl"}`}>
        <Image src="/screenshots/app-icon.png" alt="" fill sizes={large ? "48px" : "36px"} className="object-cover" />
      </span>
      <span className={large ? "text-[30px]" : "text-[1.55rem]"}>{large ? "heiwa" : "Heiwa"}</span>
    </Link>
  );
}

function AppleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16.64 12.56c-.03-2.73 2.23-4.05 2.34-4.11a5.03 5.03 0 0 0-3.95-2.14c-1.67-.17-3.27 1-4.12 1-.88 0-2.19-.98-3.61-.95A5.24 5.24 0 0 0 2.9 9.05c-1.91 3.32-.49 8.2 1.35 10.89.92 1.31 1.99 2.78 3.42 2.73 1.39-.06 1.92-.88 3.6-.88 1.66 0 2.16.88 3.61.85 1.5-.03 2.44-1.32 3.33-2.64a10.87 10.87 0 0 0 1.52-3.1 4.75 4.75 0 0 1-3.09-4.34Zm-2.7-8.01A4.82 4.82 0 0 0 15.04 1a4.91 4.91 0 0 0-3.18 1.65 4.62 4.62 0 0 0-1.13 3.35 4.07 4.07 0 0 0 3.21-1.45Z"
      />
    </svg>
  );
}

export function SiteHeader({ showReadingProgress = false }: { showReadingProgress?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#10231c]/5 bg-[#f8f3e8]/90 backdrop-blur-xl">
    <nav className="relative mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
      <SiteLogo />
      <div className="hidden items-center gap-10 text-[15px] font-medium text-black lg:flex">
        <Link className="transition hover:opacity-65" href="/#features">Features</Link>
        <Link className="transition hover:opacity-65" href="/sleep-sounds">Sleep Sounds</Link>
        <Link className="transition hover:opacity-65" href="/soundscape-app">Soundscape App</Link>
        <Link className="transition hover:opacity-65" href="/blogs">Blogs</Link>
      </div>
      <Link
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-black px-5 text-[13px] font-medium text-white transition hover:scale-[1.02] lg:inline-flex"
      >
        <AppleMark className="h-4 w-4" />
        Get on App Store
      </Link>
      <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-[#10231c] text-white lg:hidden" aria-label="Open menu">
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div className="absolute left-5 right-5 top-20 rounded-3xl bg-[#10231c] p-6 text-white shadow-2xl lg:hidden">
          <div className="flex flex-col gap-5 font-semibold">
            <Link onClick={() => setOpen(false)} href="/#features">Features</Link>
            <Link onClick={() => setOpen(false)} href="/sleep-sounds">Sleep Sounds</Link>
            <Link onClick={() => setOpen(false)} href="/soundscape-app">Soundscape App</Link>
            <Link onClick={() => setOpen(false)} href="/blogs">Blogs</Link>
            <Link onClick={() => setOpen(false)} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-center text-[#10231c]">Get on App Store</Link>
          </div>
        </div>
      )}
    </nav>
    {showReadingProgress && <ReadingProgress />}
    </header>
  );
}

function AppStoreBadge() {
  return (
    <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-[1.15rem] border border-black/5 bg-white px-5 py-3 text-left text-black shadow-[0_16px_34px_rgba(13,47,38,.16)] transition hover:-translate-y-0.5">
      <svg className="h-7 w-7 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.05 12.54c-.03-3.18 2.6-4.71 2.72-4.78a5.84 5.84 0 0 0-4.6-2.49c-1.94-.2-3.82 1.16-4.81 1.16-1.02 0-2.55-1.14-4.21-1.11a6.1 6.1 0 0 0-5.13 3.13c-2.23 3.86-.57 9.54 1.57 12.66 1.07 1.53 2.32 3.23 3.98 3.17 1.62-.07 2.23-1.02 4.19-1.02 1.94 0 2.51 1.02 4.2.98 1.74-.03 2.84-1.54 3.87-3.08a12.64 12.64 0 0 0 1.77-3.6 5.53 5.53 0 0 1-3.55-5.02ZM13.9 3.22A5.62 5.62 0 0 0 15.18-.82a5.72 5.72 0 0 0-3.7 1.92 5.37 5.37 0 0 0-1.31 3.9 4.73 4.73 0 0 0 3.73-1.78Z" transform="translate(1.1 1.2) scale(.91)" />
      </svg>
      <span className="leading-none">
        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-black/70">Get on</span>
        <span className="mt-1 block text-[18px] font-semibold tracking-[-0.03em]">App Store</span>
      </span>
    </Link>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "Product", items: [["Sleep Sounds", "/sleep-sounds"], ["Soundscape App", "/soundscape-app"], ["Offline Listening", "/offline-sleep-sounds-app"], ["Sleep Timer", "/sleep-sounds-app-with-timer"], ["Download for iOS", APP_STORE_URL]] },
    { title: "Guides", items: [["Best Sleep Sounds", "/blogs/best-sleep-sounds-for-falling-asleep-faster"], ["Mix Sleep Sounds", "/blogs/how-to-create-your-own-sleep-sound-mix"], ["Noise Colors", "/blogs/white-noise-vs-brown-noise-vs-pink-noise"], ["All Guides", "/blogs"]] },
    { title: "Support", items: [["Contact", "/contact"], ["FAQ", "/#faq"], ["Delete Account", "/delete-account"], ["Privacy Policy", "/privacy-policy"], ["Terms of Use", "/terms"]] },
  ];

  return (
    <footer className="bg-white">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="relative mx-auto min-h-[300px] max-w-7xl overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#148c6d_0%,#1f9a7a_52%,#36b28d_100%)] px-6 py-10 text-white sm:min-h-[340px] sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-14 lg:py-12">
          <div className="absolute -left-16 top-10 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute left-[18%] top-[-10%] h-40 w-40 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute bottom-[-8rem] right-[-2rem] h-80 w-80 rounded-full bg-[#65d3ad]/30 blur-3xl" />
          <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="relative z-10 max-w-[620px]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">Heiwa for everyday calm</p>
            <h2 className="mt-4 text-[clamp(2.2rem,8vw,3.6rem)] font-semibold leading-[0.9] text-white">
              <span className="block sm:whitespace-nowrap">Make a little room</span>
              <span className="block sm:whitespace-nowrap">for yourself.</span>
            </h2>
            <p className="mt-5 max-w-[420px] text-base leading-[1.5] text-white/90 sm:text-[20px]">Create a soundscape for focus, sleep, or a quiet moment between everything else.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4"><AppStoreBadge /><span className="text-sm font-medium text-white/85">★★★★★ 4.9 rating · 20k+ Heiwa users</span></div>
          </div>
          <div className="absolute -bottom-[7.5rem] right-[8%] hidden aspect-[918/2048] w-[clamp(180px,16vw,230px)] rotate-[6deg] overflow-hidden rounded-[1.7rem] border-[5px] border-[#0b4c3d] bg-[#f8f3e8] shadow-[0_18px_44px_rgba(4,39,30,.22)] md:block">
            <Image src="/screenshots/05-create-mix.png" alt="Heiwa create mix screen" fill sizes="280px" className="object-cover object-top" />
          </div>
          <div className="absolute -bottom-[7.5rem] right-[22%] hidden aspect-[918/2048] w-[clamp(180px,16vw,230px)] -rotate-[5deg] overflow-hidden rounded-[1.7rem] border-[5px] border-[#0b4c3d] bg-[#f8f3e8] shadow-[0_18px_44px_rgba(4,39,30,.22)] lg:block">
            <Image src="/screenshots/02-home.png" alt="Heiwa home screen" fill sizes="280px" className="object-cover object-top" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 sm:px-10 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:gap-12 lg:px-16">
        <div className="col-span-2 lg:col-span-1">
          <SiteLogo large />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#10231c]/70">Beautiful soundscapes for focus, rest, sleep, and the space in between.</p>
          <p className="mt-8 text-xs text-[#10231c]/60">© 2026 Heiwa. All rights reserved.</p>
        </div>
        {groups.map(({ title, items }) => (
          <div key={title}>
            <p className="mb-5 text-base font-semibold sm:text-[17px]">{title}</p>
            <div className="flex flex-col gap-3 text-[15px] text-[#6f7c75] sm:text-base">
              {items.map(([label, href]) => <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="transition hover:text-[#168f70]">{label}</Link>)}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
