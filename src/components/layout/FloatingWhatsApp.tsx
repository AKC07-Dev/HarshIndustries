"use client";

import React, { useState } from "react";
import { getWhatsAppLink } from "@/data/company";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-3">
      {/* Tooltip Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-navy-900/95 text-white text-xs py-2 px-3.5 rounded-xl border border-steel-700/80 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-3 duration-300">
          <span>Chat with our engineers on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-steel-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Enquiry to Harsh Industries"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 group-hover:opacity-0" />
        <MessageSquare className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
};
