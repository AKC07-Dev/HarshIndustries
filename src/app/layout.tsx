import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { localBusinessJsonLd, siteMetadataDefaults } from "@/data/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101C2C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Harsh Industries",
    default: "Harsh Industries | Electrical Transformer & CT/PT Manufacturer Jalgaon",
  },
  description:
    "Harsh Industries in MIDC Jalgaon specializes in manufacturing Transformers, Current Transformers (CTs), Potential Transformers (PTs), and industrial Transformer Repairing services.",
  keywords: siteMetadataDefaults.keywords,
  metadataBase: new URL(siteMetadataDefaults.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Harsh Industries",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Local Business JSON-LD Schema (Verified details only) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F7F9FC] text-[#0F172A] min-h-screen flex flex-col selection:bg-electric-500 selection:text-white pb-14 sm:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
