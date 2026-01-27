"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { BackgroundEnvironment } from "@/components/features/BackgroundEnvironment";
import { GlobalSoundManager } from "@/components/features/GlobalSoundManager";
import { PlansDashboard } from "@/components/features/PlansDashboard";
import { ReviewCarousel } from "@/components/features/ReviewCarousel";
import { SoundGrid } from "@/components/features/SoundGrid";
import { CategoryPills } from "@/components/layout/CategoryPills";
import { Header } from "@/components/layout/Header";
import { MiniPlayer } from "@/components/layout/MiniPlayer";
import { TimerDashboard } from "@/components/features/TimerDashboard";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { activeView, isUserPremium } = useSoundStore();

  return (
    <div className="relative min-h-screen w-full flex flex-col font-display">
      <BackgroundEnvironment />
      <GlobalSoundManager />

      <Header />

      <main className="flex-grow flex flex-col items-center justify-start py-10 w-full z-10">
        <AnimatePresence mode="wait">
          {activeView === "Sounds" && (
            <motion.div
              key="sounds"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <Hero />
              <CategoryPills />
              <SoundGrid />
              <div className="w-full mt-4 mb-24">
                <TimerDashboard />
              </div>
              {/* Plans Hidden as per request */}
              {false && (
                <div id="plans" className="w-full mb-24">
                  <PlansDashboard />
                </div>
              )}
              <div className="w-full">
                <ReviewCarousel />
              </div>
            </motion.div>
          )}

          {activeView === "Community" && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-2xl px-6 text-center mt-20"
            >
              <h2 className="text-3xl font-light tracking-wide mb-4">Community</h2>
              <p className="text-foreground/60 leading-relaxed font-light">
                Join thousands of others in finding daily peace.
                <br />
                Global meditation stats coming soon.
              </p>
            </motion.div>
          )}

          {activeView === "Plans" && (
            <motion.div
              key="plans"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full mt-10"
            >
              <PlansDashboard />
            </motion.div>
          )}

          {activeView === "About" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-2xl px-6 text-center mt-20"
            >
              <h2 className="text-3xl font-light tracking-wide mb-4">About Heiwa</h2>
              <p className="text-foreground/60 leading-relaxed font-light">
                Heiwa (平和) means peace and harmony.
                <br /><br />
                Designed as a digital sanctuary, free from distractions, ads, and engagement algorithms.
                Just breathe.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Only show Footer and MiniPlayer logic if needed globally, usually yes */}
      <Footer />
      <MiniPlayer />
    </div>
  );
}
