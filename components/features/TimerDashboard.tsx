"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { useState } from "react";

const PRESETS = [
    { label: "5m", value: 5 },
    { label: "15m", value: 15 },
    { label: "30m", value: 30 },
    { label: "1h", value: 60 },
    { label: "Custom", value: "custom" }, // Custom flag
    { label: "∞", value: null },
];

export const TimerDashboard = () => {
    const { setTimer, timerDuration, isTimerActive, remainingTime, isGlobalPlaying, toggleGlobalPlay } = useSoundStore();

    // Local state for custom input
    const [isCustomMode, setIsCustomMode] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    // Convert total minutes for active state
    const currentMinutes = timerDuration ? timerDuration / 60 : null;

    // Display Logic
    const displaySeconds = isTimerActive && remainingTime !== null
        ? remainingTime
        : (timerDuration
            ? timerDuration
            : (isCustomMode ? (hours * 3600 + minutes * 60 + seconds) : 0)
        );

    const dH = Math.floor(displaySeconds / 3600);
    const dM = Math.floor((displaySeconds % 3600) / 60);
    const dS = Math.floor(displaySeconds % 60);

    const fmt = (n: number) => n.toString().padStart(2, '0');

    // Handle Reset
    const handleReset = () => {
        setTimer(null);
        setIsCustomMode(false);
    };

    const handleCustomStart = () => {
        const totalMin = (hours * 60) + minutes + (seconds / 60);
        if (totalMin > 0) {
            setTimer(totalMin);
            // Hide custom inputs once started? Or keep active?
            // Design usually hides inputs when running.
            setIsCustomMode(false);
        }
    };

    const handlePresetClick = (value: number | string | null) => {
        if (value === "custom") {
            setTimer(null);
            setIsCustomMode(true);
        } else {
            setIsCustomMode(false);
            setTimer(value as number | null);
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-8 px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground/90">
                Mindful <span className="text-primary">Timer</span>
            </h2>

            <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-8 rounded-[2.5rem] glass-panel text-foreground shadow-2xl relative overflow-hidden transition-all duration-500 border border-white/5">

                {/* Header: Timer Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 w-full">
                    {PRESETS.map((p) => {
                        const isActive = p.value === "custom" ? isCustomMode : p.value === currentMinutes;
                        return (
                            <button
                                key={p.label}
                                onClick={() => handlePresetClick(p.value)}
                                className={cn(
                                    "relative px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 border",
                                    isActive
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                                        : "bg-white/5 border-white/5 text-foreground/50 hover:text-foreground hover:bg-white/10"
                                )}
                            >
                                {p.label}
                            </button>
                        );
                    })}
                </div>

                {/* Active Pill Status */}
                {timerDuration && (
                    <div className={cn(
                        "mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500",
                        !isGlobalPlaying && "opacity-80"
                    )}>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground transition-colors group"
                        >
                            <span className="font-mono text-sm tracking-widest tabular-nums text-primary font-bold">
                                {fmt(dH)}:{fmt(dM)}:{fmt(dS)}
                            </span>
                            <Icon name="X" className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                )}

                {/* Custom Inputs */}
                {isCustomMode && !timerDuration && (
                    <div className="flex items-center gap-4 mb-8 scale-90 md:scale-100 animate-in fade-in zoom-in duration-300">
                        <InputGroup label="Hr" value={hours} onChange={setHours} max={23} />
                        <span className="text-2xl font-serif text-foreground/20 pb-6">:</span>
                        <InputGroup label="Min" value={minutes} onChange={setMinutes} max={59} />
                        <span className="text-2xl font-serif text-foreground/20 pb-6">:</span>
                        <InputGroup label="Sec" value={seconds} onChange={setSeconds} max={59} />
                    </div>
                )}

                {/* Big Display (Only show if NOT in custom mode or if Timer is Active) */}
                {(!isCustomMode || timerDuration) && (
                    <div className="font-serif text-8xl md:text-9xl tracking-wider mb-8 text-foreground drop-shadow-sm tabular-nums select-none opacity-90">
                        {fmt(dH)}:{fmt(dM)}:{fmt(dS)}
                    </div>
                )}

                <p className="text-foreground/40 text-xs font-medium tracking-[0.2em] uppercase mb-12">
                    {timerDuration
                        ? (isGlobalPlaying ? "Focus Mode Active" : "Timer Paused")
                        : (isCustomMode ? "Set Custom Duration" : "Ready to Focus")
                    }
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 w-full max-w-xs">
                    {/* Custom Start */}
                    {isCustomMode && !timerDuration && (
                        <button
                            onClick={handleCustomStart}
                            className="flex-1 h-14 rounded-2xl bg-primary text-white font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group animate-in slide-in-from-bottom-2"
                        >
                            <Icon name="Play" className="w-5 h-5 fill-current" />
                            <span className="text-sm tracking-wide">Start Timer</span>
                        </button>
                    )}

                    {/* Play/Pause (Only if timer set) */}
                    {timerDuration && (
                        <button
                            onClick={toggleGlobalPlay}
                            className="flex-1 h-14 rounded-2xl bg-primary text-white font-medium flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 hover:bg-primary/90 group"
                        >
                            <Icon name={isGlobalPlaying ? "Pause" : "Play"} className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                            <span className="text-sm tracking-wide">{isGlobalPlaying ? "Pause" : "Resume"}</span>
                        </button>
                    )}

                    {/* Reset */}
                    {(timerDuration || isCustomMode) && (
                        <button
                            onClick={handleReset}
                            className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 text-foreground/60 flex items-center justify-center hover:bg-white/10 hover:text-foreground transition-all hover:rotate-180 duration-500"
                            title="Reset"
                        >
                            <Icon name="RotateCcw" className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper for inputs
const InputGroup = ({ label, value, onChange, max }: any) => {
    return (
        <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-2xl border border-white/5 items-center min-w-[80px]">
            <span className="text-[10px] text-foreground/40 uppercase tracking-wider">{label}</span>
            <div className="flex flex-col items-center gap-2">
                <button onClick={() => onChange(Math.min(max, value + 1))} className="text-foreground/30 hover:text-primary transition-colors p-1">
                    <Icon name="ChevronUp" className="w-4 h-4" />
                </button>
                <span className="text-3xl font-serif text-foreground tabular-nums">{value.toString().padStart(2, '0')}</span>
                <button onClick={() => onChange(Math.max(0, value - 1))} className="text-foreground/30 hover:text-primary transition-colors p-1">
                    <Icon name="ChevronDown" className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
