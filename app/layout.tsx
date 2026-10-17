import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { absoluteUrl } from "@/lib/utils";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { ContentTranslator } from "@/components/i18n/content-translator";
import { SiteHeader } from "@/components/sections/site-header";
import { HomeFooter } from "@/components/sections/home-footer";
import { SearchOverlay } from "@/components/sections/search-overlay";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "Mrs Venezuela | Destinos, cultura y naturaleza",
    template: "%s | Mrs Venezuela",
  },
  description:
    "Explora Venezuela con una experiencia visual premium: estados, playas, parques nacionales, montanas, fauna, gastronomia, historia y cultura.",
  /*
   * Aquí NO va `alternates.canonical` ni `openGraph.url`: en Next.js los objetos de
   * metadata se fusionan de forma superficial, así que un valor puesto aquí lo hereda
   * toda ruta que no defina el suyo — incluidas las Client Components, que no pueden
   * exportar `metadata`. Cada ruta fija su propio canonical.
   */
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: "Mrs Venezuela",
    title: "Mrs Venezuela",
    description:
      "La plataforma inmersiva para descubrir la belleza natural, cultural e historica de Venezuela.",
    images: [
      {
        url: absoluteUrl("/images/opengraph-venezuela.jpg"),
        width: 1200,
        height: 630,
        alt: "Paisaje de Venezuela para Mrs Venezuela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrs Venezuela",
    description: "Destinos, cultura, naturaleza e historias de Venezuela en una experiencia premium.",
    images: [absoluteUrl("/images/opengraph-venezuela.jpg")],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-[family-name:var(--font-sans)] antialiased">
        <LanguageProvider>
          <ContentTranslator />
          <SiteHeader />
          <SearchOverlay />
          {children}
          <HomeFooter />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
