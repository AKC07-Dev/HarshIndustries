import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/data/seo";
import { productsDetailData } from "@/data/products";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductSpecTable } from "@/components/products/ProductSpecTable";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { 
  Zap, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  SlidersHorizontal,
  Gauge
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Potential Transformers (PTs) | Voltage Transformer Manufacturer Jalgaon",
  description:
    "Potential Transformers (PTs) manufactured by Harsh Industries in Jalgaon, Maharashtra. Designed for voltage reduction, metering panels, and protective relay sensing.",
  path: "/products/potential-transformers",
  image: "/images/potential-transformers-pt.jpg",
});

export default function PotentialTransformersDetailPage() {
  const product = productsDetailData["potential-transformers"];

  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: "Potential Transformers (PTs)" },
            ]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-electric-500/20 text-electric-300 border border-electric-500/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-copper-400" />
              <span>{product.badge}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview & Working Principle */}
      <section className="py-16 sm:py-20 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-50 text-electric-700 border border-electric-200">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                <span>Engineering Working Principle</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 leading-snug">
                Precision Voltage Transformation & Metering Isolation
              </h2>

              <p className="text-sm sm:text-base text-steel-700 leading-relaxed">
                {product.workingPrinciple}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-steel-50 border border-steel-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-900 mb-1">
                    <Gauge className="w-4 h-4 text-electric-600" />
                    <span>Metering Applications</span>
                  </div>
                  <p className="text-xs text-steel-600">
                    Steps down high distribution voltages to standardized 110V levels for voltmeters, synchronoscopes, and tariff meters.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-steel-50 border border-steel-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-copper-600" />
                    <span>Protection Sensing</span>
                  </div>
                  <p className="text-xs text-steel-600">
                    Provides continuous voltage references to under-voltage, over-voltage, directional, and impedance distance protective relays.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-steel-200 aspect-[4/3] bg-navy-950">
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Applications & Features */}
      <section className="py-16 sm:py-20 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-steel-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Metering & Protection Applications
                </h3>
              </div>
              <ul className="space-y-3 pt-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-600">
                    <CheckCircle2 className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-steel-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-copper-50 text-copper-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Engineering Characteristics
                </h3>
              </div>
              <ul className="space-y-3 pt-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-600">
                    <CheckCircle2 className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Structured Technical Specification Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
              Technical Specification Framework: Potential Transformers
            </h2>
            <p className="text-xs sm:text-sm text-steel-600 mt-2">
              Voltage ratings, insulation levels, and thermal burdens configured to client project requirements.
            </p>
          </div>

          <ProductSpecTable
            productTitle={product.title}
            specs={product.specs}
            placeholderNotice={product.placeholderNotice}
            enquirySlug={product.slug}
          />
        </div>
      </section>

      {/* 5. Direct Enquiry Section */}
      <section className="py-16 sm:py-20 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultType="Potential Transformer (PT)"
            defaultNote="Inquiring regarding Potential Transformer (PT) requirements. Please share technical data sheet for required voltage ratio and burden."
            variant="card"
          />
        </div>
      </section>
    </div>
  );
}
