"use client";

import { useState } from "react";
import Link from "next/link";
import { SlidersHorizontal, ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";

interface CategoryDetailContentProps {
  slug: string;
}

export default function CategoryDetailContent({ slug }: CategoryDetailContentProps) {
  const currentCategory = CATEGORIES.find((c) => c.slug === slug);

  // Filters State
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // Category Products
  let categoryProducts = slug === "hepsi"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === slug);

  // Apply Size Filter
  if (selectedSize) {
    categoryProducts = categoryProducts.filter((p) => p.sizes.includes(selectedSize));
  }

  // Apply Price Filter
  categoryProducts = categoryProducts.filter((p) => p.price <= maxPrice);

  // Apply Sorting
  if (sortBy === "price-asc") {
    categoryProducts = [...categoryProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    categoryProducts = [...categoryProducts].sort((a, b) => b.price - a.price);
  }

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-xs text-brand-muted gap-2 mb-6 overflow-x-auto whitespace-nowrap pb-1">
        <Link href="/" className="hover:text-brand-charcoal">Ana Sayfa</Link>
        <ChevronRight size={12} />
        <Link href="/kategori/kadin" className="hover:text-brand-charcoal">Koleksiyonlar</Link>
        <ChevronRight size={12} />
        <span className="text-brand-charcoal font-semibold">{currentCategory?.name || "Tüm Ürünler"}</span>
      </nav>

      {/* Category Banner Header */}
      <div className="mb-8 border-b border-brand-border pb-6">
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-charcoal">
          {currentCategory?.name || "Tüm Koleksiyon"}
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-2xl">
          {currentCategory?.description || "Atelier Nova zamansız parçalar seçkisi."}
        </p>
      </div>

      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-6 flex items-center justify-between bg-white p-4 rounded-lg border border-brand-border">
        <button
          type="button"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal"
        >
          <SlidersHorizontal size={16} className="text-brand-amber" />
          <span>{isMobileFilterOpen ? "Filtreleri Gizle" : "Filtrele & Sırala"}</span>
        </button>
        <span className="text-xs font-bold text-brand-amber">{categoryProducts.length} Ürün</span>
      </div>

      {/* Main Category Layout (Filter Sidebar + Product Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Filter Sidebar */}
        <aside className={`space-y-6 bg-white p-6 rounded-lg border border-brand-border h-fit ${isMobileFilterOpen ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between border-b border-brand-border pb-4">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-brand-charcoal">
              <SlidersHorizontal size={18} className="text-brand-amber" />
              <span>Filtrele & Sırala</span>
            </div>
            {(selectedSize || maxPrice < 30000) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSize(null);
                  setMaxPrice(30000);
                }}
                className="text-xs text-brand-amber font-semibold hover:underline"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Size Filter */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal mb-3">
              Beden Seçimi
            </h4>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL", "Tek Ebat"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded border transition-all ${
                    selectedSize === size
                      ? "bg-brand-charcoal text-brand-cream border-brand-charcoal"
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
              <span>Maksimum Fiyat</span>
              <span className="text-brand-amber">₺{maxPrice.toLocaleString("tr-TR")}</span>
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
              Sıralama
            </h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2 text-xs font-medium text-brand-charcoal focus:outline-none focus:border-brand-amber"
            >
              <option value="featured">Öne Çıkanlar</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </aside>

        {/* Right Product Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6 text-xs text-brand-muted">
            <span>Toplam <strong className="text-brand-charcoal">{categoryProducts.length}</strong> tasarım gösteriliyor</span>
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
              <p className="text-sm font-semibold text-brand-charcoal">Seçtiğiniz filtrelere uygun ürün bulunamadı.</p>
              <p className="text-xs text-brand-muted mt-1">Lütfen fiyat aralığını veya beden seçimini değiştirin.</p>
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
