import { create } from 'zustand';
import { Category } from '@/lib/constants';

interface SoundState {
    volume: number; // 0-1
}

type ViewState = "Sounds" | "Community" | "About" | "Plans";

interface AppState {
    // Sound State
    activeSounds: Record<string, SoundState>;
    masterVolume: number;
    isGlobalPlaying: boolean;

    // Category State
    activeCategory: Category;
    sortOrder: "popular" | "az";

    // Timer State
    timerDuration: number | null; // in seconds
    remainingTime: number | null; // in seconds
    isTimerActive: boolean;
    isSessionComplete: boolean;

    // View State
    activeView: ViewState;

    // User State
    isUserPremium: boolean;
    isLoggedIn: boolean;
    signIn: () => void;
    signOut: () => void;

    // Actions
    toggleSound: (id: string, initialVolume?: number) => void;
    setSoundVolume: (id: string, volume: number) => void;
    setMasterVolume: (volume: number) => void;
    toggleGlobalPlay: () => void;
    stopAll: () => void;
    setCategory: (category: Category) => void;
    setSortOrder: (order: "popular" | "az") => void;

    // Timer Actions
    setTimer: (durationMinutes: number | null) => void;
    tickTimer: () => void; // Call every second
    stopTimer: () => void;

    // View Actions
    setView: (view: ViewState) => void;
    resetApp: () => void;

    // User Actions
    unlockPremium: () => void;

    // Auth Modal
    isAuthModalOpen: boolean;
    openAuthModal: () => void;
    closeAuthModal: () => void;
}

export const useSoundStore = create<AppState>((set, get) => ({
    // Initial State
    activeSounds: {},
    masterVolume: 0.8,
    isGlobalPlaying: false,
    activeCategory: "All",
    sortOrder: "popular",
    timerDuration: null,
    remainingTime: null,
    isTimerActive: false,
    activeView: "Sounds",
    isUserPremium: true,
    isLoggedIn: false,

    // Sound Actions
    toggleSound: (id, initialVolume = 0.5) => set((state) => {
        const isActive = !!state.activeSounds[id];
        const newActiveSounds = { ...state.activeSounds };

        if (isActive) {
            delete newActiveSounds[id];
            if (Object.keys(newActiveSounds).length === 0) {
                return { activeSounds: newActiveSounds, isGlobalPlaying: false };
            }
            return { activeSounds: newActiveSounds };
        } else {
            // New sound, if session was complete, reset it
            const wasComplete = state.isSessionComplete;
            return {
                activeSounds: { ...newActiveSounds, [id]: { volume: initialVolume } },
                isGlobalPlaying: true,
                isSessionComplete: false,
                // Resume timer if it was set but paused? Or just keep it as is.
                // Logic: If timer exists and we start playing, timer should resume if it wasn't complete
                isTimerActive: state.remainingTime !== null && state.remainingTime > 0
            };
        }
    }),

    setSoundVolume: (id, volume) => set((state) => ({
        activeSounds: {
            ...state.activeSounds,
            [id]: { ...state.activeSounds[id], volume }
        }
    })),

    setMasterVolume: (volume) => set({ masterVolume: volume }),

    toggleGlobalPlay: () => set((state) => {
        const isPlaying = !state.isGlobalPlaying;
        // If we start playing and have a timer set, resume timer
        const shouldTimerRun = isPlaying && state.remainingTime !== null && state.remainingTime > 0;
        return { isGlobalPlaying: isPlaying, isTimerActive: shouldTimerRun };
    }),

    stopAll: () => set({ activeSounds: {}, isGlobalPlaying: false, isTimerActive: false }),

    setCategory: (category) => set({ activeCategory: category }),
    setSortOrder: (order) => set({ sortOrder: order }),

    // Timer Actions
    setTimer: (minutes) => {
        if (minutes === null) {
            set({ timerDuration: null, remainingTime: null, isTimerActive: false, isSessionComplete: false });
            return;
        }
        const seconds = minutes * 60; // Logic for test: minutes * 60
        // If infinity (e.g. -1 passed), handle differently, but here we assume minutes or null
        // If custom (number > 60 usually or handled by component), minute logic still applies
        // But previously I passed custom MINUTES. So this is fine.
        set({
            timerDuration: seconds,
            remainingTime: seconds,
            isTimerActive: get().isGlobalPlaying, // Only active if playing
            isSessionComplete: false
        });
    },

    tickTimer: () => set((state) => {
        if (!state.isTimerActive || state.remainingTime === null) return {};

        const newTime = state.remainingTime - 1;

        if (newTime <= 0) {
            // Session Complete
            return {
                remainingTime: 0,
                isTimerActive: false,
                isSessionComplete: true,
                isGlobalPlaying: false // Stop playing
                // Ideally we fade out here, but simple stop for now logic
            };
        }

        return { remainingTime: newTime };
    }),

    stopTimer: () => set({ isTimerActive: false }),

    // View Actions
    setView: (view) => set({ activeView: view }),

    resetApp: () => set({
        activeSounds: {},
        isGlobalPlaying: false,
        timerDuration: null,
        remainingTime: null,
        isTimerActive: false,
        isSessionComplete: false,
        activeView: "Sounds",
        masterVolume: 0.8,
        activeCategory: "All",
        sortOrder: "popular"
    }),

    // User Actions
    unlockPremium: () => set({ isUserPremium: true }),
    signIn: () => set({ isLoggedIn: true }),
    signOut: () => set({ isLoggedIn: false, isUserPremium: false }), // Sign out resets premium for demo? Or just login. Let's keep premium separate for now but usually logout clears it. I'll clear it.

    // Auth Actions
    isAuthModalOpen: false,
    openAuthModal: () => set({ isAuthModalOpen: true }),
    closeAuthModal: () => set({ isAuthModalOpen: false })
}));
