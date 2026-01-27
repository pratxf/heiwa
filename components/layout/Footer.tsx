"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";
import { HeiwaLogo } from "@/components/ui/HeiwaLogo";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const links = [
        { name: 'Home', href: '/' },
        // { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms', href: '/terms' }
    ];

    return (
        <footer className="w-full relative z-10 mt-8 pb-2">
            {/* Glass Container */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative rounded-[3rem] overflow-hidden bg-white/5 dark:bg-black/20 backdrop-blur-2xl border border-white/10 p-6 md:p-8 flex flex-col items-center text-center">

                    {/* Top Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                    {/* Logo */}
                    <div className="mb-6 scale-125">
                        <div className="flex items-center justify-center gap-3">
                            <HeiwaLogo className="w-10 h-8" />
                            <span className="text-3xl font-display font-bold text-foreground tracking-tight">Heiwa</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        {links.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mb-8">
                        {['Instagram', 'Facebook', 'BrandX'].map((icon) => {
                            const isInsta = icon === 'Instagram';
                            return (
                                <motion.button
                                    key={icon}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-full bg-white/5 border border-white/5 text-foreground/60 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-lg will-change-transform"
                                >
                                    <Icon
                                        name={icon}
                                        className={`w-5 h-5 ${isInsta ? "" : "fill-current"}`}
                                        strokeWidth={isInsta ? 2 : 0}
                                    />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Bottom Line */}
                    <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    {/* Copyright & Scroll Top */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl gap-4">
                        <p className="text-xs text-foreground/30 font-medium">
                            © {new Date().getFullYear()} Heiwa Inc. All rights reserved.
                        </p>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-xs font-bold text-foreground/40 hover:text-primary transition-colors group"
                        >
                            Back to Top
                            <Icon name="ArrowUp" className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
};
