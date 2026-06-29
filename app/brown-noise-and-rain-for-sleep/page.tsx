import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Brown Noise and Rain Sounds for Sleep",
  description: "Mix brown noise and rain sounds for sleep in Heiwa. Balance a deep, steady noise layer with soft rain and save your personal soundscape.",
  alternates: { canonical: "/brown-noise-and-rain-for-sleep" },
  openGraph: { title: "Brown Noise and Rain Sounds for Sleep", description: "Create a layered brown-noise and rain soundscape with separate volume controls.", url: "/brown-noise-and-rain-for-sleep" },
};

export default function BrownNoiseRainPage() {
  return <SeoLandingPage path="/brown-noise-and-rain-for-sleep" eyebrow="Layered sleep sounds" title="Mix brown noise with rain for a softer room" intro="Pair the low, steady texture of brown noise with cozy rain sounds. Heiwa lets you balance each layer and save the combination that feels right to you." image="/images/curated-forest.webp" imageAlt="Rainy forest atmosphere representing brown noise and rain sounds" sections={[
    { title: "Why mix brown noise and rain?", paragraphs: ["Brown noise offers a deep, consistent base while rain adds natural variation. Together they can make a room feel less exposed to changing background sounds.", "Preferences vary: some people prefer the steady layer louder, while others keep it beneath a more noticeable rain texture."] },
    { title: "Balance every layer separately", paragraphs: ["Start with brown noise at a comfortable level, add soft rain, then adjust each volume independently. You can include a quiet fireplace, ocean wash, or forest ambience if the mix still feels spacious.", "Keep playback at a comfortable volume, especially when using headphones or listening for long periods."] },
    { title: "Save your brown-noise rain soundscape", paragraphs: ["Once the balance feels right, save it for another evening and set a timer if you do not want it playing continuously.", "Heiwa is intended for relaxation and general wellness. Persistent sleep difficulties should be discussed with a qualified health professional."] },
  ]} related={[{ title: "White noise vs brown noise vs pink noise", href: "/blogs/white-noise-vs-brown-noise-vs-pink-noise" }, { title: "Rain sleep sounds", href: "/rain-sounds-for-sleep" }]} />;
}
