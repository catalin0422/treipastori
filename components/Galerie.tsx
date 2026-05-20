"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/context/LanguageContext";

const galleryImages = [
  { src: "/galerie-piscina-sezlonguri.webp", alt: "Piscină Șezlonguri", label: "Piscină", cls: "large" },
  { src: "/galerie-razboi-tesut.webp", alt: "Tradiție", label: "Tradiție", cls: "" },
  { src: "/galerie-foc-tabara.webp", alt: "Foc de tabără", label: "Foc de tabără", cls: "" },
  { src: "/galerie-curte-alee.webp", alt: "Curte", label: "Curte", cls: "" },
  { src: "/galerie-capita-fan.webp", alt: "Natură", label: "Natură", cls: "" },
  { src: "/galerie-iaz.webp", alt: "Iaz", label: "Iaz", cls: "wide" },
  { src: "/galerie-ceaun.webp", alt: "Ceaun", label: "Ceaun", cls: "" },
  { src: "/galerie-flori.webp", alt: "Flori", label: "Natură", cls: "" },
  { src: "/galerie-vin.webp", alt: "Vin", label: "Vin", cls: "" },
  { src: "/galerie-apus.webp", alt: "Apus", label: "Apus", cls: "" },
  { src: "/galerie-ponton.webp", alt: "Ponton", label: "Ponton", cls: "wide" },
  { src: "/galerie-piscina-multime.webp", alt: "Piscină", label: "Piscină", cls: "" },
  { src: "/galerie-bere.webp", alt: "Bar", label: "Bar", cls: "" },
];

export default function Galerie() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const openLb = (idx: number) => { setCurrent(idx); setOpen(true); document.body.style.overflow = "hidden"; };
  const closeLb = useCallback(() => { setOpen(false); document.body.style.overflow = ""; }, []);
  const navigate = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeLb, navigate]);

  return (
    <>
      <section id="galerie">
        <div className="gallery-header reveal">
          <p className="overline">Galerie</p>
          <h2 className="section-heading">{t("zambete")}</h2>
        </div>

        <div className="piscina-full reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/piscina-oameni.webp" alt="Oameni la piscină" loading="lazy" />
        </div>

        <div className="gallery-grid reveal">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`g-item${img.cls ? ` ${img.cls}` : ""}`}
              onClick={() => openLb(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="g-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox${open ? " active" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
      >
        <button className="lb-close" onClick={closeLb}>✕</button>
        <button className="lb-prev" onClick={() => navigate(-1)}>‹</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={galleryImages[current].src} alt={galleryImages[current].alt} />
        <button className="lb-next" onClick={() => navigate(1)}>›</button>
      </div>
    </>
  );
}
