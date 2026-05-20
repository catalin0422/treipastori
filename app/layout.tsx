import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://treipastori.md"),
  title: {
    default: "Pensiunea Trei Păstori | Zahareuca, Moldova",
    template: "%s | Pensiunea Trei Păstori",
  },
  description:
    "Pensiunea Trei Păstori – Complex turistic în Zahareuca, Telenești, Moldova. Piscină, restaurant, cazare, foișoare, pescuit și natură autentică.",
  openGraph: {
    title: "Pensiunea Trei Păstori | Zahareuca, Moldova",
    description:
      "Complex turistic în Zahareuca — piscină, restaurant, cazare, evenimente private și natură autentică.",
    url: "https://treipastori.md",
    siteName: "Pensiunea Trei Păstori",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Pensiunea Trei Păstori" }],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensiunea Trei Păstori | Zahareuca, Moldova",
    description: "Complex turistic în Zahareuca — piscină, restaurant, cazare, evenimente private.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://treipastori.md",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
