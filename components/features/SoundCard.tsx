"use client";

import { useState } from "react";
import { Sound } from "@/lib/constants";
import { useSoundStore } from "@/store/useSoundStore";
import { useModalStore } from "@/store/useModalStore"; // Import Store
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const SoundCard = ({ sound }: { sound: Sound }) => {
    const {
        activeSounds,
        isGlobalPlaying,
        toggleSound,
        setSoundVolume,
        masterVolume,
        isUserPremium
    } = useSoundStore();

    const { openModal } = useModalStore(); // Hook

    const soundState = activeSounds[sound.id];
    const isActive = !!soundState;
    const volume = soundState?.volume ?? 0.5;

    // Locking Logic
    const isLocked = sound.isPremium && !isUserPremium;

    // Handling Click (Toggle Sound)
    const handleClick = () => {
        if (isLocked) {
            openModal("PREMIUM"); // Trigger Modal
            return;
        }
        toggleSound(sound.id);
    };

    return (
        <div
            className={cn(
                "group relative flex flex-col items-center justify-between p-4 transition-all duration-500 cursor-pointer aspect-square select-none rounded-[2rem]",
                // Base Glass Style (White Pill Match)
                "bg-white/90 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-xl border border-black/5 dark:border-white/10",
                // Active Style
                isActive && "border-primary/50 bg-primary/10 shadow-[0_0_40px_rgba(131,17,212,0.1)]",
                // Premium Locked Style (Frosted Glass)
                isLocked && "border-amber-500/20 bg-amber-50/30 dark:bg-amber-900/10 hover:border-amber-500/40 overflow-hidden",
                // Hover (if not active/locked) - Light Purple Overlay
                !isActive && !isLocked && "hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            )}
            onClick={handleClick}
        >
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />

            {/* Icon Section (Top/Center) */}
            <div className="flex-grow flex items-center justify-center pt-2 relative z-10">
                <div className={cn(
                    "relative z-10 rounded-full transition-all duration-500 p-3",
                    isActive && "scale-110 text-primary",
                    !isActive && !isLocked && "text-foreground/40 group-hover:text-foreground/80",
                    isLocked && "text-foreground/30 opacity-60 grayscale" // Increased visibility, added grayscale
                )}>
                    <Icon name={sound.icon} className="w-8 h-8" />
                </div>
            </div>

            {/* Info Section (Middle) */}
            <div className="text-center z-10 w-full mb-4 relative">
                <h3 className={cn(
                    "text-sm font-medium transition-colors tracking-wide",
                    isActive ? "text-primary" : "text-foreground/80",
                    isLocked && "text-foreground/50" // Darker text for better contrast under glass
                )}>
                    {sound.name}
                </h3>
            </div>

            {/* Horizontal Slider (Bottom) */}
            <div className="w-full h-8 flex items-center justify-center relative z-20 px-2" onClick={(e) => e.stopPropagation()}>
                {isActive && !isLocked ? (
                    <Slider
                        defaultValue={[0.5]}
                        value={[volume]}
                        max={1}
                        step={0.01}
                        onValueChange={(vals) => setSoundVolume(sound.id, vals[0])}
                        className="w-full"
                        aria-label="Volume"
                    />
                ) : (
                    // Placeholder when inactive (or show generic line)
                    <div className="w-full h-1 bg-foreground/5 rounded-full" />
                )}
            </div>

            {/* Active Glow Background */}
            {isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-[2rem] pointer-events-none" />
            )}

            {/* LOCKED OVERLAY - Premium Frosted Glass */}
            {isLocked && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-[2rem] transition-all duration-300 group-hover:bg-white/50 dark:group-hover:bg-black/50 group-hover:backdrop-blur-lg">
                    <div className="p-4 bg-amber-500/10 rounded-full border border-amber-500/20 shadow-lg shadow-amber-500/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon name="Lock" className="w-8 h-8 text-amber-600 dark:text-amber-500 fill-amber-500/20" />
                    </div>
                    {/* Get Premium Text */}
                    <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 drop-shadow-sm">
                            Get Premium
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
