"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AlarmClock,
  AirVent,
  AudioLines,
  BellRing,
  Bird,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Cloud,
  CloudDownload,
  Coffee,
  Crosshair,
  Droplets,
  Flame,
  Heart,
  Menu,
  Moon,
  Music2,
  Pause as LucidePause,
  Piano,
  Play as LucidePlay,
  SlidersHorizontal,
  Sparkles,
  Star as LucideStar,
  Timer,
  TreePine,
  Trees,
  Waves,
  X,
} from "lucide-react";
import { Arrow, Check, Pause, Play, Plus, Star } from "./Icons";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { APP_STORE_URL } from "@/lib/app-store";

type MotionProps = Record<string, unknown> & {
  children?: React.ReactNode;
  className?: string;
};

function motionTag(Tag: "a" | "article" | "div") {
  return function MotionTag({
    initial,
    animate,
    whileHover,
    whileTap,
    transition,
    variants,
    ...props
  }: MotionProps) {
    return <Tag {...props} />;
  };
}

const motion = {
  a: motionTag("a"),
  article: motionTag("article"),
  div: motionTag("div"),
};

function AppleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16.64 12.56c-.03-2.73 2.23-4.05 2.34-4.11a5.03 5.03 0 0 0-3.95-2.14c-1.67-.17-3.27 1-4.12 1-.88 0-2.19-.98-3.61-.95A5.24 5.24 0 0 0 2.9 9.05c-1.91 3.32-.49 8.2 1.35 10.89.92 1.31 1.99 2.78 3.42 2.73 1.39-.06 1.92-.88 3.6-.88 1.66 0 2.16.88 3.61.85 1.5-.03 2.44-1.32 3.33-2.64a10.87 10.87 0 0 0 1.52-3.1 4.75 4.75 0 0 1-3.09-4.34Zm-2.7-8.01A4.82 4.82 0 0 0 15.04 1a4.91 4.91 0 0 0-3.18 1.65 4.62 4.62 0 0 0-1.13 3.35 4.07 4.07 0 0 0 3.21-1.45Z"
      />
    </svg>
  );
}

function MaterialIcon({ name, className = "" }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
    air: AirVent,
    alarm: AlarmClock,
    bookmark: Bookmark,
    chevron_right: ChevronRight,
    cloud: Cloud,
    cloud_download: CloudDownload,
    close: X,
    cottage: TreePine,
    dark_mode: Moon,
    equalizer: AudioLines,
    favorite: Heart,
    filter_center_focus: Crosshair,
    flutter_dash: Bird,
    forest: Trees,
    graphic_eq: AudioLines,
    local_cafe: Coffee,
    local_fire_department: Flame,
    menu: Menu,
    multiline_chart: AudioLines,
    music_note: Music2,
    notifications_active: BellRing,
    offline_pin: CheckCircle2,
    pause: LucidePause,
    piano: Piano,
    play_arrow: LucidePlay,
    rainy: Cloud,
    scuba_diving: Droplets,
    spa: Sparkles,
    star: LucideStar,
    timer: Timer,
    track_changes: Crosshair,
    tune: SlidersHorizontal,
    water: Droplets,
    water_drop: Droplets,
    waves: Waves,
  };
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.8} aria-hidden="true" />;
}

const layers = [
  { name: "Forest rain", icon: "♒", color: "from-[#0d695e] to-[#47d9ac]" },
  { name: "Warm fire", icon: "♨", color: "from-[#7c3422] to-[#ff9854]" },
  { name: "Night wind", icon: "≋", color: "from-[#123b5e] to-[#63cfe5]" },
];

const soundCards = [
  { name: "Forest Rain", detail: "Deep leaves + soft rain", icon: "♒", color: "from-[#0a554d] via-[#208c78] to-[#83e6bd]" },
  { name: "Cozy Fire", detail: "Warm crackle + night", icon: "♨", color: "from-[#74321f] via-[#d85e35] to-[#ffb45f]" },
  { name: "Baltic Shore", detail: "Waves + cool shore air", icon: "≈", color: "from-[#12375d] via-[#216f91] to-[#73d1c3]" },
  { name: "Blue Piano", detail: "Soft keys + room tone", icon: "♬", color: "from-[#45368b] via-[#745ed4] to-[#efb5b4]" },
  { name: "Deep Sleep", detail: "Night forest + brown noise", icon: "☾", color: "from-[#16313d] via-[#2b6871] to-[#93d3bd]" },
  { name: "Morning Birds", detail: "Birdsong + light breeze", icon: "⌁", color: "from-[#366c42] via-[#76ad59] to-[#e8d66f]" },
];

const soundBoard = [
  { name: "Forest Rain", icon: "rainy", tone: "from-[#0e664f] to-[#38c894]" },
  { name: "Campfire", icon: "local_fire_department", tone: "from-[#a64120] to-[#ff9148]" },
  { name: "Ocean", icon: "waves", tone: "from-[#16658b] to-[#52bada]" },
  { name: "Night", icon: "dark_mode", tone: "from-[#283d75] to-[#7587c9]" },
  { name: "Birds", icon: "flutter_dash", tone: "from-[#697b32] to-[#bfcc6b]" },
  { name: "Coffee Shop", icon: "local_cafe", tone: "from-[#8d5734] to-[#dc9b62]" },
  { name: "Night Wind", icon: "air", tone: "from-[#22658a] to-[#79c9d8]" },
  { name: "Brown Noise", icon: "graphic_eq", tone: "from-[#775544] to-[#c59a72]" },
  { name: "Rain on Roof", icon: "cottage", tone: "from-[#356b65] to-[#8fbbb0]" },
  { name: "White Noise", icon: "equalizer", tone: "from-[#59616d] to-[#aeb6bd]" },
  { name: "Deep Ocean", icon: "scuba_diving", tone: "from-[#123c5a] to-[#367da0]" },
  { name: "Soft Piano", icon: "piano", tone: "from-[#554294] to-[#9c89db]" },
  { name: "Forest", icon: "forest", tone: "from-[#22563c] to-[#6ea675]" },
  { name: "Singing Bowl", icon: "notifications_active", tone: "from-[#9a702f] to-[#dfb96a]" },
  { name: "Underwater", icon: "water", tone: "from-[#176a7a] to-[#68bec1]" },
  { name: "Pink Noise", icon: "multiline_chart", tone: "from-[#8c5a6a] to-[#d6a0ad]" },
];

const reviews = [
  {
    quote: "Heiwa feels beautifully simple. I love mixing rain and fire before bed. It helps me wind down without needing a complicated meditation app.",
    name: "Amelia R.",
    role: "Heiwa listener",
    color: "bg-[#dff7ee]",
  },
  {
    quote: "The sound mixer is the best part. I can make my own little calm space instead of choosing from fixed tracks.",
    name: "Daniel K.",
    role: "Heiwa listener",
    color: "bg-[#f3e5ff]",
  },
  {
    quote: "Clean design, soft sounds, and no clutter. It’s exactly what I wanted for reading and relaxing at night.",
    name: "Sofia M.",
    role: "Heiwa listener",
    color: "bg-[#ffe8d9]",
  },
  {
    quote: "I use Heiwa while working. Ocean waves with a little wind in the background keeps me focused without feeling distracted.",
    name: "Ethan L.",
    role: "Heiwa listener",
    color: "bg-[#dfeaf8]",
  },
  {
    quote: "The sleep timer is perfect. I start a rain mix, set the timer, and don’t have to think about stopping it later.",
    name: "Maya S.",
    role: "Heiwa listener",
    color: "bg-[#e9e3fa]",
  },
  {
    quote: "The app feels very premium. The little cloud mascot is cute, and the whole experience feels calm from the first screen.",
    name: "Noah T.",
    role: "Heiwa listener",
    color: "bg-[#e2f4e9]",
  },
  {
    quote: "I like that I can save my favorite mixes. My forest rain mix is now part of my evening routine.",
    name: "Aria P.",
    role: "Heiwa listener",
    color: "bg-[#fff0dc]",
  },
  {
    quote: "Simple, peaceful, and useful. Heiwa makes background sounds feel personal instead of generic.",
    name: "Liam W.",
    role: "Heiwa listener",
    color: "bg-[#deeff3]",
  },
  {
    quote: "The ability to control each sound layer separately is amazing. I can make rain louder, fire softer, and get the exact mood I want.",
    name: "Chloe N.",
    role: "Heiwa listener",
    color: "bg-[#f3e3ee]",
  },
  {
    quote: "This is one of those apps that quietly becomes part of your day. I use it for focus, reading, and sleep.",
    name: "Oliver J.",
    role: "Heiwa listener",
    color: "bg-[#e6f1df]",
  },
];

const faqs = [
  ["What is Heiwa?", "Heiwa is a calming soundscape app that lets you mix sounds like rain, fire, wind, forest, ocean, and night ambience to create your own relaxing atmosphere."],
  ["Can I mix multiple sounds together?", "Yes. You can layer sounds together and adjust each volume individually, so your soundscape feels exactly how you want."],
  ["Is Heiwa good for sleep and focus?", "Yes. Heiwa is designed for sleep, focus, reading, meditation, studying, and relaxing. You can also use the timer to let sounds stop automatically."],
  ["What does Heiwa Plus include?", "Heiwa Plus unlocks unlimited sound mixing, unlimited saved mixes, premium sounds, a custom timer, gentle fading, offline listening, and premium themes."],
  ["Do I need an internet connection?", "No. Heiwa is designed to work smoothly with local sounds, so you can relax without buffering or interruptions. Some account or Plus features may require internet."],
];

function Logo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 font-bold tracking-[-0.04em] ${light ? "text-white" : "text-ink"}`}>
      <span className={`relative overflow-hidden rounded-xl ${large ? "h-12 w-12" : "h-10 w-10"}`}>
        <Image src="/screenshots/app-icon.png" alt="" fill sizes={large ? "48px" : "40px"} className="object-cover" />
      </span>
      <span className={large ? "text-[30px]" : "text-xl"}>heiwa</span>
    </a>
  );
}

function Button({ children, dark = true, href = "#download" }: { children: React.ReactNode; dark?: boolean; href?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${
        dark ? "bg-ink text-white shadow-lg shadow-black/10 hover:bg-[#1c3027]" : "bg-white text-ink"
      }`}
    >
      {children}
      <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function AppStoreButton() {
  return (
    <motion.a
      href="#download"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className="inline-flex items-center gap-2.5 rounded-xl border border-black/5 bg-white px-4 py-2.5 text-left text-black shadow-[0_10px_26px_rgba(13,47,38,.12)]"
      aria-label="Download Heiwa on the App Store"
    >
      <svg className="h-7 w-7 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.05 12.54c-.03-3.18 2.6-4.71 2.72-4.78a5.84 5.84 0 0 0-4.6-2.49c-1.94-.2-3.82 1.16-4.81 1.16-1.02 0-2.55-1.14-4.21-1.11a6.1 6.1 0 0 0-5.13 3.13c-2.23 3.86-.57 9.54 1.57 12.66 1.07 1.53 2.32 3.23 3.98 3.17 1.62-.07 2.23-1.02 4.19-1.02 1.94 0 2.51 1.02 4.2.98 1.74-.03 2.84-1.54 3.87-3.08a12.64 12.64 0 0 0 1.77-3.6 5.53 5.53 0 0 1-3.55-5.02ZM13.9 3.22A5.62 5.62 0 0 0 15.18-.82a5.72 5.72 0 0 0-3.7 1.92 5.37 5.37 0 0 0-1.31 3.9 4.73 4.73 0 0 0 3.73-1.78Z" transform="translate(1.1 1.2) scale(.91)" />
      </svg>
      <span className="leading-none">
        <span className="block text-[8px] font-medium tracking-[.01em] text-black/65">Download on the</span>
        <span className="mt-0.5 block text-[17px] font-semibold tracking-[-.02em]">App Store</span>
      </span>
    </motion.a>
  );
}

function HeroMixer() {
  const [active, setActive] = useState([true, true, false]);
  const [playing, setPlaying] = useState(false);
  const [volumes, setVolumes] = useState([72, 58, 45]);
  const [seconds, setSeconds] = useState(30 * 60);

  useEffect(() => {
    if (!playing || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearInterval(timer);
  }, [playing, seconds]);

  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      <div className="absolute -inset-8 rounded-full bg-mint/20 blur-3xl" />
      {playing && <div className="pulse-ring absolute inset-[12%] rounded-full border-2 border-mint/30" />}
      <div className="float relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/85 p-3 shadow-soft backdrop-blur-xl sm:p-4">
        <div className="rounded-[1.7rem] bg-ink p-5 text-white sm:p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">Now playing</p>
              <h3 className="text-2xl font-extrabold">Forest reset</h3>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">{minutes}:{secs}</div>
          </div>
          <div className="mt-6 space-y-3">
            {layers.map((layer, index) => (
              <div
                key={layer.name}
                className={`rounded-2xl border p-3 transition ${
                  active[index] ? "border-white/10 bg-white/10 opacity-100" : "border-white/5 bg-white/[0.03] opacity-45"
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActive((old) => old.map((item, i) => (i === index ? !item : item)))}
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-lg font-bold ${layer.color}`}
                    aria-label={`Toggle ${layer.name}`}
                  >
                    {active[index] ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex justify-between text-sm font-bold">
                      <span>{layer.name}</span>
                      <span className="text-white/80">{volumes[index]}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volumes[index]}
                      onChange={(event) =>
                        setVolumes((old) => old.map((value, i) => (i === index ? Number(event.target.value) : value)))
                      }
                      className="h-1.5 w-full cursor-pointer accent-[#1dca9a]"
                      aria-label={`${layer.name} volume`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => setPlaying(!playing)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-mint px-5 py-4 text-sm font-extrabold text-ink transition hover:bg-[#3bd8ac]"
            >
              {playing ? <Pause /> : <Play />}
              {playing ? "Pause space" : "Play space"}
            </button>
            <button
              onClick={() => setSeconds(seconds === 1800 ? 3600 : 1800)}
              className="rounded-full bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/15"
            >
              {seconds > 1800 ? "60m" : "30m"}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -right-7 top-24 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 text-xs font-bold shadow-xl backdrop-blur md:block">
        <span className="mr-2 text-mint">●</span>{active.filter(Boolean).length} sounds layered
      </div>
    </div>
  );
}

function LegacyFeaturesSection() {
  const mixerRows = [
    { name: "Forest rain", value: 72, glyph: "rainy", bar: "#16765e", bg: "from-[#105d50] to-[#34a87f]" },
    { name: "Warm fire", value: 58, glyph: "local_fire_department", bar: "#ed642b", bg: "from-[#e7471d] to-[#ff843f]" },
    { name: "Night wind", value: 45, glyph: "air", bar: "#2479a8", bg: "from-[#176a9a] to-[#4aa0ca]" },
  ];

  const smallFeatures = [
    { icon: "alarm", title: "A timer that lets go", copy: "Ease into focus or sleep. Your sounds gently fade when time is up.", image: "/images/timer-landscape.webp" },
    { icon: "dark_mode", title: "Made to disappear", copy: "Simple controls, no clutter. Find your space and return to what matters.", image: "/images/disappear-landscape.webp" },
    { icon: "favorite", title: "Save the places you love", copy: "Your favorite combinations stay close, ready whenever the day gets loud.", image: "/images/saved-botanical.webp" },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-[#fcfaf5] px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute -left-20 top-[28rem] h-52 w-52 rounded-full bg-[#dcebdd]/65 blur-3xl" />
      <div className="absolute -right-20 top-32 h-80 w-80 rounded-full border border-[#dfe9e1]" />
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative z-10 lg:pl-3">
            <div className="mb-10 flex items-center gap-3 text-[#0d654f]">
              <MaterialIcon name="spa" className="text-2xl" />
              <span className="text-xl font-bold">Heiwa</span>
            </div>
            <h2 className="max-w-md text-6xl font-medium leading-[.98] text-[#063d32] sm:text-7xl">
              Made for<br />your mind
            </h2>
            <p className="mt-8 text-xl font-semibold text-[#287861]">Less noise. More of what you need.</p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#53636b]">
              Heiwa adapts to the moment, whether you’re settling into deep work, a book, or bed.
            </p>
          </div>

          <article className="rounded-[2rem] border border-[#edf0ea] bg-white/80 p-5 shadow-[0_20px_70px_rgba(30,77,59,.08)] backdrop-blur sm:p-8">
            <div className="flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#edf4ed] text-3xl text-[#0a624e]"><MaterialIcon name="tune" /></span>
              <div>
                <h3 className="text-2xl font-semibold text-[#063d32]">Mix your own atmosphere</h3>
                <p className="mt-1 text-base leading-relaxed text-[#53636b]">Build a soundscape with independent layers.<br className="hidden sm:block" /> Make rain warmer, waves quieter, or add just enough piano.</p>
              </div>
            </div>
            <div className="mt-7 space-y-3">
              {mixerRows.map((item) => (
                <div key={item.name} className="grid grid-cols-[3.5rem_8rem_1fr_3.5rem_1.5rem] items-center gap-4 rounded-2xl border border-[#e6e9e4] bg-white/75 px-4 py-3 shadow-sm max-sm:grid-cols-[3rem_1fr_3rem]">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-xl text-white ${item.bg}`}><MaterialIcon name={item.glyph} /></span>
                  <span className="font-semibold text-[#123b32]">{item.name}</span>
                  <div className="relative h-1.5 rounded-full bg-[#dfe3df] max-sm:col-span-3">
                    <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.bar }} />
                    <span className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full shadow-md" style={{ left: `calc(${item.value}% - 10px)`, backgroundColor: item.bar }} />
                  </div>
                  <span className="text-lg font-semibold" style={{ color: item.bar }}>{item.value}%</span>
                  <span className="text-lg tracking-widest text-[#657078]">•••</span>
                </div>
              ))}
              <div className="grid grid-cols-[3.5rem_8rem_1fr] items-center gap-4 rounded-2xl border border-[#dfe8e1] bg-[#f6faf6] px-4 py-3 max-sm:grid-cols-[3rem_1fr]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e8f1e9] text-2xl text-[#075847]"><MaterialIcon name="dark_mode" /></span>
                <span className="font-semibold text-[#123b32]">30 min</span>
                <div className="relative h-px border-t-2 border-dashed border-[#a9ceba] max-sm:col-span-2">
                  <span className="absolute right-[18%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#237a61] shadow-md" />
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {smallFeatures.map((feature) => (
            <article key={feature.title} className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#edf0ea] bg-white/80 px-8 py-7 text-center shadow-[0_15px_45px_rgba(30,77,59,.06)]">
              <Image src={feature.image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-x-0 top-0 h-[72%] bg-gradient-to-b from-white/70 via-white/25 to-transparent" />
              <div className="relative z-10">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#edf4ed]/95 text-3xl text-[#075847] backdrop-blur"><MaterialIcon name={feature.icon} /></span>
                <h3 className="mx-auto mt-4 max-w-[240px] text-xl font-semibold leading-tight text-[#063d32]">{feature.title}</h3>
                <p className="mx-auto mt-3 max-w-[250px] leading-relaxed text-[#53636b]">{feature.copy}</p>
              </div>
            </article>
          ))}

          <article className="rounded-[2rem] border border-[#edf0ea] bg-white/80 p-7 shadow-[0_15px_45px_rgba(30,77,59,.06)]">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#edf4ed] text-3xl text-[#075847]"><MaterialIcon name="rainy" /></span>
            <div className="mt-5 space-y-3">
              {[
                ["Rainy reading", "from-[#745844] to-[#c9ab7e]"],
                ["Forest reset", "from-[#174c39] to-[#66a36c]"],
                ["Deep sleep drift", "from-[#102d49] to-[#397693]"],
              ].map(([mix, color]) => (
                <div key={mix} className="flex items-center gap-3 rounded-full border border-[#e1e7e1] bg-[#f7f9f5] p-2">
                  <span className={`h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br ${color}`} />
                  <span className="flex-1 text-sm font-semibold text-[#123b32]">{mix}</span>
                  <MaterialIcon name="chevron_right" className="mr-1 text-xl text-[#24745e]" />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function LegacySoundsSection() {
  const [selected, setSelected] = useState<string[]>(["Forest Rain", "Night Wind"]);

  return (
    <section id="sounds" className="relative overflow-hidden bg-[#f7f3ea] px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute left-1/2 top-[-22rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-[#cfeade]/60 blur-[110px]" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#e4eee4] blur-3xl" />
      <div className="mx-auto max-w-[1400px]">
        <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-[#168f70]">Sound library</p>
            <h2 className="text-5xl font-medium leading-[.98] text-[#10251e] sm:text-6xl">Sounds for every state.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg leading-relaxed text-[#53636b]">Tap the glowing sounds to build a mix. Layer nature, spaces, noise, and gentle instruments.</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#315b4e]">
              <span className="h-3 w-3 rounded-full border-2 border-white bg-mint shadow-[0_0_14px_#1dca9a]" />
              {selected.length} sound{selected.length === 1 ? "" : "s"} selected
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-4 lg:grid-cols-8">
          {soundBoard.map((sound) => {
            const active = selected.includes(sound.name);
            return (
              <button
                key={sound.name}
                onClick={() =>
                  setSelected((current) =>
                    current.includes(sound.name)
                      ? current.filter((name) => name !== sound.name)
                      : [...current, sound.name]
                  )
                }
                className="group relative flex min-h-36 flex-col items-center text-center"
                aria-pressed={active}
              >
                <span className="absolute left-1/2 top-[4.7rem] h-16 w-px bg-gradient-to-b from-[#547669]/20 to-transparent" />
                <span className={`relative grid h-[5.4rem] w-[5.4rem] place-items-center rounded-[1.6rem] bg-gradient-to-br text-4xl text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${sound.tone} ${
                  active ? "ring-2 ring-mint ring-offset-4 ring-offset-[#f7f3ea] shadow-[0_0_32px_rgba(29,202,154,.32)]" : "saturate-[.72] opacity-75"
                }`}>
                  <MaterialIcon name={active ? "pause" : sound.icon} />
                </span>
                <span className={`mt-4 text-sm font-medium transition sm:text-base ${active ? "text-[#10251e]" : "text-[#53636b]"}`}>{sound.name}</span>
                {active && <span className="mt-1 text-[10px] uppercase tracking-[.18em] text-[#168f70]">playing</span>}
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-5">
          <div className="flex min-h-8 flex-wrap justify-center gap-2">
            {selected.map((sound) => (
              <span key={sound} className="rounded-full border border-[#dce7df] bg-white/70 px-4 py-2 text-xs text-[#47665b]">{sound}</span>
            ))}
          </div>
          <Button>Explore all sounds</Button>
        </div>
      </div>
    </section>
  );
}

function LegacyBentoFeaturesSection() {
  return (
    <section id="features" className="bg-[#f2f3f0] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-semibold text-ink/70 shadow-sm">Features</span>
          <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-6xl">Everything you need to tune the room.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">Thoughtful controls when you want them. Nothing in the way when you don’t.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          <article className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#bce9d8] p-8 lg:col-span-7">
            <div className="relative z-10 max-w-sm">
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-white/70 text-[#0e6b53]"><MaterialIcon name="tune" /></span>
              <h3 className="text-3xl font-medium">Build a soundscape that feels like yours.</h3>
              <p className="mt-3 leading-relaxed text-ink/70">Layer rain, fire, music, and noise. Adjust each sound independently until the room settles.</p>
            </div>
            <div className="absolute bottom-7 right-7 grid w-[48%] grid-cols-2 gap-3 max-md:right-[-2rem] max-md:w-[60%]">
              {[
                ["Cave droplet", "water_drop", "from-[#18745e] to-[#61d5b3]"],
                ["Baltic shore", "waves", "from-[#174b78] to-[#60b8c0]"],
                ["Blue piano", "piano", "from-[#5544a5] to-[#ba9ee0]"],
                ["Cozy rain", "rainy", "from-[#2581a2] to-[#9bc9be]"],
              ].map(([name, icon, color]) => (
                <div key={name} className={`relative aspect-square overflow-hidden rounded-[1.6rem] bg-gradient-to-br p-4 text-white shadow-lg ${color}`}>
                  <p className="max-w-[8rem] text-sm font-semibold leading-tight">{name}</p>
                  <MaterialIcon name={icon} className="absolute bottom-3 right-3 text-4xl text-white/85" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 left-8 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3 text-sm font-semibold"><MaterialIcon name="rainy" className="text-[#0e8062]" /> Forest rain <span className="text-ink/65">72%</span></div>
              <div className="mt-3 h-1.5 w-44 overflow-hidden rounded-full bg-black/10"><span className="block h-full w-[72%] rounded-full bg-[#18ad82]" /></div>
            </div>
          </article>

          <article className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#ffd77a] p-8 lg:col-span-5">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/65 text-[#5a4610]"><MaterialIcon name="timer" /></span>
            <h3 className="mt-5 max-w-xs text-3xl font-medium">Set the time. Let everything else go.</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-ink/70">Choose a session length and Heiwa gently fades away when time is up.</p>
            <div className="absolute inset-x-8 bottom-8 rounded-[2rem] bg-[#fffaf0] p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.14em] text-ink/65">Mindful timer</p>
                  <p className="mt-2 text-5xl font-medium tracking-[-.05em]">29:59</p>
                </div>
                <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-2xl text-white"><MaterialIcon name="pause" /></span>
              </div>
              <div className="mt-8 flex gap-2">
                {["15m", "30m", "45m", "1h"].map((time) => <span key={time} className={`flex-1 rounded-full py-2 text-center text-xs font-semibold ${time === "30m" ? "bg-mint text-ink" : "bg-[#edf1eb] text-ink/70"}`}>{time}</span>)}
              </div>
            </div>
          </article>

          <article className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#bab4ef] p-8 lg:col-span-4">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/60 text-[#3f377c]"><MaterialIcon name="bookmark" /></span>
            <h3 className="mt-5 text-2xl font-medium">Keep your favorite spaces close.</h3>
            <p className="mt-3 leading-relaxed text-ink/70">Save the combinations you return to, ready in one tap.</p>
            <div className="absolute bottom-7 left-7 right-7 space-y-2">
              {[
                ["Rainy reading", "rainy", "from-[#2782a3] to-[#bcd3c3]"],
                ["Forest reset", "forest", "from-[#14634c] to-[#73d3ac]"],
                ["Deep sleep", "dark_mode", "from-[#254157] to-[#88cdbc]"],
              ].map(([name, icon, color]) => (
                <div key={name} className="flex items-center gap-3 rounded-2xl bg-white/85 p-3 shadow-sm backdrop-blur">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white ${color}`}><MaterialIcon name={icon} /></span>
                  <span className="flex-1 text-sm font-semibold">{name}</span>
                  <MaterialIcon name="chevron_right" className="text-ink/65" />
                </div>
              ))}
            </div>
          </article>

          <article className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#ffad86] p-8 lg:col-span-5">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/60 text-[#843819]"><MaterialIcon name="graphic_eq" /></span>
            <h3 className="mt-5 max-w-sm text-2xl font-medium">Fine-tune without breaking the mood.</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-ink/70">A compact player keeps volume, layers, and time within reach.</p>
            <div className="absolute bottom-7 left-7 right-7 rounded-[1.7rem] bg-[#112019] p-5 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div><p className="text-xs text-white/75">NOW PLAYING</p><p className="mt-1 font-semibold">Forest reset</p></div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-ink"><MaterialIcon name="pause" /></span>
              </div>
              <div className="mt-5 flex h-8 items-center gap-1">
                {[5, 12, 20, 15, 27, 18, 24, 10, 17, 7, 14, 22, 11, 5].map((height, index) => <span key={index} style={{ height }} className="flex-1 rounded-full bg-white/35" />)}
              </div>
            </div>
          </article>

          <article className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#c8dfef] p-8 lg:col-span-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/65 text-[#285b79]"><MaterialIcon name="cloud_download" /></span>
            <h3 className="mt-5 text-2xl font-medium">Calm, even offline.</h3>
            <p className="mt-3 leading-relaxed text-ink/70">Download spaces for flights, trains, and anywhere signal disappears.</p>
            <div className="absolute bottom-8 left-1/2 grid h-32 w-32 -translate-x-1/2 place-items-center rounded-full border border-white/70 bg-white/35 text-5xl text-[#285b79] backdrop-blur"><MaterialIcon name="offline_pin" /></div>
          </article>
        </div>
      </div>
    </section>
  );
}

function LegacyMoodSoundsSection() {
  const moods = [
    { title: "Sleep deeper", copy: "Low, steady sounds that help the day loosen its grip.", icon: "dark_mode", colors: "from-[#173d4c] via-[#276b70] to-[#8fd6ba]", tags: ["Dark rain", "Ocean", "Brown noise"] },
    { title: "Focus longer", copy: "A calm backdrop that gives your attention somewhere to land.", icon: "filter_center_focus", colors: "from-[#31548c] via-[#7187cb] to-[#d3b9e6]", tags: ["Soft piano", "Library", "White noise"] },
    { title: "Reset softly", copy: "Familiar outdoor sounds for a little more room in your head.", icon: "spa", colors: "from-[#74402b] via-[#d66d40] to-[#f2c16d]", tags: ["Forest rain", "Fire", "Morning birds"] },
  ];

  return (
    <section id="sounds" className="bg-[#102019] px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-mint">The sound library</p>
          <h2 className="mt-4 text-5xl font-medium leading-tight sm:text-7xl">A sound for wherever you are.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">Natural recordings, soft textures, and gentle tones arranged around the way you want to feel.</p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {moods.map((mood) => (
            <article key={mood.title} className={`relative min-h-[480px] overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 ${mood.colors}`}>
              <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full border-[38px] border-white/10" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[28px] border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex h-full flex-col">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-3xl backdrop-blur"><MaterialIcon name={mood.icon} /></span>
                <div className="my-auto grid place-items-center">
                  <div className="grid h-40 w-40 place-items-center rounded-full border border-white/25 bg-white/10 text-7xl shadow-[0_20px_80px_rgba(0,0,0,.16)] backdrop-blur-sm"><MaterialIcon name={mood.icon} /></div>
                </div>
                <h3 className="text-3xl font-medium">{mood.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-white/85">{mood.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {mood.tags.map((tag) => <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs backdrop-blur">{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-7 border-t border-white/10 pt-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/75">
            {["Rain", "Fire", "Ocean", "Forest", "Noise", "Piano", "Birds", "Rooms"].map((sound) => <span key={sound}>{sound}</span>)}
          </div>
          <Button dark={false}>Browse the full library</Button>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const mixTiles = [
    ["Rain", "rainy", "from-[#64cbb7] to-[#a9ead2]", 72],
    ["Wind", "air", "from-[#83b9e5] to-[#c9e3f6]", 54],
    ["Fire", "local_fire_department", "from-[#ff8b4b] to-[#ffc078]", 65],
    ["Birds", "flutter_dash", "from-[#65bc8b] to-[#a9dc98]", 58],
    ["Music", "music_note", "from-[#9181d2] to-[#d3c9ed]", 62],
    ["Waves", "waves", "from-[#43a3c8] to-[#90d4e6]", 55],
  ] as const;

  return (
    <section id="features" className="bg-[#fbfaf6] px-4 py-20 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">Made for your mind</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.45] text-[#6f7c75] sm:text-[22px]">Create, mix, and save your perfect soundscapes for focus, sleep, and relaxation.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          className="grid gap-4 lg:grid-cols-12"
        >
          <motion.article variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="relative overflow-hidden rounded-[1.5rem] bg-[#dff6ed] p-5 sm:rounded-[2rem] sm:p-8 lg:col-span-8 lg:min-h-[540px]">
            <div className="relative z-10 max-w-sm lg:max-w-[220px]">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/75 text-[#16765e]"><MaterialIcon name="tune" /></span>
              <h3 className="mt-5 text-[26px] font-extrabold leading-[1.15]">Create your perfect mix</h3>
              <p className="mt-4 text-[17px] leading-[1.45] text-[#6f7c75] sm:text-lg">Blend rain, wind, fire, music, and more. Adjust each layer in real time.</p>
            </div>
            <div className="relative mt-8 grid w-full grid-cols-2 gap-3 lg:absolute lg:bottom-16 lg:right-8 lg:mt-0 lg:w-[52%]">
              {mixTiles.map(([name, icon, color, level]) => (
                <div key={name} className={`rounded-[1.25rem] bg-gradient-to-br p-4 text-white shadow-lg sm:rounded-[1.5rem] sm:p-5 ${color}`}>
                  <MaterialIcon name={icon} className="text-3xl" />
                  <p className="mt-4 font-semibold">{name}</p>
                  <div className="relative mt-4 h-1.5 rounded-full bg-black/15"><span className="block h-full rounded-full bg-white" style={{ width: `${level}%` }} /><span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow" style={{ left: `calc(${level}% - 8px)` }} /></div>
                </div>
              ))}
            </div>
            <div className="relative mt-4 flex w-fit items-center gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur lg:absolute lg:bottom-8 lg:left-8 lg:mt-0">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white"><MaterialIcon name="play_arrow" /></span>
              <span className="text-sm font-semibold">Preview mix</span>
              <div className="ml-2 flex h-6 items-center gap-0.5">{[8,16,11,20,9,15,6,18].map((h, i) => <span key={i} style={{ height: h }} className="w-0.5 rounded-full bg-[#2faf8a]" />)}</div>
            </div>
          </motion.article>

          <motion.article variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="relative overflow-hidden rounded-[1.5rem] bg-[#fff4df] p-5 sm:rounded-[2rem] sm:p-8 lg:col-span-4 lg:min-h-[540px]">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/75 text-[#e8a437]"><MaterialIcon name="star" /></span>
            <h3 className="mt-5 text-[26px] font-extrabold leading-[1.15]">Curated<br />for you</h3>
            <p className="mt-4 max-w-xs text-[17px] leading-[1.45] text-[#6f7c75] sm:text-lg">Handpicked soundscapes designed to help you relax, focus, and unwind.</p>
            <div className="relative mt-8 h-64 overflow-hidden rounded-[1.4rem] bg-[#b7d2ad] sm:h-72 lg:absolute lg:inset-x-5 lg:bottom-5 lg:mt-0 lg:h-[45%] lg:rounded-[1.6rem]">
              <Image src="/images/curated-forest.webp" alt="Sunlit forest soundscape" fill sizes="(min-width: 1024px) 360px, 90vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink shadow-lg"><MaterialIcon name="play_arrow" /> Listen</span>
            </div>
          </motion.article>

          <motion.article variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.5rem] bg-[#efebff] p-5 sm:min-h-[360px] sm:rounded-[2rem] sm:p-8 lg:col-span-6">
            <div className="grid h-full gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
              <div>
                <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-white/75 text-2xl text-[#237c68] shadow-[0_8px_24px_rgba(20,30,40,.04)]">
                  <MaterialIcon name="bookmark" />
                </span>
                <h3 className="mt-6 text-[26px] font-extrabold leading-[1.15]">Save your favorites</h3>
                <p className="mt-4 max-w-[210px] text-[17px] leading-[1.45] text-[#6f7c75]">Keep your favorite mixes ready for any moment.</p>
              </div>

              <div className="space-y-3 md:pt-[4.75rem]">
                {[["Rainy Reading","rainy","30m"],["Forest Reset","forest","1h"],["Deep Sleep Drift","dark_mode","Custom"]].map(([name, icon, time]) => (
                  <div key={name} className="flex min-h-[72px] items-center gap-3 rounded-[22px] border border-white/70 bg-white/[.78] px-4 py-3 shadow-[0_8px_24px_rgba(20,30,40,.06)] backdrop-blur">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#6cc7b0] text-xl text-white"><MaterialIcon name={icon} /></span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{name}</p>
                      <p className="mt-0.5 text-xs text-[#84908e]">{time}</p>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0d2f26] text-sm text-white"><MaterialIcon name="play_arrow" /></span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.5rem] bg-[#ffe1cc] p-5 sm:min-h-[360px] sm:rounded-[2rem] sm:p-8 lg:col-span-6">
            <div className="grid h-full gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-white/75 text-2xl text-[#237c68] shadow-[0_8px_24px_rgba(20,30,40,.04)]">
                  <MaterialIcon name="timer" />
                </span>
                <h3 className="mt-6 text-[26px] font-extrabold leading-[1.15]">Mindful timer</h3>
                <p className="mt-4 max-w-[220px] text-[17px] leading-[1.45] text-[#6f7c75]">Set sessions for sleep, focus, or mindful breaks.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative grid h-36 w-36 place-items-center rounded-full border border-[#6cc7b0]/35 bg-white/20">
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#237c68]/25" />
                  <div className="relative text-center">
                    <p className="text-[2rem] font-medium tracking-[-.04em]">30:00</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[.12em] text-[#7a8585]">Focus</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["15m","30m","1h","Custom"].map((time) => (
                    <span key={time} className={`rounded-full px-3 py-2 text-xs ${time === "30m" ? "border border-[#237c68]/45 bg-white text-[#164f41]" : "bg-white/60 text-[#687573]"}`}>{time}</span>
                  ))}
                </div>
                <div className="mt-6 flex h-14 w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#0d2f26] text-sm font-semibold text-white shadow-[0_10px_25px_rgba(13,47,38,.16)]">
                  <MaterialIcon name="play_arrow" /> Start session
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} whileHover={{ y: -4 }} className="relative overflow-hidden rounded-[1.5rem] bg-[#e7f4f8] p-5 sm:rounded-[2rem] sm:p-8 lg:col-span-12 lg:min-h-[360px]">
            <Image src="/images/layer-control-landscape.webp" alt="" fill sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbf9]/95 via-[#f8fbf9]/72 to-white/5" />
            <div className="relative z-10">
              <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-white/85 text-2xl text-[#237c68] shadow-[0_8px_24px_rgba(20,30,40,.05)]"><MaterialIcon name="graphic_eq" /></span>
              <h3 className="mt-6 max-w-[300px] text-[26px] font-extrabold leading-[1.15]">Control every sound layer</h3>
              <p className="mt-4 max-w-[340px] text-[17px] leading-[1.45] text-[#6f7c75] sm:text-lg">Fine tune each sound layer individually. Build your perfect atmosphere.</p>
            </div>
            <div className="relative mt-8 w-full rounded-[1.4rem] border border-white/65 bg-white/[.72] p-4 shadow-[0_20px_50px_rgba(20,50,45,.08)] backdrop-blur-[18px] sm:p-6 lg:absolute lg:bottom-12 lg:right-[10%] lg:top-7 lg:mt-0 lg:w-[43%] lg:rounded-[1.8rem] lg:p-7">
              {[["Rain","rainy",70],["Wind","air",50],["Fire","local_fire_department",40],["Birds","music_note",60]].map(([name, icon, value]) => (
                <div key={String(name)} className="mb-5 grid grid-cols-[2.25rem_3.5rem_1fr_38px] items-center gap-2 last:mb-0 sm:grid-cols-[2.25rem_4.5rem_1fr_42px] sm:gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e5f4ef] text-[#237c68]"><MaterialIcon name={String(icon)} /></span>
                  <span className="text-sm font-semibold">{name}</span>
                  <div className="relative h-1.5 rounded-full bg-[#dfe5e2]">
                    <span className="block h-full rounded-full bg-[#2b8c74]" style={{ width: `${value}%` }} />
                    <span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#2b8c74] shadow-sm" style={{ left: `calc(${value}% - 8px)` }} />
                  </div>
                  <span className="w-[42px] text-right text-xs text-[rgba(0,31,27,.38)]">{value}%</span>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["spa","Calm anywhere","Works offline. Take your calm with you."],
            ["dark_mode","Sleep better","Soothing mixes to help you fall asleep faster."],
            ["track_changes","Focus deeper","Reduce distractions and stay in the zone."],
            ["favorite","Feel balanced","Sounds that support your well-being."],
          ].map(([icon,title,copy]) => (
            <div key={title} className="flex gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e8f3e9] text-[#579663]"><MaterialIcon name={icon} /></span>
              <div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-ink/70">{copy}</p></div>
            </div>
          ))}
        </div>
        <nav aria-label="Explore Heiwa guides" className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-[#168f70]">
          <a href="/sleep-sounds" className="hover:underline">Sleep sounds</a>
          <a href="/soundscape-app" className="hover:underline">Soundscape app</a>
          <a href="/rain-sounds-for-sleep" className="hover:underline">Rain sounds for sleep</a>
        </nav>
      </div>
    </section>
  );
}

function SoundsSection() {
  return null;
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [selectedSounds, setSelectedSounds] = useState<string[]>(["Forest Rain", "Night Wind"]);
  const [playingSound, setPlayingSound] = useState<string | null>(null);

  return (
      <main>
        <SiteHeader />
        <section className="bg-[#f6f3ee] px-4 pb-8 pt-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] bg-[#f0f0f0] px-8 py-10 sm:px-12 sm:py-14 lg:min-h-[680px]"
              >
                <div className="relative z-10 max-w-[440px] pt-4 sm:pt-10">
                  <div className="mb-7 flex flex-wrap items-center gap-3 text-[15px] font-medium tracking-[-0.01em] text-[#6f6a63]">
                    <div className="flex items-center gap-1 text-[#f3a63a]" role="img" aria-label="5 star rating">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg key={index} viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
                          <path d="M10 1.8 12.47 6.8l5.52.8-4 3.9.95 5.5L10 14.4 5.06 17l.95-5.5-4-3.9 5.52-.8Z" />
                        </svg>
                      ))}
                    </div>
                    <span>4.9 rating</span>
                    <span className="text-[#c5bcb2]">·</span>
                    <span>20k+ heiwa users</span>
                  </div>
                  <h1 className="text-[clamp(3.2rem,7vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-black">
                    Find calm
                    <br />
                    build focus
                    <br />
                    <span className="whitespace-nowrap">sleep deeper</span>
                  </h1>
                  <p className="mt-8 max-w-[420px] text-lg leading-[1.65] text-black/70">
                    The Heiwa app helps you step out of the noise and create a personal soundscape for rest,
                    focus, and meaningful quiet.
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-black px-8 text-base font-medium text-white transition hover:scale-[1.02]"
                    >
                      <AppleMark className="h-5 w-5" />
                      Get on App Store
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] bg-[#ffd94d] lg:min-h-[680px]"
              >
                <Image
                  src="/images/hero-phone-scene.webp"
                  alt="Heiwa app shown on a phone"
                  width={1536}
                  height={1024}
                  preload
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover object-right"
                />
              </motion.div>
            </div>
          </div>
        </section>

      <FeaturesSection />
      <section aria-hidden="true" className="hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[.18em] text-[#168f70]">Made for your mind</p>
              <h2 className="max-w-2xl text-5xl font-extrabold leading-[.98] sm:text-6xl">Less noise. More of what you need.</h2>
            </div>
            <p className="max-w-lg self-end text-lg leading-relaxed text-ink/70 lg:justify-self-end">
              Heiwa adapts to the moment, whether you’re settling into deep work, a book, or bed.
            </p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-[2rem] bg-[#e9f6f0] p-8 md:col-span-2 lg:col-span-2">
              <div className="grid items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
                <div>
                  <span className="mb-16 grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-sm">≋</span>
                  <h3 className="text-3xl font-extrabold">Mix your own atmosphere</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-ink/70">Build a soundscape with independent layers. Make rain warmer, waves quieter, or add just enough piano.</p>
                </div>
                <div className="rounded-[1.7rem] bg-white p-4 shadow-soft">
                  {layers.map((item, i) => (
                    <div key={item.name} className="mb-2 flex items-center gap-3 rounded-2xl bg-[#f5f8f6] p-3 last:mb-0">
                      <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-white ${item.color}`}>{item.icon}</span>
                      <span className="flex-1 text-sm font-bold">{item.name}</span>
                      <span className="text-xs font-bold text-ink/65">{[72, 58, 45][i]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="rounded-[2rem] bg-ink p-8 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-xl">◷</span>
              <div className="my-12 text-center">
                <span className="text-6xl font-extrabold">30</span><span className="text-xl text-white/80"> min</span>
              </div>
              <h3 className="text-2xl font-extrabold">A timer that lets go</h3>
              <p className="mt-3 leading-relaxed text-white/80">Ease into focus or sleep. Your sounds gently fade when time is up.</p>
            </article>
            <article className="rounded-[2rem] bg-[#f5eadf] p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl">☾</span>
              <div className="my-12 flex h-24 items-end justify-center gap-2">
                {[35, 60, 45, 85, 55, 72, 40].map((h, i) => <span key={i} style={{ height: `${h}%` }} className="w-3 rounded-full bg-[#dc8b5e]" />)}
              </div>
              <h3 className="text-2xl font-extrabold">Made to disappear</h3>
              <p className="mt-3 leading-relaxed text-ink/70">Simple controls, no clutter. Find your space and return to what matters.</p>
            </article>
            <article className="overflow-hidden rounded-[2rem] bg-[#dee8fa] p-8 md:col-span-1 lg:col-span-2">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl">♡</span>
                  <h3 className="mt-14 text-3xl font-extrabold">Save the places you love</h3>
                  <p className="mt-4 leading-relaxed text-ink/70">Your favorite combinations stay close, ready whenever the day gets loud.</p>
                </div>
                <div className="space-y-3">
                  {["Rainy reading", "Forest reset", "Deep sleep drift"].map((mix, i) => (
                    <div key={mix} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3.5">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">{["☂", "♒", "☾"][i]}</span>
                      <span className="flex-1 text-sm font-bold">{mix}</span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white"><Play className="h-3 w-3" /></span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SoundsSection />
      <section aria-hidden="true" className="hidden">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[.18em] text-[#168f70]">The sound library</p>
              <h2 className="text-5xl font-extrabold leading-[.98] sm:text-6xl">Find your quiet.</h2>
            </div>
            <p className="max-w-md text-lg text-ink/70">Nature, rooms, textures, and instruments made to blend beautifully.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soundCards.map((sound) => {
              const playing = playingSound === sound.name;
              return (
                <article key={sound.name} className={`group relative min-h-[340px] overflow-hidden rounded-[2rem] bg-gradient-to-br p-7 text-white shadow-lg transition duration-500 hover:-translate-y-2 ${sound.color}`}>
                  <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[35px] border-white/10" />
                  <div className="absolute -bottom-6 -right-3 h-44 w-44 rounded-full border-[25px] border-white/10" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="text-5xl">{sound.icon}</span>
                      <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur">Soundscape</span>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-3xl font-extrabold">{sound.name}</h3>
                      <p className="mt-2 text-white/85">{sound.detail}</p>
                      <button
                        onClick={() => setPlayingSound(playing ? null : sound.name)}
                        className="mt-6 grid h-14 w-14 place-items-center rounded-full bg-white text-ink shadow-xl transition group-hover:scale-105"
                        aria-label={`Play ${sound.name}`}
                      >
                        {playing ? <Pause /> : <Play />}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Button>Explore all sounds</Button></div>
        </div>
      </section>

      <section aria-hidden="true" className="hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-10 rounded-full bg-mint/20 blur-3xl" />
            <div className="relative rotate-[-3deg] rounded-[3rem] bg-ink p-3 shadow-soft">
              <Image
                src="/screenshots/02-home.png"
                alt="Heiwa app home screen"
                width={918}
                height={2048}
                className="max-h-[680px] w-full rounded-[2.4rem] object-cover object-top"
              />
            </div>
            <div className="absolute -right-4 bottom-20 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-16">
              <p className="text-xs font-bold text-ink/65">Tonight&apos;s space</p>
              <p className="mt-1 font-extrabold">Rain softly · 30m</p>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[.18em] text-[#168f70]">Small ritual, real shift</p>
            <h2 className="max-w-xl text-5xl font-extrabold leading-[.98] sm:text-6xl">A softer room is one tap away.</h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/70">No feeds. No streaks to maintain. Just thoughtful sound and a gentle timer, ready when you are.</p>
            <ul className="mt-9 space-y-4">
              {["Layer and tune every sound", "Save unlimited personal mixes", "Gentle timer for focus and sleep", "Take downloaded spaces offline"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-mint"><Check className="h-4 w-4" /></span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-9"><Button>Download Heiwa</Button></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="relative overflow-hidden bg-[#f7f5ef] py-20 sm:py-24 lg:py-32">
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">Loved by people who need a quiet moment</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-[1.45] text-[#6f7c75] sm:text-[22px]">From bedtime to deep work, Heiwa helps people create calm spaces that fit their day.</p>
        </div>

        <div className="relative mt-10 sm:mt-16">
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 4%, black 16%, black 84%, transparent 96%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, transparent 4%, black 16%, black 84%, transparent 96%, transparent 100%)",
            }}
          >
            <motion.div
              className="flex w-max gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 52, ease: "linear", repeat: Infinity }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <article
                  key={`${index}-${review.name}`}
                  className={`flex min-h-[285px] w-[86vw] max-w-[380px] shrink-0 flex-col rounded-[1.5rem] border border-white/70 p-6 sm:w-[430px] sm:max-w-none sm:rounded-[2rem] sm:p-7 ${review.color}`}
                >
                  <div className="flex gap-1 text-[#197b63]">
                    {Array.from({ length: 5 }, (_, star) => <Star key={star} className="h-4 w-4" />)}
                  </div>
                  <blockquote className="mt-7 text-xl font-medium leading-[1.45] tracking-[-.015em] sm:text-[22px]">“{review.quote}”</blockquote>
                  <div className="mt-auto flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0d2f26] text-sm font-semibold text-white">{review.name.charAt(0)}</span>
                    <div>
                      <p className="text-base font-semibold sm:text-[17px]">{review.name}</p>
                      <p className="mt-0.5 text-sm text-[#6f7c75]">{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-cream px-4 py-20 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[.18em] text-[#168f70]">Good to know</p>
            <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">Questions, answered softly.</h2>
          </div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map(([question, answer], i) => (
              <div key={question}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold sm:py-6 sm:text-[22px]">
                  {question}
                  <span className={`grid h-9 w-9 place-items-center rounded-full bg-white transition ${openFaq === i ? "rotate-45" : ""}`}><Plus className="h-4 w-4" /></span>
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="max-w-2xl text-[17px] leading-[1.5] text-[#6f7c75] sm:text-lg">{answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" aria-hidden="true" className="hidden">
        <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#159873] px-6 py-20 text-center text-white sm:px-10 lg:py-28">
          <div className="absolute left-[-5rem] top-[-6rem] h-72 w-72 rounded-full bg-[#54dcb1]/50 blur-3xl" />
          <div className="absolute bottom-[-7rem] right-[-4rem] h-80 w-80 rounded-full bg-[#0b5948]/50 blur-3xl" />
          <div className="relative">
            <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-[1.7rem] bg-white text-4xl text-ink shadow-xl">☁</div>
            <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[.95] sm:text-7xl">Make some space for yourself.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">Your next quiet moment is closer than you think. Start listening for free.</p>
            <div className="mt-9"><Button dark={false}>Download on the App Store</Button></div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
