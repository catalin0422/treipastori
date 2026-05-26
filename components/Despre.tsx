"use client";

const rows = [
  {
    title: "Două decenii de tradiție și natură",
    text: "Complexul Trei Păstori nu este doar o destinație de vacanță, ci o poveste scrisă cu pasiune și respect pentru natură, care a început acum aproape 20 de ani. În tot acest timp, am transformat acest loc într-o oază de liniște unde tradiția rustică se întâlnește cu relaxarea modernă, devenind un punct de reper pentru cei care caută autenticitatea.",
    img: "/bunvenit.webp",
    alt: "Bun venit la Trei Păstori",
    reverse: false,
  },
  {
    title: "Un refugiu verde și autentic",
    text: "Ceea ce ne definește cel mai bine este dragostea pentru frumos și pentru natură. Totul aici este învăluit în verdele crud al vegetației, oferind un decor natural spectaculos, indiferent de anotimp. Am păstrat cu grijă elementele rustice în arhitectura foișoarelor și a pensiunii, folosind materiale naturale care să completeze perfect peisajul iazului și al livezilor noastre.",
    img: "/floarea-soarelui.webp",
    alt: "Floarea soarelui",
    reverse: true,
  },
  {
    title: "Ospitalitate confirmată de timp",
    text: "În cei 20 de ani de activitate, mândria noastră cea mai mare au fost zâmbetele oaspeților noștri. Ne bucurăm de o comunitate de vizitatori mulțumiți, mulți dintre ei devenind prieteni apropiați ai casei care revin an de an cu aceeași bucurie. Fie că vin pentru o partidă de pescuit pe iaz, pentru o zi răcoroasă la piscină sau pentru a sărbători momente unice în sălile noastre de evenimente, fiecare oaspete primește atenția și căldura unei familii adevărate.",
    img: "/grup-terasa.webp",
    alt: "Grup la terasă",
    reverse: false,
  },
  {
    title: "Experiențe care rămân în suflet",
    text: "De la plimbările matinale cu bicicleta prin împrejurimi, până la excursiile pline de arome în via și livada de nuci a complexului, am creat un spațiu unde fiecare detaliu este gândit să aducă bucurie. Vă invităm să fiți parte din istoria noastră și să creați, la rândul vostru, cele mai faine amintiri într-un loc unde natura și rusticul vă vor face să vă simțiți, cu adevărat, acasă.",
    img: "/echipa.webp",
    alt: "Echipa Trei Păstori",
    reverse: true,
  },
];

export default function Despre() {
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
                <em>{row.title}</em>
              </h3>
              <p className="body-text">{row.text}</p>
            </div>
            <div className="cr-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={row.img} alt={row.alt} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
