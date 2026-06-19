import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rain Sounds for Sleep, Focus, and Relaxation",
  description: "Create personal rain sound mixes for sleep and focus. Combine soft rain with wind, fire, forest, ocean, music, white noise, or brown noise in Heiwa.",
  alternates: { canonical: "/rain-sounds-for-sleep" },
  openGraph: {
    title: "Rain Sounds for Sleep with Heiwa",
    description: "Mix soft rain with fire, forest, wind, ocean, music, or calming noise.",
    url: "/rain-sounds-for-sleep",
  },
};

export default function RainSoundsPage() {
  return (
    <SeoLandingPage
      eyebrow="Rain sounds for sleep"
      title="Make rain sound exactly how you like it"
      intro="Start with gentle rain, then add a warm fireplace, forest ambience, distant wind, ocean waves, music, or calming noise to create a familiar sleep or focus mix."
      image="/screenshots/02-home.png"
      imageAlt="Heiwa app showing a forest rain soundscape"
      sections={[
        {
          title: "Why people use rain sounds",
          paragraphs: [
            "Rain has a steady, familiar texture that many people enjoy during sleep routines, reading, study, or quiet work. It can make an environment feel more consistent without demanding attention.",
            "Preferences vary. Some people like light room rain, while others prefer deeper forest rain or rain combined with wind and distant thunder.",
          ],
        },
        {
          title: "Mix rain with fire, forest, or noise",
          paragraphs: [
            "Heiwa lets you control rain separately from every other layer. Raise the rain, soften the fire, add a small amount of wind, or place brown noise underneath the entire mix.",
            "When a combination feels right, save it as a personal soundscape so it is ready for your next session.",
          ],
        },
        {
          title: "Use rain sounds with a timer",
          paragraphs: [
            "A timer makes it easier to use rain during a bedtime or focus routine without leaving it running longer than intended. Choose a duration and let the soundscape stop automatically.",
            "Heiwa does not claim to treat sleep conditions. It is designed as a calming ambient sound tool for personal routines.",
          ],
        },
      ]}
    />
  );
}
