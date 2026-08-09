"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronRight } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/lib/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const items = useCartStore((state) => state.items);
  const wishlist = useCartStore((state) => state.wishlist);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-brand-charcoal text-brand-cream text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span>5.000 TL Üzeri Siparişlerde Ücretsiz VIP Kargo & Sigortalı Teslimat</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur-md border-b border-brand-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-charcoal hover:text-brand-amber transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Mobil Menüyü Aç"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading font-bold text-2xl sm:text-3xl tracking-widest text-brand-charcoal group-hover:text-brand-amber transition-colors">
              NETERO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-brand-amber transition-colors py-2">
              Ana Sayfa
            </Link>
            <Link href="/kategori/kadin" className="hover:text-brand-amber transition-colors py-2">
              Kadın
            </Link>
            <Link href="/kategori/erkek" className="hover:text-brand-amber transition-colors py-2">
              Erkek
            </Link>
            <Link href="/kategori/dis-giyim" className="hover:text-brand-amber transition-colors py-2">
              Dış Giyim
            </Link>
            <Link href="/kategori/aksesuar" className="hover:text-brand-amber transition-colors py-2">
              Aksesuar
            </Link>
            <Link href="/hakkimizda" className="hover:text-brand-muted text-brand-muted transition-colors py-2">
              Hikayemiz
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 sm:p-2.5 text-brand-charcoal hover:text-brand-amber transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Arama"
            >
              <Search size={22} />
            </button>

            {/* Wishlist Icon */}
            <Link
              href="/favoriler"
              className="p-2 sm:p-2.5 text-brand-charcoal hover:text-brand-amber transition-colors relative min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Favoriler"
            >
              <Heart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute top-2 right-2 bg-brand-amber text-brand-charcoal text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Profile / Admin Icon */}
            <Link
              href="/profil"
              className="p-2 sm:p-2.5 text-brand-charcoal hover:text-brand-amber transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Hesabım"
            >
              <User size={22} />
            </Link>

            {/* Cart Icon Drawer Trigger */}
            <button
              type="button"
              onClick={() => toggleCart(true)}
              className="p-2 sm:p-2.5 bg-brand-charcoal text-brand-cream hover:bg-brand-amber hover:text-brand-charcoal transition-all rounded-full relative min-w-[48px] min-h-[48px] flex items-center justify-center ml-1"
              aria-label="Sepeti Aç"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-amber text-brand-charcoal text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-cream">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Live Autocomplete Search Modal Bar */}
        {isSearchOpen && (
          <div className="border-t border-brand-border bg-brand-cream p-4 animate-fade-up">
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center border border-brand-charcoal rounded-md px-3 bg-white">
                <Search size={20} className="text-brand-muted mr-2" />
                <input
                  type="text"
                  placeholder="Koleksiyon veya ürün adı yazın (örn: Kaşmir Palto, İpek Gömlek)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 bg-transparent text-sm focus:outline-none text-brand-charcoal"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-brand-muted hover:text-brand-charcoal p-1"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search Results Dropdown */}
              {searchQuery.trim() !== "" && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-brand-border rounded-md shadow-xl max-h-96 overflow-y-auto z-50 p-3">
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-brand-border">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/urun/${product.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center gap-3 py-3 hover:bg-brand-cream/50 px-2 rounded-md transition-colors"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-brand-charcoal">{product.name}</h4>
                            <p className="text-xs text-brand-muted">{product.categoryName}</p>
                          </div>
                          <span className="text-sm font-bold text-brand-amber">
                            ₺{product.price.toLocaleString("tr-TR")}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-6 text-sm text-brand-muted">
                      Aradığınız kriterlere uygun ürün bulunamadı.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Sidebar Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-brand-cream h-full p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <span className="font-heading font-bold text-2xl tracking-widest text-brand-charcoal">
                  NETERO
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-charcoal min-w-[48px] min-h-[48px] flex items-center justify-center"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4 text-base font-medium">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-brand-border/40 hover:text-brand-amber"
                >
                  <span>Ana Sayfa</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/kategori/kadin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-brand-border/40 hover:text-brand-amber"
                >
                  <span>Kadın Koleksiyonu</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/kategori/erkek"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-brand-border/40 hover:text-brand-amber"
                >
                  <span>Erkek Koleksiyonu</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/kategori/dis-giyim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-brand-border/40 hover:text-brand-amber"
                >
                  <span>Dış Giyim & Palto</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/kategori/aksesuar"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-brand-border/40 hover:text-brand-amber"
                >
                  <span>Deri Aksesuar & Çanta</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/hakkimizda"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 hover:text-brand-amber text-brand-muted"
                >
                  <span>Atelier Hikayemiz</span>
                  <ChevronRight size={18} />
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-brand-border">
              <p className="text-xs text-brand-muted text-center">
                © 2026 Netero Giyim Atelier. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
