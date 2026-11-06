"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { InfrastructureItem } from "@/types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  items: InfrastructureItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex - 1 + items.length) % items.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex + 1) % items.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-navy-800/80 text-steel-200 hover:text-white hover:bg-navy-700 border border-steel-700 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-navy-800/80 text-steel-200 hover:text-white hover:bg-navy-700 border border-steel-700 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation - Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-navy-800/80 text-steel-200 hover:text-white hover:bg-navy-700 border border-steel-700 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-steel-800">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption Panel */}
        <div className="w-full mt-4 p-4 rounded-xl bg-navy-900/90 border border-steel-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-copper-500/20 text-copper-300 border border-copper-500/30">
                {currentItem.category}
              </span>
              <span className="text-xs text-steel-400 font-mono">
                {currentIndex + 1} / {items.length}
              </span>
            </div>
            <h3 className="font-heading text-base font-bold text-white">
              {currentItem.title}
            </h3>
            <p className="text-xs text-steel-400 mt-0.5 max-w-2xl">
              {currentItem.description}
            </p>
          </div>

          <div className="shrink-0 text-xs text-steel-400 font-mono hidden md:block">
            Harsh Industries • MIDC Jalgaon
          </div>
        </div>
      </div>
    </div>
  );
};
