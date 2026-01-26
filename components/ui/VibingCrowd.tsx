"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const VibingCrowd = () => {
    const [crowd, setCrowd] = useState<{ id: number; height: number; width: number; radius: number; delay: number; duration: number; offset: number; color: string }[]>([]);

    useEffect(() => {
        // Heiwa Theme Palette (Purples, Cyans, Blues) matched to tailwind.config.ts
        const colors = [
            "#8311d4", // Primary
            "#00d4ff", // Secondary
            "#a855f7", // Purple-500
            "#60a5fa", // Blue-400
            "#c026d3", // Fuchsia-600
            "#22d3ee", // Cyan-400
            "#6366f1", // Indigo-500
            "#d8b4fe"  // Lavender
        ];

        // Generate a crowd of abstract people only on client to avoid hydration mismatch
        const newCrowd = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            // Randomize characteristics
            height: Math.random() * 20 + 30, // 30-50px height
            width: Math.random() * 10 + 20,  // 20-30px width
            radius: Math.random() * 5 + 10,  // Head radius
            delay: Math.random() * 2,        // Animation delay
            duration: Math.random() * 1 + 1.5, // Faster beat (1.5-2.5s)
            offset: Math.random() * 10 - 5,  // Horizontal jitter
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
        setCrowd(newCrowd);
    }, []);

    if (crowd.length === 0) return null;

    return (
        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 overflow-hidden pointer-events-none opacity-30 mask-image-gradient">
            {/* Gradient Mask to fade edges if needed, or just let them span */}
            {crowd.map((person, i) => (
                <motion.div
                    key={person.id}
                    className="relative flex flex-col items-center justify-end mx-[-10px]" // Negative margin for overlap
                    style={{
                        height: person.height + 40, // Base height container
                        marginBottom: -10
                    }}
                    animate={{
                        y: [0, -15, 0], // Higher bob for "beat"
                        scaleY: [1, 1.1, 1],
                        filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] // Pulse effect
                    }}
                    transition={{
                        duration: person.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: person.delay
                    }}
                >
                    {/* Head */}
                    <div
                        className="rounded-full mb-[-2px] z-10"
                        style={{
                            width: person.radius,
                            height: person.radius,
                            backgroundColor: person.color
                        }}
                    />

                    {/* Body (Simple rounded rect) */}
                    <div
                        className="rounded-t-[1rem]"
                        style={{
                            width: person.width,
                            height: person.height,
                            backgroundColor: person.color
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
};
