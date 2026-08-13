"use client";

import { useState } from "react";
import Link from "next/link";
import { SlidersHorizontal, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";

interface CategoryDetailContentProps {
  slug: string;
}

export default function CategoryDetailContent({ slug }: CategoryDetailContentProps) {
  const currentCategory = CATEGORIES.find((c) => c.slug === slug);
  const subcategories = currentCategory?.subcategories || [];

  // Filters State
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Category Products
  let categoryProducts = slug === "hepsi"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === slug);

  // Apply Subcategory Filter
  if (selectedSubcategory) {
    categoryProducts = categoryProducts.filter((p) => p.subcategorySlug === selectedSubcategory);
  }

  // Apply Size Filter
  if (selectedSize) {
    categoryProducts = categoryProducts.filter((p) => 
      p.sizes.some(s => s.toLowerCase().includes(selectedSize.toLowerCase()))
    );
  }

  // Apply Price Filter
  categoryProducts = categoryProducts.filter((p) => p.price <= maxPrice);

  // Apply Sorting
  if (sortBy === "price-asc") {
    categoryProducts = [...categoryProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    categoryProducts = [...categoryProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-xs text-brand-muted gap-2 mb-6 overflow-x-auto whitespace-nowrap pb-1">
        <Link href="/" className="hover:text-brand-charcoal">Ana Sayfa</Link>
        <ChevronRight size={12} />
        <Link href="/kategori/kadin" className="hover:text-brand-charcoal">Koleksiyonlar</Link>
        <ChevronRight size={12} />
        <span className="text-brand-charcoal font-semibold">{currentCategory?.name || "Tüm Ürünler"}</span>
        {selectedSubcategory && (
          <>
            <ChevronRight size={12} />
            <span className="text-brand-amber font-bold">
              {subcategories.find(s => s.slug === selectedSubcategory)?.name}
            </span>
          </>
        )}
      </nav>

      {/* Category Banner Header */}
      <div className="mb-8 border-b border-brand-border pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-charcoal flex items-center gap-3">
              <span>{currentCategory?.name || "Tüm Koleksiyon"}</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-charcoal text-brand-cream tracking-normal">
                {categoryProducts.length} Parça
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-2xl">
              {currentCategory?.description || "Netero zamansız lüks parçalar seçkisi."}
            </p>
          </div>

          {/* Quick WhatsApp Order Help Box for Low-Tech Shoppers */}
          <a
            href={`https://wa.me/905070871789?text=Merhaba,%20Netero%20${encodeURIComponent(currentCategory?.name || 'Koleksiyon')}%20ürünleri%20hakkında%20bilgi%20ve%20hızlı%20sipariş%20desteği%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all w-fit"
          >
            <MessageCircle size={16} />
            <span>WhatsApp ile Kolay Sipariş</span>
          </a>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            INTERACTIVE SUBCATEGORY PILLS (ELİT VE KULLANICI DOSTU SEÇİM)
            ═══════════════════════════════════════════════════════════ */}
        {subcategories.length > 0 && (
          <div className="mt-6 pt-6 border-t border-brand-border/60">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-brand-amber" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Alt Kategori Seçimi:
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {/* All in Category Pill */}
              <button
                type="button"
                onClick={() => setSelectedSubcategory(null)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap shadow-sm min-h-[38px] flex items-center ${
                  selectedSubcategory === null
                    ? "bg-brand-charcoal text-brand-cream ring-2 ring-brand-charcoal"
                    : "bg-white text-brand-charcoal border border-brand-border hover:border-brand-charcoal"
                }`}
              >
                Tümü ({currentCategory ? PRODUCTS.filter(p => p.categorySlug === currentCategory.slug).length : PRODUCTS.length})
              </button>

              {/* Individual Subcategories */}
              {subcategories.map((sub) => {
                const count = PRODUCTS.filter(p => p.subcategorySlug === sub.slug).length;
                const isSelected = selectedSubcategory === sub.slug;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSelectedSubcategory(isSelected ? null : sub.slug)}
                    className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap shadow-sm min-h-[38px] flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-brand-amber text-brand-charcoal ring-2 ring-brand-amber font-extrabold"
                        : "bg-white text-brand-charcoal border border-brand-border hover:border-brand-amber"
                    }`}
                  >
                    <span>{sub.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? "bg-brand-charcoal text-brand-cream" : "bg-brand-cream text-brand-muted"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-6 flex items-center justify-between bg-white p-4 rounded-lg border border-brand-border">
        <button
          type="button"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal"
        >
          <SlidersHorizontal size={16} className="text-brand-amber" />
          <span>{isMobileFilterOpen ? "Filtreleri Gizle" : "Beden & Fiyat Filtrele"}</span>
        </button>
        <span className="text-xs font-bold text-brand-amber">{categoryProducts.length} Tasarım</span>
      </div>

      {/* Main Category Layout (Filter Sidebar + Product Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Filter Sidebar */}
        <aside className={`space-y-6 bg-white p-6 rounded-lg border border-brand-border h-fit ${isMobileFilterOpen ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between border-b border-brand-border pb-4">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-brand-charcoal">
              <SlidersHorizontal size={18} className="text-brand-amber" />
              <span>Detaylı Filtre</span>
            </div>
            {(selectedSize || maxPrice < 30000 || selectedSubcategory) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubcategory(null);
                  setSelectedSize(null);
                  setMaxPrice(30000);
                }}
                className="text-xs text-brand-amber font-semibold hover:underline"
              >
                Sıfırla
              </button>
            )}
          </div>

          {/* Size Filter */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal mb-3">
              Beden Seçimi
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {["S (36)", "M (38)", "L (40)", "XL (42)", "48 (M)", "50 (L)", "52 (XL)", "Standart"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                  className={`px-2.5 py-2 text-xs font-semibold rounded border transition-all text-center ${
                    selectedSize === size
                      ? "bg-brand-charcoal text-brand-cream border-brand-charcoal font-bold"
                      : "bg-brand-cream text-brand-charcoal border-brand-border hover:border-brand-muted"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <div className="flex items-center justify-between font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal mb-3">
              <span>Maksimum Bütçe</span>
              <span className="text-brand-amber font-extrabold">₺{maxPrice.toLocaleString("tr-TR")}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={30000}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-brand-amber cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-brand-muted mt-1">
              <span>₺1.000</span>
              <span>₺30.000</span>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal mb-3">
              Sıralama Ölçütü
            </h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs font-medium text-brand-charcoal focus:outline-none focus:border-brand-amber"
            >
              <option value="featured">Seçkin Tasarımlar (Önerilen)</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </aside>

        {/* Right Product Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6 text-xs text-brand-muted">
            <span>Seçiminize uygun <strong className="text-brand-charcoal font-bold">{categoryProducts.length}</strong> özel tasarım listeleniyor</span>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedQuickViewProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-lg border border-brand-border">
              <p className="text-base font-bold text-brand-charcoal">Bu alt kategoride henüz ürün bulunamadı.</p>
              <p className="text-xs text-brand-muted mt-2">Lütfen diğer alt kategorileri inceleyin veya filtreleri sıfırlayın.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedSubcategory(null);
                  setSelectedSize(null);
                  setMaxPrice(30000);
                }}
                className="mt-4 px-6 py-2.5 bg-brand-charcoal text-brand-cream text-xs font-bold rounded-md hover:bg-brand-amber hover:text-brand-charcoal transition-all"
              >
                Tüm Ürünleri Göster
              </button>
            </div>
          )}
        </div>
      </div>

      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
      />
    </div>
  );
}
