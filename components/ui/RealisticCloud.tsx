"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CloudProps {
    className?: string;
    opacity?: number;
}

export const RealisticCloud = ({ className, opacity = 1 }: CloudProps) => {
    return (
        <div className={cn("relative", className)} style={{ opacity }}>
            <style jsx>{`
                .cloud-wrapper {
                    position: relative;
                    animation: float 8s ease-in-out infinite;
                }

                /* The main cloud base */
                .cloud {
                    width: 350px;
                    height: 120px;
                    /* Subtle gradient for volume */
                    background: linear-gradient(to bottom, #fff 5%, #f1f1f1 100%);
                    border-radius: 100px;
                    position: relative;
                    z-index: 10;
                }

                /* Common styles for all cloud puffs */
                .cloud::after, .cloud::before, .cloud-puff {
                    content: '';
                    position: absolute;
                    background: inherit; /* Inherit the gradient */
                    border-radius: 50%;
                    position: absolute;
                }

                /* Left puff */
                .cloud::after {
                    width: 100px;
                    height: 100px;
                    top: -50px;
                    left: 50px;
                }

                /* Right big puff */
                .cloud::before {
                    width: 180px;
                    height: 180px;
                    top: -90px;
                    right: 50px;
                }

                /* Extra puff to break symmetry */
                .cloud-puff {
                    width: 130px;
                    height: 130px;
                    top: -70px;
                    left: 130px;
                    background: #fff; /* Highlight on top center */
                }

                /* Animation Keyframes */
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>

            <div className="cloud-wrapper scale-50 md:scale-75 lg:scale-100 origin-center">
                <div className="cloud">
                    <div className="cloud-puff"></div>
                </div>
            </div>
        </div>
    );
};
