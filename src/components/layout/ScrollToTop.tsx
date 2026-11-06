"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-20 sm:bottom-6 left-5 z-30 p-3 rounded-xl bg-navy-900/90 text-steel-200 hover:text-white hover:bg-electric-600 border border-steel-700/80 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
