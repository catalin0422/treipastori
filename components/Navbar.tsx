"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { Lang } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "/despre", label: t("nav_1") },
    { href: "/#servicii", label: t("nav_2") },
    { href: "/#cazare", label: t("nav_3") },
    { href: "/#rezervari", label: t("nav_4") },
    { href: "/#locatie", label: "Contact" },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a className="nav-logo" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt="Trei Păstori"
            style={{ height: 48, width: "auto", display: "block" }}
          />
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="/#rezervari">
            Rezervă
          </a>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label="Meniu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="mob-link" onClick={closeMenu}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
