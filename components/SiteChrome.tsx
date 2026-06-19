"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteLogo({ large = false }: { large?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-[-0.04em] text-[#10231c]">
      <span className={`relative overflow-hidden rounded-xl ${large ? "h-12 w-12" : "h-10 w-10"}`}>
        <Image src="/screenshots/app-icon.png" alt="" fill sizes={large ? "48px" : "40px"} className="object-cover" />
      </span>
      <span className={large ? "text-[30px]" : "text-xl"}>heiwa</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <SiteLogo />
      <div className="hidden -translate-y-0.5 items-center gap-10 text-[15px] font-semibold lg:flex">
        <Link className="transition hover:text-[#11936f]" href="/#features">Features</Link>
        <Link className="transition hover:text-[#11936f]" href="/#blog">Blog</Link>
      </div>
      <Link
        href="/#download"
        className="group hidden items-center gap-3 rounded-full bg-[#0d2f26] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(13,47,38,.10)] transition hover:-translate-y-0.5 hover:bg-[#16483a] lg:inline-flex"
      >
        Download Heiwa
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
      <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-[#10231c] text-white lg:hidden" aria-label="Open menu">
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div className="absolute left-5 right-5 top-20 rounded-3xl bg-[#10231c] p-6 text-white shadow-2xl lg:hidden">
          <div className="flex flex-col gap-5 font-semibold">
            <Link onClick={() => setOpen(false)} href="/#features">Features</Link>
            <Link onClick={() => setOpen(false)} href="/#blog">Blog</Link>
            <Link onClick={() => setOpen(false)} href="/#reviews">Reviews</Link>
            <Link onClick={() => setOpen(false)} href="/#download" className="rounded-full bg-[#20c997] px-5 py-3 text-center text-[#10231c]">Download Heiwa</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function AppStoreBadge() {
  return (
    <Link href="/#download" className="inline-flex items-center gap-2.5 rounded-xl border border-black/5 bg-white px-4 py-2.5 text-left text-black shadow-[0_10px_26px_rgba(13,47,38,.12)]">
      <svg className="h-7 w-7 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.05 12.54c-.03-3.18 2.6-4.71 2.72-4.78a5.84 5.84 0 0 0-4.6-2.49c-1.94-.2-3.82 1.16-4.81 1.16-1.02 0-2.55-1.14-4.21-1.11a6.1 6.1 0 0 0-5.13 3.13c-2.23 3.86-.57 9.54 1.57 12.66 1.07 1.53 2.32 3.23 3.98 3.17 1.62-.07 2.23-1.02 4.19-1.02 1.94 0 2.51 1.02 4.2.98 1.74-.03 2.84-1.54 3.87-3.08a12.64 12.64 0 0 0 1.77-3.6 5.53 5.53 0 0 1-3.55-5.02ZM13.9 3.22A5.62 5.62 0 0 0 15.18-.82a5.72 5.72 0 0 0-3.7 1.92 5.37 5.37 0 0 0-1.31 3.9 4.73 4.73 0 0 0 3.73-1.78Z" transform="translate(1.1 1.2) scale(.91)" />
      </svg>
      <span className="leading-none">
        <span className="block text-[8px] font-medium text-black/65">Download on the</span>
        <span className="mt-0.5 block text-[17px] font-semibold tracking-[-.02em]">App Store</span>
      </span>
    </Link>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "Product", items: [["Features", "/#features"], ["Download for iOS", "/#download"]] },
    { title: "Support", items: [["Contact", "/contact"], ["FAQ", "/#faq"], ["Delete Account", "/delete-account"]] },
    { title: "Legal", items: [["Privacy Policy", "/privacy-policy"], ["Terms of Use", "/terms"]] },
  ];

  return (
    <footer className="bg-white">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="relative mx-auto min-h-[380px] max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#168f70] px-6 py-12 text-white sm:min-h-[430px] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute bottom-[-10rem] right-[-5rem] h-96 w-96 rounded-full bg-[#4bc69f]/55 blur-3xl" />
          <div className="relative z-10 max-w-md">
            <h2 className="text-[clamp(2.35rem,10vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">Make a little room for yourself.</h2>
            <p className="mt-5 max-w-md text-base leading-[1.5] text-white/75 sm:text-[22px]">Create a soundscape for focus, sleep, or a quiet moment between everything else.</p>
            <div className="mt-8"><AppStoreBadge /></div>
          </div>
          <div className="absolute -bottom-[19rem] right-[8%] hidden aspect-[918/2048] w-[clamp(260px,25vw,350px)] rotate-[5deg] overflow-hidden rounded-[2.2rem] border-[7px] border-[#0d2f26] bg-[#f8f3e8] shadow-2xl md:block">
            <Image src="/screenshots/05-create-mix.png" alt="Heiwa create mix screen" fill sizes="350px" className="object-cover object-top" />
          </div>
          <div className="absolute -bottom-[19rem] right-[28%] hidden aspect-[918/2048] w-[clamp(260px,25vw,350px)] -rotate-[4deg] overflow-hidden rounded-[2.2rem] border-[7px] border-[#0d2f26] bg-[#f8f3e8] shadow-2xl lg:block">
            <Image src="/screenshots/02-home.png" alt="Heiwa home screen" fill sizes="350px" className="object-cover object-top" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 sm:px-10 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:gap-12 lg:px-16">
        <div className="col-span-2 lg:col-span-1">
          <SiteLogo large />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#10231c]/45">Beautiful soundscapes for focus, rest, sleep, and the space in between.</p>
          <p className="mt-8 text-xs text-[#10231c]/35">© 2026 Heiwa. All rights reserved.</p>
        </div>
        {groups.map(({ title, items }) => (
          <div key={title}>
            <p className="mb-5 text-base font-semibold sm:text-[17px]">{title}</p>
            <div className="flex flex-col gap-3 text-[15px] text-[#6f7c75] sm:text-base">
              {items.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-[#168f70]">{label}</Link>)}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
