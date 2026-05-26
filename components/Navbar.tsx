"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const alwaysDark = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "/despre", label: "Despre noi" },
    { href: "/meniu", label: "Meniu" },
    { href: "/#servicii", label: "Servicii" },
    { href: "/#cazare", label: "Cazare" },
    { href: "/#recenzii", label: "Recenzii" },
    { href: "/regulament", label: "Regulament" },
    { href: "/#locatie", label: "Contact" },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled || alwaysDark ? "scrolled" : ""}>
        <a className="nav-logo" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled || alwaysDark ? "/logo.webp" : "/logo-alb-nobg.webp"}
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
