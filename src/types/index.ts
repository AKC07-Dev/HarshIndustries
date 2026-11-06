export interface CompanyInfo {
  name: string;
  legalCategory: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  activities: string[];
  address: {
    line1: string;
    area: string;
    road: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  phones: {
    primary: {
      display: string;
      raw: string;
    };
    secondary: {
      display: string;
      raw: string;
    };
  };
  email: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  whatsapp: {
    number: string;
    display: string;
    prefilledMessage: string;
  };
  credits: {
    copyright: string;
    creator: string;
    portfolioUrl?: string;
  };
}

export interface SpecField {
  label: string;
  value: string;
  note?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  workingPrinciple: string;
  applications: string[];
  features: string[];
  imageUrl: string;
  imageAlt: string;
  badge: string;
  specs: SpecField[];
  placeholderNotice: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  learnMoreUrl: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  typicalRequirement: string;
  workflowSteps?: { step: string; title: string; desc: string }[];
  imageUrl: string;
  imageAlt: string;
  pageUrl?: string;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  category: 'Factory Exterior' | 'Workshop' | 'Industrial Machinery' | 'Winding Materials' | 'Manufacturing Environment';
  description: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export interface NavigationLink {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  children?: NavigationLink[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EnquirySubmission {
  fullName: string;
  companyName?: string;
  mobileNumber: string;
  emailAddress?: string;
  enquiryType: 'Transformer Manufacturing' | 'Current Transformer (CT)' | 'Potential Transformer (PT)' | 'Transformer Repairing' | 'General Enquiry' | 'Other';
  productOrService?: string;
  requirementDetails: string;
  sourcePage?: string;
}
