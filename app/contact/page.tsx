"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEnvironment } from "@/components/features/BackgroundEnvironment";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-display">
            <BackgroundEnvironment />
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl w-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
                >
                    <h1 className="text-4xl font-bold text-center mb-2">Get in touch</h1>
                    <p className="text-center text-foreground/60 mb-8">
                        We'd love to hear from you.
                    </p>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 ml-2 mb-1 block">Email</label>
                            <input
                                type="email"
                                placeholder="hello@example.com"
                                className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 ml-2 mb-1 block">Subject</label>
                            <select className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light appearance-none">
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Feature Request</option>
                                <option>Business</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-foreground/50 ml-2 mb-1 block">Message</label>
                            <textarea
                                rows={4}
                                placeholder="How can we help?"
                                className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-light resize-none"
                            />
                        </div>

                        <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold mt-4 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-sm text-foreground/40">
                            Or email us directly at <a href="mailto:support@heiwa.app" className="text-primary hover:underline">support@heiwa.app</a>
                        </p>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
