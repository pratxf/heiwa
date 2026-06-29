import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/blogs`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/sleep-sounds`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/soundscape-app`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/rain-sounds-for-sleep`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/offline-sleep-sounds-app`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/sleep-sounds-app-with-timer`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/brown-noise-and-rain-for-sleep`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/blogs/best-sleep-sounds-for-falling-asleep-faster`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/blogs/how-to-create-your-own-sleep-sound-mix`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/blogs/white-noise-vs-brown-noise-vs-pink-noise`, lastModified: "2026-06-30" },
    { url: `${SITE_URL}/privacy-policy`, lastModified: "2026-06-18" },
    { url: `${SITE_URL}/terms`, lastModified: "2026-06-18" },
    { url: `${SITE_URL}/contact`, lastModified: "2026-06-18" },
    { url: `${SITE_URL}/delete-account`, lastModified: "2026-06-18" },
  ];
}
