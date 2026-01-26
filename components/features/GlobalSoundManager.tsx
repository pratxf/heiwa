"use client";

import { useEffect, useRef } from "react";
import { SOUNDS } from "@/lib/constants";
import { useSoundStore } from "@/store/useSoundStore";

export const GlobalSoundManager = () => {
    const { activeSounds, isGlobalPlaying, masterVolume, isUserPremium } = useSoundStore();

    return (
        <>
            {SOUNDS.map((sound) => (
                <SoundPlayer
                    key={sound.id}
                    sound={sound}
                    activeState={activeSounds[sound.id]}
                    isGlobalPlaying={isGlobalPlaying}
                    masterVolume={masterVolume}
                    isUserPremium={isUserPremium}
                />
            ))}
        </>
    );
};

// Start separate component to manage individual refs/effects
const SoundPlayer = ({
    sound,
    activeState,
    isGlobalPlaying,
    masterVolume,
    isUserPremium
}: {
    sound: any,
    activeState: any,
    isGlobalPlaying: boolean,
    masterVolume: number,
    isUserPremium: boolean
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const isActive = !!activeState;
    const volume = activeState?.volume ?? 0.5;
    const isLocked = sound.isPremium && !isUserPremium;

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = volume * masterVolume;

        if (isActive && isGlobalPlaying && !isLocked) {
            audioRef.current.play().catch(() => {
                // Autoplay policy might block this if no interaction yet
            });
        } else {
            audioRef.current.pause();
            // RESET BEHAVIOR: If turning off (not just pausing globally), reset to start.
            if (!isActive) {
                audioRef.current.currentTime = 0;
            }
        }
    }, [isActive, isGlobalPlaying, volume, masterVolume, isLocked]);

    return <audio ref={audioRef} src={sound.path} loop hidden />;
};
