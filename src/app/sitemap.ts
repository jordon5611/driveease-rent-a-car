import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { cars } from "@/data/cars";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-08-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/fleet"),
      lastModified: new Date("2026-08-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic car routes
  const carRoutes = cars.map((car) => ({
    url: absoluteUrl(`/fleet/${car.id}`),
    lastModified: new Date(car.lastModified || "2026-08-15"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...carRoutes];
}
