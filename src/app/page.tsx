"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";

export default function HomePage() {
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);
  const kadinCat = CATEGORIES.find(c => c.slug === "kadin");
  const erkekCat = CATEGORIES.find(c => c.slug === "erkek");

  return (
    <div className="relative overflow-hidden pb-16 lg:pb-0">
      {/* ═══════════════════════════════════════════════════════════
         1. HERO SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Aurora Halo */}
        <div className="aurora-glow-hero" />

        {/* Small Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-amber/30 bg-brand-amber-light text-brand-amber text-xs font-bold uppercase tracking-widest mb-6 animate-fade-up">
          <Sparkles size={14} />
          <span>Yeni Sezon 2026 Netero Koleksiyonu</span>
        </div>

        {/* Fluid Clamp Heading */}
        <h1 className="font-heading font-extrabold text-brand-charcoal text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl animate-fade-up">
          Zamansız Lüks, <br />
          <span className="text-brand-amber italic font-serif">Kusursuz Terzilik.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-brand-muted max-w-2xl font-sans leading-relaxed">
          Netero; saf kaşmir, dut ipeği ve el yapımı dana derisiyle harmanlanan, 
          &quot;Less but better&quot; felsefesinde şekillenen zamansız kadın ve erkek koleksiyonları sunar.
        </p>

        {/* Action CTA Buttons */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/kategori/kadin"
            className="flex-1 sm:flex-none bg-brand-charcoal text-brand-cream font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg hover:bg-brand-amber hover:text-brand-charcoal transition-all shadow-md flex items-center justify-center gap-2 min-h-[46px]"
          >
            <span>👗 Kadın Koleksiyonu</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/kategori/erkek"
            className="flex-1 sm:flex-none bg-white border border-brand-charcoal text-brand-charcoal font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg hover:bg-brand-amber hover:border-brand-amber transition-all shadow-md flex items-center justify-center gap-2 min-h-[46px]"
          >
            <span>👔 Erkek Koleksiyonu</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-6 border-t border-brand-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-xs text-brand-muted font-medium">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>%100 İpek & Kaşmir</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>VIP Sigortalı Kargo</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>14 Gün Kolay İade</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>WhatsApp Hızlı Sipariş</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         2. TRENDYOL-STYLE SUBCATEGORY STORY BUBBLES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Kadın Story Bubble Strip */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                <span>👗 KADIN KATEGORİLERİ</span>
              </span>
              <Link href="/kategori/kadin" className="text-xs font-bold text-brand-amber hover:underline">
                Tümü (12) →
              </Link>
            </div>

            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
              {kadinCat?.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  href="/kategori/kadin"
                  className="flex flex-col items-center gap-2 group flex-shrink-0"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 border-2 border-brand-amber/40 group-hover:border-brand-amber transition-all overflow-hidden shadow-sm">
                    {sub.image && (
                      <img src={sub.image} alt={sub.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-brand-charcoal group-hover:text-brand-amber text-center whitespace-nowrap">
                    {sub.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Erkek Story Bubble Strip */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                <span>👔 ERKEK KATEGORİLERİ</span>
              </span>
              <Link href="/kategori/erkek" className="text-xs font-bold text-brand-amber hover:underline">
                Tümü (11) →
              </Link>
            </div>

            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
              {erkekCat?.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  href="/kategori/erkek"
                  className="flex flex-col items-center gap-2 group flex-shrink-0"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 border-2 border-brand-charcoal/30 group-hover:border-brand-amber transition-all overflow-hidden shadow-sm">
                    {sub.image && (
                      <img src={sub.image} alt={sub.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-brand-charcoal group-hover:text-brand-amber text-center whitespace-nowrap">
                    {sub.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         3. 2 MAIN MASTER DEPARTMENT CARDS (KADIN & ERKEK)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kadın Master Card */}
          <Link
            href="/kategori/kadin"
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-brand-border"
          >
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="Kadın Koleksiyonu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-brand-amber text-xs font-bold uppercase tracking-widest">2026 İlkbahar / Yaz</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                Kadın Koleksiyonu
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-2 max-w-md">
                Elbise, ipek bluz, kaban, çanta ve stiletto seçkilerini keşfedin.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand-amber group-hover:translate-x-1 transition-transform">
                <span>Koleksiyonu İncele</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Erkek Master Card */}
          <Link
            href="/kategori/erkek"
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-brand-border"
          >
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop"
              alt="Erkek Koleksiyonu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-brand-amber text-xs font-bold uppercase tracking-widest">Atelier Terzilik</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                Erkek Koleksiyonu
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-2 max-w-md">
                İtalyan yün blazer, mısır pamuğu gömlek, kaşmir palto ve loaferlar.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand-amber group-hover:translate-x-1 transition-transform">
                <span>Koleksiyonu İncele</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         4. FEATURED PRODUCTS (ÖNE ÇIKAN SEÇKİN TASARIMLAR)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-brand-cream/50 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Öne Çıkanlar</span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-charcoal mt-1">
                Seçkin Atelier Tasarımları
              </h2>
            </div>
            <Link
              href="/kategori/kadin"
              className="text-xs font-bold text-brand-charcoal hover:text-brand-amber flex items-center gap-1 group"
            >
              <span>Tüm Tasarımları Gör</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedQuickViewProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
      />
    </div>
  );
}
