import React from "react";
import Link from "next/link";
import { companyData, getPhoneLink, getWhatsAppLink } from "@/data/company";
import { 
  footerQuickLinks, 
  footerProductLinks, 
  footerServiceLinks 
} from "@/data/navigation";
import { Logo } from "./Logo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  Zap,
  ArrowRight
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-steel-200 border-t border-steel-800/80 relative overflow-hidden">
      {/* Background Subtle Technical Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="text-steel-400 text-sm leading-relaxed pr-4">
              Harsh Industries specializes in the manufacturing and repairing of electrical transformers, Current Transformers (CTs), and Potential Transformers (PTs) engineered for industrial reliability.
            </p>

            <div className="p-4 rounded-xl bg-navy-900/90 border border-steel-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-copper-400 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-copper-400" />
                <span>Manufacturing & Service Unit</span>
              </div>
              <p className="text-xs text-steel-300">
                Operating in MIDC Area, Ajanta Road, Jalgaon. Equipped to deliver standard and customized electrical solutions.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-electric-500/20 hover:bg-electric-500/30 text-electric-300 border border-electric-500/30 text-xs font-medium transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Products (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-electric-500 rounded-sm"></span>
              Product Range
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerProductLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-steel-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-steel-600 rounded-full group-hover:bg-electric-400 group-hover:w-2 transition-all"></span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white pt-2 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-copper-500 rounded-sm"></span>
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-steel-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-steel-600 rounded-full group-hover:bg-copper-400 group-hover:w-2 transition-all"></span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-steel-400 rounded-sm"></span>
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-steel-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-steel-600 rounded-full group-hover:bg-white group-hover:w-2 transition-all"></span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact Information (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-copper-400 rounded-sm"></span>
              Plant & Contact Details
            </h3>

            <div className="space-y-3.5 text-xs text-steel-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Harsh Industries</p>
                  <p className="text-steel-400 leading-relaxed mt-0.5">
                    {companyData.address.full}
                  </p>
                  <a
                    href={companyData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-electric-400 hover:text-electric-300 mt-1 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <a
                      href={getPhoneLink(companyData.phones.primary.raw)}
                      className="text-white hover:text-electric-300 transition-colors font-medium text-sm"
                    >
                      {companyData.phones.primary.display}
                    </a>
                    <span className="block text-[11px] text-steel-400">Primary Contact</span>
                  </div>
                  <div>
                    <a
                      href={getPhoneLink(companyData.phones.secondary.raw)}
                      className="text-steel-300 hover:text-electric-300 transition-colors"
                    >
                      {companyData.phones.secondary.display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-white hover:text-electric-300 transition-colors font-medium break-all"
                  >
                    {companyData.email}
                  </a>
                  <span className="block text-[11px] text-steel-400">Official RFQ & Enquiries</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Credit Bar */}
        <div className="mt-12 pt-8 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-400">
          <div>
            <p>{companyData.credits.copyright}</p>
            <p className="text-[11px] text-steel-500 mt-0.5">
              Industrial Electrical Equipment Manufacturing & Repairing • MIDC Jalgaon
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-steel-400">
              {companyData.credits.creator}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
