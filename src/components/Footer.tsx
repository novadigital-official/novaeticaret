"use client";

import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t border-brand-charcoal pt-16 pb-12">
      {/* Brand Value Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-full text-brand-amber">
            <Truck size={24} />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wide">VIP Kargo & Sigortalı Teslimat</h4>
            <p className="text-xs text-neutral-400 mt-1">5.000 TL üzeri tüm siparişlerde aynı gün özel kargo hazırlığı.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-full text-brand-amber">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wide">%100 Hakiki Deri & İpek</h4>
            <p className="text-xs text-neutral-400 mt-1">Usta zanaatkarlar tarafından tek tek seçilen sertifikalı hammaddeler.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-full text-brand-amber">
            <RotateCcw size={24} />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wide">14 Gün Şeffaf İade</h4>
            <p className="text-xs text-neutral-400 mt-1">Soru sormadan kolay iade ve ücretsiz kargo değişimi.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-full text-brand-amber">
            <Lock size={24} />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wide">İyzico 256-Bit SSL Ödeme</h4>
            <p className="text-xs text-neutral-400 mt-1">Tüm kredi kartlarına taksit imkanı ve 3D Secure koruması.</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-heading font-bold text-2xl tracking-widest text-brand-amber">
            NETERO
          </span>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            Netero Giyim, zamansız estetik ve sürdürülebilir lüks felsefesiyle üretilen yüksek terzilik ve aksesuar markasıdır.
          </p>
          <div className="mt-6 flex items-center space-x-4 text-neutral-400">
            <span className="text-xs uppercase tracking-widest border border-white/20 px-2 py-1 rounded">TR / TL</span>
            <span className="text-xs text-neutral-500">İstanbul Atelier</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-white">Koleksiyonlar</h4>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li><Link href="/kategori/kadin" className="hover:text-brand-amber transition-colors">Kadın Koleksiyonu</Link></li>
            <li><Link href="/kategori/erkek" className="hover:text-brand-amber transition-colors">Erkek Koleksiyonu</Link></li>
            <li><Link href="/kategori/dis-giyim" className="hover:text-brand-amber transition-colors">Dış Giyim & Palto</Link></li>
            <li><Link href="/kategori/aksesuar" className="hover:text-brand-amber transition-colors">Deri Aksesuar & Çanta</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-white">Müşteri Deneyimi</h4>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li><Link href="/hakkimizda" className="hover:text-brand-amber transition-colors">Atelier Hikayemiz</Link></li>
            <li><Link href="/iletisim" className="hover:text-brand-amber transition-colors">İletişim & Randevu</Link></li>
            <li><Link href="/sss" className="hover:text-brand-amber transition-colors">Sıkça Sorulan Sorular</Link></li>
            <li><Link href="/kvkk" className="hover:text-brand-amber transition-colors">KVKK & Aydınlatma Metni</Link></li>
            <li><Link href="/iade-politikasi" className="hover:text-brand-amber transition-colors">İade ve Değişim Koşulları</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-white">Netero Privé Bülten</h4>
          <p className="text-xs text-neutral-400 mb-4">Yeni sezon koleksiyon lansmanlarından ve özel kapsül seçkilerden ilk siz haberdar olun.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="E-posta adresiniz..."
              className="bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-amber rounded-l-md w-full"
            />
            <button
              type="submit"
              className="bg-brand-amber text-brand-charcoal px-4 py-2 text-xs font-semibold hover:bg-brand-amber-hover transition-colors rounded-r-md min-h-[38px]"
            >
              Katıl
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <p>© 2026 Netero Giyim A.Ş. Tüm hakları saklıdır.</p>
        <div className="flex items-center space-x-6">
          <span>İyzico Korumalı Altyapı</span>
          <span>Visa / Mastercard / Troy</span>
        </div>
      </div>
    </footer>
  );
}
