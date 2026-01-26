"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export const MiniPlayer = () => {
    const { activeSounds, isGlobalPlaying, toggleGlobalPlay, masterVolume, setMasterVolume } = useSoundStore();
    const hasActive = Object.keys(activeSounds).length > 0;

    return (
        <AnimatePresence>
            {hasActive && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4"
                >
                    <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl backdrop-blur-2xl">
                        {/* Play/Pause */}
                        <button
                            onClick={toggleGlobalPlay}
                            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                        >
                            <Icon
                                name={isGlobalPlaying ? "Pause" : "Play"}
                                className={cn("w-6 h-6 ml-0.5", isGlobalPlaying && "ml-0 fill-current")}
                            />
                        </button>

                        {/* Mixer Text */}
                        <div className="hidden sm:block">
                            <span className="text-xs text-primary font-medium uppercase tracking-wider block">Mixing</span>
                            <span className="text-sm font-medium text-foreground">{Object.keys(activeSounds).length} Sounds Active</span>
                        </div>

                        <div className="h-8 w-px bg-foreground/10 mx-2 hidden sm:block" />

                        {/* Master Volume */}
                        <div className="flex items-center gap-3">
                            <Icon name="Volume2" className="w-5 h-5 text-foreground/50" />
                            <Slider
                                defaultValue={[0.8]}
                                value={[masterVolume]}
                                max={1}
                                step={0.01}
                                onValueChange={(vals: number[]) => setMasterVolume(vals[0])}
                                className="w-32"
                                aria-label="Master Volume"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
