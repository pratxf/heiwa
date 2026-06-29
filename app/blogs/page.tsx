import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const posts = [
  {
    title: "Best sleep sounds for falling asleep faster",
    description: "Explore cozy rain, crackling fire, deep ocean, lo-fi, and other soothing sleep sounds for a calmer bedtime routine.",
    href: "/blogs/best-sleep-sounds-for-falling-asleep-faster",
    image: "/images/curated-forest.webp",
    alt: "Calm forest representing the best sleep sounds",
    category: "Featured guide",
  },
  {
    title: "How to create your own sleep sound mix",
    description: "Choose a base, layer natural texture, balance each volume, and save a personal sleep soundscape.",
    href: "/blogs/how-to-create-your-own-sleep-sound-mix",
    image: "/images/layer-control-landscape.webp",
    alt: "Controls for layering a personal sleep sound mix",
    category: "Sound mixing",
  },
  {
    title: "White noise vs brown noise vs pink noise",
    description: "Compare the character of three noise colors and find the texture that feels comfortable for sleep or focus.",
    href: "/blogs/white-noise-vs-brown-noise-vs-pink-noise",
    image: "/images/disappear-landscape.webp",
    alt: "Abstract soundscape representing white, pink, and brown noise",
    category: "Noise guide",
  },
  {
    title: "Sleep sounds made for your bedtime",
    description:
      "Build a calming mix with rain, fire, ocean, forest, wind, white noise, and brown noise for a softer bedtime routine.",
    href: "/sleep-sounds",
    image: "/images/curated-forest.webp",
    alt: "Forest path representing sleep sounds",
    category: "Sleep",
  },
  {
    title: "Create a personal soundscape app routine",
    description:
      "Learn how layered ambience, saved mixes, and a gentle timer can turn quiet listening into a daily ritual.",
    href: "/soundscape-app",
    image: "/images/layer-control-landscape.webp",
    alt: "A layered soundscape control scene",
    category: "Soundscape",
  },
  {
    title: "Rain sounds for sleep and quiet focus",
    description:
      "See how rain textures pair with forest air, ocean wash, and soft noise to create a room that feels calmer.",
    href: "/rain-sounds-for-sleep",
    image: "/images/timer-landscape.webp",
    alt: "Rain-inspired image for calm listening",
    category: "Rain Sounds",
  },
];

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read Heiwa articles about sleep sounds, personal soundscapes, quiet routines, and calming audio for focus and rest.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Heiwa Blogs",
    description: "Articles about sleep sounds, soundscape routines, rain audio, and calmer daily listening.",
    url: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="bg-[#f8f3e8] text-[#10231c]">
      <SiteHeader />

      <header className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
        <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
          Ideas for sleep, focus, and quieter routines.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-[#6f7c75] sm:text-xl">
          Explore short guides on sleep sounds, personal soundscapes, and calm listening habits that fit everyday life.
        </p>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            href={post.href}
            key={post.href}
            className="group block overflow-hidden rounded-[2rem] border border-[#10231c]/8 bg-white shadow-[0_18px_45px_rgba(16,35,28,.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(16,35,28,.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f70]"
          >
            <article>
              <div className="relative h-64 overflow-hidden">
                <Image src={post.image} alt={post.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#168f70]">{post.category}</p>
                <h2 className="mt-4 text-[30px] font-medium leading-[1.05]">{post.title}</h2>
                <p className="mt-4 text-[17px] leading-[1.65] text-[#6f7c75]">{post.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#10231c] transition group-hover:text-[#168f70]">
                Read article
                <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
