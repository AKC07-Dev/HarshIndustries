import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData, getPhoneLink, getWhatsAppLink } from "@/data/company";
import { productCategories } from "@/data/products";
import { infrastructureItems } from "@/data/infrastructure";
import { faqData } from "@/data/faqs";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProductCard } from "@/components/products/ProductCard";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Wrench, 
  Zap, 
  ExternalLink,
  MessageSquare,
  Factory,
  Cpu,
  Layers
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Introduction Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-steel-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Side: Real Factory Signboard */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-steel-200 aspect-[4/3] bg-navy-950">
                <Image
                  src="/images/harsh-signboard.png"
                  alt="Official entrance signboard of Harsh Industries at V-95/B, MIDC Area, Ajanta Road, Jalgaon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-steel-700/80 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono text-copper-300 uppercase tracking-wider mb-1">
                    <Factory className="w-3.5 h-3.5 text-copper-400" />
                    <span>Official MIDC Jalgaon Premises</span>
                  </div>
                  <p className="text-xs text-steel-300">
                    V-95/B, MIDC Area, Ajanta Road, Jalgaon. Manufacturing & repairing transformers, CTs and PTs.
                  </p>
                </div>
              </div>

              {/* Decorative engineering border element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-electric-500/20 rounded-2xl -z-10 hidden sm:block" />
            </div>

            {/* Right Text Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-50 text-electric-700 border border-electric-200">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                <span>Company Overview</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Engineering Solutions for Electrical Infrastructure
              </h2>

              <p className="text-base text-steel-600 leading-relaxed">
                Harsh Industries is an industrial engineering and manufacturing business based in the MIDC area of Jalgaon, Maharashtra. We specialize in the manufacturing of electrical transformers, Current Transformers (CTs), Potential Transformers (PTs), and comprehensive transformer repairing services.
              </p>

              <p className="text-sm text-steel-500 leading-relaxed">
                Our operations are focused on delivering practical, technically sound electrical equipment tailored to industrial facilities, electrical contractors, switchgear manufacturers, and power distribution projects. Every unit is engineered with quality copper conductors and magnetic core laminations to meet exact customer operational requirements.
              </p>

              {/* Four Pillar Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-steel-50 border border-steel-200/80">
                  <CheckCircle2 className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-navy-900">
                    Transformer Manufacturing
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-steel-50 border border-steel-200/80">
                  <CheckCircle2 className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-navy-900">
                    Current Transformers (CTs)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-steel-50 border border-steel-200/80">
                  <CheckCircle2 className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-navy-900">
                    Potential Transformers (PTs)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-steel-50 border border-steel-200/80">
                  <CheckCircle2 className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-navy-900">
                    Transformer Repairing Service
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-850 hover:bg-navy-900 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-steel-100 hover:bg-steel-200 text-steel-700 text-xs font-medium transition-colors"
                >
                  <span>Visit Our Facility in Jalgaon</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Product Categories Section */}
      <section className="py-20 lg:py-24 bg-steel-50 border-b border-steel-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Manufactured Equipment"
            title="Our Product Range"
            description="Explore our three primary product categories. Each unit is built to customer operational requirements and single-line diagrams."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-steel-500 mb-4">
              Note: Technical specifications, voltage classes, and rated ratios are finalized upon direct engineering enquiry.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold shadow-md transition-all"
            >
              <span>View Detailed Product Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Manufacturing & Repairing Capabilities Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-steel-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Core Operations"
            title="Manufacturing & Repairing Capabilities"
            description="Harsh Industries combines precision manufacturing of transformers and instrument transformers with dedicated industrial transformer repair."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Manufacturing Activity */}
            <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 text-white p-8 border border-steel-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-electric-500/20 text-electric-300 flex items-center justify-center border border-electric-500/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
                    Manufacturing Activity
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white">
                  Equipment Manufacturing
                </h3>
                <p className="text-xs font-semibold text-copper-300 mt-1 uppercase tracking-wider">
                  Transformers • CTs • PTs
                </p>

                <p className="text-sm text-steel-300 leading-relaxed mt-4">
                  We manufacture electrical transformers, Current Transformers, and Potential Transformers tailored to client technical requirements. By utilizing magnetic steel laminations and precision copper winding, our equipment is built for electrical reliability.
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                    <span>Custom primary and secondary winding configurations</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                    <span>Metering and protection grade instrument transformers (CTs/PTs)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                    <span>Manufactured locally in MIDC Jalgaon facility</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-steel-800 flex items-center justify-between">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-electric-300 hover:text-white transition-colors"
                >
                  <span>Explore Manufacturing Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact?type=Transformer%20Manufacturing"
                  className="px-4 py-2 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-colors"
                >
                  Enquire
                </Link>
              </div>
            </div>

            {/* Column 2: Repairing Activity */}
            <div className="rounded-2xl bg-gradient-to-br from-steel-900 to-navy-950 text-white p-8 border border-steel-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-copper-500/20 text-copper-300 flex items-center justify-center border border-copper-500/30">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
                    Specialized Service
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white">
                  Transformer Repairing
                </h3>
                <p className="text-xs font-semibold text-copper-300 mt-1 uppercase tracking-wider">
                  Inspection • Fault Assessment • Restorative Service
                </p>

                <p className="text-sm text-steel-300 leading-relaxed mt-4">
                  We provide transformer repair services for units requiring systematic assessment and repair. When industrial equipment faces operational issues or insulation breakdown, our workshop provides an engineering-backed repair evaluation.
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                    <span>Transformer inspection & fault-related assessment</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                    <span>Equipment-specific repair requirements discussion</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                    <span>Contact us to discuss your transformer repair requirements</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-steel-800 flex items-center justify-between">
                <Link
                  href="/services/transformer-repair"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-copper-300 hover:text-white transition-colors"
                >
                  <span>View Repair Process Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact?type=Transformer%20Repairing"
                  className="px-4 py-2 rounded-lg bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold transition-colors"
                >
                  Discuss Repair
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Why Choose Harsh Industries Section */}
      <section className="py-20 lg:py-24 bg-steel-50 border-b border-steel-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Practical Value"
            title="Focused on Practical Industrial Solutions"
            description="Our business approach is built around transparent technical communication, dedicated equipment manufacturing, and responsive local service."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Manufacturing-Focused Approach
              </h3>
              <p className="text-xs text-steel-600 leading-relaxed mt-2">
                We handle the fabrication of transformers, CTs, and PTs with hands-on control over coil assembly, insulation barriers, and mechanical framing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-copper-50 text-copper-600 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Dedicated Repair Services
              </h3>
              <p className="text-xs text-steel-600 leading-relaxed mt-2">
                In addition to new manufacturing, we maintain a dedicated workshop workflow to assess and repair industrial transformers facing operational issues.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Electrical Equipment Specialization
              </h3>
              <p className="text-xs text-steel-600 leading-relaxed mt-2">
                Deep practical focus on electrical power transfer, current measurement, and voltage reduction instruments built for industrial duty cycles.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Direct Customer Communication
              </h3>
              <p className="text-xs text-steel-600 leading-relaxed mt-2">
                Talk directly with the engineering team responsible for your equipment. Prompt technical communication on phone, email, or WhatsApp.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Enquiry-Based Product Requirements
              </h3>
              <p className="text-xs text-steel-600 leading-relaxed mt-2">
                We avoid rigid cookie-cutter catalogs. Equipment is sized and wound to match your single-line diagram, burden requirement, or panel dimensions.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Local Presence in Jalgaon MIDC
              </h3>
              <p className="text-xs text-steel-600 leading-relaxed mt-2">
                Strategically situated at Ajanta Road MIDC with convenient road logistics for equipment delivery, component receipt, and client visits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Infrastructure & Workshop Gallery Preview Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-steel-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-50 text-electric-700 border border-electric-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                <span>Actual Plant Photography</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
                A Look Inside Our Facility
              </h2>
              <p className="text-sm text-steel-600 mt-2 max-w-2xl">
                Explore our workshop floor, industrial machinery, winding materials, and premises at V-95/B, MIDC Area, Ajanta Road, Jalgaon.
              </p>
            </div>

            <Link
              href="/infrastructure"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-850 hover:bg-navy-900 text-white text-xs font-semibold transition-colors shrink-0"
            >
              <span>View Full Infrastructure Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Image Gallery Grid */}
          <ImageGallery items={infrastructureItems} showFilter={false} limit={6} />

        </div>
      </section>

      {/* 7. Enquiry CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 text-white border-b border-steel-800 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
                Direct Engineering Support
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Looking for Transformer or CT/PT Solutions?
              </h2>
              <p className="text-sm sm:text-base text-steel-300">
                Share your equipment requirements with Harsh Industries. Connect with our team to discuss your enquiry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm shadow-lg transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getPhoneLink(companyData.phones.primary.raw)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-steel-100 font-semibold text-sm border border-steel-700 transition-all"
              >
                <Phone className="w-4 h-4 text-electric-400" />
                <span>Call {companyData.phones.primary.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Location Preview Section */}
      <section className="py-20 lg:py-24 bg-steel-50 border-b border-steel-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Get In Touch"
            title="Reach Harsh Industries in Jalgaon"
            description="Connect directly with our facility for technical quotations, manufacturing discussions, and transformer repair queries."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details & Map Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm space-y-6">
                <h3 className="font-heading text-lg font-bold text-navy-900 border-b border-steel-100 pb-3">
                  Verified Contact Details
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3.5 text-xs text-steel-600">
                  <div className="w-8 h-8 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">Plant Address</h4>
                    <p className="mt-1 leading-relaxed">{companyData.address.full}</p>
                    <a
                      href={companyData.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-electric-600 font-semibold hover:underline mt-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 text-xs text-steel-600">
                  <div className="w-8 h-8 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">Direct Phone Numbers</h4>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href={getPhoneLink(companyData.phones.primary.raw)}
                          className="font-semibold text-navy-900 hover:text-electric-600 transition-colors text-sm"
                        >
                          {companyData.phones.primary.display}
                        </a>
                        <span className="text-steel-400 text-[11px] ml-2">(Primary)</span>
                      </div>
                      <div>
                        <a
                          href={getPhoneLink(companyData.phones.secondary.raw)}
                          className="text-steel-700 hover:text-electric-600 transition-colors"
                        >
                          {companyData.phones.secondary.display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 text-xs text-steel-600">
                  <div className="w-8 h-8 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">Official Email</h4>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="font-medium text-navy-900 hover:text-electric-600 transition-colors break-all mt-1 inline-block"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 text-xs text-steel-600">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">WhatsApp Technical Help</h4>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-700 hover:underline mt-1 inline-block"
                    >
                      {companyData.whatsapp.display} • Click to chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Frame */}
              <div className="rounded-2xl overflow-hidden border border-steel-200/90 shadow-sm h-64 bg-steel-100 relative">
                <iframe
                  title="Harsh Industries Location Map in MIDC Jalgaon"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(companyData.googleMapsEmbedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

            </div>

            {/* Quick Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm variant="card" />
            </div>

          </div>

        </div>
      </section>

      {/* 9. Frequently Asked Questions Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Common Enquiries Regarding Our Operations"
            description="Clear answers based strictly on verified manufacturing activities and workshop services at Harsh Industries."
          />

          <div className="mt-12">
            <FaqAccordion faqs={faqData} variant="light" />
          </div>

        </div>
      </section>
    </div>
  );
}
