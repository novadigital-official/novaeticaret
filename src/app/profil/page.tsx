"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Package, MapPin, Heart, Shield, LogOut, CheckCircle2, Truck } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/lib/data";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "wishlist">("orders");

  const wishlist = useCartStore((state) => state.wishlist);
  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  // Mock Customer Order History
  const mockOrders = [
    {
      id: "NETERO-2026-89412",
      date: "09 Ağustos 2026",
      status: "Kargoda",
      totalAmount: 18450,
      trackingNumber: "TR-VIP-994812",
      items: [
        { name: "Atelier Kaşmir Yün Palto", size: "M", price: 18450, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop" }
      ]
    },
    {
      id: "NETERO-2026-44102",
      date: "14 Temmuz 2026",
      status: "Teslim Edildi",
      totalAmount: 9850,
      trackingNumber: "TR-VIP-112049",
      items: [
        { name: "Netero Minimalist Deri Omuz Çantası", size: "Tek Ebat", price: 9850, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-border pb-6 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Netero Privé Üyesi</span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-charcoal mt-1">
            Hesabım & Sipariş Takibi
          </h1>
        </div>

        <Link
          href="/admin"
          className="bg-brand-charcoal text-brand-cream px-4 py-2 text-xs font-bold rounded hover:bg-brand-amber hover:text-brand-charcoal transition-all"
        >
          🔑 Admin Yönetim Paneline Geç →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar Menu */}
        <aside className="space-y-2 bg-white p-4 rounded-lg border border-brand-border h-fit">
          <button
            type="button"
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold rounded-md transition-all ${
              activeTab === "orders" ? "bg-brand-amber text-brand-charcoal" : "text-brand-charcoal hover:bg-brand-cream"
            }`}
          >
            <Package size={18} />
            <span>Sipariş Geçmişim ({mockOrders.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("addresses")}
            className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold rounded-md transition-all ${
              activeTab === "addresses" ? "bg-brand-amber text-brand-charcoal" : "text-brand-charcoal hover:bg-brand-cream"
            }`}
          >
            <MapPin size={18} />
            <span>Adres Defterim</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("wishlist")}
            className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold rounded-md transition-all ${
              activeTab === "wishlist" ? "bg-brand-amber text-brand-charcoal" : "text-brand-charcoal hover:bg-brand-cream"
            }`}
          >
            <Heart size={18} />
            <span>Favorilerim ({wishlistedProducts.length})</span>
          </button>
        </aside>

        {/* Right Content View */}
        <div className="lg:col-span-3">
          {activeTab === "orders" && (
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-4">Sipariş Geçmişim</h3>
              {mockOrders.map((order) => (
                <div key={order.id} className="bg-white p-6 rounded-lg border border-brand-border space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-border pb-4 gap-2 text-xs">
                    <div>
                      <span className="font-bold text-brand-charcoal">{order.id}</span>
                      <span className="text-brand-muted ml-3">{order.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full font-bold">
                        {order.status}
                      </span>
                      <span className="text-brand-muted">Kargo Takip: <strong className="text-brand-charcoal">{order.trackingNumber}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-12 h-14 object-cover rounded border border-brand-border" />
                          <div>
                            <h4 className="font-bold text-brand-charcoal">{item.name}</h4>
                            <span className="text-brand-muted">Beden: {item.size}</span>
                          </div>
                        </div>
                        <span className="font-bold text-brand-amber">₺{item.price.toLocaleString("tr-TR")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="space-y-6 bg-white p-8 rounded-lg border border-brand-border">
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Kayıtlı Teslimat Adresim</h3>
              <div className="p-4 border border-brand-amber bg-brand-amber-light rounded-md text-xs space-y-2">
                <div className="flex justify-between items-center font-bold text-brand-charcoal">
                  <span>Ev Adresi (Varsayılan)</span>
                  <span className="text-brand-amber">Düzenle</span>
                </div>
                <p className="text-brand-charcoal font-semibold">Ahmet Yılmaz — 0532 000 00 00</p>
                <p className="text-brand-muted">Abdi İpekçi Caddesi No:42 Daire:12 Beşiktaş / İstanbul</p>
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-4">Favori Tasarımlarım</h3>
              {wishlistedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistedProducts.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg border border-brand-border flex gap-4">
                      <img src={product.images[0]} alt={product.name} className="w-16 h-20 object-cover rounded" />
                      <div>
                        <h4 className="font-bold text-xs text-brand-charcoal leading-tight">{product.name}</h4>
                        <span className="font-bold text-xs text-brand-amber mt-2 block">₺{product.price.toLocaleString("tr-TR")}</span>
                        <Link href={`/urun/${product.slug}`} className="text-[10px] text-brand-muted hover:underline mt-2 inline-block">
                          Ürüne Git →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-brand-muted">Henüz favorilerinize ürün eklemediniz.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
