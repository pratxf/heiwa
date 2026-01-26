"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEnvironment } from "@/components/features/BackgroundEnvironment";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col font-display">
            <BackgroundEnvironment />
            <Header />

            <main className="flex-grow relative z-10 px-6 py-20">
                <div className="max-w-3xl mx-auto bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                    <div className="prose prose-sm md:prose-base dark:prose-invert text-foreground/80 max-w-none space-y-6">
                        <section>
                            <h3 className="text-xl font-bold text-foreground">1. Introduction</h3>
                            <p>Welcome to Heiwa. By using our application, you agree to these terms. Please read them carefully.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-foreground">2. Usage Rights</h3>
                            <p>Heiwa grants you a personal, non-exclusive license to use the app for personal meditation and relaxation. You may not distribute our sound assets.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-foreground">3. Premium Subscriptions</h3>
                            <p>Premium features are available via monthly subscription. Payment is charged at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-foreground">4. Privacy</h3>
                            <p>We respect your privacy. We do not sell your data. See our Privacy Policy for more details.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-foreground">5. Disclaimer</h3>
                            <p>Heiwa is a wellness tool, not a medical device. Consult a healthcare professional for medical advice.</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
