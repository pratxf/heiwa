import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Offline Sleep Sounds App for iPhone",
  description: "Create and save personal sleep soundscapes with Heiwa, an offline sleep sounds app for iPhone with local audio, independent volume controls, and a timer.",
  alternates: { canonical: "/offline-sleep-sounds-app" },
  openGraph: { title: "Offline Sleep Sounds App for iPhone", description: "Mix relaxing sounds without buffering and keep favorite soundscapes ready for bedtime or travel.", url: "/offline-sleep-sounds-app" },
};

export default function OfflineSleepSoundsPage() {
  return <SeoLandingPage path="/offline-sleep-sounds-app" eyebrow="Offline sleep sounds app" title="Sleep sounds that stay with you offline" intro="Use Heiwa as an offline sleep sounds app for iPhone. Mix local rain, fire, ocean, forest, wind, and calming noise without relying on a continuous connection." image="/images/saved-botanical.webp" imageAlt="Heiwa saved soundscapes available for offline listening" sections={[
    { title: "Listen without buffering", paragraphs: ["Heiwa keeps its core sounds on your device, so a weak hotel connection or airplane mode does not have to interrupt a familiar bedtime atmosphere.", "Some account or subscription actions may still need internet access, but downloaded and local sounds remain ready when you want them."] },
    { title: "Build an offline relaxing sound mix", paragraphs: ["Layer rain under a quiet fireplace, combine ocean waves with wind, or place brown noise beneath a forest ambience. Each layer has its own volume control.", "Save the combinations you return to so your personal sleep soundscape is easy to start again."] },
    { title: "Useful at home and while travelling", paragraphs: ["Offline playback can be useful on flights, in hotels, or anywhere a connection is unreliable. A timer lets the soundscape stop without another trip to your phone.", "Heiwa is a wellness and relaxation tool, not a medical treatment for sleep conditions."] },
  ]} related={[{ title: "Sleep sounds app with a timer", href: "/sleep-sounds-app-with-timer" }, { title: "Create your own sleep sound mix", href: "/blogs/how-to-create-your-own-sleep-sound-mix" }]} />;
}
