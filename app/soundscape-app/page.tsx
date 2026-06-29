import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Soundscape App and Ambient Sound Mixer for iPhone",
  description: "Create custom ambient soundscapes for sleep, focus, reading, studying, and relaxation with rain, fire, ocean, forest, music, and calming noise.",
  alternates: { canonical: "/soundscape-app" },
  openGraph: {
    title: "Heiwa Soundscape App",
    description: "Mix ambient nature sounds and calming noise into a personal space for focus, sleep, and relaxation.",
    url: "/soundscape-app",
  },
};

export default function SoundscapeAppPage() {
  return (
    <SeoLandingPage
      path="/soundscape-app"
      eyebrow="Personal soundscape app"
      title="Shape the atmosphere around you"
      intro="Heiwa is an ambient sound mixer for building personal spaces with rain, fire, wind, ocean, forest, music, white noise, and more."
      image="/images/layer-control-landscape.webp"
      imageAlt="A watercolor lake and forest representing an ambient soundscape"
      sections={[
        {
          title: "What is a soundscape app?",
          paragraphs: [
            "A soundscape app helps you create an atmosphere from layered ambient sounds. Instead of listening to one fixed recording, you can combine textures that suit the moment.",
            "Heiwa gives each sound its own volume control, so rain can sit in front while fire, birds, music, or noise remains subtle in the background.",
          ],
        },
        {
          title: "Soundscapes for focus, reading, and study",
          paragraphs: [
            "A consistent ambient background can make a room feel less distracting. Many people prefer soft nature sounds, room ambience, instrumental textures, or steady noise while working and reading.",
            "Save different mixes for deep work, casual reading, study sessions, or a quiet break. The timer can give each session a clear ending.",
          ],
        },
        {
          title: "A simple sound mixer without clutter",
          paragraphs: [
            "Heiwa keeps the main controls close: choose sounds, adjust volume, set a timer, and save the result. The interface is designed to recede once your atmosphere feels right.",
            "Downloaded sounds can support calm routines even when a stable connection is unavailable, subject to the features included in your version of Heiwa.",
          ],
        },
      ]}
      related={[
        { title: "How to create your own sleep sound mix", href: "/blogs/how-to-create-your-own-sleep-sound-mix" },
        { title: "Offline sleep sounds app", href: "/offline-sleep-sounds-app" },
        { title: "Sleep sound mixer app", href: "/sleep-sounds" },
      ]}
    />
  );
}
