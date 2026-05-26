"use client";

export default function Rezervari() {
  return (
    <section id="rezervari">
      <div className="rezervari-grid reveal">
        <div className="rezervari-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/apus-iaz.webp" alt="Apus la iaz" loading="lazy" />
        </div>
        <div className="rezervari-text">
          <p className="overline">Rezervări</p>
          <h2 className="section-heading">
            Rezervă-ți evadarea la <em>Trei Păstori</em>
          </h2>
          <p className="body-text">Abia așteptăm să te cunoaștem! Fie că îți dorești un weekend liniștit la piscină, o partidă de pescuit sau planifici un eveniment special, suntem aici să ne asigurăm că totul va fi perfect. Verifică disponibilitatea și hai să îți planificăm vizita.</p>
          <a href="tel:+37360117999" className="btn-cta" style={{ display: "inline-block", marginTop: "1.2rem" }}>
            Sună acum
          </a>
        </div>
      </div>
    </section>
  );
}
