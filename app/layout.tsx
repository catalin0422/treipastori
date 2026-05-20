import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pensiunea Trei Păstori | Zahareuca",
  description:
    "Pensiunea Trei Păstori – Complex turistic în Zahareuca, Moldova. Piscină, restaurant, cazare, evenimente private și natură autentică.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
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
