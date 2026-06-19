import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./SiteChrome";

type Section = {
  title: string;
  content: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <main className="min-h-screen bg-[#f8f3e8] text-[#10231c]">
      <SiteHeader />

      <header className="mx-auto max-w-4xl px-5 pb-10 pt-12 text-center sm:px-8 sm:pb-16 sm:pt-24">
        <p className="text-sm font-semibold text-[#168f70]">{eyebrow}</p>
        <h1 className="mt-4 text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[1.02]">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.55] text-[#6f7c75]">{intro}</p>
        <p className="mt-5 text-sm text-[#6f7c75]">Last updated June 19, 2026</p>
      </header>

      <article className="mx-4 mb-16 max-w-4xl rounded-[1.5rem] border border-[#10231c]/5 bg-white/75 px-5 py-2 shadow-[0_18px_55px_rgba(20,50,40,.06)] backdrop-blur sm:mx-auto sm:mb-24 sm:rounded-[2rem] sm:px-10 sm:py-4">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-[#10231c]/8 py-6 last:border-0 sm:py-8">
            <h2 className="text-xl font-medium sm:text-2xl">{section.title}</h2>
            <div className="mt-4 space-y-4 text-base leading-[1.7] text-[#56645e] sm:text-[17px]">{section.content}</div>
          </section>
        ))}
      </article>

      <SiteFooter />
    </main>
  );
}
