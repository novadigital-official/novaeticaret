"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const getCartSubtotal = useCartStore((state) => state.getCartSubtotal);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const discountAmount = useCartStore((state) => state.discountAmount);
  const clearCart = useCartStore((state) => state.clearCart);

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "İstanbul",
    district: "Beşiktaş",
    address: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardHolder: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartSubtotal();
  const total = getCartTotal();

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert("Lütfen tüm teslimat bilgilerini eksiksiz doldurun.");
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate İyzico 3D Secure Webhook Verification delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      setStep(3);
    }, 2000);
  };

  if (items.length === 0 && step !== 3) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <ShoppingBag size={48} className="mx-auto text-brand-muted mb-4" />
        <h1 className="font-heading font-bold text-2xl text-brand-charcoal">Sepetinizde Ürün Bulunmuyor</h1>
        <p className="text-xs text-brand-muted mt-2">Ödeme sayfasına geçmeden önce sepetinize ürün eklemelisiniz.</p>
        <Link
          href="/"
          className="mt-6 inline-block bg-brand-amber text-brand-charcoal px-6 py-3 rounded-md text-xs font-bold hover:bg-brand-amber-hover transition-all"
        >
          Koleksiyonu İncele
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Checkout Header Progress */}
      <div className="mb-12 border-b border-brand-border pb-6 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-2xl tracking-widest text-brand-charcoal">
          NETERO <span className="text-xs font-sans text-brand-amber font-normal">CHECKOUT</span>
        </Link>

        {/* Steps Breadcrumb */}
        <div className="flex items-center gap-4 text-xs font-bold">
          <span className={step >= 1 ? "text-brand-amber" : "text-brand-muted"}>1. Teslimat</span>
          <span className="text-brand-muted">→</span>
          <span className={step >= 2 ? "text-brand-amber" : "text-brand-muted"}>2. İyzico Ödeme</span>
          <span className="text-brand-muted">→</span>
          <span className={step === 3 ? "text-brand-amber" : "text-brand-muted"}>3. Sipariş Onay</span>
        </div>
      </div>

      {step === 3 ? (
        /* STEP 3: Order Confirmation Success State */
        <div className="bg-white p-12 rounded-lg border border-brand-border text-center max-w-2xl mx-auto space-y-6 shadow-lg animate-fade-up">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">İyzico Ödeme Doğrulandı</span>
          <h2 className="font-heading font-bold text-3xl text-brand-charcoal">
            Siparişiniz Başarıyla Alındı!
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed max-w-md mx-auto">
            Sipariş numaranız: <strong className="text-brand-charcoal">NETERO-2026-89412</strong>. 
            Detaylı e-faturanız ve kargo takip numaranız <strong className="text-brand-charcoal">{formData.email}</strong> adresinize gönderildi.
          </p>

          <div className="bg-brand-cream p-4 rounded-md text-xs text-brand-charcoal text-left space-y-2">
            <div className="flex justify-between border-b border-brand-border/60 pb-2">
              <span>Teslim Edilecek Adres:</span>
              <span className="font-semibold">{formData.fullName} ({formData.city})</span>
            </div>
            <div className="flex justify-between border-b border-brand-border/60 pb-2">
              <span>Ödeme Yöntemi:</span>
              <span className="font-semibold">İyzico 3D Secure Kredi Kartı</span>
            </div>
            <div className="flex justify-between">
              <span>Tahmini Teslimat:</span>
              <span className="font-semibold text-brand-amber">2 İş Günü İçerisinde</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/profil"
              className="inline-block bg-brand-charcoal text-brand-cream px-8 py-4 rounded-md text-xs font-bold hover:bg-brand-amber hover:text-brand-charcoal transition-all"
            >
              Siparişimi Profilimden Takip Et
            </Link>
          </div>
        </div>
      ) : (
        /* STEP 1 & 2: Checkout Form & Order Summary */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8">
            {step === 1 ? (
              <form onSubmit={handleDeliverySubmit} className="bg-white p-8 rounded-lg border border-brand-border space-y-6">
                <h3 className="font-heading font-bold text-lg text-brand-charcoal border-b border-brand-border pb-4">
                  Teslimat & İletişim Bilgileri
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Ad Soyad *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">E-Posta *</label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Telefon *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0532 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Şehir *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">İlçe *</label>
                    <input
                      type="text"
                      required
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1">Açık Adres *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Mahalle, Cadde, Sokak, Bina No ve Daire..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-amber text-brand-charcoal font-bold text-sm py-4 rounded-md hover:bg-brand-amber-hover transition-all shadow-md min-h-[48px]"
                >
                  Ödeme Adımına Geç →
                </button>
              </form>
            ) : (
              /* STEP 2: İyzico Payment Form Simulation */
              <form onSubmit={handlePaymentSubmit} className="bg-white p-8 rounded-lg border border-brand-border space-y-6">
                <div className="flex items-center justify-between border-b border-brand-border pb-4">
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal flex items-center gap-2">
                    <CreditCard size={20} className="text-brand-amber" />
                    <span>İyzico 3D Secure Kredi Kartı Ödemesi</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-brand-amber font-semibold hover:underline"
                  >
                    ← Teslimatı Düzenle
                  </button>
                </div>

                <div className="bg-brand-amber-light p-4 rounded-md text-xs text-brand-charcoal flex items-center gap-3">
                  <ShieldCheck size={24} className="text-brand-amber shrink-0" />
                  <span>256-Bit SSL Şifreleme ile İyzico Sandbox / Canlı Güvenli Ödeme Ekranı</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1">Kart Üzerindeki İsim *</label>
                  <input
                    type="text"
                    required
                    placeholder="AHMET YILMAZ"
                    value={formData.cardHolder}
                    onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal uppercase focus:outline-none focus:border-brand-amber"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1">Kart Numarası *</label>
                  <input
                    type="text"
                    required
                    placeholder="5549 **** **** 1234"
                    maxLength={19}
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">Son Kullanma (AA/YY) *</label>
                    <input
                      type="text"
                      required
                      placeholder="12/28"
                      maxLength={5}
                      value={formData.cardExpiry}
                      onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-1">CVC / Güvenlik Kodu *</label>
                    <input
                      type="text"
                      required
                      placeholder="321"
                      maxLength={4}
                      value={formData.cardCvc}
                      onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-border rounded-md px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-brand-amber text-brand-charcoal font-bold text-sm py-4 rounded-md hover:bg-brand-amber-hover transition-all shadow-md flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>İyzico 3D Secure Doğrulanıyor...</span>
                  ) : (
                    <span>₺{total.toLocaleString("tr-TR")} Ödemeyi İyzico İle Tamamla</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Order Summary Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-brand-border space-y-4">
              <h3 className="font-heading font-bold text-base text-brand-charcoal border-b border-brand-border pb-3">
                Sipariş Özeti ({items.length} Ürün)
              </h3>

              <div className="divide-y divide-brand-border/60 max-h-80 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-14 object-cover rounded border border-brand-border"
                      />
                      <div>
                        <h4 className="font-semibold text-brand-charcoal leading-tight">{item.product.name}</h4>
                        <span className="text-[10px] text-brand-muted">Beden: {item.selectedSize} | Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-bold text-brand-charcoal">
                      ₺{(item.product.price * item.quantity).toLocaleString("tr-TR")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-brand-border pt-4 space-y-2 text-xs text-brand-muted">
                <div className="flex justify-between">
                  <span>Ara Toplam</span>
                  <span className="font-semibold text-brand-charcoal">₺{subtotal.toLocaleString("tr-TR")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>İndirim</span>
                    <span>-₺{discountAmount.toLocaleString("tr-TR")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>VIP Kargo</span>
                  <span>{subtotal >= 5000 ? "Ücretsiz" : "₺250"}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-brand-charcoal pt-3 border-t border-brand-border">
                  <span>Ödenecek Toplam Tutar</span>
                  <span className="text-brand-amber">₺{total.toLocaleString("tr-TR")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
