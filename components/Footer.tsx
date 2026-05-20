"use client";

import { useLang } from "@/context/LanguageContext";

const navLinks = [
  { href: "/despre", label: "Despre noi" },
  { href: "#servicii", label: "Servicii" },
  { href: "#cazare", label: "Cazare" },
  { href: "#rezervari", label: "Rezervări" },
  { href: "#locatie", label: "Contact" },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="footer-grid">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Trei Păstori" style={{ height: 48, width: "auto", display: "block" }} />
          <div className="footer-social">
            <a className="social-btn" href="https://www.instagram.com/treipastori/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
            </a>
            <a className="social-btn" href="https://www.tiktok.com/@trei.pastori" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
            <a className="social-btn" href="https://www.facebook.com/p/Trei-Pastori-100066520512345/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t("footer")}</p>
        <p className="footer-dev">Realizat de Dogaru Cătălin · <a href="tel:+37360171888">+373 60 171 888</a></p>
      </div>
    </footer>
  );
}
