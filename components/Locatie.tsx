"use client";

export default function Locatie() {
  return (
    <section id="locatie">
      <div className="locatie-wrap reveal">
        <div className="locatie-info">
          <h2 className="section-heading">Contacte</h2>

          <div className="contact-group">
            <p className="contact-group-label">Telefon / WhatsApp</p>
            <a href="tel:060117999" className="contact-row">060 117 999 — Sergiu</a>
            <a href="tel:069054055" className="contact-row">069 054 055 — Gabriela</a>
            <a href="tel:060941836" className="contact-row">060 941 836 — Cristian</a>
          </div>

          <div className="contact-group">
            <p className="contact-group-label">Email</p>
            <a href="mailto:pensiunea3pastori@gmail.com" className="contact-row">
              pensiunea3pastori@gmail.com
            </a>
          </div>

          <div className="contact-group">
            <p className="contact-group-label">Social</p>
            <div className="contact-social-icons">
              <a href="https://www.instagram.com/treipastori/" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@trei.pastori" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                TikTok
              </a>
              <a href="https://www.facebook.com/p/Trei-Pastori-100066520512345/" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
            </div>
          </div>

          <div className="contact-group">
            <p className="contact-group-label">Adresă</p>
            <p className="contact-row no-link">Zahareuca, Telenești, Moldova</p>
          </div>
        </div>

        <div className="locatie-map">
          <div className="locatie-map-frame">
            <iframe
              src="https://maps.google.com/maps?q=Pensiunea%20Trei%20Pastori,%20Zahareuca,%20Moldova&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              title="Trei Păstori pe Google Maps"
            />
          </div>
          <a
            href="https://maps.google.com/maps?q=Pensiunea+Trei+Pastori+Zahareuca+Moldova"
            target="_blank"
            rel="noopener noreferrer"
            className="locatie-map-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Deschide în Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
