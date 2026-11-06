import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  size = "md",
  className = "",
}) => {
  const isDark = variant === "dark";

  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 58,
  }[size];

  return (
    <Link
      href="/"
      aria-label="Harsh Industries Homepage"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 rounded-xl p-1 transition-all ${className}`}
    >
      {/* Bold Large Italic Calligraphy "H" Emblem */}
      <div 
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconSizes, height: iconSizes }}
      >
        <svg
          width={iconSizes}
          height={iconSizes}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          <defs>
            {/* Rich Copper-Bronze Calligraphy Gradient */}
            <linearGradient id="hCalligGradient" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#FFA680" />
              <stop offset="35%" stopColor="#D97746" />
              <stop offset="70%" stopColor="#B86D4A" />
              <stop offset="100%" stopColor="#873F20" />
            </linearGradient>

            {/* Industrial Blue Metallic Trim */}
            <linearGradient id="badgeBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#49A2F6" />
              <stop offset="50%" stopColor="#2679C9" />
              <stop offset="100%" stopColor="#173B5E" />
            </linearGradient>

            {/* Soft Ambient Inner Glow */}
            <radialGradient id="hGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B86D4A" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#101C2C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Deep Navy Shield Container */}
          <rect
            x="3"
            y="3"
            width="94"
            height="94"
            rx="22"
            fill="#0E1724"
            stroke="url(#badgeBorder)"
            strokeWidth="2.5"
          />

          {/* Background Radial Glow */}
          <circle cx="50" cy="50" r="42" fill="url(#hGlow)" />

          {/* Subtle Industrial Corner Pins */}
          <circle cx="14" cy="14" r="2" fill="#B86D4A" opacity="0.6" />
          <circle cx="86" cy="14" r="2" fill="#49A2F6" opacity="0.6" />
          <circle cx="14" cy="86" r="2" fill="#49A2F6" opacity="0.6" />
          <circle cx="86" cy="86" r="2" fill="#B86D4A" opacity="0.6" />

          {/* 
            BOLD LARGE ITALIC CALLIGRAPHY "H" 
            Crafted with dynamic broad-pen nib modulation, energetic italic angle, 
            flowing entry/exit flourishes, and an electric crossbar sweep.
          */}
          <g transform="skewX(-14) translate(14, 0)">
            {/* Left Stem (Calligraphic ribbon with thick-to-thin taper and foot terminal) */}
            <path
              d="M 28 16 
                 C 38 12, 46 16, 43 28 
                 L 33 68 
                 C 31 78, 22 86, 12 84 
                 C 20 81, 24 75, 26 66 
                 L 36 26 
                 C 37 20, 32 18, 24 19 
                 Z"
              fill="url(#hCalligGradient)"
            />

            {/* Dynamic Calligraphy Crossbar (Dynamic brush swoop linking left & right stems) */}
            <path
              d="M 31 48 
                 C 42 41, 56 42, 69 47 
                 L 66 54 
                 C 53 49, 41 50, 28 56 
                 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />

            {/* Right Stem (Bold sweeping italic ascender with broad calligraphic crown and elegant tail) */}
            <path
              d="M 60 14 
                 C 72 8, 83 12, 81 24 
                 L 69 68 
                 C 67 76, 72 82, 82 80 
                 C 89 79, 93 74, 95 70 
                 C 93 75, 85 87, 72 88 
                 C 59 89, 57 78, 59 70 
                 L 70 24 
                 C 71 18, 66 16, 56 18 
                 Z"
              fill="url(#hCalligGradient)"
            />

            {/* Subtle Electric Bolt Highlight on Crossbar */}
            <polygon
              points="44,46 54,43 51,48 58,48 47,56 49,50 43,50"
              fill="#FFD285"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold tracking-wider uppercase leading-none text-lg sm:text-xl transition-colors ${
            isDark
              ? "text-navy-900 group-hover:text-electric-600"
              : "text-white group-hover:text-electric-300"
          }`}
          style={{ letterSpacing: "0.06em" }}
        >
          Harsh
        </span>
        <span
          className={`text-[11px] sm:text-[12px] font-heading font-semibold tracking-[0.24em] uppercase leading-tight mt-0.5 ${
            isDark ? "text-steel-600" : "text-steel-300"
          }`}
        >
          Industries
        </span>
        <span className="text-[8px] font-mono tracking-widest text-copper-400 uppercase hidden sm:block">
          Transformers • CT • PT • Jalgaon
        </span>
      </div>
    </Link>
  );
};
