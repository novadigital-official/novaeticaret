"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Eye, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);

  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isInWishlist = useCartStore((state) => state.isInWishlist);
  const addToCart = useCartStore((state) => state.addToCart);

  const isWishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white border border-brand-border/60 rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container */}
      <div
        className="relative aspect-[3/4] bg-brand-cream overflow-hidden cursor-pointer"
        onMouseEnter={() => product.images.length > 1 && setCurrentImageIndex(1)}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <Link href={`/urun/${product.slug}`}>
          <img
            src={product.images[currentImageIndex] || product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.compareAtPrice && (
            <span className="bg-brand-charcoal text-brand-cream text-[10px] font-bold px-2 py-1 rounded">
              İNDİRİM
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
              SON {product.stock} ÜRÜN
            </span>
          )}
        </div>

        {/* Wishlist Heart Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-brand-charcoal hover:text-red-600 hover:bg-white transition-all shadow-sm z-10 min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Favorilere Ekle"
        >
          <Heart size={18} className={isWishlisted ? "fill-red-600 text-red-600" : ""} />
        </button>

        {/* Quick Actions Bar (Visible on mobile touch, hover on desktop) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-10">
          {onQuickView && (
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="flex-1 bg-white/90 backdrop-blur-md text-brand-charcoal text-xs font-semibold py-2.5 px-3 rounded-md hover:bg-brand-charcoal hover:text-brand-cream transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <Eye size={14} />
              <span>Hızlı İncele</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={product.stock === 0}
            className="flex-1 bg-brand-amber text-brand-charcoal text-xs font-bold py-2.5 px-3 rounded-md hover:bg-brand-amber-hover transition-all flex items-center justify-center gap-1.5 shadow-md disabled:opacity-50"
          >
            {isAdded ? (
              <>
                <Check size={14} />
                <span>Eklendi</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                <span>Hızlı Ekle</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">
            {product.categoryName}
          </span>

          <Link href={`/urun/${product.slug}`}>
            <h3 className="font-heading font-semibold text-sm text-brand-charcoal group-hover:text-brand-amber transition-colors mt-1 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Color Swatches */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1.5 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`w-3.5 h-3.5 rounded-full border ${
                    selectedColor.name === color.name ? "ring-2 ring-brand-amber border-white" : "border-brand-border"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mt-4 pt-3 border-t border-brand-border/40">
          <span className="font-bold text-base text-brand-charcoal">
            ₺{product.price.toLocaleString("tr-TR")}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-brand-muted line-through">
              ₺{product.compareAtPrice.toLocaleString("tr-TR")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
