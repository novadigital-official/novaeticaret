"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error Boundary caught error:", error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
        <AlertCircle size={32} />
      </div>
      <h2 className="font-heading font-bold text-2xl text-brand-charcoal">
        Bir Hata Oluştu
      </h2>
      <p className="text-xs text-brand-muted max-w-md mx-auto">
        İstediğiniz sayfa yüklenirken geçici bir sorun meydana geldi. Lütfen tekrar deneyin.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <button
          type="button"
          onClick={() => reset()}
          className="bg-brand-amber text-brand-charcoal px-6 py-3 rounded-md text-xs font-bold hover:bg-brand-amber-hover transition-all flex items-center gap-2"
        >
          <RotateCcw size={16} />
          <span>Tekrar Dene</span>
        </button>
        <Link
          href="/"
          className="bg-brand-charcoal text-brand-cream px-6 py-3 rounded-md text-xs font-bold hover:bg-black transition-all"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
