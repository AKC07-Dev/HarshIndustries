import { CompanyInfo } from "@/types";

export const companyData: CompanyInfo = {
  name: "Harsh Industries",
  legalCategory: "Industrial Electrical Equipment Manufacturing and Repairing",
  tagline: "Powering Industry Through Precision Engineering",
  shortDescription:
    "Manufacturing and repairing solutions for electrical transformers, Current Transformers (CTs) and Potential Transformers (PTs) based in Jalgaon, Maharashtra.",
  fullOverview:
    "Harsh Industries is an industrial business based in the MIDC area of Jalgaon, Maharashtra, specializing in the manufacturing of transformers, Current Transformers (CTs), Potential Transformers (PTs), and transformer repairing services. The company focuses on robust electrical equipment solutions tailored to industrial, electrical contracting, and manufacturing requirements.",
  activities: [
    "Manufacturing of Transformers",
    "Manufacturing of Current Transformers (CTs)",
    "Manufacturing of Potential Transformers (PTs)",
    "Transformer Repairing",
  ],
  address: {
    line1: "V-95/B",
    area: "MIDC Area",
    road: "Ajanta Road",
    city: "Jalgaon",
    state: "Maharashtra",
    country: "India",
    full: "V-95/B, MIDC Area, Ajanta Road, Jalgaon, Maharashtra, India.",
  },
  phones: {
    primary: {
      display: "+91 93711 89970",
      raw: "+919371189970",
    },
    secondary: {
      display: "+91 95525 95500",
      raw: "+919552595500",
    },
  },
  email: "tusharchitte31@yahoo.co.in",
  googleMapsUrl: "https://share.google/LNeZqBu9rRZYhdfw9",
  googleMapsEmbedQuery: "V-95/B, MIDC Area, Ajanta Road, Jalgaon, Maharashtra, India",
  whatsapp: {
    number: "919371189970",
    display: "+91 93711 89970",
    prefilledMessage:
      "Hello Harsh Industries, I would like to enquire about your transformer / CT / PT products and services. Please share more information.",
  },
  credits: {
    copyright: "© 2026 Harsh Industries. All Rights Reserved.",
    creator: "Website crafted with care by Antara.",
  },
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || companyData.whatsapp.prefilledMessage;
  return `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(message)}`;
};

export const getPhoneLink = (phoneNumber: string = companyData.phones.primary.raw): string => {
  return `tel:${phoneNumber}`;
};

export const getEmailLink = (subject: string = "Industrial Equipment Enquiry - Harsh Industries"): string => {
  return `mailto:${companyData.email}?subject=${encodeURIComponent(subject)}`;
};
