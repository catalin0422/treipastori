"use client";


const rooms = [
  {
    img: "/camera-tripla.webp",
    alt: "Camera dublă",
    title: "Camera dublă",
    price: "1200 lei",
    note: "2 persoane",
  },
  {
    img: "/camera-dubla.webp",
    alt: "Camera triplă",
    title: "Camera triplă",
    price: "1500 lei",
    note: "2 adulți + 1 copil",
  },
  {
    img: "/Apartament.webp",
    alt: "Camera tip apartament",
    title: "Camera tip apartament",
    price: "1800 lei",
    note: "2 adulți + 2 copii",
  },
];

export default function Cazare() {

  return (
    <section id="cazare">
      <div className="cazare-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <p className="overline">Cazare</p>
          <h2 className="section-heading">
            Odihnă și Confort la <em>Trei Păstori</em>
          </h2>
          <p className="body-text" style={{ maxWidth: 780 }}>După o zi plină de soare la piscină, o partidă de pescuit sau o plimbare în natură, te așteptăm să te retragi în liniște. Complexul nostru îți pune la dispoziție 12 camere intime și primitoare, gândite special pentru a-ți oferi relaxarea de care ai nevoie departe de agitația orașului.</p>
        </div>

        <div className="caz-perks-grid reveal">
          {[
            "Piscină: Acces gratuit",
            "Mic dejun: Inclus în prețul camerei",
            "Confort: Aer condiționat și baie proprie",
            "Program: Check-in ora 13:00 / Check-out ora 11:00",
            "Utilități: Mini-frigider pe hol + Wi-Fi de mare viteză",
            "Pet-friendly: Acceptăm animale mici (din motive de igienă a spațiilor verzi, excepție fac câinii)",
          ].map((text, i) => (
            <div key={i} className="perk">
              <PerkIcon index={i} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="caz-rooms">
          {rooms.map((r, i) => (
            <div key={i} className={`caz-room reveal${i % 2 !== 0 ? " reverse" : ""}`}>
              <div className="caz-room-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt={r.alt} loading="lazy" />
              </div>
              <div className="caz-room-text">
                <h3>{r.title}</h3>
                <p className="caz-room-price">{r.price}</p>
                <p className="caz-room-note">{r.note}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function PerkIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c.6 0 1.2-.2 1.6-.6.9-.8 2.1-.8 3 0 .4.4 1 .6 1.6.6s1.2-.2 1.6-.6c.9-.8 2.1-.8 3 0 .4.4 1 .6 1.6.6s1.2-.2 1.6-.6c.9-.8 2.1-.8 3 0 .4.4 1 .6 1.6.6"/><path d="M2 17c.6 0 1.2-.2 1.6-.6.9-.8 2.1-.8 3 0 .4.4 1 .6 1.6.6s1.2-.2 1.6-.6c.9-.8 2.1-.8 3 0 .4.4 1 .6 1.6.6s1.2-.2 1.6-.6c.9-.8 2.1-.8 3 0 .4.4 1 .6 1.6.6"/><path d="M9 4v7M15 4v7M8 4h2M14 4h2M8 7h2M14 7h2"/></svg>,
    <svg key={1} viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    <svg key={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg>,
    <svg key={3} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    <svg key={4} viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
    <svg key={5} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  ];
  return icons[index];
}
