"use client";

import { useLang } from "@/context/LanguageContext";

const rows = [
  {
    titleKey: "ab_t1",
    textKey: "ab_p1",
    img: "/bunvenit.webp",
    alt: "Bun venit la Trei Păstori",
    contain: false,
    reverse: false,
  },
  {
    titleKey: "ab_t2",
    textKey: "ab_p2",
    img: "/floarea-soarelui.webp",
    alt: "Floarea soarelui",
    contain: false,
    reverse: true,
  },
  {
    titleKey: "ab_t3",
    textKey: "ab_p3",
    img: "/grup-terasa.webp",
    alt: "Grup la terasă",
    contain: false,
    reverse: false,
  },
  {
    titleKey: "ab_t4",
    textKey: "ab_p4",
    img: "/echipa.webp",
    alt: "Echipa Trei Păstori",
    contain: false,
    reverse: true,
  },
];

export default function Despre() {
  const { t } = useLang();

  return (
    <section id="despre">
      <div className="despre-wrap">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p className="overline">Despre noi</p>
          <h2 className="section-heading">
            O poveste scrisă cu <em>pasiune și natură</em>
          </h2>
        </div>

        {rows.map((row, i) => (
          <div key={i} className={`content-row reveal${row.reverse ? " reverse" : ""}`}>
            <div className="cr-text">
              <h3 className="sub-heading">
                <em>{t(row.titleKey)}</em>
              </h3>
              <p className="body-text">{t(row.textKey)}</p>
            </div>
            <div
              className={`cr-img${row.contain ? " contain" : ""}`}
              style={row.contain ? { height: "auto" } : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={row.img}
                alt={row.alt}
                loading="lazy"
                style={row.contain ? { objectFit: "contain", height: "auto" } : undefined}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
