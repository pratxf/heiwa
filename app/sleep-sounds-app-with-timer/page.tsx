import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Sleep Sounds App With a Gentle Timer",
  description: "Mix rain, fire, ocean, forest, and calming noise in a sleep sounds app with a customizable timer and gentle fade-out.",
  alternates: { canonical: "/sleep-sounds-app-with-timer" },
  openGraph: { title: "Sleep Sounds App With a Gentle Timer", description: "Create a bedtime soundscape and let a gentle timer stop it automatically.", url: "/sleep-sounds-app-with-timer" },
};

export default function SleepTimerPage() {
  return <SeoLandingPage path="/sleep-sounds-app-with-timer" eyebrow="Sleep sounds app with timer" title="Set the sound, set the timer, let the night continue" intro="Create a personal bedtime mix and choose how long it plays. Heiwa combines layered sleep sounds with a customizable timer and gentle fade-out." image="/images/timer-landscape.webp" imageAlt="Heiwa sleep sounds app timer controls" sections={[
    { title: "A bedtime sound timer that stays simple", paragraphs: ["Choose a session length before you settle in. The timer ends the soundscape automatically, so you do not need to wake up and reach for your phone.", "A gentle ending keeps the routine quieter than abruptly stopping every sound at once."] },
    { title: "Mix first, then choose your time", paragraphs: ["Build a soundscape from rain, fire, wind, ocean, forest, music, white noise, or brown noise. Adjust every layer before starting the timer.", "Save favorite mixes for a consistent routine while keeping the duration flexible from one evening to the next."] },
    { title: "For bedtime, reading, and quiet focus", paragraphs: ["A customizable sleep timer can also define a reading break or focus session. The same controls work whether you want a short reset or a longer wind-down.", "Heiwa supports relaxation routines and does not diagnose or treat sleep problems."] },
  ]} related={[{ title: "Offline sleep sounds app", href: "/offline-sleep-sounds-app" }, { title: "Rain sleep sounds", href: "/rain-sounds-for-sleep" }]} />;
}
