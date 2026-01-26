"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEnvironment } from "@/components/features/BackgroundEnvironment";
import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
    const { isUserPremium, unlockPremium, signOut } = useSoundStore();
    const router = useRouter();
    const [confirmAction, setConfirmAction] = useState<"unsubscribe" | "delete" | null>(null);

    const handleConfirm = () => {
        if (confirmAction === "unsubscribe") {
            // Unsubscribe logic (Mock)
            // setIsUserPremium(false) - need that action exposed or just mock it for now
            console.log("Unsubscribed");
        } else if (confirmAction === "delete") {
            signOut();
            router.push('/');
        }
        setConfirmAction(null);
    };

    return (
        <div className="min-h-screen flex flex-col font-display">
            <BackgroundEnvironment />
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full"
                >
                    <h1 className="text-3xl font-bold mb-8 ml-2">Account Settings</h1>

                    <div className="space-y-6">
                        {/* 1. Personal Detail */}
                        <section className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Icon name="User" className="w-5 h-5 text-primary" />
                                Personal Detail
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 ml-2 mb-1 block">Full Name</label>
                                    <input type="text" defaultValue="Guest User" className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-all font-light" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 ml-2 mb-1 block">Email</label>
                                    <input type="email" defaultValue="guest@example.com" className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-all font-light" />
                                </div>
                            </div>
                            <div className="flex justify-start mt-6">
                                <button className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <Icon name="Save" className="w-4 h-4" />
                                    Save Changes
                                </button>
                            </div>
                        </section>

                        {/* 2. Manage Subscription */}
                        <section className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                <Icon name="Crown" className="w-5 h-5 text-amber-500" />
                                Manage Subscription
                            </h2>

                            <div className="relative z-10">
                                {isUserPremium ? (
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                            <div>
                                                <p className="font-bold text-amber-600 dark:text-amber-400">Premium Plan Active</p>
                                                <p className="text-xs text-foreground/60">Next billing date: Feb 28, 2026</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">ACTIVE</span>
                                        </div>
                                        <button
                                            onClick={() => setConfirmAction("unsubscribe")}
                                            className="w-full md:w-auto px-6 py-3 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors text-sm font-bold flex items-center justify-center gap-2"
                                        >
                                            <Icon name="XCircle" className="w-4 h-4" />
                                            Unsubscribe Plan
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-4">
                                        <p className="text-foreground/80">You are currently on the <span className="font-bold">Free Plan</span>.</p>
                                        <button
                                            onClick={() => router.push('/pricing')}
                                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform text-sm"
                                        >
                                            Choose a Plan
                                        </button>
                                    </div>
                                )}
                            </div>

                            {isUserPremium && (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />
                            )}
                        </section>

                        {/* 3. Account Security */}
                        <section className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Icon name="ShieldCheck" className="w-5 h-5 text-green-500" />
                                Account Security
                            </h2>

                            <div className="space-y-6">
                                {/* Change Password */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/50 ml-2">Change Password</h3>
                                    <div className="space-y-4">
                                        <input type="password" placeholder="Old Password" className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-all font-light" />
                                        <input type="password" placeholder="New Password" className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-all font-light" />
                                    </div>
                                    <button className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                        <Icon name="Save" className="w-4 h-4" />
                                        Save Changes
                                    </button>
                                </div>

                                <div className="w-full h-px bg-black/5 dark:bg-white/5" />

                                {/* Delete Account */}
                                <div className="flex items-center justify-between">
                                    <div className="max-w-xs">
                                        <p className="font-bold text-foreground">Delete Account</p>
                                        <p className="text-xs text-foreground/50">Permanently remove your data and access.</p>
                                    </div>
                                    <button
                                        onClick={() => setConfirmAction("delete")}
                                        className="px-6 py-2.5 rounded-full border border-red-500/30 text-red-500 hover:bg-red-500/10 text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                                    >
                                        <Icon name="Trash2" className="w-4 h-4" />
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Sign Out (Global Action) */}
                        <div className="flex justify-center pt-8">
                            <button
                                onClick={() => { signOut(); router.push('/'); }}
                                className="px-8 py-3 rounded-full bg-white dark:bg-zinc-800 text-foreground text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all border border-black/5 dark:border-white/5 flex items-center gap-2"
                            >
                                <Icon name="LogOut" className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Confirmation Modal */}
                <AnimatePresence>
                    {confirmAction && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setConfirmAction(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            {/* Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4 text-red-500">
                                        <Icon name="AlertTriangle" className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {confirmAction === "unsubscribe" ? "Unsubscribe Plan?" : "Delete Account?"}
                                    </h3>

                                    <p className="text-sm text-foreground/60 mb-6">
                                        {confirmAction === "unsubscribe"
                                            ? "You will lose access to premium sounds and features at the end of your billing cycle."
                                            : "This action is permanent. All your data, settings, and history will be essentially erased."}
                                    </p>

                                    <div className="flex gap-3 w-full">
                                        <button
                                            onClick={() => setConfirmAction(null)}
                                            className="flex-1 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-foreground font-medium transition-colors text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleConfirm}
                                            className="flex-1 h-10 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-colors text-sm shadow-lg shadow-red-500/20"
                                        >
                                            {confirmAction === "unsubscribe" ? "Unsubscribe" : "Delete"}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}
