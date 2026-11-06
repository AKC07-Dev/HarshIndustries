"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InfrastructureItem } from "@/types";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, Tag } from "lucide-react";

interface ImageGalleryProps {
  items: InfrastructureItem[];
  showFilter?: boolean;
  limit?: number;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  showFilter = true,
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-navy-850 text-white shadow-md shadow-navy-900/20 border border-steel-700"
                  : "bg-white text-steel-600 hover:text-navy-900 hover:bg-steel-100 border border-steel-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Modern Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              // Find original index in full list for lightbox
              const originalIndex = items.findIndex((i) => i.id === item.id);
              setLightboxIndex(originalIndex);
            }}
            className="group relative rounded-2xl overflow-hidden bg-navy-900 border border-steel-200/80 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Dark Overlay with Expand Icon */}
              <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Category Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-navy-900/85 text-steel-200 backdrop-blur-sm border border-steel-700/60">
                  <Tag className="w-2.5 h-2.5 text-copper-400" />
                  {item.category}
                </span>
              </div>
            </div>

            {/* Caption Info */}
            <div className="p-5 bg-white flex-1 flex flex-col justify-between border-t border-steel-100">
              <div>
                <h3 className="font-heading text-base font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-steel-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-steel-100 flex items-center justify-between text-[11px] text-steel-400 font-mono">
                <span>Facility Infrastructure</span>
                <span className="text-electric-600 font-semibold group-hover:underline">
                  Click to Expand
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={items}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
