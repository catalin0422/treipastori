"use client";

import { useLang } from "@/context/LanguageContext";

const services = [
  { titleKey: "s1_t", textKey: "s1_p", img: "/restaurant.webp", alt: "Restaurant" },
  { titleKey: "s2_t", textKey: "s2_p", img: "/piscina.webp", alt: "Piscină" },
  { title: "Foișoare", img: "/foisor.webp", alt: "Foișoare" },
  { title: "Pescuit", img: "/pescuit.webp", alt: "Pescuit" },
];

const facilitati = ["Excursii", "Loc de joacă copii", "Parcare gratuită", "Wi-Fi de mare viteză"];

function RestaurantSali() {
  const sali = [
    { name: "Casa mare", cap: "60 pers." },
    { name: "Casa bunicii", cap: "30 pers." },
    { name: "Terasa Piscină", cap: "150 pers." },
    { name: "Terasa Belvedere", cap: "20 pers." },
    { name: "Crama", cap: "20 pers." },
  ];
  return (
    <div className="piscina-prices">
      {sali.map((s) => (
        <div key={s.name} className="piscina-price-row">
          <span>{s.name}</span>
          <span className="piscina-price-val">{s.cap}</span>
        </div>
      ))}
    </div>
  );
}

function PiscinaTable() {
  const rows = [
    { label: "Copii până la 5 ani", price: "Gratis" },
    { label: "Copii până la 9 ani", price: "100 lei" },
    { label: "Adulți", price: "200 lei" },
  ];
  return (
    <div className="piscina-prices">
      {rows.map((r) => (
        <div key={r.label} className="piscina-price-row">
          <span>{r.label}</span>
          <span className="piscina-price-val">{r.price}</span>
        </div>
      ))}
    </div>
  );
}

function PescuitPrices() {
  return (
    <div className="piscina-prices">
      <div className="piscina-price-row">
        <span>Undiță</span>
        <span className="piscina-price-val">100 lei</span>
      </div>
    </div>
  );
}

function FoisoarePrices() {
  const rows = [
    { label: "Mic", price: "300 MDL" },
    { label: "Mare", price: "500 MDL" },
    { label: "Grătar", price: "40 MDL" },
  ];
  return (
    <div className="piscina-prices">
      {rows.map((r) => (
        <div key={r.label} className="piscina-price-row">
          <span>{r.label}</span>
          <span className="piscina-price-val">{r.price}</span>
        </div>
      ))}
    </div>
  );
}

export default function Servicii() {
  const { t } = useLang();

  return (
    <section id="servicii">
      <div className="servicii-header reveal">
        <h2 className="section-heading">Serviciile <em>noastre</em></h2>
      </div>

      <div className="srv-rows">
        {services.map((s, i) => (
          <div key={i} className={`srv-row reveal${i % 2 !== 0 ? " reverse" : ""}`}>
            <div className="srv-row-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.alt} loading="lazy" />
            </div>
            <div className="srv-row-text">
              <h3>{"title" in s ? s.title : t(s.titleKey)}</h3>
              {"textKey" in s && s.textKey && <p>{t(s.textKey as string)}</p>}
              {i === 0 && <RestaurantSali />}
              {i === 1 && <PiscinaTable />}
              {i === 2 && <p>Relaxează-te în natură la unul dintre foișoarele noastre rustice, echipate cu masă și grătar. Locul ideal pentru o zi în aer liber cu familia sau prietenii.</p>}
              {i === 2 && <FoisoarePrices />}
              {i === 3 && <p>Iazul nostru îți oferă un cadru natural liniștit pentru partide de pescuit relaxante.</p>}
              {i === 3 && <PescuitPrices />}
            </div>
          </div>
        ))}
      </div>

      <div className="facilitati-row reveal">
        <p className="facilitati-label">Alte facilități</p>
        <div className="facilitati-grid">
          {facilitati.map((f) => (
            <div key={f} className="facilitati-item">
              <span className="facilitati-dash">—</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
