import Image from "next/image";
import Link from "next/link";
import { Check, Moon, SlidersHorizontal, Timer, Waves } from "lucide-react";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { APP_STORE_URL } from "@/lib/app-store";
import { breadcrumbsJsonLd, JsonLd, SITE_URL } from "@/lib/seo";

export default function SeoLandingPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  sections,
  path,
  related = [],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { title: string; paragraphs: string[] }[];
  path: string;
  related?: { title: string; href: string }[];
}) {
  const benefits = [
    ["Mix every layer", "Adjust rain, fire, wind, ocean, music, and noise separately.", SlidersHorizontal],
    ["Set a timer", "Choose a session length and let the soundscape stop automatically.", Timer],
    ["Save favorites", "Keep personal mixes ready for bedtime, reading, or deep work.", Moon],
  ] as const;

  return (
    <main className="bg-[#f8f3e8] text-[#10231c]">
      <JsonLd
        data={[
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${path}/#webpage`,
            url: `${SITE_URL}${path}`,
            name: title,
            description: intro,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#softwareapplication` },
            inLanguage: "en-US",
          },
          breadcrumbsJsonLd([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <SiteHeader />

      <header className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:pb-28">
        <div>
          <p className="text-sm font-semibold text-[#168f70]">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02]">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-[1.55] text-[#6f7c75] sm:text-xl">{intro}</p>
          <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0d2f26] px-6 py-3.5 text-sm font-semibold text-white">
            Download Heiwa
          </Link>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[2rem]">
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10231c]/25 to-transparent" />
        </div>
      </header>

      <section className="bg-white/65 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {benefits.map(([title, copy, Icon]) => (
            <article key={title} className="rounded-[1.75rem] border border-white bg-white/80 p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e1f4ec] text-[#168f70]"><Icon className="h-5 w-5" /></span>
              <h2 className="mt-5 text-2xl font-medium">{title}</h2>
              <p className="mt-3 leading-[1.55] text-[#6f7c75]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-[#10231c]/10 py-10 first:pt-0 last:border-0">
            <h2 className="text-3xl font-medium sm:text-4xl">{section.title}</h2>
            <div className="mt-5 space-y-5 text-[17px] leading-[1.75] text-[#56645e] sm:text-lg">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}

        <aside className="mt-10 rounded-[2rem] bg-[#dff6ed] p-7 sm:p-9">
          <div className="flex items-center gap-3 text-[#168f70]"><Waves className="h-5 w-5" /><span className="font-semibold">Explore Heiwa</span></div>
          <p className="mt-4 text-lg leading-[1.6] text-[#56645e]">Create a personal soundscape, save your favorite mix, and use a gentle timer whenever you want a quieter room.</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Rain and nature sounds", "White and brown noise", "Sleep and focus timer", "Personal saved mixes"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-[#168f70]" />{item}</li>
            ))}
          </ul>
        </aside>

        {related.length > 0 && (
          <nav aria-label="Related guides" className="mt-10 border-t border-[#10231c]/10 pt-10">
            <h2 className="text-2xl font-medium">Continue exploring</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl bg-white p-5 font-semibold transition hover:text-[#168f70]">
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}
