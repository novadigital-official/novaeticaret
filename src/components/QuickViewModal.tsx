"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ShoppingBag, Heart, ShieldCheck, Truck, Check } from "lucide-react";
import { Product } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  if (!product) return null;

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
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-brand-cream rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden z-10 border border-brand-border animate-fade-up">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full text-brand-charcoal hover:bg-white transition-all shadow-md min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Gallery Column */}
          <div className="p-6 bg-white flex flex-col justify-between">
            <div className="aspect-[3/4] bg-brand-cream rounded-md overflow-hidden relative">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-20 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img ? "border-brand-amber ring-2 ring-brand-amber/30" : "border-brand-border"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
                {product.categoryName}
              </span>
              <h2 className="font-heading font-bold text-2xl text-brand-charcoal mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-bold text-2xl text-brand-charcoal">
                  ₺{product.price.toLocaleString("tr-TR")}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm text-brand-muted line-through">
                    ₺{product.compareAtPrice.toLocaleString("tr-TR")}
                  </span>
                )}
              </div>

              <p className="text-xs text-brand-muted leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Color Selector */}
              {product.colors.length > 0 && (
                <div className="mt-6">
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2">
                    Renk: <span className="text-brand-amber">{selectedColor.name}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                          selectedColor.name === color.name
                            ? "border-brand-amber ring-2 ring-brand-amber/30 bg-white"
                            : "border-brand-border hover:border-brand-muted"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes.length > 0 && (
                <div className="mt-6">
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2">
                    Beden Seçin:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-xs font-semibold rounded-md border transition-all min-w-[44px] ${
                          selectedSize === size
                            ? "bg-brand-charcoal text-brand-cream border-brand-charcoal"
                            : "bg-white text-brand-charcoal border-brand-border hover:border-brand-muted"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock Indicator */}
              <div className="mt-6 text-xs text-brand-muted flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Stokta Var (Stok Adedi: {product.stock})</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 pt-6 border-t border-brand-border space-y-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-brand-amber text-brand-charcoal font-bold text-sm py-3.5 rounded-md hover:bg-brand-amber-hover transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 min-h-[48px]"
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
                  onClick={() => toggleWishlist(product.id)}
                  className="p-3.5 bg-white border border-brand-border rounded-md text-brand-charcoal hover:text-red-600 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
                >
                  <Heart size={20} className={isWishlisted ? "fill-red-600 text-red-600" : ""} />
                </button>
              </div>

              <Link
                href={`/urun/${product.slug}`}
                onClick={onClose}
                className="block text-center text-xs font-semibold text-brand-muted hover:text-brand-charcoal hover:underline pt-2"
              >
                Tüm Detayları ve Ürün Hikayesini İncele →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
