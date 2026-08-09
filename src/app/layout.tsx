import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Netero Giyim — Lüks Kadın & Erkek Giyim & Aksesuar",
  description: "Zamansız estetik, yüksek terzilik ve %100 doğal kaşmir, ipek ve hakiki deri tasarımlar. Netero Giyim.",
  keywords: ["Netero Giyim", "Lüks Giyim", "Kaşmir Palto", "Deri Çanta", "İpek Gömlek", "Sürdürülebilir Moda"],
  openGraph: {
    title: "Netero Giyim",
    description: "Less but better felsefesiyle üretilen lüks giyim ve deri aksesuar koleksiyonu.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col justify-between antialiased">
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <CartDrawer />
        <Footer />
      </body>
    </html>
  );
}
