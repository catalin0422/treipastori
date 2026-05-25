"use client";

import { useLang } from "@/context/LanguageContext";

const services = [
  { titleKey: "s1_t", textKey: "s1_p", img: "/restaurant.webp", alt: "Restaurant" },
  { titleKey: "s2_t", textKey: "s2_p", img: "/piscina.webp", alt: "Piscină" },
  { title: "Foișoare", img: "/foisor.webp", alt: "Foișoare" },
  { title: "Alte servicii", img: "/galerie-capita-fan.webp", alt: "Servicii extra" },
];

const facilitati = ["Loc de joacă copii", "Parcare gratuită", "Wi-Fi de mare viteză"];

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

function AlteServicii() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M8 22h8M12 22v-5"/><path d="M5 3h14l-2 9a5 5 0 0 1-10 0L5 3z"/>
        </svg>
      ),
      title: "Degustare de vinuri la cramă",
      desc: "Descoperiți vinurile casei în crama noastră autentică, într-o atmosferă caldă și rustică.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          {/* barrel body */}
          <path d="M4 10h16v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-7z"/>
          {/* water line */}
          <path d="M4 14h16"/>
          {/* barrel hoops */}
          <path d="M4 12h16"/>
          <path d="M4 18h16"/>
          {/* steam */}
          <path d="M9 7c0-1 1-1.5 1-2.5S9 3 9 2"/>
          <path d="M13 7c0-1 1-1.5 1-2.5S13 3 13 2"/>
        </svg>
      ),
      title: "Saună și ciubăr",
      desc: "Disponibile în sezonul rece. Relaxare completă în ciubărul cu apă caldă sau sauna tradițională.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      ),
      title: "Excursii în zonă",
      desc: "Vizite la producătorii locali, mânăstiri din împrejurimi și Muzeul Satului. O imersie autentică în cultura moldovenească.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M20 12c0-3.5-3-6-8-6S4 8.5 4 12s3 6 8 6 8-2.5 8-6z"/>
          <path d="M20 12l3.5-4v8L20 12z"/>
          <circle cx="8.5" cy="10.5" r="1.2" fill="currentColor" stroke="none"/>
        </svg>
      ),
      title: "Pescuit",
      desc: "Iazul nostru îți oferă un cadru natural liniștit pentru partide de pescuit relaxante.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-1 0-2 .5-2.5 1L13 9 4.8 6.2c-.5-.2-1 .1-1.2.5l-.1.3c-.2.5 0 1 .4 1.4L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.4.4.9.6 1.4.4l.3-.1c.4-.2.7-.7.5-1.2z"/>
        </svg>
      ),
      title: "Transfer aeroport",
      desc: "Vă preluăm de la aeroportul Chișinău și vă aducem direct la pensiune, comod și fără griji.",
    },
  ];
  return (
    <div className="alte-servicii-list">
      {items.map((item) => (
        <div key={item.title} className="alte-servicii-item">
          <span className="alte-servicii-icon">{item.icon}</span>
          <div>
            <p className="alte-servicii-title">{item.title}</p>
            <p className="alte-servicii-desc">{item.desc}</p>
          </div>
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
              {("title" in s ? s.title : t(s.titleKey)) && i !== 3 && <h3>{"title" in s ? s.title : t(s.titleKey)}</h3>}
              {"textKey" in s && s.textKey && <p>{t(s.textKey as string)}</p>}
              {i === 0 && <RestaurantSali />}
              {i === 0 && <a href="/meniu" className="srv-meniu-btn">Vezi meniul →</a>}
              {i === 1 && <PiscinaTable />}
              {i === 2 && <p>Relaxează-te în natură la unul dintre foișoarele noastre rustice, echipate cu masă și grătar. Locul ideal pentru o zi în aer liber cu familia sau prietenii.</p>}
              {i === 2 && <FoisoarePrices />}
              {i === 3 && <AlteServicii />}
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
