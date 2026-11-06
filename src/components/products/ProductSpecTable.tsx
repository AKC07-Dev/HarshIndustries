import React from "react";
import Link from "next/link";
import { SpecField } from "@/types";
import { Info, FileText, Send, Check } from "lucide-react";

interface ProductSpecTableProps {
  productTitle: string;
  specs: SpecField[];
  placeholderNotice: string;
  enquirySlug: string;
}

export const ProductSpecTable: React.FC<ProductSpecTableProps> = ({
  productTitle,
  specs,
  placeholderNotice,
  enquirySlug,
}) => {
  return (
    <div className="rounded-2xl bg-white border border-steel-200/90 shadow-lg overflow-hidden">
      {/* Top Banner Notice */}
      <div className="bg-steel-900 text-white p-5 border-b border-steel-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-copper-400">
            <Info className="w-4 h-4 text-copper-400 shrink-0" />
            <span>Structured Technical Specification Framework</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-white mt-1">
            Standard Parameter Checklist: {productTitle}
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-electric-500/20 text-electric-300 border border-electric-500/30 text-xs font-medium shrink-0">
          <FileText className="w-3.5 h-3.5" />
          <span>Manufactured to Client SLD</span>
        </div>
      </div>

      {/* Transparent Disclaimer Box */}
      <div className="p-4 bg-amber-50/80 border-b border-amber-200/60 text-xs text-amber-900 flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Notice for Procurement & Contracting Engineers: </span>
          <span>{placeholderNotice} Harsh Industries manufactures equipment custom-engineered to your required rating, ratio, and environmental conditions.</span>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-steel-50 border-b border-steel-200 text-xs font-mono uppercase text-steel-500">
              <th className="py-3.5 px-6 font-semibold w-1/3">Engineering Parameter</th>
              <th className="py-3.5 px-6 font-semibold w-1/3">Standard Availability</th>
              <th className="py-3.5 px-6 font-semibold w-1/3 hidden sm:table-cell">Technical Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-steel-100">
            {specs.map((spec, idx) => (
              <tr
                key={idx}
                className="hover:bg-steel-50/60 transition-colors group"
              >
                <td className="py-3.5 px-6 font-medium text-navy-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-500 opacity-60 group-hover:opacity-100"></span>
                  <span>{spec.label}</span>
                </td>
                <td className="py-3.5 px-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-electric-50 text-electric-800 border border-electric-200/80">
                    <Check className="w-3 h-3 text-electric-600" />
                    <span>{spec.value}</span>
                  </span>
                </td>
                <td className="py-3.5 px-6 text-xs text-steel-500 hidden sm:table-cell">
                  {spec.note || "Available as per client requirement upon enquiry"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to action at bottom of specs table */}
      <div className="p-6 bg-steel-50 border-t border-steel-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading text-sm font-bold text-navy-900">
            Need exact ratings, dimensional drawings, or custom ratios?
          </h4>
          <p className="text-xs text-steel-500 mt-0.5">
            Send your Single-Line Diagram (SLD) or equipment schedule to our technical team in Jalgaon.
          </p>
        </div>

        <Link
          href={`/contact?type=${encodeURIComponent(productTitle)}&product=${encodeURIComponent(enquirySlug)}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold shadow-md transition-all shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Request Technical Data Sheet</span>
        </Link>
      </div>
    </div>
  );
};
