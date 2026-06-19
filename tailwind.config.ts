import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#112019",
        cream: "#fbf6ec",
        mint: "#1dca9a",
        mist: "#e9f5ef",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 32, 25, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
