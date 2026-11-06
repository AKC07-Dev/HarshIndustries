import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#09101A",
          900: "#0D1724",
          850: "#101C2C", // Deep navy primary
          800: "#14253B",
          700: "#173B5E", // Industrial blue primary
          600: "#1E4C7A",
          500: "#2B6B9B",
        },
        electric: {
          50: "#EDF6FF",
          100: "#D6ECFE",
          200: "#B3DBFD",
          300: "#80C2FB",
          400: "#49A2F6",
          500: "#2679C9", // Electric blue primary
          600: "#1E63A6",
          700: "#174C80",
          800: "#11375D",
          900: "#0B233C",
        },
        copper: {
          50: "#FDF7F4",
          100: "#FBECE6",
          200: "#F7D8CC",
          300: "#EFBAA6",
          400: "#E39478",
          500: "#B86D4A", // Copper accent
          600: "#A25A38",
          700: "#84472A",
          800: "#683823",
          900: "#4E2919",
        },
        steel: {
          50: "#F7F9FC", // Off-white
          100: "#E8EDF2", // Light silver
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B", // Steel grey
          500: "#475569",
          600: "#334155",
          700: "#1E293B",
          800: "#0F172A",
          900: "#070D18",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(16, 28, 44, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(38, 121, 201, 0.2)',
        'copper': '0 4px 20px 0 rgba(184, 109, 74, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
