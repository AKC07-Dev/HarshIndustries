import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/data/seo";
import { servicesData } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Phone, Send } from "lucide-react";
import { companyData, getPhoneLink } from "@/data/company";

export const metadata = constructMetadata({
  title: "Manufacturing & Repair Services | Harsh Industries Jalgaon",
  description:
    "Explore our industrial services: Electrical Transformer Manufacturing, Current Transformer Manufacturing, Potential Transformer Manufacturing, and Transformer Repairing in MIDC Jalgaon.",
  path: "/services",
  image: "/images/transformer-repair-service.jpg",
});

export default function ServicesPage() {
  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Header Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/harsh-workshop-floor.png"
            alt="Harsh Industries industrial manufacturing and repair workshop floor"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Services" }]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400">
              Industrial Capabilities
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Manufacturing & Repairing Services
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              Industrial electrical solutions rooted in engineering discipline, workshop infrastructure, and direct technical collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Confirmed Services List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Confirmed Activities"
            title="Overview of Confirmed Services"
            description="Harsh Industries operates in equipment manufacturing and dedicated repair services within our MIDC Jalgaon facility."
          />

          <div className="mt-14 space-y-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Have a Specific Equipment or Repair Requirement?
          </h2>
          <p className="text-sm text-steel-300">
            Contact us to discuss your transformer repair requirements or equipment manufacturing specifications with our Jalgaon engineering team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Discuss Requirements</span>
            </Link>
            <a
              href={getPhoneLink(companyData.phones.primary.raw)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-850 hover:bg-navy-800 text-steel-200 border border-steel-700 text-xs font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-copper-400" />
              <span>Call Technical Desk: {companyData.phones.primary.display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
