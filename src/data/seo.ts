import { Metadata } from "next";
import { companyData } from "./company";

const siteUrl = "https://harshindustries.in";

export const siteMetadataDefaults = {
  titleTemplate: "%s | Harsh Industries — Transformer Manufacturer & Repair Jalgaon",
  defaultTitle: "Harsh Industries | Industrial Electrical Equipment Manufacturing & Repairing",
  defaultDescription:
    "Harsh Industries in Jalgaon, Maharashtra specializes in manufacturing Transformers, Current Transformers (CTs), Potential Transformers (PTs), and industrial Transformer Repairing services.",
  keywords: [
    "Transformer Manufacturer in Jalgaon",
    "Transformer Repairing in Jalgaon",
    "Current Transformer Manufacturer",
    "Potential Transformer Manufacturer",
    "CT PT Manufacturing",
    "Electrical Transformer Repair Services",
    "Transformer Manufacturing Maharashtra",
    "MIDC Jalgaon Transformer Industry",
    "Instrument Transformers",
    "Industrial Electrical Equipment",
  ],
  siteUrl,
};

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/images/transformers-industrial.jpg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | Harsh Industries`
    : siteMetadataDefaults.defaultTitle;
  const fullDescription = description || siteMetadataDefaults.defaultDescription;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: siteMetadataDefaults.keywords,
    authors: [{ name: "Harsh Industries" }],
    creator: "Harsh Industries",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: "Harsh Industries",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Harsh Industries Electrical Transformer Manufacturing & Repairing",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": companyData.name,
  "description": companyData.shortDescription,
  "url": siteUrl,
  "telephone": companyData.phones.primary.display,
  "email": companyData.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": `${companyData.address.line1}, ${companyData.address.area}, ${companyData.address.road}`,
    "addressLocality": companyData.address.city,
    "addressRegion": companyData.address.state,
    "addressCountry": "IN",
  },
  "hasMap": companyData.googleMapsUrl,
  "sameAs": [
    companyData.googleMapsUrl
  ],
  "knowsAbout": companyData.activities,
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Maharashtra, India"
  }
};
