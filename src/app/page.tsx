"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Star, Award, CheckCircle2 } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";

export default function HomePage() {
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <div className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
         1. HERO SECTION (Aurora Mesh Glow + Architectural Grid)
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Aurora Halo */}
        <div className="aurora-glow-hero" />

        {/* Small Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-amber/30 bg-brand-amber-light text-brand-amber text-xs font-bold uppercase tracking-widest mb-6 animate-fade-up">
          <Sparkles size={14} />
          <span>Yeni Sezon 2026 Netero Koleksiyonu</span>
        </div>

        {/* Fluid Clamp Heading */}
        <h1 className="font-heading font-extrabold text-brand-charcoal text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none max-w-4xl animate-fade-up">
          Zamansız Lüks, <br />
          <span className="text-brand-amber italic font-serif">Kusursuz Terzilik.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-brand-muted max-w-2xl font-sans leading-relaxed">
          Netero Giyim; saf kaşmir, dut ipeği ve el yapımı dana derisiyle harmanlanan, 
          &quot;Less but better&quot; felsefesinde şekillenen zamansız tasarımlar sunar.
        </p>

        {/* Action CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/kategori/kadin"
            className="w-full sm:w-auto bg-brand-amber text-brand-charcoal font-bold text-sm px-8 py-4 rounded-md hover:bg-brand-amber-hover transition-all shadow-lg flex items-center justify-center gap-2 group min-h-[48px]"
          >
            <span>Koleksiyonu Keşfet</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/hakkimizda"
            className="w-full sm:w-auto bg-white border border-brand-border text-brand-charcoal font-semibold text-sm px-8 py-4 rounded-md hover:border-brand-charcoal transition-all flex items-center justify-center min-h-[48px]"
          >
            Atelier Hikayemiz
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-8 border-t border-brand-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-xs text-brand-muted font-medium">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>%100 Doğal İpek & Kaşmir</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>Ücretsiz VIP Sigortalı Kargo</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>14 Gün Kolay İade Garantisi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-brand-amber" />
            <span>İyzico Güvenli Ödeme POS</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         2. CATEGORY TILES GRID SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Koleksiyonlar</span>
            <h2 className="font-heading font-bold text-3xl text-brand-charcoal mt-2">
              Kategorilere Göre İnceleyin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/kategori/${cat.slug}`}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-brand-border bg-brand-cream"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="font-heading font-bold text-xl tracking-wide">{cat.name}</h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-amber group-hover:translate-x-1 transition-transform">
                    İncele <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         3. FEATURED PRODUCTS GRID SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Öne Çıkanlar</span>
            <h2 className="font-heading font-bold text-3xl text-brand-charcoal mt-2">
              Atelier Seçkisi & İmzalı Tasarımlar
            </h2>
          </div>
          <Link
            href="/kategori/kadin"
            className="text-xs font-bold text-brand-charcoal hover:text-brand-amber transition-colors flex items-center gap-1 border-b border-brand-charcoal pb-1"
          >
            Tüm Ürünleri Gör ({PRODUCTS.length}) <ArrowRight size={14} />
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
      </section>

      {/* ═══════════════════════════════════════════════════════════
         4. BRAND STORY SECTION ("Less but better")
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-charcoal text-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Felsefemiz</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 leading-tight">
              &quot;Less But Better&quot; — <br />
              Daha Az, Ama Çok Daha İleri.
            </h2>
            <p className="text-sm text-neutral-300 mt-6 leading-relaxed">
              Netero Giyim, hızlı modanın geçici tüketim çılgınlığına karşı durur. 
              Her bir parçamız; nesiller boyu saklanabilecek kalitede, İtalyan terziliği 
              ve usta deri zanaatkarları tarafından üretilmiştir.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div>
                <span className="font-heading font-bold text-3xl text-brand-amber">100%</span>
                <p className="text-xs text-neutral-400 mt-1">Sertifikalı Doğal Hammadde</p>
              </div>
              <div>
                <span className="font-heading font-bold text-3xl text-brand-amber">24 Saat</span>
                <p className="text-xs text-neutral-400 mt-1">VIP Özel Paketleme & Teslimat</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
              alt="Netero Atelier Zanaatkarları"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         5. SOCIAL PROOF & REVIEWS SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 text-brand-amber mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-brand-amber" />
            ))}
          </div>
          <h2 className="font-heading font-bold text-2xl text-brand-charcoal">
            Netero Müşteri Deneyimleri
          </h2>
          <p className="text-xs text-brand-muted mt-1">4.9/5 Müşteri Memnuniyet Skoru</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-brand-border/60 shadow-sm">
            <p className="text-xs text-brand-charcoal italic leading-relaxed">
              &quot;Atelier Kaşmir Paltoyu aldım, kumaş dokusu ve omuz kesimi inanılmaz. Gerçek bir lüks ürün aldığınızı paketleme açılır açılmaz anlıyorsunuz.&quot;
            </p>
            <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
              <span className="text-xs font-bold text-brand-charcoal">Selin Y. — İstanbul</span>
              <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">Doğrulanmış Alıcı</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-brand-border/60 shadow-sm">
            <p className="text-xs text-brand-charcoal italic leading-relaxed">
              &quot;Deri omuz çantası dikişleri ve derinin kokusu harika. İyzico ile ödeme yaptıktan 1 gün sonra kargom elimdeydi. Teşekkürler Netero.&quot;
            </p>
            <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
              <span className="text-xs font-bold text-brand-charcoal">Emre K. — İzmir</span>
              <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">Doğrulanmış Alıcı</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-brand-border/60 shadow-sm">
            <p className="text-xs text-brand-charcoal italic leading-relaxed">
              &quot;İpek dökümlü gömleğin kesimi harika. Beden konusunda canlı destekte çok yardımcı oldular. Kesinlikle tavsiye ediyorum.&quot;
            </p>
            <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
              <span className="text-xs font-bold text-brand-charcoal">Defne A. — Ankara</span>
              <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">Doğrulanmış Alıcı</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal Handler */}
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
      />
    </div>
  );
}
