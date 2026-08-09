import { CATEGORIES } from "@/lib/data";
import CategoryDetailContent from "@/components/CategoryDetailContent";
import { Metadata } from "next";

export function generateStaticParams() {
  return [
    { slug: "hepsi" },
    ...CATEGORIES.map((cat) => ({
      slug: cat.slug,
    })),
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  const name = category?.name || "Tüm Koleksiyon";

  return {
    title: `${name} — Netero Giyim Atelier`,
    description: category?.description || "Zamansız lüks tasarım seçkisi.",
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <CategoryDetailContent slug={params.slug} />;
}
