"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLang();

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
        <p className="hero-sub">{t("hero_sub")}</p>
        <div className="hero-btns">
          <a className="btn-forest" href="tel:060117999">
            {t("btn_suna")}
          </a>
          <a className="btn-ghost" href="#despre">
            Descoperă
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
