import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/app-store";
import { breadcrumbsJsonLd, JsonLd, SITE_URL } from "@/lib/seo";

type Section = { id: string; title: string; paragraphs: string[]; image?: { src: string; alt: string } };

export default function BlogArticle({ slug, title, description, authors, published, modified, readingTime, image, imageAlt, sections, related }: { slug: string; title: string; description: string; authors: string[]; published: string; modified: string; readingTime: string; image: string; imageAlt: string; sections: Section[]; related: { title: string; href: string }[] }) {
  const path = `/blogs/${slug}`;
  return <main className="bg-[#f8f3e8] text-[#10231c]">
    <JsonLd data={[
      { "@type": "Article", "@id": `${SITE_URL}${path}/#article`, headline: title, description, image: `${SITE_URL}${image}`, datePublished: published, dateModified: modified, author: authors.map((name) => ({ "@type": "Person", name })), publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: { "@id": `${SITE_URL}${path}/#webpage` }, inLanguage: "en-US" },
      { "@type": "WebPage", "@id": `${SITE_URL}${path}/#webpage`, url: `${SITE_URL}${path}`, name: title, isPartOf: { "@id": `${SITE_URL}/#website` }, primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${image}` }, inLanguage: "en-US" },
      breadcrumbsJsonLd([{ name: "Home", path: "/" }, { name: "Blogs", path: "/blogs" }, { name: title, path }]),
    ]} />
    <article>
      <header className="mx-auto max-w-4xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
        <Link href="/blogs" className="text-sm font-semibold text-[#168f70]">Heiwa guides</Link>
        <h1 className="mt-5 text-[clamp(2.7rem,7vw,5rem)] leading-[1.02] tracking-[-0.045em]">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-[1.6] text-[#56645e]">{description}</p>
        <p className="mt-6 text-sm text-[#6f7c75]">By {authors.join(" and ")} · Published {published} · Updated {modified} · {readingTime}</p>
      </header>
      <div className="relative mx-auto h-[360px] max-w-6xl overflow-hidden rounded-[2rem] sm:h-[520px]">
        <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Table of contents" className="h-fit rounded-2xl bg-white p-5 lg:sticky lg:top-6">
          <p className="font-semibold">In this guide</p>
          <ol className="mt-4 space-y-3 text-sm text-[#56645e]">{sections.map((section) => <li key={section.id}><a className="hover:text-[#168f70]" href={`#${section.id}`}>{section.title}</a></li>)}</ol>
        </nav>
        <div className="min-w-0">
          {sections.map((section) => <section id={section.id} key={section.id} className="scroll-mt-8 border-b border-[#10231c]/10 py-9 first:pt-0 last:border-0">
            <h2 className="text-3xl leading-tight sm:text-4xl">{section.title}</h2>
            {section.image && (
              <figure className="relative mt-7 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-white">
                <Image src={section.image.src} alt={section.image.alt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
              </figure>
            )}
            <div className="mt-5 space-y-5 text-[18px] leading-[1.8] text-[#4f5f58]">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>)}
          <aside className="mt-10 rounded-[2rem] bg-[#dff6ed] p-7 sm:p-9">
            <h2 className="text-3xl">Build a soundscape that feels like yours</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#56645e]">Mix rain, fire, ocean, forest, music, and calming noise in Heiwa, then save the combination and add a gentle timer.</p>
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#10231c] px-6 py-3 text-sm font-semibold text-white">Get Heiwa on the App Store</Link>
          </aside>
          <nav aria-label="Related guides" className="mt-12"><h2 className="text-2xl">Related guides</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{related.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl bg-white p-5 font-semibold hover:text-[#168f70]">{item.title}</Link>)}</div></nav>
        </div>
      </div>
    </article>
  </main>;
}
