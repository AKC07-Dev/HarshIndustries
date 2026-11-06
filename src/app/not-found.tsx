import React from "react";
import Link from "next/link";
import { companyData, getPhoneLink } from "@/data/company";
import { Home, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-steel-50 py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-steel-200/90 shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-electric-50 text-electric-600 mx-auto flex items-center justify-center mb-5">
          <Wrench className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-copper-600 font-bold">
          Error 404 • Page Not Found
        </span>

        <h1 className="font-heading text-2xl font-bold text-navy-900 mt-2">
          Industrial Page Relocated
        </h1>

        <p className="text-xs sm:text-sm text-steel-600 mt-2 leading-relaxed">
          The requested page could not be located on the Harsh Industries web server. Please return to the homepage or explore our product categories.
        </p>

        <div className="mt-6 pt-6 border-t border-steel-100 flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-steel-100 hover:bg-steel-200 text-navy-900 text-xs font-semibold transition-colors"
          >
            <span>Explore Product Range</span>
          </Link>
        </div>

        <p className="text-[11px] text-steel-400 mt-6">
          Need immediate assistance? Call{" "}
          <a
            href={getPhoneLink(companyData.phones.primary.raw)}
            className="text-electric-600 font-semibold underline"
          >
            {companyData.phones.primary.display}
          </a>
        </p>
      </div>
    </div>
  );
}
