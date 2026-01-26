"use client";

import { SOUNDS } from "@/lib/constants";
import { SoundCard } from "./SoundCard";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useSoundStore } from "@/store/useSoundStore";

export const SoundGrid = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { activeCategory, sortOrder } = useSoundStore();

    // Filter Logic
    const baseFilteredSounds = activeCategory === "All"
        ? SOUNDS
        : SOUNDS.filter(s => s.category === activeCategory);

    // Sort Logic
    const filteredSounds = [...baseFilteredSounds].sort((a, b) => {
        if (sortOrder === "az") {
            return a.name.localeCompare(b.name);
        }
        return 0; // Maintain original order for "popular"
    });

    // Grid Logic: 4 columns. 3 rows = 12 items.
    const INITIAL_COUNT = 12;
    const displayedSounds = isExpanded ? filteredSounds : filteredSounds.slice(0, INITIAL_COUNT);
    const hasMore = filteredSounds.length > INITIAL_COUNT;

    return (
        <div id="sound-grid" className="w-full max-w-5xl mx-auto px-4 pb-10 flex flex-col items-center">



            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
            >
                <AnimatePresence>
                    {displayedSounds.map(sound => (
                        <motion.div
                            key={sound.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            layout
                        >
                            <SoundCard sound={sound} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Show More Button */}
            {!isExpanded && hasMore && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setIsExpanded(true)}
                    className="mt-12 group flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-300 bg-white hover:bg-gray-50 text-black shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 dark:bg-white/5 dark:text-white dark:border dark:border-white/10 dark:hover:bg-white/10 dark:shadow-none"
                >
                    <span className="text-sm font-bold font-display tracking-wide text-black dark:text-white dark:group-hover:text-white transition-colors">
                        Show More Sounds
                    </span>
                    <Icon name="ChevronDown" className="w-4 h-4 transition-transform group-hover:translate-y-1 text-black/50 dark:text-white/70" />
                </motion.button>
            )}

            {/* Optional: Show Less */}
            {isExpanded && hasMore && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setIsExpanded(false)}
                    className="mt-12 group flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-300 bg-white hover:bg-gray-50 text-black shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 dark:bg-white/5 dark:text-white dark:border dark:border-white/10 dark:hover:bg-white/10 dark:shadow-none"
                >
                    <span className="text-sm font-bold font-display tracking-wide text-black dark:text-white dark:group-hover:text-white transition-colors">
                        Show Less
                    </span>
                    <Icon name="ChevronUp" className="w-4 h-4 transition-transform group-hover:translate-y-[-2px] text-black/50 dark:text-white/70" />
                </motion.button>
            )}
        </div>
    )
};
