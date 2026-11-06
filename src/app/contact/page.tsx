import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/data/seo";
import { companyData, getPhoneLink, getWhatsAppLink } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink, 
  Building
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Us & Request a Quote | Harsh Industries Jalgaon",
  description:
    "Contact Harsh Industries for transformer manufacturing, CT/PT instrument transformers, and transformer repairing. Located at V-95/B, MIDC Area, Ajanta Road, Jalgaon.",
  path: "/contact",
  image: "/images/harsh-industries-factory-exterior.jpg",
});

export default function ContactPage() {
  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-clean-industrial.jpg"
            alt="Harsh Industries manufacturing premises in MIDC Jalgaon"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
              Direct Technical Enquiry
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Contact Harsh Industries
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              Connect directly with our engineering and workshop desk in Jalgaon, Maharashtra for equipment quotations, single-line diagram discussions, or repair queries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-navy-950 mb-3 border border-steel-200">
                  <Image
                    src="/images/harsh-signboard.png"
                    alt="Harsh Industries factory signboard and plant entrance in MIDC Jalgaon"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-navy-950/85 text-[10px] font-mono text-copper-300">
                    Plant Entrance
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-copper-600">
                  <Building className="w-4 h-4 text-copper-500" />
                  <span>Factory & Registered Address</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Harsh Industries
                </h3>
                <p className="text-xs sm:text-sm text-steel-600 leading-relaxed">
                  {companyData.address.full}
                </p>
                <div className="pt-2">
                  <a
                    href={companyData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-electric-50 hover:bg-electric-100 text-electric-700 text-xs font-semibold border border-electric-200 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Numbers Card */}
              <div className="p-6 rounded-2xl bg-white border border-steel-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-electric-600">
                  <Phone className="w-4 h-4 text-electric-500" />
                  <span>Telephone Numbers</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between p-3 rounded-xl bg-steel-50 border border-steel-200">
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-steel-400">Primary Contact</span>
                      <a
                        href={getPhoneLink(companyData.phones.primary.raw)}
                        className="font-heading text-base font-bold text-navy-900 hover:text-electric-600 transition-colors"
                      >
                        {companyData.phones.primary.display}
                      </a>
                    </div>
                    <a
                      href={getPhoneLink(companyData.phones.primary.raw)}
                      className="px-3 py-1.5 rounded-lg bg-electric-500 text-white text-xs font-semibold hover:bg-electric-600 transition-colors"
                    >
                      Call
                    </a>
                  </div>

                  <div className="flex items-start justify-between p-3 rounded-xl bg-steel-50 border border-steel-200">
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-steel-400">Secondary Contact</span>
                      <a
                        href={getPhoneLink(companyData.phones.secondary.raw)}
                        className="font-heading text-base font-bold text-navy-900 hover:text-electric-600 transition-colors"
                      >
                        {companyData.phones.secondary.display}
                      </a>
                    </div>
                    <a
                      href={getPhoneLink(companyData.phones.secondary.raw)}
                      className="px-3 py-1.5 rounded-lg bg-steel-200 text-navy-900 text-xs font-semibold hover:bg-steel-300 transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Email & WhatsApp Quick Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-steel-200/90 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-navy-900">Email Address</h4>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-xs text-electric-600 hover:underline break-all block"
                  >
                    {companyData.email}
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-steel-200/90 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-navy-900">Instant WhatsApp</h4>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-700 hover:underline font-semibold block"
                  >
                    Chat Directly
                  </a>
                </div>
              </div>

              {/* Embedded Google Map Frame */}
              <div className="rounded-2xl overflow-hidden border border-steel-200/90 shadow-sm h-72 bg-steel-100 relative">
                <iframe
                  title="Harsh Industries Location in MIDC Jalgaon"
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

            {/* Right Detailed Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm variant="card" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
