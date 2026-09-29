import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rihla Travel UK — Your Journey. Our Care.",
    template: "%s · Rihla Travel UK",
  },
  description:
    "Premium Umrah, Hajj, Family & Ziyarat packages from the UK. Transparent pricing, verified hotels near the Haram, and the signature Rihla Care experience — Plan, Prepare, Travel, Support, Return.",
  keywords: [
    "Umrah packages UK",
    "Hajj packages 2026",
    "Islamic travel UK",
    "Ziyarat tours",
    "Rihla Travel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${amiri.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-navy-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: SITE.name,
              slogan: SITE.slogan,
              telephone: SITE.phone,
              email: SITE.email,
              address: SITE.address,
            }),
          }}
        />
      </body>
    </html>
  );
}
