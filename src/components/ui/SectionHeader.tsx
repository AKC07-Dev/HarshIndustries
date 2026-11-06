import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "dark" | "light";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = "center",
  variant = "light",
  className = "",
}) => {
  const isCenter = align === "center";
  const isDark = variant === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
            isDark
              ? "bg-electric-500/10 text-electric-300 border border-electric-500/30"
              : "bg-electric-50 text-electric-700 border border-electric-200"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-steel-300" : "text-steel-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
