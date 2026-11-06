import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/data/seo";
import { infrastructureItems } from "@/data/infrastructure";
import { companyData } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  Factory, 
  MapPin, 
  Eye, 
  Sliders,
  Send
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Infrastructure & Workshop Gallery | Harsh Industries Jalgaon",
  description:
    "Explore actual photographs of the Harsh Industries manufacturing plant, workshop bays, machinery, and winding materials in MIDC Jalgaon, Maharashtra.",
  path: "/infrastructure",
  image: "/images/harsh-industries-workshop-interior.jpg",
});

export default function InfrastructurePage() {
  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Header Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/harsh-factory-bay.png"
            alt="Harsh Industries industrial plant bay in MIDC Jalgaon"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Infrastructure" }]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
              Manufacturing & Repair Facility
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Workshop Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              Explore actual photographs of our manufacturing premises, machinery, winding materials, and workshop bays located at V-95/B, MIDC Area, Ajanta Road, Jalgaon.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Facility Highlights Stats/Notes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-steel-200 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xs font-bold text-navy-900">
                MIDC Industrial Zone
              </h3>
              <p className="text-[11px] text-steel-500">
                V-95/B, Ajanta Road, Jalgaon
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-steel-200 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-copper-50 text-copper-600 flex items-center justify-center shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xs font-bold text-navy-900">
                Dual Operations
              </h3>
              <p className="text-[11px] text-steel-500">
                Manufacturing & Repair Workstations
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-steel-200 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xs font-bold text-navy-900">
                Actual Photography
              </h3>
              <p className="text-[11px] text-steel-500">
                Click any image to view in full resolution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Filterable Visual Gallery */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Facility Photography"
            title="A Look Inside Our Workshop & Equipment"
            description="Browse actual high-resolution images from our factory premises. Filter by area or click to open full-screen interactive lightbox."
          />

          <div className="mt-12">
            <ImageGallery items={infrastructureItems} showFilter={true} />
          </div>

        </div>
      </section>

      {/* 4. Plant Visit CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Plan a Visit to Our Jalgaon Facility
          </h2>
          <p className="text-sm text-steel-300">
            Clients, contractors, and procurement engineers are welcome to visit our premises on Ajanta Road, Jalgaon to discuss project requirements in person.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Contact to Schedule Visit</span>
            </Link>
            <a
              href={companyData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-850 hover:bg-navy-800 text-steel-200 border border-steel-700 text-xs font-semibold transition-colors"
            >
              <MapPin className="w-4 h-4 text-copper-400" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
