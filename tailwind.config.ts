import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "moss-green": "#959A6B",
      "raisin-black": "#2D2424",
      "gruvbox-bg": "#1d2021",
      "licorice": "#1A515",
      "van-dyke": "#453636",
      "wenge": "#725A5A",
      "cinereous": "#9C8181",
      "chinese-violet": "#756D94",
      "champagne-pink": "#DCC9BC",
      "papaya-whip": "#FFE9C7",
      "plum": "#7B3D79",
    },
    extend: {
      fontSize: {
        'xs': ['0.9375rem', { lineHeight: '1.5' }],    // 15px
        'sm': ['1.0625rem', { lineHeight: '1.5' }],    // 17px
        'base': ['1.25rem', { lineHeight: '1.6' }],    // 20px
        'lg': ['1.375rem', { lineHeight: '1.6' }],     // 22px
        'xl': ['1.5rem', { lineHeight: '1.5' }],       // 24px
        '2xl': ['1.875rem', { lineHeight: '1.4' }],    // 30px
        '3xl': ['2.25rem', { lineHeight: '1.3' }],     // 36px
        '4xl': ['2.75rem', { lineHeight: '1.2' }],     // 44px
        '5xl': ['3.5rem', { lineHeight: '1.1' }],      // 56px
        '6xl': ['4.5rem', { lineHeight: '1.05' }],     // 72px
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.015em',
        'normal': '-0.01em',  // Slightly tighter default for Geist
      },
      maxWidth: {
        'prose': '65ch',
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
      colors: {},
    },
  },
  plugins: [],
};
export default config;
