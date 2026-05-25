import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meniu | Pensiunea Trei Păstori",
  description: "Meniul complet al Pensiunii Trei Păstori — bucate tradiționale moldovenești, grătare, pizza, băuturi și deserturi.",
};

const sections = [
  {
    title: "Mic dejun",
    items: [
      { name: "Mic dejun", desc: "Omletă sau ouă ochiuri, brânză, unt și dulceață de casă, roșii, castraveți", weight: "350 g", price: "70 lei" },
      { name: "Omletă simplă", desc: "Ouă, brânză de oi, smântână", weight: "350 g", price: "70 lei" },
      { name: "Gustări reci", desc: "Salam, șuncă presată, brânză de oi, roșii, castraveți, ardei, ceapă verde", weight: "350 g", price: "70 lei" },
      { name: "Unt, gem", desc: "", weight: "350 g", price: "70 lei" },
    ],
  },
  {
    title: "Felul întâi",
    items: [
      { name: "Zeamă de găină cu tăiței de casă", desc: "Morcov, ceapă, ardei, verdeață", weight: "350/50/40 g", price: "70 lei" },
      { name: "Zeamă de pește", desc: "Morcov, ceapă, rădăcinoase, ardei, verdeață", weight: "350/50/40 g", price: "80 lei" },
      { name: "Borș scăzut cu carne de porc", desc: "Varză murată, ceapă, pastă de roșii", weight: "350/60 g", price: "60 lei" },
      { name: "Ciorbă cu carne de porc", desc: "Varză, ceapă, pastă de roșii, cartofi", weight: "350/60 g", price: "60 lei" },
    ],
  },
  {
    title: "Felul doi",
    items: [
      { name: "Friptură din carne de porc cu mămăligă", desc: "Brânză de oi sau de vacă cu smântână, făină de porumb, sare, unt", weight: "150/150/80/50 g", price: "70 lei" },
      { name: "Pește proaspăt prăjit cu mămăligă și mujdei", desc: "Făină de porumb, usturoi, sare, nucă", weight: "200/30/30 g", price: "70 lei" },
      { name: "Sos cu chifteluțe și cartofi", desc: "Carne de porc, cartofi, morcov, pastă de roșii, condiment", weight: "350 g", price: "70 lei" },
      { name: "Bujeniță marinată din ceafă de porc", desc: "Vin, condiment, sare, murături", weight: "200/50 g", price: "70 lei" },
      { name: "Costiță de porc cu cartofi la cuptor", desc: "Ceapă, morcov, sare, paprika", weight: "100/100 g", price: "70 lei" },
      { name: "Sarmale", desc: "Smântână, orez, carne, morcov, ceapă, verdeață", weight: "200/50 g", price: "70 lei" },
      { name: "Iepure cu tăiței de casă", desc: "Ceapă, ouă, făină de grâu, sare, condiment", weight: "100/100 g", price: "70 lei" },
      { name: "Pârjoale de casă cu piure", desc: "Carne de porc, cartofi", weight: "100/170 g", price: "70 lei" },
    ],
  },
  {
    title: "Grătare",
    items: [
      { name: "Frigărui de porc", desc: "", weight: "200/50/50 g", price: "70 lei" },
      { name: "Steak de porc", desc: "", weight: "200/50/50 g", price: "70 lei" },
      { name: "Cârnăciori apetisanți", desc: "", weight: "150/50/50 g", price: "70 lei" },
      { name: "Cârnăciori de pasăre", desc: "", weight: "150/50/50 g", price: "70 lei" },
    ],
  },
  {
    title: "Pizza",
    items: [
      { name: "Salame", desc: "", weight: "380 g", price: "70 lei" },
      { name: "Șuncă", desc: "", weight: "410 g", price: "70 lei" },
      { name: "Quatro formaggi", desc: "", weight: "340 g", price: "70 lei" },
      { name: "Prosciutto", desc: "", weight: "340 g", price: "70 lei" },
      { name: "Speciale", desc: "", weight: "350 g", price: "70 lei" },
    ],
  },
  {
    title: "Gustări reci",
    items: [
      { name: "Gustarea păstorului", desc: "Afumături de carne, slănină și sălămuri, usturoi", weight: "200 g", price: "70 lei" },
      { name: "Plăcinte cu brânză, varză și cartofi", desc: "Făină de grâu, ou, drojdie și ulei", weight: "200 g", price: "70 lei" },
    ],
  },
  {
    title: "Salate",
    items: [
      { name: 'Salată "Doina"', desc: "Roșii, castraveți, ardei, verdeață și brânză de oi", weight: "250 g", price: "70 lei" },
      { name: "Legume coapte", desc: "Bostănei, vânătă, ardei, conopidă și morcov", weight: "250 g", price: "70 lei" },
      { name: 'Salată "Cesar"', desc: "Piept de pasăre, salată mixtă, roșii cherry, pesmeți, cașcaval, sos cu usturoi", weight: "250 g", price: "70 lei" },
      { name: 'Salată "Gingășie"', desc: "Vețcina, salată mixtă, castraveți, porumb, sos", weight: "250 g", price: "70 lei" },
      { name: 'Salată "Grecească"', desc: "Roșii, castraveți, ardei color, măsline, ceapă roșie, brânză bulgărească, ulei măsline, oregano", weight: "250 g", price: "70 lei" },
      { name: 'Salată "Țărănească"', desc: "Roșii, castraveți, ardei dulce, verdeață, ceapă verde, brânză de oi", weight: "250 g", price: "70 lei" },
    ],
  },
  {
    title: "Sosuri",
    subtitle: "1/40 g — 70 lei fiecare",
    items: [
      { name: "Adjikă", desc: "", weight: "", price: "70 lei" },
      { name: "Hrean", desc: "", weight: "", price: "70 lei" },
      { name: "Sos mujdei", desc: "", weight: "", price: "70 lei" },
      { name: "Smântână", desc: "", weight: "", price: "70 lei" },
      { name: "Ketchup", desc: "", weight: "", price: "70 lei" },
      { name: "Maioneză", desc: "", weight: "", price: "70 lei" },
    ],
  },
  {
    title: "Desert",
    items: [
      { name: "Cușma lui Guguță", desc: "Smântână, lapte, ouă, zahăr, vișină", weight: "200 g", price: "70 lei" },
      { name: "Clătite cu brânză de vaci", desc: "Lapte, brânză, ouă, făină, vanilie", weight: "200 g", price: "70 lei" },
      { name: "Prune umplute cu miez de nucă", desc: "Sirop de zahăr, vin, prună, nucă", weight: "250 g", price: "70 lei" },
      { name: "Mere coapte cu nuci și miere", desc: "", weight: "250 g", price: "70 lei" },
      { name: "Biscuiți de casă", desc: "Untură, smântână, ouă, zahăr, suc de lămâie, vanilie", weight: "250 g", price: "70 lei" },
      { name: "Ceai infuzie", desc: "", weight: "", price: "70 lei" },
      { name: "Compot", desc: "", weight: "250 g", price: "70 lei" },
    ],
  },
  {
    title: "Băuturi răcoritoare",
    items: [
      { name: "Coca Cola", desc: "", weight: "0.33 l", price: "20 lei" },
      { name: "Coca Cola", desc: "", weight: "0.5 l", price: "25 lei" },
      { name: "Fanta", desc: "", weight: "0.33 l", price: "20 lei" },
      { name: "Fanta", desc: "", weight: "0.5 l", price: "25 lei" },
      { name: "Sprite", desc: "", weight: "0.33 l", price: "20 lei" },
      { name: "Sprite", desc: "", weight: "0.5 l", price: "25 lei" },
      { name: "Schweppes", desc: "", weight: "0.33 l", price: "20 lei" },
      { name: "Fuze Tea", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Cappy", desc: "", weight: "0.5 l", price: "25 lei" },
      { name: "Dorna plată/carbogazoasă", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Om plată/carbogazoasă", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Om Kids plată", desc: "", weight: "0.33 l", price: "15 lei" },
      { name: "Easy Water", desc: "", weight: "0.7 l", price: "25 lei" },
      { name: "Letto", desc: "", weight: "0.25 l", price: "15 lei" },
      { name: "Letto", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Cola No2", desc: "", weight: "0.33 l", price: "15 lei" },
      { name: "Cola No2", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Jana", desc: "", weight: "0.33 l", price: "15 lei" },
      { name: "Tiger", desc: "", weight: "0.25 l", price: "15 lei" },
      { name: "Max Speed", desc: "", weight: "0.25 l", price: "15 lei" },
      { name: "Biola Ice Tea", desc: "", weight: "0.5 l", price: "25 lei" },
      { name: "Tymbark Fizzy", desc: "", weight: "0.33 l", price: "20 lei" },
      { name: "Tymbark Disney", desc: "", weight: "0.25 l", price: "15 lei" },
      { name: "Bucovina plată/carbogazoasă", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Bucovina fructată", desc: "", weight: "0.5 l", price: "20 lei" },
      { name: "Teddy", desc: "", weight: "0.2 l", price: "15 lei" },
      { name: "Queens", desc: "", weight: "0.25 l", price: "15 lei" },
      { name: "Teddy Go", desc: "", weight: "0.3 l", price: "15 lei" },
      { name: "Figo", desc: "", weight: "0.3 l", price: "15 lei" },
      { name: "Nestea", desc: "", weight: "0.5 l", price: "15 lei" },
      { name: "Teddy Play", desc: "", weight: "0.4 l", price: "20 lei" },
      { name: "Mojito", desc: "", weight: "0.33 l", price: "50 lei" },
    ],
  },
  {
    title: "Bere la sticlă",
    items: [
      { name: "Timișoreana", desc: "", weight: "0.5 l", price: "35 lei" },
      { name: "Corona Extra", desc: "", weight: "0.33 l", price: "50 lei" },
      { name: "Kozel", desc: "", weight: "0.5 l", price: "40 lei" },
      { name: "Efes", desc: "", weight: "0.5 l", price: "40 lei" },
      { name: "Radler", desc: "", weight: "0.5 l", price: "35 lei" },
      { name: "Festival", desc: "", weight: "0.3 l", price: "35 lei" },
      { name: "Radler Zero", desc: "", weight: "0.5 l", price: "35 lei" },
    ],
  },
  {
    title: "Gustări la bere",
    items: [
      { name: "Chipsters Flint", desc: "", weight: "160 g", price: "30 lei" },
      { name: "Hroom Chips", desc: "", weight: "50 g", price: "15 lei" },
      { name: "Arahide Big Bob", desc: "", weight: "70/170 g", price: "20/25 lei" },
      { name: "Pesmeți Flint", desc: "", weight: "100/150 g", price: "20/25 lei" },
      { name: "Flint Baguette", desc: "", weight: "90 g", price: "20 lei" },
    ],
  },
  {
    title: "Vin și țuică",
    items: [
      { name: "Vin alb / roșu / rosé", desc: "", weight: "0.75 l", price: "150 lei" },
      { name: "Vin la butoi (roșu, alb)", desc: "", weight: "0.25 l", price: "25 lei" },
      { name: "Spumant alb / roșu", desc: "", weight: "0.33 l", price: "35 lei" },
      { name: "Cocktail Vișinică", desc: "", weight: "0.35 l", price: "60 lei" },
    ],
  },
];

export default function MeniuPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="meniu-page">
        <div className="meniu-hero">
          <p className="overline">Pensiunea Trei Păstori</p>
          <h1 className="meniu-title">Meniul <em>nostru</em></h1>
          <p className="meniu-subtitle">Bucate tradiționale moldovenești pregătite cu ingrediente proaspete</p>
        </div>

        <div className="meniu-wrap">
          {sections.map((section) => (
            <div key={section.title} className="meniu-section">
              <div className="meniu-section-header">
                <h2>{section.title}</h2>
                {section.subtitle && <p className="meniu-section-subtitle">{section.subtitle}</p>}
              </div>
              <div className="meniu-items">
                {section.items.map((item, i) => (
                  <div key={i} className="meniu-item">
                    <div className="meniu-item-left">
                      <span className="meniu-item-name">{item.name}</span>
                      {item.desc && <span className="meniu-item-desc">{item.desc}</span>}
                    </div>
                    <div className="meniu-item-right">
                      {item.weight && <span className="meniu-item-weight">{item.weight}</span>}
                      <span className="meniu-item-price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
