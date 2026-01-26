import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#8311d4",
                secondary: "#00d4ff",
                background: "var(--background)",
                foreground: "var(--foreground)",
                "background-light": "var(--background)",
                "background-dark": "var(--background)",
            },
            fontFamily: {
                display: ["var(--font-zen)", "sans-serif"],
                body: ["var(--font-zen)", "sans-serif"],
                sans: ["var(--font-zen)", "sans-serif"],
            },
            borderRadius: {
                lg: "2rem",
                xl: "3rem",
            },
            animation: {
                "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
