export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  categorySlug: string;
  categoryName: string;
  images: string[];
  isFeatured: boolean;
  stock: number;
  sizes: string[];
  colors: { name: string; hex: string }[];
  details: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Kadın Koleksiyonu",
    slug: "kadin",
    description: "Zarif kesimler, ipeksi dokular ve zamansız lüks parçalar.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cat-2",
    name: "Erkek Koleksiyonu",
    slug: "erkek",
    description: "Minimalist terzilik, üst seviye kumaşlar ve sofistike tasarım.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cat-3",
    name: "Dış Giyim & Palto",
    slug: "dis-giyim",
    description: "Kaşmir kabanlar, saf yün palto ve fırtına korumalı ceketler.",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cat-4",
    name: "Deri Aksesuar & Çanta",
    slug: "aksesuar",
    description: "El yapımı dana derisi çantalar, kemerler ve minimalist cüzdanlar.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PRODUCTS: Product[] = [
  // ═══════════════════════════════════════════════════════════
  // 1. DIŞ GİYİM & PALTO (dis-giyim)
  // ═══════════════════════════════════════════════════════════
  {
    id: "netero-prod-1",
    name: "Atelier Kaşmir Yün Palto",
    slug: "atelier-kasmir-yun-palto",
    description: "%100 Moğolistan kaşmiri ve merinos yünü karışımıyla dokunan, kruvaze kesim lüks dış giyim palto. Rüzgar geçirmez iç astar ve el dikimi dikiş detayları.",
    price: 18450,
    compareAtPrice: 22000,
    categorySlug: "dis-giyim",
    categoryName: "Dış Giyim & Palto",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 5,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Kömür Siyahı", hex: "#1A1A1A" },
      { name: "Deve Tüyü Bej", hex: "#C5A059" }
    ],
    details: [
      "%70 Moğol Kaşmiri, %30 İtalyan Merinos Yünü",
      "Kruvaze çift düğme kapama",
      "Kuru temizleme önerilir"
    ]
  },
  {
    id: "netero-prod-7",
    name: "Deri Yakalı Süet Trençkot",
    slug: "deri-yakali-suet-trenckot",
    description: "Hakiki kuzu süetinden üretilmiş, deri detaylı yakası ve kuşağı ile modern lüksün temsilcisi trençkot.",
    price: 24500,
    compareAtPrice: 28000,
    categorySlug: "dis-giyim",
    categoryName: "Dış Giyim & Palto",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 4,
    sizes: ["36", "38", "40"],
    colors: [
      { name: "Taba Kahve", hex: "#8B4513" },
      { name: "Siyah", hex: "#1A1A1A" }
    ],
    details: ["%100 Kuzu Süeti", "Süet temizliği uzmanı tarafından yapılmalıdır"]
  },
  {
    id: "netero-prod-8",
    name: "Su Geçirmez Minimalist Yağmurluk",
    slug: "su-gecirmez-minimalist-yagmurluk",
    description: "Nefes alabilen özel membran dokusuyla yağmurlu günlerde kusursuz stil sunan lüks parka.",
    price: 9200,
    categorySlug: "dis-giyim",
    categoryName: "Dış Giyim & Palto",
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Mat Siyah", hex: "#1A1A1A" }],
    details: ["Su ve Rüzgar Geçirmez Dokuma", "Gizli su geçirmez fermuar"]
  },
  {
    id: "netero-prod-9",
    name: "Kadın Bordo Kaşmir Pelerin Palto",
    slug: "kadin-bordo-kasmir-pelerin-palto",
    description: "Zarif pelerin kesimi, bordo rengin derinliği ve kaşmirin eşsiz yumuşaklığı ile büyüleyici palto.",
    price: 16800,
    compareAtPrice: 19500,
    categorySlug: "dis-giyim",
    categoryName: "Dış Giyim & Palto",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 3,
    sizes: ["S-M", "L-XL"],
    colors: [{ name: "Bordo", hex: "#800020" }],
    details: ["%100 Saf Kaşmir Dokuma", "İpek Saten İç Astar"]
  },

  // ═══════════════════════════════════════════════════════════
  // 2. KADIN KOLEKSİYONU (kadin)
  // ═══════════════════════════════════════════════════════════
  {
    id: "netero-prod-3",
    name: "Saf İpek Dökümlü Kadın Gömlek",
    slug: "saf-ipek-dokumlu-kadin-gomlek",
    description: "%100 Dut ipeğinden dokunmuş, sedef düğmeli, rahat ve dökümlü lüks gömlek. Hem gündüz şıklığı hem akşam davetleri için ideal.",
    price: 6450,
    compareAtPrice: 7900,
    categorySlug: "kadin",
    categoryName: "Kadın Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 12,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Kırık Beyaz", hex: "#FAFAF8" },
      { name: "Zümrüt Yeşil", hex: "#1B4D3E" }
    ],
    details: [
      "%100 Doğal Mulberry İpeği",
      "Gerçek sedef düğmeler"
    ]
  },
  {
    id: "netero-prod-10",
    name: "Moğol Kaşmiri V Yaka Kadın Triko Kazak",
    slug: "mogol-kasmiri-v-yaka-kadin-triko-kazak",
    description: "Teninize tüy gibi dokunan saf Moğol kaşmiri. Derin V yaka ve minimalist dikiş kalıbı.",
    price: 8900,
    categorySlug: "kadin",
    categoryName: "Kadın Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 8,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Krem Bej", hex: "#F5F5DC" },
      { name: "Duman Grisi", hex: "#4A4A4A" }
    ],
    details: ["%100 Saf Kaşmir", "Hassas yıkama yapılmalıdır"]
  },
  {
    id: "netero-prod-11",
    name: "İtalyan Yün Piliseli Kadın Midi Etek",
    slug: "italyan-yun-piliseli-kadin-midi-etek",
    description: "Yüksek bel kesimi ve hareketli pilise detaylarıyla modern terziliğin zarafet simgesi.",
    price: 7250,
    categorySlug: "kadin",
    categoryName: "Kadın Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 10,
    sizes: ["36", "38", "40"],
    colors: [{ name: "Siyah", hex: "#1A1A1A" }],
    details: ["%100 İtalyan Ince Yün Dokuma", "Yan gizli fermuar kapama"]
  },
  {
    id: "netero-prod-12",
    name: "Atelier Kuşaklı İpek Elbise",
    slug: "atelier-kusakli-ipek-elbise",
    description: "Akıcı ipek kumaşı, derin sırt detayı ve kendinden kuşaklı bel V kesimi ile eşsiz akşam elbisesi.",
    price: 11500,
    compareAtPrice: 14000,
    categorySlug: "kadin",
    categoryName: "Kadın Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 6,
    sizes: ["36", "38", "40"],
    colors: [{ name: "Zümrüt Yeşil", hex: "#1B4D3E" }],
    details: ["%100 İpek Saten Dokuma"]
  },

  // ═══════════════════════════════════════════════════════════
  // 3. ERKEK KOLEKSİYONU (erkek)
  // ═══════════════════════════════════════════════════════════
  {
    id: "netero-prod-4",
    name: "Erkek İtalyan Yün Blazer Ceket",
    slug: "erkek-italyan-yun-blazer-ceket",
    description: "Super 130s İtalyan yün kumaşından terzi hassasiyetiyle dikilmiş, yarım vatkalı modern fitted blazer ceket.",
    price: 14200,
    categorySlug: "erkek",
    categoryName: "Erkek Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 6,
    sizes: ["48", "50", "52", "54"],
    colors: [
      { name: "Lacivert", hex: "#0B0F19" },
      { name: "Duman Grisi", hex: "#4A4A4A" }
    ],
    details: [
      "%100 Super 130s İtalyan Yünü",
      "Nefes alabilen viskon iç astar"
    ]
  },
  {
    id: "netero-prod-5",
    name: "Organik Pamuk Oversize Erkek Knit T-Shirt",
    slug: "organik-pamuk-oversize-erkek-knit-tshirt",
    description: "Ağır gramajlı 240g organik Ege pamuğundan üretilmiş, tok duruşlu ve dikişsiz yaka detaylı lüks t-shirt.",
    price: 2850,
    categorySlug: "erkek",
    categoryName: "Erkek Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 25,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Kömür Siyahı", hex: "#1A1A1A" },
      { name: "Krem", hex: "#FAFAF8" }
    ],
    details: [
      "%100 Organik Ege Pamuğu",
      "240 GSM ağır kumaş tok doku"
    ]
  },
  {
    id: "netero-prod-13",
    name: "Merinos Yünü Boğazlı Erkek Kazak",
    slug: "merinos-yunu-bogazli-erkek-kazak",
    description: "Avustralya merinos yününden ince dokulu, vücudu saran ve kaşındırmayan boğazlı lüks kazak.",
    price: 6900,
    categorySlug: "erkek",
    categoryName: "Erkek Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 14,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Siyah", hex: "#1A1A1A" }],
    details: ["%100 Avustralya Merinos Yünü"]
  },
  {
    id: "netero-prod-14",
    name: "Minimalist Terzi Kesim Erkek Pantolon",
    slug: "minimalist-terzi-kesim-erkek-pantolon",
    description: "Kırışmayan İtalyan yün karışımlı kumaştan duble paçalı terzi pantolonu.",
    price: 5400,
    categorySlug: "erkek",
    categoryName: "Erkek Koleksiyonu",
    images: [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 16,
    sizes: ["48", "50", "52", "54"],
    colors: [{ name: "Kömür Grisi", hex: "#2B2B2B" }],
    details: ["İtalyan Terzi Kesimi", "Duble Paça"]
  },

  // ═══════════════════════════════════════════════════════════
  // 4. DERİ AKSESUAR & ÇANTA (aksesuar)
  // ═══════════════════════════════════════════════════════════
  {
    id: "netero-prod-2",
    name: "Netero Minimalist Deri Omuz Çantası",
    slug: "netero-minimalist-deri-omuz-cantasi",
    description: "Tabaklanmış hakiki dana derisinden el işçiliğiyle üretilen, zamansız siluete sahip lüks omuz çantası. Mıknatıslı pirinç klips ve süet iç astar.",
    price: 9850,
    categorySlug: "aksesuar",
    categoryName: "Deri Aksesuar & Çanta",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 8,
    sizes: ["Tek Ebat"],
    colors: [
      { name: "Taba Kahve", hex: "#8B4513" },
      { name: "Gece Siyahı", hex: "#1A1A1A" }
    ],
    details: [
      "%100 Hakiki Dana Derisi",
      "Genişlik: 28cm, Yükseklik: 20cm"
    ]
  },
  {
    id: "netero-prod-6",
    name: "Netero Deri Kartlık & Cüzdan",
    slug: "netero-deri-kartlik-cuzdan",
    description: "6 kart kapasiteli, RFID korumalı, ultra ince el yapımı dana derisi kartlık.",
    price: 1950,
    categorySlug: "aksesuar",
    categoryName: "Deri Aksesuar & Çanta",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 30,
    sizes: ["Tek Ebat"],
    colors: [
      { name: "Siyah", hex: "#1A1A1A" },
      { name: "Taba", hex: "#8B4513" }
    ],
    details: ["RFID Temassız Kart Koruması"]
  },
  {
    id: "netero-prod-15",
    name: "El Yapımı Dana Derisi Evrak & Laptop Çantası",
    slug: "el-yapimi-dana-derisi-evrak-laptop-cantasi",
    description: "15 inç MacBook ve belgeleriniz için tasarlanmış, süet astarlı ve ayarlanabilir askılı lüks deri evrak çantası.",
    price: 12400,
    compareAtPrice: 15000,
    categorySlug: "aksesuar",
    categoryName: "Deri Aksesuar & Çanta",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 7,
    sizes: ["Tek Ebat"],
    colors: [{ name: "Siyah", hex: "#1A1A1A" }],
    details: ["15 inç Laptop Gözü", "Süet Koruyucu Astar"]
  },
  {
    id: "netero-prod-16",
    name: "İtalyan Deri Klasik Erkek Kemer",
    slug: "italyan-deri-klasik-erkek-kemer",
    description: "Bitkisel tabaklanmış 3.5cm eninde mat pirinç tokalı hakiki deri kemer.",
    price: 2450,
    categorySlug: "aksesuar",
    categoryName: "Deri Aksesuar & Çanta",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 20,
    sizes: ["85", "90", "95", "100"],
    colors: [{ name: "Siyah", hex: "#1A1A1A" }],
    details: ["%100 Hakiki Dana Derisi", "Mat Pirinç Toka"]
  }
];

export const COUPONS: Record<string, { discountType: "PERCENTAGE" | "FIXED"; discountValue: number; minOrderAmount: number }> = {
  "NETERO10": { discountType: "PERCENTAGE", discountValue: 10, minOrderAmount: 2000 },
  "LUX2026": { discountType: "FIXED", discountValue: 1000, minOrderAmount: 10000 }
};
