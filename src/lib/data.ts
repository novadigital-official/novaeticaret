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
      "Kuru temizleme önerilir",
      "İtalya'da özel atelier üretimi"
    ]
  },
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
      "Ayarlanabilir deri omuz askısı",
      "Genişlik: 28cm, Yükseklik: 20cm, Derinlik: 9cm",
      "Özel bez muhafaza çantası ile teslim edilir"
    ]
  },
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
      "Gerçek sedef düğmeler",
      "Hassas elde yıkama veya kuru temizleme"
    ]
  },
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
      "İç cep ve pasaport gözü",
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
      "240 GSM ağır kumaş tok doku",
      "Çekmezlik garantili"
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
    details: [
      "RFID Temassız Kart Koruması",
      "El dikimi mumlu ip dikişler"
    ]
  }
];

export const COUPONS: Record<string, { discountType: "PERCENTAGE" | "FIXED"; discountValue: number; minOrderAmount: number }> = {
  "NETERO10": { discountType: "PERCENTAGE", discountValue: 10, minOrderAmount: 2000 },
  "LUX2026": { discountType: "FIXED", discountValue: 1000, minOrderAmount: 10000 }
};
