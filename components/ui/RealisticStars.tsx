"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const RealisticStars = () => {
    const [stars, setStars] = useState<any[]>([]);

    useEffect(() => {
        const starCount = 200;
        const newStars = [];

        for (let i = 0; i < starCount; i++) {
            const randomSize = Math.random();
            let sizeClass = "small";
            if (randomSize >= 0.6 && randomSize < 0.9) sizeClass = "medium";
            if (randomSize >= 0.9) sizeClass = "large";

            newStars.push({
                id: i,
                size: sizeClass,
                top: Math.random() * 100,
                left: Math.random() * 100,
                duration: 2 + Math.random() * 4,
                delay: Math.random() * 5
            });
        }
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <style jsx>{`
                /* --- Star Styles --- */
                .star {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    opacity: 0;
                    box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
                }

                .star.small { width: 1px; height: 1px; }
                .star.medium { width: 2px; height: 2px; box-shadow: 0 0 4px rgba(255, 255, 255, 0.6); }
                .star.large { width: 3px; height: 3px; box-shadow: 0 0 6px rgba(255, 255, 255, 0.8); }

                @keyframes shimmer {
                    0% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 10px rgba(255, 255, 255, 1); }
                    100% { opacity: 0.2; transform: scale(0.8); }
                }

                /* --- Shooting Star Styles --- */
                .shooting-star {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 
                                0 0 0 8px rgba(255, 255, 255, 0.1), 
                                0 0 20px rgba(255, 255, 255, 1);
                    animation: shoot 3s linear infinite;
                    opacity: 0;
                }

                .shooting-star::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 300px;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(255,255,255,1), transparent);
                }

                @keyframes shoot {
                    0% { transform: rotate(315deg) translateX(0); opacity: 1; }
                    70% { opacity: 1; }
                    100% { transform: rotate(315deg) translateX(-1500px); opacity: 0; }
                }
            `}</style>

            {/* Stars */}
            {stars.map((s) => (
                <div
                    key={s.id}
                    className={cn("star", s.size)}
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        animation: `shimmer ${s.duration}s infinite ease-in-out ${s.delay}s`
                    }}
                />
            ))}

            {/* Shooting Stars */}
            <div className="shooting-star" style={{ top: '0%', left: '50%', animationDelay: '2s' }}></div>
            <div className="shooting-star" style={{ top: '20%', left: '80%', animationDelay: '7s', animationDuration: '4s' }}></div>
            <div className="shooting-star" style={{ top: '60%', left: '90%', animationDelay: '12s', animationDuration: '5s' }}></div>
            {/* Extra random ones */}
            <div className="shooting-star" style={{ top: '10%', left: '20%', animationDelay: '15s', animationDuration: '6s' }}></div>
        </div>
    );
};
