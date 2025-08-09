import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "moss-green": "#959A6B",
        "raisin-black": "#2D2424",
        // Fixed typo: previously "#1A515" (invalid). Using deep near-black brown.
        "licorice": "#1A1515",
        "van-dyke": "#453636",
        "wenge": "#725A5A",
        "cinereous": "#9C8181",
        "chinese-violet": "#756D94",
        "champagne-pink": "#DCC9BC",
        "papaya-whip": "#FFE9C7",
        "plum": "#7B3D79",
        "burnt-orange": "#CC5500",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite'
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
