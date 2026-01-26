"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { HeiwaLogo } from "@/components/ui/HeiwaLogo";

export const AuthModal = () => {
    const { isAuthModalOpen, closeAuthModal, signIn } = useSoundStore();
    const [mode, setMode] = useState<"signin" | "signup">("signin");

    return (
        <AnimatePresence>
            {isAuthModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAuthModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Background Effect */}
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={closeAuthModal}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-zinc-400 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Icon name="X" className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                                <HeiwaLogo className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-2xl font-bold font-display text-zinc-900 dark:text-white mb-2">
                                {mode === "signin" ? "Welcome Back" : "Create Account"}
                            </h2>
                            <p className="text-zinc-500 dark:text-white/60 text-center text-sm mb-8 max-w-xs">
                                {mode === "signin"
                                    ? "Continue your journey to mindfulness and peace."
                                    : "Join Heiwa and track your mindful moments."}
                            </p>

                            {/* Social Login */}
                            <div className="w-full mb-8">
                                <button
                                    onClick={() => { signIn(); closeAuthModal(); }}
                                    className="w-full flex items-center justify-center gap-3 h-12 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-white font-medium text-sm group"
                                >
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Continue with Google
                                </button>
                            </div>

                            <div className="relative w-full mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-zinc-200 dark:border-white/10" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white dark:bg-zinc-900 px-2 text-zinc-400 dark:text-white/40">Or continue with</span>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); signIn(); closeAuthModal(); }}>
                                {mode === "signup" && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-zinc-500 dark:text-white/60 ml-1">Name</label>
                                        <input
                                            type="text"
                                            className="w-full h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 text-zinc-900 dark:text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-zinc-500 dark:text-white/60 ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 text-zinc-900 dark:text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-white/20"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-zinc-500 dark:text-white/60 ml-1">Password</label>
                                    <input
                                        type="password"
                                        className="w-full h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 text-zinc-900 dark:text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-white/20"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/25 mt-2">
                                    {mode === "signin" ? "Sign In" : "Sign Up"}
                                </button>
                            </form>

                            {/* Toggle Mode */}
                            <p className="mt-6 text-sm text-zinc-500 dark:text-white/60">
                                {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                                    className="text-primary hover:text-primary/80 font-medium hover:underline"
                                >
                                    {mode === "signin" ? "Sign Up" : "Sign In"}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
