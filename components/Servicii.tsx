"use client";


const services = [
  { title: "Restaurant", text: "Avem mai multe săli pentru orice ocazie – cununie, botez, petrecere de familie sau eveniment privat. Echipa noastră se ocupă de fiecare detaliu, de la decor până la meniu.", img: "/restaurant.webp", alt: "Restaurant" },
  { title: "Piscină", text: "Relaxează-te pe șezlong la marginea piscinei noastre, cu o băutură rece în mână. Spațiu amenajat pentru confort maxim, igienă și liniște.", img: "/piscina.webp", alt: "Piscină" },
  { title: "Foișoare", img: "/foisor.webp", alt: "Foișoare" },
  { title: "Saună și ciubăr", img: "/galerie-foc-tabara.webp", alt: "Saună și ciubăr" },
  { title: "Crama Chobany", img: "/galerie-vin.webp", alt: "Cramă" },
];

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
          <line x1="5" y1="21" x2="12" y2="14"/>
          <line x1="19" y1="21" x2="12" y2="14"/>
          <path d="M12 4c0 4-4 6-4 9a4 4 0 0 0 8 0c0-3-4-5-4-9z"/>
          <path d="M12 9c0 2-2 3-2 5a2 2 0 0 0 4 0c0-2-2-3-2-5z" fill="currentColor" stroke="none" opacity="0.3"/>
        </svg>
      ),
      title: "Foc de tabără",
      desc: "Serile la pensiune capătă cu totul altă atmosferă în jurul focului de tabără. Locul perfect pentru povești, cântece și amintiri de neuitat.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/>
          <path d="M8 17.5h7M15 17.5l-3-7-2 4h-2"/>
          <path d="M12 10.5V7M12 7l2-2M10 5h4"/>
        </svg>
      ),
      title: "Închiriere biciclete",
      desc: "Explorați împrejurimile Zahareucăi pe bicicletă. Peisaje rurale autentice, aer curat și libertate totală.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M3 20l4-8 4 4 4-6 6 10H3z"/>
          <circle cx="18" cy="5" r="2"/>
        </svg>
      ),
      title: "Trasee turistice",
      desc: "Rute marcate prin natură, de la plimbări ușoare pe malul iazului până la trasee mai lungi prin peisajul moldovenesc.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <circle cx="12" cy="12" r="10"/>
          <path d="M4.9 4.9c4.2 4.2 4.2 11 0 15.2"/>
          <path d="M19.1 4.9c-4.2 4.2-4.2 11 0 15.2"/>
        </svg>
      ),
      title: "Volei și tenis",
      desc: "Terenuri amenajate pentru oaspeți. Vă puteți bucura de un meci de tenis sau volei în aer liber.",
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
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
          <path d="M12 2v4M12 18v4"/>
        </svg>
      ),
      title: "Wi-Fi de mare viteză",
      desc: "Conexiune Wi-Fi rapidă disponibilă în toată pensiunea.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="2" y="14" width="4" height="6" rx="1"/>
          <rect x="10" y="10" width="4" height="10" rx="1"/>
          <rect x="18" y="6" width="4" height="14" rx="1"/>
          <circle cx="6" cy="6" r="2"/>
          <path d="M6 8v2"/>
        </svg>
      ),
      title: "Loc de joacă copii",
      desc: "Spațiu de joacă amenajat pentru cei mici, în siguranță.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
        </svg>
      ),
      title: "Parcare gratuită",
      desc: "Parcare gratuită și sigură disponibilă pentru toți oaspeții.",
    },
  ];
  return (
    <div className="alte-servicii-grid">
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

  return (
    <section id="servicii">
      <div className="servicii-header reveal">
        <h2 className="section-heading">Serviciile <em>noastre</em></h2>
      </div>

      <div className="srv-rows">
        {services.map((s, i) => (
          <div key={i} className={`srv-row reveal${i % 2 !== 0 ? " reverse" : ""}`}>
            <div className={i === 3 || i === 4 ? "srv-row-img-grid" : "srv-row-img"}>
              {i === 3 ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/ciubar.webp" alt="Ciubăr" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sauna.webp" alt="Saună" loading="lazy" style={{ objectPosition: "right center" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sauna-bazin.webp" alt="Bazin saună" loading="lazy" style={{ objectPosition: "center bottom" }} />
                </>
              ) : i === 4 ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/crama-butoaie.webp" alt="Butoaie cramă" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/crama-masa.webp" alt="Masa cramă" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/crama-intrare.webp" alt="Intrare cramă" loading="lazy" />
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.img} alt={s.alt} loading="lazy" />
              )}
            </div>
            <div className="srv-row-text">
              <h3>{s.title}</h3>
              {"text" in s && s.text && <p>{s.text}</p>}
              {i === 0 && <RestaurantSali />}
              {i === 0 && <a href="/meniu" className="srv-meniu-btn">Vezi meniul →</a>}
              {i === 1 && <PiscinaTable />}
              {i === 2 && <p>Relaxează-te în natură la unul dintre foișoarele noastre rustice, echipate cu masă și grătar. Locul ideal pentru o zi în aer liber cu familia sau prietenii.</p>}
              {i === 2 && <FoisoarePrices />}
              {i === 3 && <p>Relaxare completă în sauna tradițională sau în ciubărul cu apă caldă sub cerul liber. Disponibil în sezonul rece, perfect pentru un weekend reconfortant alături de prieteni sau familie.</p>}
              {i === 4 && <p>Crama Chobany este un spațiu autentic și primitor, ideal pentru degustări de vinuri moldovenești, întâlniri în grup sau seri speciale la lumina lumânărilor.</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="alte-servicii-section reveal">
        <AlteServicii />
      </div>
    </section>
  );
}
