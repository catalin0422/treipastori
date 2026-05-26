"use client";

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro-inner reveal">
        <p className="overline">Pensiunea Trei Păstori</p>
        <h2 className="section-heading">
          Bun venit la Trei Păstori
          <br /><em>O evadare completă în mijlocul naturii!</em>
        </h2>
        <p className="body-text">Ai nevoie de o pauză? Ai ajuns exact unde trebuie. Aici, rusticul se îmbină cu confortul modern pentru a-ți oferi locul perfect pentru relaxare și distracție. Fie că vrei o zi leneșă la piscină, o plimbare cu bicicleta prin natură, o partidă liniștită de pescuit pe iaz sau cadrul de vis pentru evenimentul tău special, la noi le găsești pe toate într-un singur loc verde și primitor.</p>
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
