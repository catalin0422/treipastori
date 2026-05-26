import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulament | Pensiunea Trei Păstori",
  description: "Regulament și condiții de utilizare a serviciilor Pensiunii Trei Păstori — restaurant, cazare, agrement și piscină.",
};

const sections = [
  {
    title: "Restaurant",
    items: [
      {
        heading: "1. Accesul în restaurant",
        text: "Accesul este permis clienților care respectă normele de conduită și igienă. Este interzis accesul persoanelor aflate în stare avansată de ebrietate sau cu comportament agresiv.",
      },
      {
        heading: "2. Program de funcționare",
        text: "Restaurantul este deschis între orele 10:00–22:00. Comenzile se preiau până la ora 21:30.",
      },
      {
        heading: "3. Comportamentul clienților",
        text: "Clienții sunt rugați să aibă un comportament civilizat față de personal și ceilalți clienți. Nu se tolerează limbajul injurios, violența verbală sau fizică. Nu este permis consumul de alimente sau băuturi aduse din exterior.",
      },
      {
        heading: "4. Rezervări și ocuparea meselor",
        text: "Rezervările sunt valabile până la ora stabilită. După această oră, masa poate fi oferită altor clienți. Mesele nu pot fi mutate fără acordul personalului.",
      },
      {
        heading: "5. Fumatul",
        text: "Fumatul este permis doar în zonele special amenajate. Fumatul în spațiile interioare închise este strict interzis conform legislației în vigoare.",
      },
      {
        heading: "6. Animale de companie",
        text: "Nu se acceptă animale de companie în incinta restaurantului.",
      },
      {
        heading: "7. Plata consumației",
        text: "Plata se face la finalul servirii, în numerar, card sau alte metode acceptate. Solicitarea bonului fiscal este un drept al clientului și o obligație legală a unității.",
      },
      {
        heading: "8. Siguranță și protecția bunurilor",
        text: "Restaurantul nu își asumă responsabilitatea pentru obiectele personale uitate sau pierdute. În caz de urgență, respectați indicațiile personalului.",
      },
      {
        heading: "9. Reclamații și sugestii",
        text: "Reclamațiile se pot face pe loc personalului sau în scris, în registrul de reclamații disponibil la cerere. Sugestiile sunt binevenite și ne ajută să ne îmbunătățim serviciile.",
      },
    ],
  },
  {
    title: "Cazare",
    subtitle: "Regulament de ordine interioară",
    items: [
      {
        heading: "1. Generalități",
        text: "Prezentul regulament are ca scop asigurarea unui sejur plăcut și sigur pentru toți oaspeții. Prin efectuarea cazării, oaspeții acceptă și se obligă să respecte prevederile prezentului regulament.",
      },
      {
        heading: "2. Check-in și check-out",
        text: "Check-in: după ora 13:00. Check-out: până la ora 11:00. Prelungirea sejurului se face în funcție de disponibilitate și poate presupune costuri suplimentare.",
      },
      {
        heading: "3. Accesul în unitate",
        text: "Accesul este permis doar persoanelor cazate. Vizitele sunt permise doar cu acordul personalului. Este interzisă găzduirea altor persoane fără înregistrare.",
      },
      {
        heading: "4. Comportament și liniște",
        text: "Este interzis consumul excesiv de alcool, comportamentul agresiv sau vulgar. Păstrați liniștea între orele 22:00–08:00. Muzica sau alte activități sonore trebuie desfășurate în limite rezonabile.",
      },
      {
        heading: "5. Curățenie și întreținere",
        text: "Curățenia în camere se face la cerere sau conform programului unității. Oaspeții sunt rugați să respecte curățenia și să nu deterioreze bunurile. Deteriorarea sau distrugerea proprietății va fi suportată financiar de către client.",
      },
      {
        heading: "6. Fumatul",
        text: "Fumatul este strict interzis în interior (camere, spații comune), exceptând zonele special amenajate. Nerespectarea acestei reguli atrage o penalizare.",
      },
      {
        heading: "7. Siguranța",
        text: "Administrația nu își asumă responsabilitatea pentru obiectele de valoare lăsate în camere. Vă rugăm să închideți ușile și ferestrele la părăsirea camerei. În caz de urgență, anunțați imediat personalul.",
      },
      {
        heading: "8. Animale de companie",
        text: "Nu se acceptă animale de companie.",
      },
      {
        heading: "9. Alte prevederi",
        text: "Este interzisă folosirea aparatelor de gătit în cameră (reșouri, aragaz etc.). Orice reclamație se va adresa personalului în timpul sejurului.",
      },
    ],
  },
  {
    title: "Servicii agrement",
    subtitle: "Program: 10:00 – 22:00 · Regulament de comportament în incinta pensiunii",
    items: [
      { text: "Respectați mediul înconjurător, persoanele din jur și bunurile pensiunii." },
      { text: "Focul se aprinde doar în spații special amenajate și se stinge înainte de plecare." },
      { text: "Supravegheați în permanență copiii." },
      { text: "Aruncați deșeurile menajere în locurile special amenajate." },
      { text: "Este interzis accesul cu automobilul pe teritoriul pensiunii." },
      { text: "Se permite o boxă portabilă cu volumul la nivel minim sau mediu." },
      { text: "Este categoric interzis accesul la piscină și terasă cu băuturi, alimente și boxe." },
    ],
  },
  {
    title: "Reguli de utilizare a piscinei",
    subtitle: "Program: 11:00 – 20:00",
    items: [
      { text: "Interzis persoanelor cu răni deschise și boli epidemice sau transmisibile." },
      { text: "Nu lăsați copiii fără supraveghere." },
      { text: "Faceți duș înainte de a intra în piscină." },
      { text: "Purtați cască de înot pentru igienă." },
      { text: "Folosiți echipamente de protecție adecvate." },
      { text: "Este strict interzisă urinarea în piscină. Folosiți toaleta." },
      { text: "Nu lăsați fără supraveghere aripioare, jucării gonflabile, saltele pneumatice sau alte jucării." },
      { text: "Nu sunt permise animale de companie în zona piscinei." },
      { text: "Este interzisă săritura în piscină." },
      { text: "Nu alergați pe marginea piscinei." },
      { text: "Copiilor cu scutec sau fără costum de baie le este interzis accesul în piscină." },
      { text: "În zona piscinei nu este permisă folosirea paharelor sau sticlelor de sticlă." },
      { text: "Nu vă plimbați în zona piscinei cu haine și încălțăminte de zi cu zi." },
      { text: "Este interzisă orice formă de pescuire a apei din bazin. Nu aruncați gunoaie." },
      { text: "Este interzisă împingerea, jocurile cu mingea sau alte jocuri agresive." },
      { text: "Zgomotul, comportamentul deranjant și jocurile agresive în zona piscinei sunt interzise." },
      { text: "Copiilor sub 12 ani nu le este permis accesul în zona piscinei fără supravegherea unui adult." },
      { text: "Nu lăsați fără supraveghere obiectele de valoare." },
    ],
  },
];

export default function RegulamentPage() {
  return (
    <>
      <Navbar />
      <main className="regulament-page">
        <div className="regulament-hero">
          <p className="overline">Pensiunea Trei Păstori</p>
          <h1 className="regulament-title">Regulament <em>și condiții</em></h1>
          <p className="regulament-subtitle">Vă rugăm să citiți și să respectați regulamentul pentru o experiență plăcută</p>
        </div>

        <div className="regulament-wrap">
          {sections.map((section) => (
            <div key={section.title} className="regulament-section">
              <div className="regulament-section-header">
                <h2>{section.title}</h2>
                {section.subtitle && <p className="regulament-section-subtitle">{section.subtitle}</p>}
              </div>
              <div className="regulament-items">
                {section.items.map((item, i) => (
                  <div key={i} className="regulament-item">
                    {"heading" in item && item.heading
                      ? <><strong>{item.heading}</strong><p>{item.text}</p></>
                      : <p>{item.text}</p>
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
