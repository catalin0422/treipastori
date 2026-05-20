import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Pensiunea Trei Păstori | Cazare & Relaxare în Zahareuca",
  description:
    "Rezervă cazare la Pensiunea Trei Păstori din Zahareuca, Telenești. Piscină, restaurant, foișoare, pescuit și natură autentică în inima Moldovei.",
  alternates: { canonical: "https://treipastori.md" },
};
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Servicii from "@/components/Servicii";
import Cazare from "@/components/Cazare";
import Rezervari from "@/components/Rezervari";
import Recenzii from "@/components/Recenzii";
import Locatie from "@/components/Locatie";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Intro />
      <Servicii />
      <Cazare />
      <Recenzii />
      <Rezervari />
      <Locatie />
      <Footer />
      <RevealObserver />
    </LanguageProvider>
  );
}
