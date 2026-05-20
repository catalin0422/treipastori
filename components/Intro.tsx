"use client";

import { useLang } from "@/context/LanguageContext";

export default function Intro() {
  const { t } = useLang();

  return (
    <section id="intro">
      <div className="intro-inner reveal">
        <p className="overline">Pensiunea Trei Păstori</p>
        <h2 className="section-heading">
          Bun venit la Trei Păstori
          <br /><em>O evadare completă în mijlocul naturii!</em>
        </h2>
        <p className="body-text">{t("intro_txt")}</p>
      </div>
      <div className="intro-panoramic reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bunvenit.webp"
          alt="Bun venit la Trei Păstori"
          loading="lazy"
        />
      </div>
    </section>
  );
}
