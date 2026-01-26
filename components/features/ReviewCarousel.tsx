"use client";

import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";

const REVIEWS = [
    {
        id: 1,
        text: "When I cannot fall asleep, I turn on this app and am out within 5 minutes. It's truly magical.",
        author: "Sarah from Tokyo",
        stars: 5,
    },
    {
        id: 2,
        text: "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.",
        author: "James from London",
        stars: 5,
    },
    {
        id: 3,
        text: "Heiwa has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself.",
        author: "Elena from Madrid",
        stars: 5,
    },
    {
        id: 4,
        text: "Whenever I need to unwind from a stressful work day I meditate with Heiwa's soundscapes and it automatically sends me to my happy place.",
        author: "Michael from New York",
        stars: 5,
    },
    {
        id: 5,
        text: "The sound quality is unmatched. I feel like I'm actually in a zen garden. Worth every penny for Premium.",
        author: "Yuki from Kyoto",
        stars: 5,
    }
];

// Duplicate reviews to create seamless loop
const MARQUEE_REVIEWS = [...REVIEWS, ...REVIEWS, ...REVIEWS];

export const ReviewCarousel = () => {
    return (
        <section className="w-full max-w-full overflow-hidden relative z-10 flex flex-col items-center gap-8">

            {/* Header */}
            <div className="text-center space-y-4 px-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground/90">
                    Loved by thousands of <span className="text-primary">happy minds</span>
                </h2>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-bold text-foreground">4.8</span>
                    <div className="flex text-amber-500 gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Icon key={s} name="Star" className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                    <span className="text-foreground/60 ml-2 text-sm">(2,400+ Reviews)</span>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full flex">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                {/* Marquee Track */}
                <motion.div
                    className="flex gap-6 pl-4"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Slower speed for readability
                    }}
                >
                    {MARQUEE_REVIEWS.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="min-w-[300px] md:min-w-[350px] rounded-3xl p-8 relative overflow-hidden md:backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg md:shadow-xl flex flex-col justify-between h-[360px] bg-white/90 dark:bg-zinc-900/90 md:bg-white/50 md:dark:bg-black/20 transition-colors will-change-transform"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-6 opacity-10 text-foreground">
                                <Icon name="Quote" className="w-12 h-12 fill-current" strokeWidth={0} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 pt-8">
                                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
                                    "{review.text}"
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="relative z-10 mt-6 pt-6 border-t border-black/5 dark:border-white/10">
                                <div className="flex mb-2 gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Icon key={s} name="Star" className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <p className="font-bold text-sm text-foreground">{review.author}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
