"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

export const Hero = () => {
    const { toggleGlobalPlay, isGlobalPlaying, openAuthModal } = useSoundStore();

    // Mock Avatars
    const AVATARS = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    ];

    const handleScrollToGrid = () => {
        const grid = document.getElementById('categories');
        if (grid) {
            grid.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-16 pt-24 md:pt-32 px-4 relative z-20"
        >


            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-serif text-foreground font-medium leading-[1.1] tracking-tight mb-10 drop-shadow-sm">
                Find your inner <span className="text-primary italic relative inline-block">
                    Heiwa
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute bottom-1 left-0 h-[2px] bg-primary/30 rounded-full"
                    />
                </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-foreground/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Experience a journey of balance and mindfulness.
                Discover the calming power of ambient sounds with Heiwa.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-10 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
                {/* Avatar Stack */}
                <div className="flex -space-x-3">
                    {AVATARS.map((src, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                            <img src={src} alt="User" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-background bg-foreground/5 flex items-center justify-center text-[10px] font-bold text-foreground/60">
                        +2k
                    </div>
                </div>

                {/* Stars & Rating */}
                <div className="flex flex-col items-start gap-0.5">
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <Icon key={i} name="Star" className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0 stroke-none" />
                        ))}
                    </div>
                    <span className="text-xs font-medium text-foreground/50">
                        Loved by 2,400+ happy minds
                    </span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">


                <button
                    onClick={handleScrollToGrid}
                    className="h-14 px-8 rounded-full bg-white/80 dark:bg-black/40 border border-white/20 text-foreground font-bold font-display hover:bg-white dark:hover:bg-white/5 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
                >
                    Explore Sounds
                </button>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={handleScrollToGrid}
                className="mt-20 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity animate-in fade-in slide-in-from-top-4 duration-1000 delay-700"
                aria-label="Scroll down"
            >
                <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-foreground rounded-full"
                    />
                </div>
            </button>



        </motion.div >
    );
};
