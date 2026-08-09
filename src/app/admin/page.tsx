"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, Package, ShoppingCart, Users, Plus, AlertTriangle, 
  CheckCircle2, Truck, Edit, Trash2, Shield, Search 
} from "lucide-react";
import { PRODUCTS, Product } from "@/lib/data";

export default function AdminDashboardPage() {
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [activeAdminTab, setActiveAdminTab] = useState<"analytics" | "products" | "orders">("analytics");

  // Form State for Adding New Product
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    categoryName: "Kadın Koleksiyonu",
    categorySlug: "kadin",
    price: 0,
    stock: 10,
    description: "",
    images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"]
  });

  // Calculate Metrics
  const totalRevenue = 428900; // TL
  const totalOrders = 38;
  const criticalStockProducts = productList.filter((p) => p.stock <= 5);

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || newProduct.price <= 0) return;

    const created: Product = {
      id: `netero-prod-${Date.now()}`,
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/\s+/g, "-"),
      description: newProduct.description,
      price: Number(newProduct.price),
      categorySlug: newProduct.categorySlug,
      categoryName: newProduct.categoryName,
      images: newProduct.images,
      isFeatured: true,
      stock: Number(newProduct.stock),
      sizes: ["S", "M", "L"],
      colors: [{ name: "Siyah", hex: "#1A1A1A" }],
      details: ["Yeni Sezon Atelier Üretimi"]
    };

    setProductList([created, ...productList]);
    setIsAddModalOpen(false);
    alert("Yeni ürün başarıyla eklendi ve veritabanına kaydedildi!");
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
      setProductList(productList.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Admin Top Header */}
      <div className="bg-brand-charcoal text-brand-cream p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-brand-amber text-xs font-bold uppercase tracking-widest">
            <Shield size={16} />
            <span>Netero Giyim Yönetici Paneli</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl mt-1">
            Yönetim & Stok Kontrolü
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="bg-brand-amber text-brand-charcoal px-6 py-3 rounded-md text-xs font-bold hover:bg-brand-amber-hover transition-all flex items-center gap-2 shadow-lg"
        >
          <Plus size={18} />
          <span>Yeni Ürün Ekle</span>
        </button>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex border-b border-brand-border mb-8 gap-8 text-sm font-bold">
        <button
          type="button"
          onClick={() => setActiveAdminTab("analytics")}
          className={`pb-4 border-b-2 transition-all ${
            activeAdminTab === "analytics"
              ? "border-brand-amber text-brand-amber"
              : "border-transparent text-brand-muted hover:text-brand-charcoal"
          }`}
        >
          📊 Satış & Stok Analitiği
        </button>
        <button
          type="button"
          onClick={() => setActiveAdminTab("products")}
          className={`pb-4 border-b-2 transition-all ${
            activeAdminTab === "products"
              ? "border-brand-amber text-brand-amber"
              : "border-transparent text-brand-muted hover:text-brand-charcoal"
          }`}
        >
          📦 Ürün Kataloğu ({productList.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveAdminTab("orders")}
          className={`pb-4 border-b-2 transition-all ${
            activeAdminTab === "orders"
              ? "border-brand-amber text-brand-amber"
              : "border-transparent text-brand-muted hover:text-brand-charcoal"
          }`}
        >
          🛒 Sipariş Yönetimi & Kargo (38)
        </button>
      </div>

      {/* ANALYTICS TAB */}
      {activeAdminTab === "analytics" && (
        <div className="space-y-8">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-brand-border shadow-sm">
              <span className="text-xs text-brand-muted uppercase font-bold">Toplam Ciro</span>
              <h3 className="font-heading font-extrabold text-2xl text-brand-amber mt-2">
                ₺{totalRevenue.toLocaleString("tr-TR")}
              </h3>
              <p className="text-[11px] text-green-600 font-semibold mt-1">↑ Geçen aya göre +%28</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-brand-border shadow-sm">
              <span className="text-xs text-brand-muted uppercase font-bold">Toplam Sipariş</span>
              <h3 className="font-heading font-extrabold text-2xl text-brand-charcoal mt-2">
                {totalOrders} Adet
              </h3>
              <p className="text-[11px] text-green-600 font-semibold mt-1">İyzico 3D Onaylı</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-brand-border shadow-sm">
              <span className="text-xs text-brand-muted uppercase font-bold">Aktif Ürün Çeşidi</span>
              <h3 className="font-heading font-extrabold text-2xl text-brand-charcoal mt-2">
                {productList.length} Çeşit
              </h3>
              <p className="text-[11px] text-brand-muted mt-1">4 Ana Kategori</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-red-200 bg-red-50/30 shadow-sm">
              <div className="flex items-center justify-between text-xs text-red-600 uppercase font-bold">
                <span>Kritik Stok Uyarısı</span>
                <AlertTriangle size={16} />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-red-600 mt-2">
                {criticalStockProducts.length} Ürün
              </h3>
              <p className="text-[11px] text-red-600 mt-1">Stok adedi 5 altı kalmış ürünler!</p>
            </div>
          </div>

          {/* Critical Stock Alert List */}
          {criticalStockProducts.length > 0 && (
            <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-red-600 flex items-center gap-2 mb-4">
                <AlertTriangle size={18} />
                <span>Kritik Stok Uyarısı Veren Tasarımlar</span>
              </h3>
              <div className="divide-y divide-brand-border/60">
                {criticalStockProducts.map((p) => (
                  <div key={p.id} className="py-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <img src={p.images[0]} alt="" className="w-10 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-bold text-brand-charcoal">{p.name}</h4>
                        <span className="text-brand-muted">{p.categoryName}</span>
                      </div>
                    </div>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">
                      Kalan Stok: {p.stock} Adet
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PRODUCTS TAB */}
      {activeAdminTab === "products" && (
        <div className="bg-white rounded-lg border border-brand-border overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-brand-cream border-b border-brand-border text-brand-charcoal uppercase font-bold">
              <tr>
                <th className="p-4">Görsel & Ürün</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Fiyat</th>
                <th className="p-4">Stok</th>
                <th className="p-4 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/60">
              {productList.map((product) => (
                <tr key={product.id} className="hover:bg-brand-cream/40 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <img src={product.images[0]} alt="" className="w-10 h-12 object-cover rounded border border-brand-border" />
                    <div>
                      <h4 className="font-bold text-brand-charcoal text-sm">{product.name}</h4>
                      <span className="text-[10px] text-brand-muted">ID: {product.id}</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-brand-charcoal">{product.categoryName}</td>
                  <td className="p-4 font-bold text-brand-amber text-sm">₺{product.price.toLocaleString("tr-TR")}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                      product.stock <= 5 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                    }`}>
                      {product.stock} Adet
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Sil"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ORDERS TAB */}
      {activeAdminTab === "orders" && (
        <div className="bg-white p-6 rounded-lg border border-brand-border space-y-4">
          <h3 className="font-heading font-bold text-base text-brand-charcoal">Son İyzico Siparişleri</h3>
          <div className="divide-y divide-brand-border/60">
            <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-brand-charcoal text-sm">NETERO-2026-89412</span>
                <p className="text-brand-muted">Müşteri: Ahmet Yılmaz (ahmet@example.com) — 0532 000 00 00</p>
                <p className="text-brand-muted">Adres: Abdi İpekçi Cad. Beşiktaş / İstanbul</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Kargo Takip No Girin (TR-VIP-...)"
                  className="bg-brand-cream border border-brand-border px-3 py-2 rounded text-xs focus:outline-none focus:border-brand-amber"
                />
                <button
                  type="button"
                  onClick={() => alert("Kargo takip numarası kaydedildi ve müşteriye SMS/E-Posta atıldı!")}
                  className="bg-brand-charcoal text-brand-cream px-3 py-2 rounded font-bold hover:bg-brand-amber hover:text-brand-charcoal transition-all"
                >
                  Kaydet & Bildir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
          <div className="relative bg-brand-cream p-8 rounded-xl max-w-lg w-full z-10 border border-brand-border shadow-2xl space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-charcoal">Yeni Netero Tasarımı Ekle</h3>
            <form onSubmit={handleAddProductSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold mb-1">Ürün Adı *</label>
                <input
                  type="text"
                  required
                  placeholder="Atelier İpek Şal"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full bg-white border border-brand-border px-3 py-2 rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Fiyat (TL) *</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    className="w-full bg-white border border-brand-border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Stok Adedi *</label>
                  <input
                    type="number"
                    required
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
                    className="w-full bg-white border border-brand-border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Açıklama</label>
                <textarea
                  rows={3}
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full bg-white border border-brand-border px-3 py-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-amber text-brand-charcoal font-bold py-3 rounded shadow hover:bg-brand-amber-hover"
              >
                Ürünü Kataloğa Ekle
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
