import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-07-07";
  const older = "2026-06-18";

  return [
    { url: `${SITE_URL}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blogs`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/sleep-sounds`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/soundscape-app`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/rain-sounds-for-sleep`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/offline-sleep-sounds-app`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/sleep-sounds-app-with-timer`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/brown-noise-and-rain-for-sleep`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blogs/best-sleep-sounds-for-falling-asleep-faster`, lastModified: updated, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/blogs/how-to-create-your-own-sleep-sound-mix`, lastModified: updated, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/blogs/white-noise-vs-brown-noise-vs-pink-noise`, lastModified: updated, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: older, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: older, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/contact`, lastModified: older, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/delete-account`, lastModified: older, changeFrequency: "yearly", priority: 0.2 },
  ];
}
