"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { CATEGORIES } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const CategoryPills = () => {
    const { activeCategory, setCategory, sortOrder, setSortOrder } = useSoundStore();
    const active = activeCategory;
    const setActive = setCategory;

    // Map categories to specific icons
    const getIcon = (cat: string) => {
        switch (cat) {
            case "All": return "Music";
            case "Free": return "Wind";
            case "Premium": return "Star";
            default: return "Circle";
        }
    };

    return (
        <div id="categories" className="w-full max-w-none mx-auto mb-12 px-4 md:px-10 flex flex-col items-center scroll-mt-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-foreground/90">
                Choose your <span className="text-primary">Heiwa</span>
            </h2>
            {/* White Container Pill */}
            {/* Container - Transparent on Mobile, Glass on Desktop */}
            {/* Container - Transparent on Mobile, Glass on Desktop */}
            <div className="w-full md:w-fit max-w-full flex flex-col md:flex-row items-center gap-4 md:gap-0 bg-transparent p-0 shadow-none border-none md:bg-white/80 md:dark:bg-black/40 md:backdrop-blur-md md:rounded-full md:p-2 md:shadow-xl md:border md:border-white/20">
                {/* Categories - Glass on Mobile, Transparent on Desktop */}
                <div className="flex flex-wrap justify-center items-center gap-1 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-[2.5rem] p-2 shadow-xl border border-white/20 md:bg-transparent md:dark:bg-transparent md:backdrop-filter-none md:rounded-none md:p-0 md:shadow-none md:border-none">
                    {CATEGORIES.map((cat) => {
                        const isActive = active === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={cn(
                                    "relative px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300",
                                    isActive
                                        ? "text-white shadow-md scale-105"
                                        : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activePill"
                                        className={cn(
                                            "absolute inset-0 rounded-full shadow-lg -z-10",
                                            cat === "Premium"
                                                ? "bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                                                : "bg-primary shadow-[0_0_20px_rgba(131,17,212,0.4)]"
                                        )}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <Icon
                                    name={getIcon(cat)}
                                    className={cn(
                                        "w-4 h-4 transition-all",
                                        isActive ? "text-white stroke-[3] fill-transparent" : "text-foreground/50"
                                    )}
                                />
                                <span className={cn(
                                    "text-sm font-medium tracking-wide",
                                    isActive ? "font-bold text-white" : "text-foreground/70"
                                )}>
                                    {cat}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-6 bg-black/10 dark:bg-white/10 mx-2 self-center" />

                {/* Sort Toggle */}
                {/* Sort Toggle - Glass on Mobile, Transparent on Desktop */}
                <div className="flex items-center gap-1 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full p-2 shadow-xl border border-white/20 md:bg-transparent md:dark:bg-transparent md:backdrop-filter-none md:shadow-none md:border-none md:p-0">
                    <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
                        <button
                            onClick={() => setSortOrder("popular")}
                            className={cn(
                                "px-3 py-1.5 rounded-full text-xs font-bold transition-all",
                                sortOrder === "popular"
                                    ? "bg-white text-black shadow-md dark:bg-white/10 dark:text-white dark:border dark:border-white/10"
                                    : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                            )}
                        >
                            Popular
                        </button>
                        <button
                            onClick={() => setSortOrder("az")}
                            className={cn(
                                "px-3 py-1.5 rounded-full text-xs font-bold transition-all",
                                sortOrder === "az"
                                    ? "bg-white text-black shadow-md dark:bg-white/10 dark:text-white dark:border dark:border-white/10"
                                    : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                            )}
                        >
                            A - Z
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
