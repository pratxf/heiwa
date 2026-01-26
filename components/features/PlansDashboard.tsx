"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const PlansDashboard = () => {
    const { isUserPremium, unlockPremium } = useSoundStore();

    return (
        <div className="w-full flex flex-col items-center gap-8 px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground/90">
                Choose your path to <span className="text-primary">Heiwa</span>
            </h2>
            <p className="text-foreground/60 font-light text-center max-w-md -mt-4">
                Whether you're just starting or ready for deep immersion, Heiwa supports your journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

                {/* FREE PLAN */}
                <div className="relative p-8 rounded-[2.5rem] bg-white/5 border border-foreground/10 flex flex-col items-center text-center group transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/5 hover:shadow-2xl hover:scale-[1.01]">
                    <div className="absolute top-6 right-6">
                        {!isUserPremium && (
                            <div className="px-3 py-1 rounded-full bg-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/60">
                                Current
                            </div>
                        )}
                    </div>

                    <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
                        <Icon name="Leaf" className="w-8 h-8 text-foreground/60" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">Heiwa Free</h3>
                    <div className="text-4xl font-display font-medium mb-6">
                        $0 <span className="text-sm font-sans text-foreground/40 font-normal">/ forever</span>
                    </div>

                    <ul className="space-y-4 mb-8 w-full text-left">
                        <Feature text="20+ Essential Sounds" />
                        <Feature text="Basic Timer (5m - 1h)" />
                        <Feature text="Breathing Circle" />
                        <Feature text="Background Play" />
                    </ul>

                    <button className="h-12 w-full rounded-full border border-foreground/20 font-bold text-foreground/60 cursor-default">
                        Sign In
                    </button>
                </div>

                {/* PREMIUM PLAN */}
                <div className={cn(
                    "relative p-8 rounded-[2.5rem] flex flex-col items-center text-center overflow-hidden transition-all duration-500",
                    isUserPremium
                        ? "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 shadow-xl shadow-amber-500/5"
                        : "bg-gradient-to-br from-white/5 to-orange-500/10 border border-amber-500/30 shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02]"
                )}>
                    {/* Glow Effect */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                        <Icon name="Crown" className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">Heiwa Premium</h3>
                    <div className="text-4xl font-display font-medium mb-6 flex items-end justify-center gap-2">
                        <span>$4.99</span>
                        <span className="text-sm font-sans text-foreground/40 font-normal mb-1">/ month</span>
                    </div>

                    <ul className="space-y-4 mb-8 w-full text-left">
                        <Feature text="Unlock All 50+ Sounds" />
                        <Feature text="Smart Mix Mode (Coming Soon)" />
                        <Feature text="Unlimited Custom Timer" />
                        <Feature text="Support Independent Devs" isPremium />
                    </ul>

                    {isUserPremium ? (
                        <button className="h-12 w-full rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 cursor-default flex items-center justify-center gap-2">
                            <Icon name="Check" className="w-4 h-4" />
                            Active Plan
                        </button>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={unlockPremium}
                            className="h-12 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
                        >
                            <Icon name="Sparkles" className="w-4 h-4" />
                            Unlock 7-Day Free Trial
                        </motion.button>
                    )}

                    {!isUserPremium && (
                        <p className="text-[10px] text-foreground/40 mt-3 font-medium uppercase tracking-widest">
                            No credit card required (Demo)
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
};

const Feature = ({ text, isPremium }: { text: string, isPremium?: boolean }) => (
    <div className="flex items-center gap-3 text-sm text-foreground/80">
        <div className={cn(
            "p-1 rounded-full flex items-center justify-center",
            isPremium ? "bg-amber-500/20 text-amber-600 dark:text-amber-400" : "bg-foreground/5 text-foreground/40"
        )}>
            <Icon name="Check" className="w-3 h-3" />
        </div>
        <span className={isPremium ? "font-medium" : ""}>{text}</span>
    </div>
);
