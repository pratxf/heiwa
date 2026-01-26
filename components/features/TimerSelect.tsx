"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { cn } from "@/lib/utils";

const TIMER_OPTIONS = [
    { label: "10m", value: 10 },
    { label: "25m", value: 25 },
    { label: "45m", value: 45 },
    { label: "60m", value: 60 },
    { label: "∞", value: null },
];

export const TimerSelect = () => {
    const { setTimer, timerDuration } = useSoundStore();
    const currentMinutes = timerDuration ? timerDuration / 60 : null;

    return (
        <div className="flex items-center gap-2 pointer-events-auto">
            {TIMER_OPTIONS.map((option) => {
                const isActive = option.value === currentMinutes;
                return (
                    <button
                        key={option.label}
                        onClick={() => setTimer(option.value)}
                        className={cn(
                            "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border",
                            isActive
                                ? "bg-primary text-white border-primary shadow-[0_0_10px_rgba(131,17,212,0.3)]"
                                : "bg-white/5 border-white/10 text-foreground/40 hover:bg-white/10 hover:border-white/20 hover:text-foreground"
                        )}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};
