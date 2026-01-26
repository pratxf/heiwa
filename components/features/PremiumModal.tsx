"use client";

import { Modal } from "@/components/ui/Modal";
import { useModalStore } from "@/store/useModalStore";
import { useSoundStore } from "@/store/useSoundStore";
import { Icon } from "@/components/ui/Icon";

import { HeiwaLogo } from "@/components/ui/HeiwaLogo";

export const PremiumModal = () => {
    const { activeModal, closeModal } = useModalStore();
    const { unlockPremium } = useSoundStore();

    const handleUnlock = () => {
        unlockPremium();
        closeModal();
    };

    return (
        <Modal
            isOpen={activeModal === "PREMIUM"}
            onClose={closeModal}
            className="text-center"
        >
            <div className="flex flex-col items-center gap-4">
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-lg shadow-amber-500/20 mb-2">
                    <HeiwaLogo className="w-10 h-10 text-amber-500" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-display tracking-tight">
                        Unlock Premium
                    </h2>
                    <p className="text-foreground/60 leading-relaxed font-light">
                        Get access to exclusive high-quality soundscapes like Baltic Shoreline, Blue Piano, and more.
                    </p>
                </div>

                {/* Features List */}
                <div className="w-fit mx-auto space-y-3 py-4">
                    <FeatureItem text="Unlimited High-Fidelity Sounds" />
                    <FeatureItem text="Background Play & Mixing" />
                    <FeatureItem text="Support Independent Creators" />
                </div>

                {/* Actions */}
                <button
                    onClick={handleUnlock}
                    className="w-full h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <Icon name="Sparkles" className="w-4 h-4" />
                    Unlock Forever (Free Demo)
                </button>

                <p className="text-xs text-foreground/40 mt-2">
                    This is a demo. No payment required.
                </p>
            </div>
        </Modal>
    );
};

const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 text-sm text-foreground/80 text-left">
        <div className="p-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
            <Icon name="Check" className="w-3 h-3" />
        </div>
        <span>{text}</span>
    </div>
);
