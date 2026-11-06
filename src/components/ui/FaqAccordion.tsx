"use client";

import React, { useState } from "react";
import { FAQItem } from "@/types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqAccordionProps {
  faqs: FAQItem[];
  variant?: "dark" | "light";
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  faqs,
  variant = "light",
}) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const isDark = variant === "dark";

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isDark
                ? isOpen
                  ? "bg-navy-900/90 border-steel-700 shadow-lg"
                  : "bg-navy-950/60 border-steel-800/80 hover:border-steel-700"
                : isOpen
                ? "bg-white border-electric-300 shadow-md"
                : "bg-white/80 border-steel-200 hover:border-steel-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
            >
              <span
                className={`font-heading text-sm sm:text-base font-semibold transition-colors flex items-center gap-3 ${
                  isDark
                    ? isOpen
                      ? "text-electric-300"
                      : "text-white"
                    : isOpen
                    ? "text-electric-700"
                    : "text-navy-900"
                }`}
              >
                <HelpCircle
                  className={`w-4 h-4 shrink-0 ${
                    isOpen ? "text-copper-500" : "text-steel-400"
                  }`}
                />
                <span>{faq.question}</span>
              </span>

              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-electric-500" : "text-steel-400"
                }`}
              />
            </button>

            {isOpen && (
              <div
                className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                  isDark
                    ? "text-steel-300 border-steel-800/80"
                    : "text-steel-600 border-steel-100"
                } animate-in fade-in duration-200`}
              >
                <p className="pl-7">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
