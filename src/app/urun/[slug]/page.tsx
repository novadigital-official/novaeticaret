import { PRODUCTS } from "@/lib/data";
import ProductDetailContent from "@/components/ProductDetailContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — Netero Giyim Atelier`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  // JSON-LD Structured Data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Netero Giyim",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: product.price,
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `https://netero.com.tr/urun/${product.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailContent product={product} />
    </>
  );
}
