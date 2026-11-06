"use client";

import React from "react";
import Link from "next/link";
import { companyData, getPhoneLink, getWhatsAppLink } from "@/data/company";
import { Phone, MessageSquare, Send } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-steel-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={getPhoneLink(companyData.phones.primary.raw)}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-navy-800/80 text-white text-[11px] font-medium hover:bg-navy-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-electric-400 mb-0.5" />
          <span>Call Us</span>
        </a>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-700/80 text-white text-[11px] font-medium hover:bg-emerald-600 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-electric-600 text-white text-[11px] font-semibold hover:bg-electric-500 transition-colors"
        >
          <Send className="w-4 h-4 text-white mb-0.5" />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
};
