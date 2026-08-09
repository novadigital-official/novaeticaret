"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function CartDrawer() {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  
  const couponCode = useCartStore((state) => state.couponCode);
  const discountAmount = useCartStore((state) => state.discountAmount);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const removeCoupon = useCartStore((state) => state.removeCoupon);

  const getCartSubtotal = useCartStore((state) => state.getCartSubtotal);
  const getCartTotal = useCartStore((state) => state.getCartTotal);

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isCartOpen) return null;

  const subtotal = getCartSubtotal();
  const total = getCartTotal();
  const freeShippingThreshold = 5000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;

    const res = applyCoupon(inputCoupon);
    if (res.success) {
      setCouponMessage({ type: "success", text: res.message });
      setInputCoupon("");
    } else {
      setCouponMessage({ type: "error", text: res.message });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={() => toggleCart(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-cream border-l border-brand-border shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-brand-border flex items-center justify-between bg-white/50">
            <div className="flex items-center space-x-3">
              <ShoppingBag size={20} className="text-brand-amber" />
              <h3 className="font-heading font-bold text-lg tracking-wide text-brand-charcoal">
                Alışveriş Sepeti ({items.length})
              </h3>
            </div>
            <button
              type="button"
              onClick={() => toggleCart(false)}
              className="p-2 text-brand-muted hover:text-brand-charcoal transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-brand-amber-light px-6 py-3 border-b border-brand-border">
            {remainingForFreeShipping > 0 ? (
              <p className="text-xs text-brand-charcoal font-medium">
                Ücretsiz VIP kargo için ₺<span className="font-bold">{remainingForFreeShipping.toLocaleString("tr-TR")}</span> daha ürün ekleyin!
              </p>
            ) : (
              <p className="text-xs text-brand-amber font-bold flex items-center gap-1">
                <Check size={14} /> Siparişiniz Ücretsiz VIP Kargo Kapsamındadır!
              </p>
            )}
            <div className="w-full bg-brand-border h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-brand-amber h-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-brand-border/50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-muted">
                  <ShoppingBag size={32} />
                </div>
                <h4 className="font-heading font-bold text-base text-brand-charcoal">Sepetiniz Boş</h4>
                <p className="text-xs text-brand-muted mt-2 max-w-xs mx-auto">
                  Netero Giyim koleksiyonlarından zamansız parçalar ekleyerek alışverişe başlayın.
                </p>
                <button
                  type="button"
                  onClick={() => toggleCart(false)}
                  className="mt-6 inline-flex items-center gap-2 bg-brand-charcoal text-brand-cream px-6 py-3 rounded-md text-xs font-semibold hover:bg-brand-amber hover:text-brand-charcoal transition-all"
                >
                  Koleksiyonu Keşfet
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-brand-border/60">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-md border border-brand-border bg-white"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-heading font-semibold text-sm text-brand-charcoal leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-muted hover:text-red-600 transition-colors p-1"
                          title="Ürünü çıkar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-brand-muted">
                        <span>Beden: <strong className="text-brand-charcoal">{item.selectedSize}</strong></span>
                        <span>Renk: <strong className="text-brand-charcoal">{item.selectedColor.name}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-brand-border rounded-md bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-brand-charcoal hover:bg-brand-cream transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs font-bold text-brand-charcoal">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="p-1.5 text-brand-charcoal hover:bg-brand-cream transition-colors disabled:opacity-30"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-brand-amber">
                        ₺{(item.product.price * item.quantity).toLocaleString("tr-TR")}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout Section */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-brand-border space-y-4">
              {/* Coupon Field */}
              <form onSubmit={handleCouponSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={16} className="absolute left-3 top-3 text-brand-muted" />
                    <input
                      type="text"
                      placeholder="Kupon Kodu (Örn: NETERO10)"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-brand-border rounded-md focus:outline-none focus:border-brand-amber uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-brand-charcoal text-brand-cream px-4 py-2 text-xs font-semibold rounded-md hover:bg-brand-amber hover:text-brand-charcoal transition-all"
                  >
                    Uygula
                  </button>
                </div>
                {couponMessage && (
                  <p className={`text-[11px] font-medium ${couponMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
                    {couponMessage.text}
                  </p>
                )}
                {couponCode && (
                  <div className="flex items-center justify-between bg-brand-amber-light px-3 py-1.5 rounded text-xs">
                    <span className="font-bold text-brand-amber">Kupon: {couponCode}</span>
                    <button type="button" onClick={removeCoupon} className="text-red-600 hover:underline">
                      Kaldır
                    </button>
                  </div>
                )}
              </form>

              {/* Subtotal Calculation */}
              <div className="space-y-2 text-xs text-brand-muted border-t border-brand-border/40 pt-3">
                <div className="flex justify-between">
                  <span>Ara Toplam</span>
                  <span className="font-semibold text-brand-charcoal">₺{subtotal.toLocaleString("tr-TR")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Kupon İndirimi</span>
                    <span>-₺{discountAmount.toLocaleString("tr-TR")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Kargo Ücreti</span>
                  <span>{subtotal >= freeShippingThreshold ? "Ücretsiz VIP Kargo" : "₺250"}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-brand-charcoal pt-2 border-t border-brand-border">
                  <span>Genel Toplam</span>
                  <span className="text-brand-amber">₺{total.toLocaleString("tr-TR")}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link
                href="/checkout"
                onClick={() => toggleCart(false)}
                className="w-full bg-brand-amber text-brand-charcoal font-bold text-sm py-4 rounded-md flex items-center justify-center gap-2 hover:bg-brand-amber-hover transition-all shadow-md group"
              >
                <span>Güvenli İyzico Ödemeye Geç</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
