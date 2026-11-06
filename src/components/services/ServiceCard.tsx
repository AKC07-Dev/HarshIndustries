import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/types";
import { ArrowRight, Wrench, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-2xl bg-white border border-steel-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
      {/* Image Side */}
      <div className="relative md:w-2/5 aspect-[16/10] md:aspect-auto min-h-[220px] bg-navy-950 overflow-hidden shrink-0">
        <Image
          src={service.imageUrl}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950/70 via-transparent to-transparent opacity-80" />

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-navy-900/90 text-electric-300 border border-electric-500/30">
            <Wrench className="w-3 h-3 text-copper-400" />
            Confirmed Activity
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
            {service.title}
          </h3>

          <p className="text-xs font-semibold text-copper-600 uppercase tracking-wider mt-1 mb-3">
            {service.tagline}
          </p>

          <p className="text-sm text-steel-600 leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Typical Requirement Box */}
          <div className="p-3.5 rounded-xl bg-steel-50 border border-steel-200/80 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-navy-900 mb-1">
              <CheckCircle className="w-3.5 h-3.5 text-copper-500" />
              <span>Typical Industrial Customer Requirement</span>
            </div>
            <p className="text-xs text-steel-600 leading-normal">
              {service.typicalRequirement}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-steel-100">
          <Link
            href={`/contact?type=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Enquire for Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {service.pageUrl && (
            <Link
              href={service.pageUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-steel-100 hover:bg-steel-200 text-steel-700 text-xs font-medium transition-colors"
            >
              <span>View Service Details</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
