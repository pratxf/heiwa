import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Sleep Sound Mixer App for Personal Bedtime Soundscapes",
  description: "Use Heiwa as a customizable sleep sound mixer app. Layer soothing sleep sounds, save personal mixes, listen offline, and set a gentle timer.",
  alternates: { canonical: "/sleep-sounds" },
  openGraph: {
    title: "Heiwa Sleep Sounds App",
    description: "Create personal bedtime soundscapes with rain, fire, ocean, forest, wind, and calming noise.",
    url: "/sleep-sounds",
  },
};

export default function SleepSoundsPage() {
  return (
    <SeoLandingPage
      path="/sleep-sounds"
      eyebrow="Sleep sound mixer app"
      title="Mix soothing sleep sounds for your bedtime"
      intro="Build a calming mix that fits your room and routine. Layer rain, fire, wind, forest, ocean, music, white noise, or brown noise, then set a timer and let the night unfold."
      image="/images/curated-forest.webp"
      imageAlt="A quiet sunlit forest representing calming sleep sounds"
      sections={[
        {
          title: "Create sleep sounds that feel personal",
          paragraphs: [
            "Fixed tracks can be helpful, but every bedroom and sleep routine is different. Heiwa lets you choose the sounds that feel comfortable and control each layer separately.",
            "You might combine soft rain with a low fireplace, use ocean waves with gentle wind, or add brown noise beneath a forest ambience. The mix is yours to adjust.",
          ],
        },
        {
          title: "Use a sleep timer without interrupting the mood",
          paragraphs: [
            "Choose a timer for your bedtime routine and let Heiwa stop the soundscape automatically. A timer can keep the experience simple when you do not want to reach for your phone again.",
            "Saved mixes make it easy to return to the same familiar atmosphere each night.",
          ],
        },
        {
          title: "Sleep sounds, white noise, and brown noise",
          paragraphs: [
            "Nature sounds can soften sudden background noise, while steady white or brown noise offers a more consistent texture. Heiwa gives you both options in one personal sound mixer.",
            "Heiwa is a wellness and relaxation tool, not a medical treatment. Speak with a qualified professional if sleep problems continue or affect your health.",
          ],
        },
      ]}
      related={[
        { title: "Best sleep sounds for falling asleep faster", href: "/blogs/best-sleep-sounds-for-falling-asleep-faster" },
        { title: "Sleep sounds app with a timer", href: "/sleep-sounds-app-with-timer" },
        { title: "Brown noise and rain sounds", href: "/brown-noise-and-rain-for-sleep" },
      ]}
    />
  );
}
