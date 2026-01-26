import { cn } from "@/lib/utils";

export const HeiwaLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 80"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-10 h-10 text-primary dark:text-white", className)}
        >
            {/* Left Vertical Curve */}
            <path
                d="M25 15 C 20 25, 20 55, 25 65 L 35 65 C 30 55, 30 25, 35 15 Z"
            />
            {/* Right Vertical Curve */}
            <path
                d="M75 15 C 80 25, 80 55, 75 65 L 65 65 C 70 55, 70 25, 65 15 Z"
            />
            {/* Horizontal Bridge (Smile) */}
            <path
                d="M10 35 C 40 45, 60 45, 90 35 L 90 45 C 60 55, 40 55, 10 45 Z"
            />
        </svg>
    );
};
