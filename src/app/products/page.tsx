import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/data/seo";
import { productCategories } from "@/data/products";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  ArrowRight, 
  Send, 
  Info, 
  Zap, 
  Sliders, 
  FileCheck2
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Products Catalogue | Transformers, Current Transformers & Potential Transformers",
  description:
    "Explore the electrical product range manufactured by Harsh Industries in Jalgaon: Electrical Transformers, Current Transformers (CTs), and Potential Transformers (PTs).",
  path: "/products",
  image: "/images/transformers-industrial.jpg",
});

export default function ProductsPage() {
  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/harsh-blue-transformers.png"
            alt="Harsh Industries industrial transformers manufacturing range"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Products" }]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
              Manufacturing Catalogue
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Our Product Range
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              Precision electrical equipment built for power distribution, current stepping, and voltage monitoring across industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Structured Specification System Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-steel-300/80 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-navy-900">
                Custom Engineering to Client Specifications
              </h3>
              <p className="text-xs text-steel-600 mt-0.5">
                Our transformers and CT/PT units are fabricated to client Single-Line Diagrams (SLD), voltage ratings, and burden requirements. Exact technical specifications are provided upon enquiry.
              </p>
            </div>
          </div>

          <Link
            href="/contact?type=quote"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold shrink-0 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit RFQ</span>
          </Link>
        </div>
      </div>

      {/* 3. Product Categories Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Three Core Lines"
            title="Industrial Product Categories"
            description="Select a product category to view detailed operating principles, industrial applications, and engineering parameters."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Manufacturing Highlights Banner */}
      <section className="py-16 bg-white border-y border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-navy-900">
                  Custom Ratios & Burdens
                </h4>
                <p className="text-xs text-steel-600 mt-1 leading-relaxed">
                  Engineered to match your specific metering devices, protection relays, or line operating voltages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-copper-50 text-copper-600 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-navy-900">
                  Built to Client Drawings
                </h4>
                <p className="text-xs text-steel-600 mt-1 leading-relaxed">
                  We fabricate equipment according to single-line diagrams, tender specifications, and plant electrical schedules.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-navy-900">
                  MIDC Jalgaon Facility
                </h4>
                <p className="text-xs text-steel-600 mt-1 leading-relaxed">
                  Direct oversight of winding materials, core assembly, and insulation from our Ajanta Road manufacturing plant.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Direct Enquiry Section */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Need Equipment Sizing or Technical Quotations?
          </h2>
          <p className="text-sm text-steel-300">
            Send your equipment parameters, current/voltage ratios, or transformer requirements to our engineering team in Jalgaon.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-colors"
            >
              <span>Enquire for Equipment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
