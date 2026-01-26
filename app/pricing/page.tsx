"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEnvironment } from "@/components/features/BackgroundEnvironment";
import { PlansDashboard } from "@/components/features/PlansDashboard";
import { useSoundStore } from "@/store/useSoundStore";

export default function PricingPage() {
    // We can reuse the PlansDashboard component
    // If user is premium, the dashboard shows "Active Plan" which is fine.

    return (
        <div className="min-h-screen flex flex-col font-display">
            <BackgroundEnvironment />
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 py-20">
                <div className="w-full max-w-4xl">
                    <PlansDashboard />
                </div>
            </main>

            <Footer />
        </div>
    );
}
