"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroRef.current?.classList.add("loaded");
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-overline">Complex Turistic · Zahareuca, Moldova</p>
        <h1 className="hero-title">
          Trei <em>Păstori</em>
        </h1>
        <div className="hero-amenities">
          {[
            { label: "Piscină", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/><path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/><path d="M8 7V3m0 0L6 5m2-2 2 2"/><circle cx="15" cy="4" r="1.5"/></svg> },
            { label: "Restaurant", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg> },
            { label: "Cazare", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M2 10V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/><path d="M7 14h.01M7 18h.01"/><rect x="11" y="14" width="6" height="6" rx="1"/></svg> },
            { label: "Pescuit", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 7c3-2 6-2 9 0s6 2 9 0"/><path d="M3 7v9a4 4 0 0 0 4 4h1"/><path d="M12 14c1.5 1.5 3 2 5 1.5"/><circle cx="17" cy="18" r="2"/><path d="M12 14V9"/></svg> },
            { label: "Foișoare", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M2 9l10-7 10 7"/><path d="M4 9v11h16V9"/><path d="M9 22V12h6v10"/></svg> },
            { label: "Parcare", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg> },
            { label: "Wi-Fi", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg> },
            { label: "Excursii", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg> },
          ].map(({ label, icon }) => (
            <div key={label} className="hero-amenity">
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="hero-btns">
          <a className="btn-forest" href="tel:060117999">
            Sună acum
          </a>
          <a className="btn-ghost" href="/despre">
            Despre noi
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Descoperă</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
