"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Check, Star } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isInWishlist = useCartStore((state) => state.isInWishlist);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    router.push("/checkout");
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-xs text-brand-muted gap-2 mb-8">
        <Link href="/" className="hover:text-brand-charcoal">Ana Sayfa</Link>
        <ChevronRight size={12} />
        <Link href={`/kategori/${product.categorySlug}`} className="hover:text-brand-charcoal">
          {product.categoryName}
        </Link>
        <ChevronRight size={12} />
        <span className="text-brand-charcoal font-semibold">{product.name}</span>
      </nav>

      {/* Main Product Layout (Gallery + Buying Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-white border border-brand-border rounded-lg overflow-hidden relative shadow-sm">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-24 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? "border-brand-amber ring-2 ring-brand-amber/30" : "border-brand-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Buying Info */}
        <div className="bg-white p-8 rounded-lg border border-brand-border space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
              {product.categoryName}
            </span>
            <h1 className="font-heading font-extrabold text-3xl text-brand-charcoal mt-1 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center text-brand-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-amber" />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-medium">5.0 (24 Müşteri Değerlendirmesi)</span>
            </div>

            <div className="flex items-baseline gap-4 mt-4 pt-4 border-t border-brand-border/40">
              <span className="font-bold text-3xl text-brand-charcoal">
                ₺{product.price.toLocaleString("tr-TR")}
              </span>
              {product.compareAtPrice && (
                <span className="text-base text-brand-muted line-through">
                  ₺{product.compareAtPrice.toLocaleString("tr-TR")}
                </span>
              )}
            </div>

            <p className="text-xs text-brand-muted leading-relaxed mt-4">
              {product.description}
            </p>
          </div>

          {/* Color Selector */}
          {product.colors.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2">
                Seçilen Renk: <span className="text-brand-amber">{selectedColor.name}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-medium transition-all ${
                      selectedColor.name === color.name
                        ? "border-brand-amber ring-2 ring-brand-amber/30 bg-white"
                        : "border-brand-border hover:border-brand-muted"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                  Beden Seçimi:
                </label>
                <span className="text-[11px] text-brand-muted hover:underline cursor-pointer">Beden Rehberi</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 text-xs font-semibold rounded-md border transition-all min-w-[48px] min-h-[48px] ${
                      selectedSize === size
                        ? "bg-brand-charcoal text-brand-cream border-brand-charcoal shadow-sm"
                        : "bg-white text-brand-charcoal border-brand-border hover:border-brand-muted"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Actions */}
          <div className="pt-4 border-t border-brand-border space-y-4">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-brand-amber text-brand-charcoal font-bold text-sm py-4 rounded-md hover:bg-brand-amber-hover transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 min-h-[48px]"
              >
                {isAdded ? (
                  <>
                    <Check size={18} />
                    <span>Sepete Eklendi!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Sepete Ekle</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className="flex-1 bg-brand-charcoal text-brand-cream font-bold text-sm py-4 rounded-md hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 min-h-[48px]"
              >
                Hemen Al
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className="p-4 bg-white border border-brand-border rounded-md text-brand-charcoal hover:text-red-600 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
              >
                <Heart size={20} className={isWishlisted ? "fill-red-600 text-red-600" : ""} />
              </button>
            </div>

            {/* Product Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-4 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-brand-amber" />
                <span>Ücretsiz VIP Sigortalı Kargo</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-amber" />
                <span>%100 Orijinal Sertifikalı Ürün</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={16} className="text-brand-amber" />
                <span>14 Gün Koşulsuz İade</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-amber" />
                <span>İyzico 3D Güvenli Ödeme</span>
              </div>
            </div>
          </div>

          {/* Product Technical Details Accordion */}
          {product.details && product.details.length > 0 && (
            <div className="pt-6 border-t border-brand-border">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal mb-3">
                Kumaş & Üretim Detayları
              </h3>
              <ul className="space-y-2 text-xs text-brand-muted">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 pt-12 border-t border-brand-border">
          <h2 className="font-heading font-bold text-2xl text-brand-charcoal mb-8">
            Bununla Harika Kombinlenir
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
