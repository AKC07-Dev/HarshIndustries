import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harshindustries.in";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/products",
    "/products/transformers",
    "/products/current-transformers",
    "/products/potential-transformers",
    "/services",
    "/services/transformer-repair",
    "/infrastructure",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/products") ? 0.9 : 0.8,
  }));
}
