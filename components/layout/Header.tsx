"use client";

import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { HeiwaLogo } from "@/components/ui/HeiwaLogo";
import { ThemeToggle } from "./ThemeToggle";

import { useRouter } from "next/navigation";

export const Header = () => {
    const { resetApp, setView, isUserPremium, openAuthModal, isLoggedIn } = useSoundStore();
    const router = useRouter();

    return (
        <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-6 w-full max-w-[1200px] mx-auto z-50 relative">
            {/* Logo Section */}
            <div
                className="flex items-center gap-1 text-foreground cursor-pointer group"
                onClick={() => {
                    resetApp();
                    router.push('/');
                }}
            >
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <HeiwaLogo className="w-10 h-10" />
                </div>
                <h2 className="text-foreground text-xl font-bold tracking-tight">Heiwa</h2>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 md:gap-8">
                <nav className="flex items-center gap-4 hidden md:flex">
                    <ThemeToggle />

                    {!isUserPremium && (
                        <button
                            onClick={() => router.push('/pricing')}
                            className="flex items-center justify-center rounded-full h-10 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/25"
                        >
                            Get Premium
                        </button>
                    )}

                    {isLoggedIn ? (
                        <button
                            onClick={() => router.push('/profile')}
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all ring-2 ring-white/10"
                        >
                            <Icon name="User" className="w-5 h-5" />
                        </button>
                    ) : (
                        // Hidden for now: Enable when needed
                        false && (
                            <button
                                onClick={openAuthModal}
                                className="flex items-center justify-center rounded-full h-10 px-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-foreground text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                            >
                                Sign In
                            </button>
                        )
                    )}
                </nav>

                {/* Mobile: Show Toggle + Menu */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button className="text-foreground">
                        <Icon name="Menu" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};
