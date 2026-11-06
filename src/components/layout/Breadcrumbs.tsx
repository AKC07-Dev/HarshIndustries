import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  variant = "light",
  className = "",
}) => {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`py-3 text-xs ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              isDark
                ? "text-steel-400 hover:text-white"
                : "text-steel-500 hover:text-navy-900"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 ${
                  isDark ? "text-steel-600" : "text-steel-400"
                }`}
              />
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`font-semibold ${
                    isDark ? "text-electric-300" : "text-navy-900"
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-steel-400 hover:text-white"
                      : "text-steel-600 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
