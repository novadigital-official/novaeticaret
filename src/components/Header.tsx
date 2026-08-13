"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, Sparkles, Home } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>("kadin");
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
        p.subcategoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const kadinCat = CATEGORIES.find(c => c.slug === "kadin");
  const erkekCat = CATEGORIES.find(c => c.slug === "erkek");

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-brand-charcoal text-brand-cream text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles size={13} className="text-brand-amber hidden sm:inline" />
        <span>5.000 TL Üzeri Siparişlerde Ücretsiz VIP Kargo & Sigortalı Teslimat</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-md border-b border-brand-border transition-all">
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
            <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-widest text-brand-charcoal group-hover:text-brand-amber transition-colors">
              NETERO
            </span>
          </Link>

          {/* Desktop Navigation with Elite Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            <Link href="/" className="hover:text-brand-amber transition-colors py-2">
              Ana Sayfa
            </Link>

            {/* KADIN DROPDOWN */}
            <div className="relative group py-6">
              <Link
                href="/kategori/kadin"
                className="flex items-center gap-1.5 hover:text-brand-amber transition-colors"
              >
                <span>Kadın Koleksiyonu</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform text-brand-muted" />
              </Link>
              
              <div className="absolute top-full left-0 w-80 bg-white border border-brand-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-amber">Kadın Kategorileri</span>
                  <Link href="/kategori/kadin" className="text-[11px] font-bold text-brand-charcoal hover:text-brand-amber">Tümünü Gör →</Link>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {kadinCat?.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/kategori/kadin`}
                      className="flex items-center gap-2 p-2 hover:bg-brand-cream rounded-lg transition-all group/item"
                    >
                      {sub.image && (
                        <img src={sub.image} alt={sub.name} className="w-8 h-8 rounded-full object-cover border border-brand-border flex-shrink-0" />
                      )}
                      <span className="text-xs font-medium text-brand-charcoal group-hover/item:text-brand-amber group-hover/item:font-bold line-clamp-1">
                        {sub.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ERKEK DROPDOWN */}
            <div className="relative group py-6">
              <Link
                href="/kategori/erkek"
                className="flex items-center gap-1.5 hover:text-brand-amber transition-colors"
              >
                <span>Erkek Koleksiyonu</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform text-brand-muted" />
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white border border-brand-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-amber">Erkek Kategorileri</span>
                  <Link href="/kategori/erkek" className="text-[11px] font-bold text-brand-charcoal hover:text-brand-amber">Tümünü Gör →</Link>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {erkekCat?.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/kategori/erkek`}
                      className="flex items-center gap-2 p-2 hover:bg-brand-cream rounded-lg transition-all group/item"
                    >
                      {sub.image && (
                        <img src={sub.image} alt={sub.name} className="w-8 h-8 rounded-full object-cover border border-brand-border flex-shrink-0" />
                      )}
                      <span className="text-xs font-medium text-brand-charcoal group-hover/item:text-brand-amber group-hover/item:font-bold line-clamp-1">
                        {sub.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/hakkimizda" className="hover:text-brand-muted text-brand-muted transition-colors py-2">
              Atelier Hikayemiz
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
                  placeholder="Koleksiyon veya ürün adı yazın (örn: Kaşmir Palto, İpek Gömlek, Loafer)..."
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
                            <p className="text-xs text-brand-muted">{product.categoryName} &bull; {product.subcategoryName}</p>
                          </div>
                          <span className="text-sm font-bold text-brand-amber">
                            ₺{product.price.toLocaleString("tr-TR")}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-brand-muted">
                      Aradığınız kriterlere uygun ürün bulunamadı.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE MENU DRAWER (ELİT ACCORDION)
          ═══════════════════════════════════════════════════════════ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10">
            <div>
              {/* Header */}
              <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-cream">
                <span className="font-heading font-extrabold text-xl tracking-widest text-brand-charcoal">
                  NETERO
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-charcoal hover:text-brand-amber"
                  aria-label="Menüyü Kapat"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links & Accordions */}
              <div className="p-4 space-y-3">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 font-heading font-bold text-sm text-brand-charcoal hover:bg-brand-cream rounded-md"
                >
                  🏠 Ana Sayfa
                </Link>

                {/* KADIN ACCORDION */}
                <div className="border border-brand-border rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedCat(mobileExpandedCat === "kadin" ? null : "kadin")}
                    className="w-full flex items-center justify-between p-3 bg-brand-cream/60 font-heading font-bold text-sm text-brand-charcoal"
                  >
                    <span>👗 Kadın Koleksiyonu</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileExpandedCat === "kadin" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpandedCat === "kadin" && (
                    <div className="p-2 space-y-1 bg-white border-t border-brand-border">
                      <Link
                        href="/kategori/kadin"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 text-xs font-bold text-brand-amber hover:bg-brand-cream rounded"
                      >
                        ✨ Tüm Kadın Ürünleri
                      </Link>
                      {kadinCat?.subcategories.map(sub => (
                        <Link
                          key={sub.id}
                          href="/kategori/kadin"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 py-2 px-3 text-xs text-brand-charcoal hover:bg-brand-cream rounded"
                        >
                          {sub.image && <img src={sub.image} alt={sub.name} className="w-5 h-5 rounded-full object-cover" />}
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* ERKEK ACCORDION */}
                <div className="border border-brand-border rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedCat(mobileExpandedCat === "erkek" ? null : "erkek")}
                    className="w-full flex items-center justify-between p-3 bg-brand-cream/60 font-heading font-bold text-sm text-brand-charcoal"
                  >
                    <span>👔 Erkek Koleksiyonu</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileExpandedCat === "erkek" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpandedCat === "erkek" && (
                    <div className="p-2 space-y-1 bg-white border-t border-brand-border">
                      <Link
                        href="/kategori/erkek"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 text-xs font-bold text-brand-amber hover:bg-brand-cream rounded"
                      >
                        ✨ Tüm Erkek Ürünleri
                      </Link>
                      {erkekCat?.subcategories.map(sub => (
                        <Link
                          key={sub.id}
                          href="/kategori/erkek"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 py-2 px-3 text-xs text-brand-charcoal hover:bg-brand-cream rounded"
                        >
                          {sub.image && <img src={sub.image} alt={sub.name} className="w-5 h-5 rounded-full object-cover" />}
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/hakkimizda"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 font-heading font-bold text-sm text-brand-charcoal hover:bg-brand-cream rounded-md"
                >
                  📜 Atelier Hikayemiz
                </Link>
              </div>
            </div>

            {/* Mobile Footer Help */}
            <div className="p-4 border-t border-brand-border bg-brand-cream">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Netero%20online%20mağazanızdan%20sipariş%20vermek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-md flex items-center justify-center gap-2 shadow"
              >
                <span>WhatsApp ile Hızlı Sipariş</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          TRENDYOL-STYLE MOBILE STICKY BOTTOM BAR (ZARİF & KOLAY ERİŞİM)
          ═══════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-brand-border py-2 px-4 flex items-center justify-around shadow-lg">
        <Link href="/" className="flex flex-col items-center gap-1 text-brand-charcoal hover:text-brand-amber">
          <Home size={20} />
          <span className="text-[10px] font-bold">Ana Sayfa</span>
        </Link>
        <Link href="/kategori/kadin" className="flex flex-col items-center gap-1 text-brand-charcoal hover:text-brand-amber">
          <span className="text-base leading-none">👗</span>
          <span className="text-[10px] font-bold">Kadın</span>
        </Link>
        <Link href="/kategori/erkek" className="flex flex-col items-center gap-1 text-brand-charcoal hover:text-brand-amber">
          <span className="text-base leading-none">👔</span>
          <span className="text-[10px] font-bold">Erkek</span>
        </Link>
        <Link href="/favoriler" className="flex flex-col items-center gap-1 text-brand-charcoal hover:text-brand-amber relative">
          <Heart size={20} />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 right-1 bg-brand-amber text-brand-charcoal text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
          <span className="text-[10px] font-bold">Favoriler</span>
        </Link>
        <button
          type="button"
          onClick={() => toggleCart(true)}
          className="flex flex-col items-center gap-1 text-brand-charcoal hover:text-brand-amber relative"
        >
          <ShoppingBag size={20} />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 right-0 bg-brand-amber text-brand-charcoal text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
          <span className="text-[10px] font-bold">Sepetim</span>
        </button>
      </div>
    </>
  );
}
