import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData, getPhoneLink } from "@/data/company";
import { 
  ArrowRight, 
  Send, 
  Phone, 
  MapPin, 
  Zap, 
  Wrench,
  ChevronDown,
  CheckCircle2
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-navy-950 text-white overflow-hidden">
      {/* 
        Clean, Professional Industrial Background Image 
        (No dotted or mesh textures — pure, crisp, high-resolution industrial engineering plant)
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-clean-industrial.jpg"
          alt="Harsh Industries industrial manufacturing facility and electrical engineering workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-1000 opacity-45"
        />
        {/* Cinematic Clean Gradient Overlays — No texture artifacts */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      {/* Subtle Warm Industrial Ambient Lighting Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-electric-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-copper-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-900/90 border border-steel-700/80 text-xs text-steel-200 backdrop-blur-md shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-copper-400 animate-pulse"></span>
              <span className="font-mono text-copper-300 font-bold tracking-wider">HARSH INDUSTRIES</span>
              <span className="text-steel-600">|</span>
              <span className="flex items-center gap-1.5 text-steel-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-electric-400" />
                V-95/B, MIDC Area, Jalgaon
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Powering Industry Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-300 via-electric-100 to-copper-300">
                Precision Engineering.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-steel-200 max-w-2xl leading-relaxed font-normal">
              Manufacturing and repairing solutions for electrical transformers, Current Transformers (CTs) and Potential Transformers (PTs) built for industrial applications.
            </p>

            {/* Confirmed Activities Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900/90 border border-steel-700 text-xs text-steel-100 font-medium">
                <Zap className="w-3.5 h-3.5 text-electric-400" />
                <span>Transformers</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900/90 border border-steel-700 text-xs text-steel-100 font-medium">
                <Zap className="w-3.5 h-3.5 text-copper-400" />
                <span>Current Transformers (CTs)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900/90 border border-steel-700 text-xs text-steel-100 font-medium">
                <Zap className="w-3.5 h-3.5 text-electric-300" />
                <span>Potential Transformers (PTs)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900/90 border border-steel-700 text-xs text-steel-100 font-medium">
                <Wrench className="w-3.5 h-3.5 text-copper-300" />
                <span>Transformer Repair</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm shadow-xl hover:shadow-electric-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-steel-100 hover:text-white font-semibold text-sm border border-steel-700 shadow-md transition-all duration-200"
              >
                <Send className="w-4 h-4 text-electric-400" />
                <span>Send an Enquiry</span>
              </Link>
            </div>

            {/* Direct Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-steel-300">
              <span className="flex items-center gap-1.5 text-steel-400">
                <Phone className="w-3.5 h-3.5 text-copper-400" />
                <span>Direct Technical Desk:</span>
              </span>
              <a
                href={getPhoneLink(companyData.phones.primary.raw)}
                className="text-white hover:text-electric-300 font-bold underline underline-offset-4 transition-colors"
              >
                {companyData.phones.primary.display}
              </a>
              <span className="text-steel-600">|</span>
              <span className="text-steel-400">MIDC Ajanta Road, Jalgaon</span>
            </div>
          </div>

          {/* 
            Featured Real Workshop Image Panel (5 cols) 
            Highlighting the actual blue transformer units manufactured at Harsh Industries
          */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-3 bg-navy-900/90 border border-steel-700/80 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              
              {/* Actual Client Photograph Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-950 border border-steel-800">
                <Image
                  src="/images/harsh-blue-transformers.png"
                  alt="Actual manufactured electrical transformers and CT/PT assemblies with ceramic bushings at Harsh Industries workshop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                {/* Real Verified Photograph Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-navy-950/90 text-copper-300 border border-copper-500/40 backdrop-blur-md">
                    <CheckCircle2 className="w-3 h-3 text-copper-400" />
                    Actual Workshop Staging
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="font-heading text-sm font-bold text-white leading-tight">
                    Manufactured Transformer & CT/PT Assemblies
                  </h3>
                  <p className="text-[11px] text-steel-300 mt-0.5 line-clamp-1">
                    Staged on the workshop floor at V-95/B, MIDC Jalgaon
                  </p>
                </div>
              </div>

              {/* Floating Engineering Capabilities Mini-bar */}
              <div className="mt-3 p-3 rounded-xl bg-navy-950/80 border border-steel-800 flex items-center justify-between text-xs">
                <div>
                  <span className="block text-[10px] font-mono uppercase text-copper-400">
                    Industrial Capabilities
                  </span>
                  <span className="font-bold text-white text-xs">
                    Transformers • CTs • PTs • Repair
                  </span>
                </div>

                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-electric-300 hover:text-white transition-colors"
                >
                  <span>View Facility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-steel-400 text-[10px] uppercase font-mono tracking-widest hidden sm:flex pointer-events-none">
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-electric-400 animate-bounce mt-1" />
      </div>
    </section>
  );
};
