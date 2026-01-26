"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEnvironment } from "@/components/features/BackgroundEnvironment";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-display">
            <BackgroundEnvironment />
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl w-full text-center space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                        About <span className="text-primary">Heiwa</span>
                    </h1>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-foreground/80 font-light leading-relaxed">
                        <p>
                            Heiwa (平和) translates to "Peace" in Japanese.
                        </p>
                        <p>
                            We built Heiwa as a digital sanctuary—a place to escape the noise of the modern world.
                            There are no ads, no algorithms trying to steal your attention, and no endless feeds.
                        </p>
                        <p>
                            Just high-quality, immersive soundscapes designed to help you focus, sleep, or simply breathe.
                        </p>
                        <p>
                            Our detailed ambient environments are crafted to transport you to serene locations,
                            from the rain-soaked streets of Kyoto to the quiet stillness of a deep forest.
                        </p>
                        <p className="text-xl font-medium text-primary pt-4">
                            Breathe in. Breathe out. Welcome to Heiwa.
                        </p>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
