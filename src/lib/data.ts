export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  parentSlug: string;
  iconName?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  categorySlug: string;
  categoryName: string;
  subcategorySlug: string;
  subcategoryName: string;
  images: string[];
  isFeatured: boolean;
  stock: number;
  sizes: string[];
  colors: { name: string; hex: string }[];
  details: string[];
}

export interface Coupon {
  code: string;
  discountType: "PERCENTAGE" | "FIXED";
  discountValue: number;
  minOrderAmount: number;
}

export const COUPONS: Record<string, Coupon> = {
  NETERO10: {
    code: "NETERO10",
    discountType: "PERCENTAGE",
    discountValue: 10,
    minOrderAmount: 1000,
  },
  VIP20: {
    code: "VIP20",
    discountType: "PERCENTAGE",
    discountValue: 20,
    minOrderAmount: 5000,
  },
  HOSGELDIN: {
    code: "HOSGELDIN",
    discountType: "PERCENTAGE",
    discountValue: 15,
    minOrderAmount: 2500,
  }
};

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: SubCategory[];
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-kadin",
    name: "Kadın",
    slug: "kadin",
    description: "Zarif silüetler, ipek ve kaşmir dokular ile lüks kadın gardırobu.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    subcategories: [
      { id: "sub-k-1", name: "Elbise & Abiye", slug: "elbise", parentSlug: "kadin", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-k-2", name: "Gömlek & Bluz", slug: "gomlek-bluz", parentSlug: "kadin", image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-k-3", name: "Kaban & Dış Giyim", slug: "dis-giyim", parentSlug: "kadin", image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-k-4", name: "Pantolon & Etek", slug: "pantolon-etek", parentSlug: "kadin", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-k-5", name: "Çanta & Aksesuar", slug: "canta-aksesuar", parentSlug: "kadin", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-k-6", name: "Ayakkabı & Topuklu", slug: "ayakkabi", parentSlug: "kadin", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  {
    id: "cat-erkek",
    name: "Erkek",
    slug: "erkek",
    description: "Kusursuz İtalyan terziliği, üst kalite kumaşlar ve modern maskülen parçalar.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
    subcategories: [
      { id: "sub-e-1", name: "Takım & Ceket", slug: "ceket-takim", parentSlug: "erkek", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-e-2", name: "Gömlek & Polo", slug: "gomlek-polo", parentSlug: "erkek", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-e-3", name: "Palto & Dış Giyim", slug: "dis-giyim", parentSlug: "erkek", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-e-4", name: "Terzi Pantolonu", slug: "pantolon-jean", parentSlug: "erkek", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-e-5", name: "Deri Loafer & Ayakkabı", slug: "ayakkabi", parentSlug: "erkek", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=300&auto=format&fit=crop" },
      { id: "sub-e-6", name: "Cüzdan, Kemer & Çanta", slug: "canta-aksesuar", parentSlug: "erkek", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=300&auto=format&fit=crop" }
    ]
  }
];

export const PRODUCTS: Product[] = [
  // ═══════════════════════════════════════════════════════════
  // KADIN - 1. ELBİSE & ABİYE
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-k-elb-1",
    name: "Atelier Kuşaklı Saf İpek Zümrüt Elbise",
    slug: "atelier-kusakli-saf-ipek-zumrut-elbise",
    description: "Akıcı ipek kumaşı, derin sırt detayı ve kendinden kuşaklı bel kesimi ile eşsiz bir akşam daveti elbisesi.",
    price: 11500,
    compareAtPrice: 14000,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "elbise",
    subcategoryName: "Elbise & Abiye",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 6,
    sizes: ["36 (S)", "38 (M)", "40 (L)"],
    colors: [
      { name: "Zümrüt Yeşil", hex: "#1B4D3E" },
      { name: "Asil Siyah", hex: "#1A1A1A" }
    ],
    details: ["%100 Doğal İpek Saten Dokuma", "Gizli yan fermuar", "Kuru temizleme önerilir"]
  },
  {
    id: "prod-k-elb-2",
    name: "Minimalist Yırtmaçlı Siyah Gece Elbisesi",
    slug: "minimalist-yirtmacli-siyah-gece-elbisesi",
    description: "Kusursuz kuplu gövde kesimi ve zarif bacak yırtmacıyla zamansız şıklığı temsil eden lüks kokteyl elbisesi.",
    price: 9800,
    compareAtPrice: 12200,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "elbise",
    subcategoryName: "Elbise & Abiye",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 8,
    sizes: ["36 (S)", "38 (M)", "40 (L)"],
    colors: [{ name: "Siyah", hex: "#111827" }],
    details: ["Krep saten lüks doku", "İç astar mevcuttur"]
  },

  // ═══════════════════════════════════════════════════════════
  // KADIN - 2. GÖMLEK & BLUZ
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-k-blz-1",
    name: "Saf Dut İpeği Sedef Düğmeli Kadın Gömlek",
    slug: "saf-dut-ipegi-sedef-dugmeli-kadin-gomlek",
    description: "%100 Dut ipeğinden dokunmuş, sedef düğmeli, rahat ve dökümlü lüks gömlek.",
    price: 6450,
    compareAtPrice: 7900,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "gomlek-bluz",
    subcategoryName: "Gömlek & Bluz",
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 12,
    sizes: ["XS (34)", "S (36)", "M (38)", "L (40)"],
    colors: [
      { name: "Kırık Beyaz", hex: "#FAFAF8" },
      { name: "Zümrüt Yeşil", hex: "#1B4D3E" }
    ],
    details: ["%100 Doğal Mulberry İpeği", "Gerçek sedef düğmeler"]
  },
  {
    id: "prod-k-blz-2",
    name: "Moğol Kaşmiri V Yaka Kadın Triko Kazak",
    slug: "mogol-kasmiri-v-yaka-kadin-triko-kazak",
    description: "Teninize tüy gibi dokunan saf Moğol kaşmiri. Derin V yaka ve minimalist dikiş kalıbı.",
    price: 8900,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "gomlek-bluz",
    subcategoryName: "Gömlek & Bluz",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 8,
    sizes: ["S (36)", "M (38)", "L (40)"],
    colors: [
      { name: "Krem Bej", hex: "#F5F5DC" },
      { name: "Duman Grisi", hex: "#4A4A4A" }
    ],
    details: ["%100 Saf Kaşmir", "Hassas elde yıkama önerilir"]
  },

  // ═══════════════════════════════════════════════════════════
  // KADIN - 3. KABAN & DIŞ GİYİM
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-k-out-1",
    name: "Bordo Kaşmir Pelerin Kadın Kaban",
    slug: "bordo-kasmir-pelerin-kadin-kaban",
    description: "Zarif pelerin kesimi, bordo rengin asaleti ve saf kaşmirin eşsiz yumuşaklığı ile büyüleyici kaban.",
    price: 16800,
    compareAtPrice: 19500,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "dis-giyim",
    subcategoryName: "Kaban & Dış Giyim",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 4,
    sizes: ["S-M", "L-XL"],
    colors: [{ name: "Bordo", hex: "#800020" }],
    details: ["%100 Saf Kaşmir Dokuma", "İpek Saten İç Astar"]
  },
  {
    id: "prod-k-out-2",
    name: "Deri Kemerli Süet Kadın Trençkot",
    slug: "deri-kemerli-suet-kadin-trenckot",
    description: "Hakiki kuzu süetinden üretilmiş, deri detaylı yakası ve kuşağı ile modern lüksün temsilcisi trençkot.",
    price: 24500,
    compareAtPrice: 28000,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "dis-giyim",
    subcategoryName: "Kaban & Dış Giyim",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 3,
    sizes: ["36 (S)", "38 (M)", "40 (L)"],
    colors: [{ name: "Taba Kahve", hex: "#8B4513" }],
    details: ["%100 Kuzu Süeti", "Süet temizliği uzmanı tarafından yapılmalıdır"]
  },

  // ═══════════════════════════════════════════════════════════
  // KADIN - 4. PANTOLON & ETEK
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-k-btm-1",
    name: "İtalyan Yün Piliseli Kadın Midi Etek",
    slug: "italyan-yun-piliseli-kadin-midi-etek",
    description: "Yüksek bel kesimi ve hareketli pilise detaylarıyla modern terziliğin zarafet simgesi.",
    price: 7250,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "pantolon-etek",
    subcategoryName: "Pantolon & Etek",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 10,
    sizes: ["36 (S)", "38 (M)", "40 (L)"],
    colors: [{ name: "Kömür Siyahı", hex: "#1A1A1A" }],
    details: ["%100 İtalyan İnce Yün Dokuma", "Yan gizli fermuar kapama"]
  },
  {
    id: "prod-k-btm-2",
    name: "Yüksek Bel Yün Dökümlü Kadın Palazzo Pantolon",
    slug: "yuksek-bel-yun-dokumlu-kadin-palazzo-pantolon",
    description: "Geniş paça formu ve akıcı yün kumaşıyla hem ofis hem seyahat için tasarlanan lüks pantolon.",
    price: 6800,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "pantolon-etek",
    subcategoryName: "Pantolon & Etek",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 7,
    sizes: ["36 (S)", "38 (M)", "40 (L)"],
    colors: [{ name: "Krem Bej", hex: "#F5F5DC" }],
    details: ["%100 Doğal Yün & Viskon Karışımı", "İtalyan terzi kalıbı"]
  },

  // ═══════════════════════════════════════════════════════════
  // KADIN - 5. ÇANTA & AKSESUAR
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-k-acc-1",
    name: "Atelier El Yapımı Dana Derisi Kadın Çanta",
    slug: "atelier-el-yapimi-dana-derisi-kadin-canta",
    description: "Floransa tabakhanelerinden seçilmiş bitkisel tabaklanmış dana derisi. Altın kaplama pirinç kilit detayı.",
    price: 13900,
    compareAtPrice: 16500,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "canta-aksesuar",
    subcategoryName: "Çanta & Aksesuar",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 5,
    sizes: ["Standart"],
    colors: [
      { name: "Konyak Kahve", hex: "#9E4714" },
      { name: "Siyah", hex: "#1A1A1A" }
    ],
    details: ["Hakiki İtalyan Dana Derisi", "24K Altın Kaplama Pirinç Kilit"]
  },

  // ═══════════════════════════════════════════════════════════
  // KADIN - 6. AYAKKABI & TOPUKLU
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-k-sh-1",
    name: "Hakiki Süet İtalyan Kadın Stiletto Topuklu",
    slug: "hakiki-suet-italyan-kadin-stiletto-topuklu",
    description: "7.5 cm ideal topuk yüksekliği, ergonomik iç taban ve kadife dokulu hakiki süet deri şıklığı.",
    price: 8400,
    compareAtPrice: 10500,
    categorySlug: "kadin",
    categoryName: "Kadın",
    subcategorySlug: "ayakkabi",
    subcategoryName: "Ayakkabı & Topuklu",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 6,
    sizes: ["36", "37", "38", "39", "40"],
    colors: [{ name: "Nude Bej", hex: "#E3BC9A" }, { name: "Siyah", hex: "#1A1A1A" }],
    details: ["%100 Hakiki İtalyan Süet", "Doğal kösele taban"]
  },

  // ═══════════════════════════════════════════════════════════
  // ERKEK - 1. TAKIM & CEKET
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-e-jkt-1",
    name: "Super 130s İtalyan Yün Erkek Blazer Ceket",
    slug: "super-130s-italyan-yun-erkek-blazer-ceket",
    description: "Super 130s İtalyan yün kumaşından terzi hassasiyetiyle dikilmiş, yarım vatkalı modern fitted blazer ceket.",
    price: 14200,
    compareAtPrice: 17500,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "ceket-takim",
    subcategoryName: "Takım & Ceket",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 6,
    sizes: ["48 (M)", "50 (L)", "52 (XL)", "54 (XXL)"],
    colors: [
      { name: "Lacivert", hex: "#0B0F19" },
      { name: "Duman Grisi", hex: "#4A4A4A" }
    ],
    details: ["%100 Super 130s İtalyan Yünü", "Nefes alabilen viskon iç astar"]
  },
  {
    id: "prod-e-jkt-2",
    name: "Kruvaze Dokulu Saf Yün Erkek Takım Ceketi",
    slug: "kruvaze-dokulu-saf-yun-erkek-takim-ceketi",
    description: "Klasik 6 düğmeli kruvaze kapama, sivri yaka kesimi ve dökümlü yapısıyla asil bir duruş sergileyen ceket.",
    price: 15800,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "ceket-takim",
    subcategoryName: "Takım & Ceket",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 4,
    sizes: ["48 (M)", "50 (L)", "52 (XL)"],
    colors: [{ name: "Kömür Grisi", hex: "#374151" }],
    details: ["Kruvaze çift düğme kapama", "İtalyan terzi dikimi"]
  },

  // ═══════════════════════════════════════════════════════════
  // ERKEK - 2. GÖMLEK & POLO
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-e-top-1",
    name: "Mısır Pamuğu Oxford Erkek Gömlek",
    slug: "misir-pamugu-oxford-erkek-gomlek",
    description: "Uzun elyaflı Giza Mısır pamuğundan üretilmiş, ütü tutan ve nefes alan kusursuz kalıplı klasik gömlek.",
    price: 4200,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "gomlek-polo",
    subcategoryName: "Gömlek & Polo",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 18,
    sizes: ["S (38)", "M (40)", "L (42)", "XL (44)"],
    colors: [
      { name: "Buz Mavisi", hex: "#E0F2FE" },
      { name: "Optik Beyaz", hex: "#FFFFFF" }
    ],
    details: ["%100 Giza Mısır Pamuğu", "Çıkarılabilir yaka baleni"]
  },
  {
    id: "prod-e-top-2",
    name: "İpek Dokulu Triko Erkek Polo Tişört",
    slug: "ipek-dokulu-triko-erkek-polo-tisort",
    description: "Saf ipek ve ince pamuk karışımı ince triko dokuma. Düğmesiz açık yakalı İtalyan Riviera tarzı.",
    price: 3600,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "gomlek-polo",
    subcategoryName: "Gömlek & Polo",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 15,
    sizes: ["S (48)", "M (50)", "L (52)", "XL (54)"],
    colors: [
      { name: "Adaçayı Yeşili", hex: "#84A98C" },
      { name: "Koyu Lacivert", hex: "#0B0F19" }
    ],
    details: ["%30 Doğal İpek, %70 Mısır Pamuğu", "Dikişsiz manşet detayları"]
  },

  // ═══════════════════════════════════════════════════════════
  // ERKEK - 3. PALTO & DIŞ GİYİM
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-e-out-1",
    name: "Atelier Kaşmir Yün Erkek Palto",
    slug: "atelier-kasmir-yun-erkek-palto",
    description: "%100 Moğolistan kaşmiri ve merinos yünü karışımıyla dokunan, kruvaze kesim lüks dış giyim palto.",
    price: 18450,
    compareAtPrice: 22000,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "dis-giyim",
    subcategoryName: "Palto & Dış Giyim",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 5,
    sizes: ["48 (M)", "50 (L)", "52 (XL)", "54 (XXL)"],
    colors: [
      { name: "Kömür Siyahı", hex: "#1A1A1A" },
      { name: "Deve Tüyü Bej", hex: "#C5A059" }
    ],
    details: ["%70 Moğol Kaşmiri, %30 İtalyan Merinos Yünü", "Rüzgar geçirmez astar"]
  },
  {
    id: "prod-e-out-2",
    name: "Su ve Rüzgar Geçirmez Minimalist Erkek Parka",
    slug: "su-ve-ruzgar-gecirmez-minimalist-erkek-parka",
    description: "Nefes alabilen özel membran dokusuyla yağmurlu günlerde kusursuz stil sunan lüks parka.",
    price: 9200,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "dis-giyim",
    subcategoryName: "Palto & Dış Giyim",
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Mat Siyah", hex: "#1A1A1A" }],
    details: ["Su ve Rüzgar Geçirmez Membran", "Termo iç astar"]
  },

  // ═══════════════════════════════════════════════════════════
  // ERKEK - 4. TERZİ PANTOLONU & JEAN
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-e-btm-1",
    name: "Minimalist Terzi Kesim Duble Paça Erkek Pantolon",
    slug: "minimalist-terzi-kesim-duble-paca-erkek-pantolon",
    description: "Kırışmayan İtalyan yün karışımlı kumaştan duble paçalı, yan ayarlama tokalı terzi pantolonu.",
    price: 5400,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "pantolon-jean",
    subcategoryName: "Terzi Pantolonu & Jean",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 14,
    sizes: ["48 (30-31)", "50 (32-33)", "52 (34-35)"],
    colors: [
      { name: "Duman Grisi", hex: "#4A4A4A" },
      { name: "Gece Mavisi", hex: "#0B0F19" }
    ],
    details: ["%80 Yün, %20 İpek", "Duble paça 4 cm katlama"]
  },

  // ═══════════════════════════════════════════════════════════
  // ERKEK - 5. DERİ LOAFER & AYAKKABI
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-e-sh-1",
    name: "Hakiki Dana Derisi El Yapımı Erkek Loafer",
    slug: "hakiki-dana-derisi-el-yapimi-erkek-loafer",
    description: "Kösele tabanlı, el dikişli maskülen ve zamansız İtalyan loafer ayakkabı.",
    price: 8900,
    compareAtPrice: 11200,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "ayakkabi",
    subcategoryName: "Deri Loafer & Ayakkabı",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    stock: 7,
    sizes: ["41", "42", "43", "44", "45"],
    colors: [{ name: "Konyak Kahve", hex: "#8B4513" }, { name: "Siyah", hex: "#1A1A1A" }],
    details: ["%100 Hakiki Dana Derisi", "Doğal kösele taban"]
  },

  // ═══════════════════════════════════════════════════════════
  // ERKEK - 6. CÜZDAN, KEMER & ÇANTA
  // ═══════════════════════════════════════════════════════════
  {
    id: "prod-e-acc-1",
    name: "El Yapımı Minimalist Deri Kartlık & Cüzdan",
    slug: "el-yapimi-minimalist-deri-kartlik-cuzdan",
    description: "İnce profilli, RFID korumalı, 8 kart kapasiteli el dikişli hakiki deri cüzdan.",
    price: 1850,
    categorySlug: "erkek",
    categoryName: "Erkek",
    subcategorySlug: "canta-aksesuar",
    subcategoryName: "Cüzdan, Kemer & Çanta",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    stock: 30,
    sizes: ["Standart"],
    colors: [
      { name: "Taba", hex: "#9E4714" },
      { name: "Siyah", hex: "#1A1A1A" }
    ],
    details: ["%100 Hakiki Dana Derisi", "RFID Korumalı İç Katman"]
  }
];
