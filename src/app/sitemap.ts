import { MetadataRoute } from "next";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://netero.com.tr";

  const productUrls = PRODUCTS.map((product) => ({
    url: `${baseUrl}/urun/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = CATEGORIES.map((category) => ({
    url: `${baseUrl}/kategori/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...categoryUrls,
    ...productUrls,
  ];
}
