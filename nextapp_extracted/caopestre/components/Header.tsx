"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "@/lib/site";
import WaIcon from "./WaIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-petrol/95 backdrop-blur-md shadow-lg py-1" : "py-2"}`}>
      <div className="wrap flex items-center justify-between gap-5">
        <a href="#home" className="flex items-center">
          <Image src="/assets/logo.png" alt="Logotipo Caopestre Clínica Veterinária" width={120} height={120} className="w-[120px] h-[120px] rounded-full" priority />
        </a>
        <ul className="hidden lg:flex gap-7 list-none">
          {NAV.map((n, i) => (
            <li key={n.label}>
              <a href={n.href} className={`text-white/90 font-semibold text-[0.86rem] hover:text-white transition ${i === 0 ? "text-white after:content-[''] after:block after:h-0.5 after:bg-brand-orange after:rounded after:mt-1.5" : ""}`}>{n.label}</a>
            </li>
          ))}
        </ul>
        <a href="#agendar" className="hidden lg:inline-flex btn btn-wa !py-2.5">Agendar <WaIcon /></a>
        <button className="lg:hidden flex flex-col gap-1.5 p-1.5" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
          <span className="w-6 h-0.5 bg-white rounded" /><span className="w-6 h-0.5 bg-white rounded" /><span className="w-6 h-0.5 bg-white rounded" />
        </button>
      </div>
      {open && (
        <ul className="lg:hidden flex flex-col gap-4 bg-petrol px-7 py-5 shadow-soft list-none">
          {NAV.map((n) => (<li key={n.label}><a href={n.href} className="text-white font-semibold" onClick={() => setOpen(false)}>{n.label}</a></li>))}
        </ul>
      )}
    </header>
  );
}
