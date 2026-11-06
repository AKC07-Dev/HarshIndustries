"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/data/navigation";
import { companyData, getPhoneLink } from "@/data/company";
import { Logo } from "./Logo";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Zap
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Industrial Verification Bar (Desktop Only) */}
      <div className="bg-navy-950 text-steel-300 text-xs py-2 px-4 border-b border-steel-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-steel-300">
              <MapPin className="w-3.5 h-3.5 text-copper-400" />
              <span>V-95/B, MIDC Area, Ajanta Road, Jalgaon, Maharashtra</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-copper-300 font-medium">
              <Zap className="w-3 h-3 text-copper-400" />
              Transformer & CT/PT Manufacturing & Repair
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={getPhoneLink(companyData.phones.primary.raw)}
              className="flex items-center gap-1.5 hover:text-electric-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-electric-400" />
              <span>{companyData.phones.primary.display}</span>
            </a>
            <span className="text-steel-600">|</span>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center gap-1.5 hover:text-electric-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-electric-400" />
              <span>{companyData.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-850/95 backdrop-blur-md shadow-lg border-b border-steel-700/50 py-3"
            : "bg-navy-850/85 backdrop-blur-sm border-b border-steel-800/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="light" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {headerNavLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const linkActive = isActive(link.href);

                if (hasChildren) {
                  return (
                    <div
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        aria-expanded={openDropdown === link.label}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          linkActive
                            ? "text-electric-300 bg-navy-800/80"
                            : "text-steel-200 hover:text-white hover:bg-navy-800/50"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full pt-2 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                        <div className="bg-navy-900 border border-steel-700/80 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block p-3 rounded-lg transition-colors group/item ${
                                pathname === child.href
                                  ? "bg-navy-800 text-electric-300"
                                  : "hover:bg-navy-800/60 text-steel-200 hover:text-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold group-hover/item:text-electric-300 transition-colors">
                                  {child.label}
                                </span>
                                {child.badge && (
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-copper-500/20 text-copper-300 border border-copper-500/30">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              {child.description && (
                                <p className="text-xs text-steel-400 mt-1 line-clamp-1">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      linkActive
                        ? "text-electric-300 bg-navy-800/80"
                        : "text-steel-200 hover:text-white hover:bg-navy-800/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-electric-500 hover:bg-electric-600 transition-all duration-200 shadow-md hover:shadow-electric-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-semibold text-white bg-electric-500 rounded-md hover:bg-electric-600 transition-colors"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2 rounded-lg text-steel-200 hover:text-white hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-900 border-b border-steel-700/80 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1">
              {headerNavLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const linkActive = isActive(link.href);

                if (hasChildren) {
                  const isOpen = openDropdown === link.label;
                  return (
                    <div key={link.label} className="border-b border-steel-800/80 pb-1">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.label)}
                        className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-steel-200 rounded-md hover:bg-navy-800"
                      >
                        <span className={linkActive ? "text-electric-300 font-semibold" : ""}>
                          {link.label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pl-4 pr-2 py-1 space-y-1 bg-navy-950/60 rounded-lg my-1">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block py-2 px-3 text-xs rounded-md transition-colors ${
                                pathname === child.href
                                  ? "bg-navy-800 text-electric-300 font-semibold"
                                  : "text-steel-300 hover:text-white hover:bg-navy-800/40"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-copper-500/20 text-copper-300">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-2.5 px-3 text-sm font-medium rounded-md transition-colors ${
                      linkActive
                        ? "text-electric-300 bg-navy-800 font-semibold"
                        : "text-steel-200 hover:text-white hover:bg-navy-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Quick Contact Details */}
              <div className="pt-4 mt-2 border-t border-steel-800 space-y-3">
                <a
                  href={getPhoneLink(companyData.phones.primary.raw)}
                  className="flex items-center gap-3 px-3 py-2 text-xs text-steel-300 rounded-lg bg-navy-800/60 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-electric-400 shrink-0" />
                  <span>Call {companyData.phones.primary.display}</span>
                </a>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-3 px-3 py-2 text-xs text-steel-300 rounded-lg bg-navy-800/60 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-electric-400 shrink-0" />
                  <span className="truncate">{companyData.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
