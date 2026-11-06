import { NavigationLink } from "@/types";

export const headerNavLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Current Transformers (CTs)",
        href: "/products/current-transformers",
        description: "Instrument transformers for accurate current measurement & protection.",
      },
      {
        label: "Potential Transformers (PTs)",
        href: "/products/potential-transformers",
        description: "Precision voltage reduction for monitoring, control & metering.",
      },
      {
        label: "Transformers",
        href: "/products/transformers",
        description: "Electromagnetic power transformers for industrial distribution.",
      },
      {
        label: "View All Products",
        href: "/products",
        description: "Explore our complete electrical equipment manufacturing catalogue.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Transformer Repair",
        href: "/services/transformer-repair",
        badge: "Specialized",
        description: "Fault assessment, inspection & restorative repair in MIDC Jalgaon.",
      },
      {
        label: "Transformer Manufacturing",
        href: "/products/transformers",
        description: "Custom-built electrical transformers designed for plant operations.",
      },
      {
        label: "CT / PT Manufacturing",
        href: "/products",
        description: "Precision instrument transformers built to customer specifications.",
      },
      {
        label: "All Services Overview",
        href: "/services",
        description: "Comprehensive summary of manufacturing & repair capabilities.",
      },
    ],
  },
  {
    label: "Infrastructure",
    href: "/infrastructure",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const footerQuickLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Infrastructure Gallery", href: "/infrastructure" },
  { label: "Contact & Location", href: "/contact" },
  { label: "Request a Quote", href: "/contact?type=quote" },
];

export const footerProductLinks: NavigationLink[] = [
  { label: "Current Transformers (CTs)", href: "/products/current-transformers" },
  { label: "Potential Transformers (PTs)", href: "/products/potential-transformers" },
  { label: "Electrical Transformers", href: "/products/transformers" },
  { label: "Complete Product Catalogue", href: "/products" },
];

export const footerServiceLinks: NavigationLink[] = [
  { label: "Transformer Repairing", href: "/services/transformer-repair" },
  { label: "Transformer Manufacturing", href: "/products/transformers" },
  { label: "Instrument Transformer Fabrication", href: "/products" },
  { label: "Custom Technical Enquiries", href: "/contact" },
];
