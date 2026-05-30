import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "New York Atelier — Luxury Wedding Designer in New York",
    template: "%s · New York Atelier",
  },
  description:
    "New York Atelier is a New York luxury wedding designer crafting bespoke, editorial celebrations. Timeless design, thoughtful detail, effortless beauty.",
  keywords: [
    "luxury wedding designer",
    "New York wedding planner",
    "bespoke weddings",
    "editorial wedding design",
    "Manhattan wedding designer",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "New York Atelier — Luxury Wedding Designer in New York",
    description:
      "Bespoke, editorial weddings designed in New York. Timeless design, thoughtful detail, effortless beauty.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/hero.jpg", width: 921, height: 874, alt: "Bride in an atelier overlooking the New York skyline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "New York Atelier — Luxury Wedding Designer in New York",
    description: "Bespoke, editorial weddings designed in New York.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#f8f4ed",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: `${site.name} — ${site.role}`,
  description:
    "Luxury bespoke wedding design studio based in New York City.",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/images/hero.jpg`,
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  areaServed: "New York, NY",
  sameAs: [site.social.instagram, site.social.pinterest],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-ink focus:px-5 focus:py-3 focus:text-cream focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
