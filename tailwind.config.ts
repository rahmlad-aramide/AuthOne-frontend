import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#5C4EDE' /* purple */,
        secondary: '#DE4EAC' /* pink */,
        tertiary: '#5BBE8A' /* green */,
        dark: '#292D32',
      },
      maxWidth: {
        "8xl": "1400px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'slide-in': {
          '0%': { transform: 'translateY(50%)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "1" },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)', opacity: "1" },
          '100%': { transform: 'translateY(-50%)', opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'slide-in': 'slide-in 0.2s ease-in-out forwards',
        'slide-out': 'slide-out 0.2s ease-in-out forwards',
      },
      backgroundImage: {
        heroBg: "url('/images/hero-bg.png')",
        gradientProcess: 'linear-gradient(360deg, #22262C 0%, #433E88 50%, #5C4EDE 100%)',
        seamlessBg: "url('/images/bg-seamless2.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config