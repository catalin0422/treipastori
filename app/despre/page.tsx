import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Despre from "@/components/Despre";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre noi | Pensiunea Trei Păstori",
  description: "Povestea Pensiunii Trei Păstori – două decenii de tradiție, natură și ospitalitate autentică în Zahareuca, Moldova.",
};

export default function DesprePage() {
  return (
    <LanguageProvider>
      <Navbar />
      <div style={{ paddingTop: "90px" }}>
        <Despre />
      </div>
      <Footer />
      <RevealObserver />
    </LanguageProvider>
  );
}
