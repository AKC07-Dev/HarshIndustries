import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/data/seo";
import { servicesData } from "@/data/services";
import { companyData, getPhoneLink, getWhatsAppLink } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  Wrench, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  AlertCircle
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Transformer Repairing Services | Industrial Transformer Inspection Jalgaon",
  description:
    "Industrial transformer repair, inspection, and fault assessment services by Harsh Industries in MIDC Jalgaon, Maharashtra. Contact us to discuss your transformer repair requirements.",
  path: "/services/transformer-repair",
  image: "/images/transformer-repair-service.jpg",
});

export default function TransformerRepairDetailPage() {
  const repairService = servicesData.find((s) => s.id === "transformer-repairing")!;

  return (
    <div className="bg-steel-50 min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={repairService.imageUrl}
            alt="Transformer repairing and inspection workshop at Harsh Industries Jalgaon"
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
              { label: "Services", href: "/services" },
              { label: "Transformer Repair" },
            ]}
            variant="dark"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-copper-500/20 text-copper-300 border border-copper-500/30 mb-3">
              <Wrench className="w-3.5 h-3.5 text-copper-400" />
              <span>Dedicated Workshop Service</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Transformer Repairing Services
            </h1>
            <p className="text-base sm:text-lg text-steel-300 mt-4 leading-relaxed">
              Industrial transformer inspection, fault assessment, and restorative workshop repair based at V-95/B, MIDC Area, Ajanta Road, Jalgaon.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Service Description & Clear Scope */}
      <section className="py-16 sm:py-20 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-50 text-electric-700 border border-electric-200">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
                <span>Practical Workshop Capabilities</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 leading-snug">
                Transformer Inspection & Fault-Related Assessment
              </h2>

              <p className="text-sm sm:text-base text-steel-700 leading-relaxed">
                {repairService.detailedDescription}
              </p>

              {/* Direct Communication Note */}
              <div className="p-4 rounded-xl bg-steel-50 border border-steel-200 text-xs text-steel-600 space-y-1">
                <div className="font-semibold text-navy-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-copper-600" />
                  <span>Equipment-Specific Enquiry Process</span>
                </div>
                <p>
                  Because every transformer fault has unique physical and electrical characteristics, we assess each unit individually. Contact us to discuss your transformer repair requirements directly with our technical personnel.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getPhoneLink(companyData.phones.primary.raw)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-850 hover:bg-navy-900 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-copper-400" />
                  <span>Call to Discuss Fault: {companyData.phones.primary.display}</span>
                </a>
                <a
                  href={getWhatsAppLink("Hello Harsh Industries, I would like to discuss a transformer repair requirement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-steel-200 aspect-[4/3] bg-navy-950">
                <Image
                  src={repairService.imageUrl}
                  alt={repairService.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Systematic Workflow Steps */}
      <section className="py-16 sm:py-20 bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineering Process"
            title="Typical Transformer Repair Evaluation Flow"
            description="Our structured approach ensures clarity from initial fault discussion to final restorative work."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {repairService.workflowSteps?.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white border border-steel-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-copper-500">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-navy-900 mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-steel-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-steel-100 flex items-center gap-1.5 text-[10px] font-mono text-steel-400 uppercase">
                  <span>Phase {step.step}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Common Repair Inquiries */}
      <section className="py-16 sm:py-20 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 text-center">
              Transformer Repair Requirements Discussion
            </h2>
            <p className="text-xs sm:text-sm text-steel-600 text-center leading-relaxed">
              When contacting Harsh Industries regarding a transformer repair, having the following information ready will help our team evaluate your equipment faster:
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-steel-50 border border-steel-200">
                <CheckCircle2 className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                <div className="text-xs text-steel-700">
                  <span className="font-bold text-navy-900">Nameplate Specifications: </span>
                  Rated capacity (kVA), primary/secondary voltages, frequency, and manufacturer details if legible.
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-steel-50 border border-steel-200">
                <CheckCircle2 className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                <div className="text-xs text-steel-700">
                  <span className="font-bold text-navy-900">Observed Failure Symptoms: </span>
                  Tripping history, abnormal heating, physical oil leaks, burning smell, or external flashover marks.
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-steel-50 border border-steel-200">
                <CheckCircle2 className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                <div className="text-xs text-steel-700">
                  <span className="font-bold text-navy-900">Equipment Location & Logistics: </span>
                  Whether the transformer is ready for delivery to our MIDC Jalgaon workshop for inspection.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Repair Enquiry Form */}
      <section className="py-16 sm:py-20 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultType="Transformer Repairing"
            defaultNote="Inquiring regarding transformer repair service. Please contact me to discuss observed symptoms, inspection schedule, and repair quotation."
            variant="card"
          />
        </div>
      </section>
    </div>
  );
}
