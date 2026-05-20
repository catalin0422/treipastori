"use client";

const reviews = [
  {
    name: "Grigore Stegarescu",
    time: "acum 2 săptămâni",
    stars: 5,
    text: "Poziționată la o oră și vreo 20 minute de Chișinău, pensiunea este frumos aranjată, dispune de piscină, foișoare amenajate pentru grupuri mici și mari. Totodată, este disponibilă cazare cu camere destul de dotate cu tot ce este necesar, inclusiv baie și alte utilități.",
  },
  {
    name: "Aurelia Feghiu",
    time: "acum 3 luni",
    stars: 5,
    text: "Pensiunea Trei Păstori este un loc deosebit, ideal pentru cei care caută o oază de liniște și relaxare în mijlocul naturii. Cazarea este confortabilă și include mic dejun. Piscina este dotată cu șezlonguri, ceea ce permite o relaxare completă sub razele soarelui.",
  },
  {
    name: "Botizatu Alexandru",
    time: "acum 3 săptămâni",
    stars: 5,
    text: "Cea mai frumoasă și caldă pensiune pe care am vizitat-o din Moldova. Stăpânii extraordinari, atmosfera minunată, un loc deosebit.",
  },
  {
    name: "Maria Croitor",
    time: "acum 2 săptămâni",
    stars: 5,
    text: "Doamna de acolo super primitoare și atentă. E situată într-un loc liniștit și adorabil. Cu siguranță voi mai reveni.",
  },
  {
    name: "Oxana Aficiuc",
    time: "acum 5 luni",
    stars: 5,
    text: "Excellent location for spending time with family and friends. Food was fabulous, the owners are so friendly and accommodating. The room was super clean, very quiet and comfortable. Will be back again for sure.",
  },
  {
    name: "Dumitru Niculaita",
    time: "acum 4 luni",
    stars: 5,
    text: "Aer curat, vin bun, bucate gustoase, gazde ospitaliere.",
  },
];

function Stars() {
  return (
    <div className="review-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="#D4A373" width="14" height="14">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Recenzii() {
  return (
    <section id="recenzii">
      <div className="recenzii-wrap">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p className="overline">Recenzii Google</p>
          <h2 className="section-heading">Ce spun <em>oaspeții noștri</em></h2>
        </div>

        <div className="recenzii-grid reveal">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{r.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <p className="review-name">{r.name}</p>
                  <p className="review-time">{r.time}</p>
                </div>
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <Stars />
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
