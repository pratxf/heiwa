import LandingPage from "@/components/LandingPage";
import type { Metadata } from "next";
import { APP_STORE_URL } from "@/lib/app-store";

export const metadata: Metadata = {
  title: "Sleep Sounds App and Personal Soundscape Mixer",
  description: "Create custom sleep sounds with rain, fire, wind, forest, ocean, music, and calming noise. Save mixes, set a sleep timer, and listen offline with Heiwa.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Heiwa",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS",
    url: "https://heiwa.fun",
    downloadUrl: APP_STORE_URL,
    sameAs: [APP_STORE_URL],
    description: "A sleep sounds and soundscape mixer app for creating personal ambient sound mixes for sleep, focus, reading, and relaxation.",
    featureList: [
      "Mix multiple sounds",
      "Individual volume controls",
      "Mindful sleep timer",
      "Saved soundscapes",
      "Offline listening",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Free with optional subscription",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Heiwa?",
        acceptedAnswer: { "@type": "Answer", text: "Heiwa is a calming soundscape app that lets you mix rain, fire, wind, forest, ocean, and night ambience into a personal atmosphere." },
      },
      {
        "@type": "Question",
        name: "Can I mix multiple sounds together?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. You can layer sounds and adjust each volume individually." },
      },
      {
        "@type": "Question",
        name: "Is Heiwa good for sleep and focus?",
        acceptedAnswer: { "@type": "Answer", text: "Heiwa is designed for sleep routines, focus, reading, meditation, studying, and relaxation. It also includes a timer." },
      },
      {
        "@type": "Question",
        name: "Do I need an internet connection?",
        acceptedAnswer: { "@type": "Answer", text: "Heiwa is designed to work smoothly with local sounds. Some account or subscription features may require internet." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <LandingPage />
    </>
  );
}
