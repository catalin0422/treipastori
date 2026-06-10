import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Pensiunea Trei Păstori | Cazare & Relaxare în Zahareuca",
  description:
    "Rezervă cazare la Pensiunea Trei Păstori din Zahareuca, Telenești. Piscină, restaurant, foișoare, pescuit și natură autentică în inima Moldovei.",
  alternates: { canonical: "https://treipastori.md" },
};

const UNDER_CONSTRUCTION = true;

export default function Page() {
  if (UNDER_CONSTRUCTION) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white text-center px-4">
        <h1 className="text-3xl font-semibold mb-3">Pagina în lucru</h1>
        <p className="text-gray-400">Revenim în curând cu ceva nou. Mulțumim pentru răbdare!</p>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
}
