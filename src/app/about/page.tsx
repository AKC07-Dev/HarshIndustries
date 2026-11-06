import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/data/seo";
import { companyData, getPhoneLink } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  Factory, 
  Wrench, 
  Zap, 
  MapPin, 
  ArrowRight,
  Send,
  Eye,
  HeartHandshake
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Us | Industrial Electrical Equipment Manufacturer & Repairer",
  description:
    "Learn about Harsh Industries, an electrical transformer and instrument transformer (CT/PT) manufacturing and repairing facility located in MIDC Jalgaon, Maharashtra.",
  path: "/about",
  image: "/images/harsh-industries-workshop-interior.jpg",
});

export default function AboutPage() {
  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-clean-industrial.jpg"
            alt="Harsh Industries manufacturing workshop in Jalgaon MIDC"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
              Company Background & Operations
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              About Harsh Industries
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              An industrial electrical engineering establishment operating in the MIDC Area of Jalgaon, focused on manufacturing and repairing transformers, Current Transformers, and Potential Transformers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction Section */}
      <section className="py-20 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-50 text-electric-700 border border-electric-200">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                <span>Verified Company Identity</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 leading-snug">
                Industrial Electrical Equipment Manufacturing & Repairing in Jalgaon
              </h2>

              <p className="text-base text-steel-700 leading-relaxed font-normal">
                Harsh Industries is an industrial business based in the MIDC area of Jalgaon, Maharashtra, specializing in the manufacturing of transformers, Current Transformers (CTs), Potential Transformers (PTs), and transformer repairing services. The company focuses on electrical equipment solutions for industrial requirements.
              </p>

              <p className="text-sm text-steel-600 leading-relaxed">
                Situated within Jalgaon’s established Ajanta Road industrial belt, our workshop is structured to support electrical contractors, panel builders, commercial infrastructure, and industrial manufacturing plants with reliable equipment built for electrical and mechanical endurance.
              </p>

              <div className="p-4 rounded-xl bg-steel-50 border border-steel-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold text-navy-900">
                  <MapPin className="w-4 h-4 text-copper-500" />
                  <span>Plant Location</span>
                </div>
                <p className="text-xs text-steel-600">
                  V-95/B, MIDC Area, Ajanta Road, Jalgaon, Maharashtra, India.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-steel-200 aspect-[4/3] bg-navy-950">
                <Image
                  src="/images/harsh-signboard.png"
                  alt="Official entrance signboard of Harsh Industries at V-95/B, MIDC Area, Ajanta Road, Jalgaon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Confirmed Business Activities */}
      <section className="py-20 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Confirmed Activities"
            title="Our Four Core Business Activities"
            description="Our workshop floor and engineering operations are organized around these primary electrical disciplines."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-steel-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Manufacturing of Transformers
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-1">
                  Design and assembly of industrial electrical transformers designed to step up, step down, or isolate power circuits via electromagnetic induction.
                </p>
                <Link
                  href="/products/transformers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-600 hover:text-electric-700 mt-3"
                >
                  <span>Explore Transformers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-steel-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-copper-50 text-copper-600 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Manufacturing of Current Transformers (CTs)
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-1">
                  Fabrication of instrument current transformers used to scale down high system currents for switchgear metering and protective relay systems.
                </p>
                <Link
                  href="/products/current-transformers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper-600 hover:text-copper-700 mt-3"
                >
                  <span>Explore Current Transformers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-steel-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Manufacturing of Potential Transformers (PTs)
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-1">
                  Fabrication of precision voltage transformers designed to step down line voltage for safe measurement, panel telemetry, and protective devices.
                </p>
                <Link
                  href="/products/potential-transformers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-600 hover:text-electric-700 mt-3"
                >
                  <span>Explore Potential Transformers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-steel-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-copper-50 text-copper-600 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Transformer Repairing
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-1">
                  Dedicated workshop service for transformer inspection, fault assessment, and restorative repair for units experiencing operational breakdown.
                </p>
                <Link
                  href="/services/transformer-repair"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper-600 hover:text-copper-700 mt-3"
                >
                  <span>Explore Transformer Repair</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Proposed Vision & Operational Principles (Labeled for Owner Review) */}
      <section className="py-20 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-4 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-amber-100 text-amber-800 border border-amber-300">
              Draft Proposal — Subject to Owner Review
            </span>
          </div>

          <SectionHeader
            badge="Proposed Operational Values"
            title="Core Principles Guiding Harsh Industries"
            description="The following operating principles represent our commitment to engineering accuracy and client transparency."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl bg-steel-50 border border-steel-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-electric-100 text-electric-600 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy-900">
                  Precision in Manufacturing
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-2">
                  Adherence to exact winding ratios, proper conductor gauge selection, and mechanical core stability to ensure dependable electrical performance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-steel-200 text-[11px] font-mono text-steel-400">
                Core Value 01
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-steel-50 border border-steel-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-copper-100 text-copper-600 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy-900">
                  Engineering Transparency
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-2">
                  Honest technical communication regarding equipment parameters, repair assessments, and manufacturing timelines without misleading claims.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-steel-200 text-[11px] font-mono text-steel-400">
                Core Value 02
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-steel-50 border border-steel-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy-900">
                  Local Industrial Support
                </h3>
                <p className="text-xs text-steel-600 leading-relaxed mt-2">
                  Serving industrial customers with responsive local service in Jalgaon and throughout Maharashtra, reducing procurement delays and repair downtime.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-steel-200 text-[11px] font-mono text-steel-400">
                Core Value 03
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Connect with Our Technical Team in Jalgaon
          </h2>
          <p className="text-steel-300 text-sm max-w-xl mx-auto">
            Discuss your transformer fabrication requirements, instrument transformer orders, or repair enquiries directly with our workshop engineers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send Equipment Enquiry</span>
            </Link>
            <a
              href={getPhoneLink(companyData.phones.primary.raw)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-850 hover:bg-navy-800 text-steel-200 border border-steel-700 text-xs font-semibold transition-colors"
            >
              <span>Call {companyData.phones.primary.display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
