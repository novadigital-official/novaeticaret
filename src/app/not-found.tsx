import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-brand-amber-light text-brand-amber rounded-full flex items-center justify-center mx-auto">
        <Search size={32} />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">404 — Sayfa Bulunamadı</span>
      <h1 className="font-heading font-extrabold text-3xl text-brand-charcoal">
        Aradığınız Sayfa Mevcut Değil
      </h1>
      <p className="text-xs text-brand-muted max-w-md mx-auto">
        Aradığınız ürün veya sayfa taşınmış, silinmiş veya adı değiştirilmiş olabilir.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-block bg-brand-amber text-brand-charcoal px-8 py-4 rounded-md text-xs font-bold hover:bg-brand-amber-hover transition-all shadow-md"
        >
          Netero Koleksiyonuna Dön
        </Link>
      </div>
    </div>
  );
}
