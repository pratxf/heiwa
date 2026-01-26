"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { useEffect } from "react";
import { AuthModal } from "@/components/features/AuthModal";
import { PremiumModal } from "@/components/features/PremiumModal";

/**
 * Handles global app logic like:
 * - Timer ticking
 * - Session completion cleanup
 * - Audio cleanup on unmount
 * - Global Modals
 */
export const GlobalLogic = () => {
    const { isTimerActive, tickTimer, stopAll } = useSoundStore();

    // Timer Ticker
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isTimerActive) {
            interval = setInterval(() => {
                tickTimer();
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isTimerActive, tickTimer]);

    // Handle Unmount / Cleanup if needed
    // (Next.js preserves state on nav usually, but good practice)
    useEffect(() => {
        return () => {
            // Optional: stopAll() on hard unmount? 
            // Better to let state persist unless explicitly reset.
        };
    }, []);

    return (
        <>
            <AuthModal />
            <PremiumModal />
        </>
    );
};
