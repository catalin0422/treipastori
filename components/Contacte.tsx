"use client";

import { useLang } from "@/context/LanguageContext";

const contacts = [
  { href: "tel:060117999", label: "📞 060117999" },
  { href: "tel:069054055", label: "📞 069054055" },
  { href: "tel:060941836", label: "📞 060941836" },
  { href: "mailto:cristianciobanu2007@gmail.com", label: "✉️ cristianciobanu2007@gmail.com" },
  { href: "https://www.instagram.com/crtby19", label: "📸 Instagram: @crtby19", external: true },
  { href: "https://www.tiktok.com/@trei.pastori", label: "🎵 TikTok: @trei.pastori", external: true },
];

export default function Contacte() {
  const { t } = useLang();

  return (
    <section id="contacte">
      <div className="contacte-wrap">
        <div className="reveal">
          <p className="overline">Contacte</p>
          <h2 className="section-heading">
            Hai să ne <em>cunoaștem</em>
          </h2>
        </div>
        <div className="contacte-pills reveal">
          {contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="contact-pill"
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
