import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCategory } from "@/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: ProductCategory;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative rounded-2xl bg-white border border-steel-200/90 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-navy-900/90 text-copper-300 border border-copper-500/30">
            Confirmed Category
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs font-medium text-copper-600 mt-1 mb-3">
            {product.tagline}
          </p>

          <p className="text-sm text-steel-600 leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Highlights */}
          <div className="mt-4 pt-4 border-t border-steel-100 space-y-2">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-steel-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-electric-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-6 pt-4 border-t border-steel-100">
          <Link
            href={product.learnMoreUrl}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-steel-50 hover:bg-navy-850 text-navy-900 hover:text-white text-xs font-semibold transition-all group/btn"
          >
            <span>Explore {product.name.split(" ")[0]}</span>
            <ArrowRight className="w-4 h-4 text-steel-500 group-hover/btn:text-electric-300 group-hover/btn:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};
