

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";
import Lottie from "lottie-react";
import sunnyAnimation from "@/public/Sunny.json"; // Alias or relative path if needed

// --- Components ---



const Moon = () => (
    <motion.div
        className="absolute top-[5%] right-[5%] w-32 h-32 md:top-[15%] md:right-[10%] md:w-64 md:h-64 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
    >
        <div className="relative w-32 h-32">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-slate-100 blur-[40px] opacity-20" />
            {/* Moon Body */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                {/* Crater 1 */}
                <div className="absolute top-[30%] left-[20%] w-6 h-6 bg-slate-400/20 rounded-full" />
                {/* Crater 2 */}
                <div className="absolute bottom-[20%] right-[30%] w-8 h-8 bg-slate-400/20 rounded-full" />
            </div>
        </div>
    </motion.div>
);

const Sun = () => (
    <motion.div
        className="absolute top-[5%] right-[5%] w-32 h-32 md:top-[15%] md:right-[10%] md:w-64 md:h-64"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
    >
        <Lottie animationData={sunnyAnimation} loop={true} className="w-full h-full" />
    </motion.div>
);

import { RealisticCloud } from "@/components/ui/RealisticCloud";
import { RealisticStars } from "@/components/ui/RealisticStars";

const Clouds = () => {
    // Generate clouds
    const clouds = [
        { id: 1, top: "20%", scale: 0.8, duration: 65, delay: 0, opacity: 0.9 },
        { id: 2, top: "50%", scale: 0.6, duration: 80, delay: 25, opacity: 0.7 },
        { id: 3, top: "80%", scale: 0.5, duration: 95, delay: 10, opacity: 0.5 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {clouds.map((c) => (
                <motion.div
                    key={c.id}
                    className="absolute -left-[400px]"
                    style={{ top: c.top, opacity: c.opacity, scale: c.scale }}
                    animate={{ x: ["-10vw", "120vw"] }}
                    transition={{
                        duration: c.duration,
                        repeat: Infinity,
                        delay: c.delay,
                        ease: "linear",
                    }}
                >
                    <RealisticCloud />
                </motion.div>
            ))}
        </div>
    );
};

const WindLines = () => {
    const lines = Array.from({ length: 3 }).map((_, i) => ({ // Reduced to 3 for mobile performance
        id: i,
        top: `${Math.random() * 90 + 5}%`, // Spread across 5% - 95%
        width: Math.random() * 200 + 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {lines.map((l) => (
                <motion.div
                    key={l.id}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ top: l.top, width: l.width, left: -l.width }}
                    animate={{ x: ["0vw", "120vw"] }}
                    transition={{
                        duration: l.duration,
                        repeat: Infinity,
                        delay: l.delay,
                        ease: "easeInOut", // Wind gusts
                    }}
                />
            ))}
        </div>
    );
};

// --- Main ---

export const BackgroundEnvironment = () => {
    const { remainingTime, isTimerActive, isSessionComplete } = useSoundStore();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    // Calculate Dimming
    let dimOpacity = 0;

    if (isSessionComplete) {
        dimOpacity = 0.8;
    } else if (isTimerActive && remainingTime !== null && remainingTime <= 60) {
        dimOpacity = 0.6 * (1 - remainingTime / 60);
    }

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden transition-colors duration-1000 bg-background">
            {/* Dark Mode Environment (Night) */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12] to-[#1a1520]" />
                <RealisticStars />
                <Moon />

                {/* Night Atmosphere */}
                <div className="absolute bottom-0 inset-x-0 h-[40vh] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            {/* Light Mode Environment (Day) */}
            <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-b from-[#e0f7fa] to-[#f0f9ff]" />
                <WindLines />
                <Clouds />
                <Sun />

                {/* Day Atmosphere */}
                <div className="absolute bottom-0 inset-x-0 h-[30vh] bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
            </div>

            {/* Dimming Overlay */}
            <div
                className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-1000 ease-in-out"
                style={{ opacity: dimOpacity }}
            />

            {/* Session Complete Text */}
            {isSessionComplete && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-white text-3xl font-light tracking-[0.2em] uppercase drop-shadow-xl font-display"
                    >
                        Session Complete
                    </motion.h2>
                </div>
            )}
        </div>
    );
};
