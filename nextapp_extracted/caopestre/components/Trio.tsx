"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SPECIALTIES, TESTIMONIALS } from "@/lib/site";

export default function Trio() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="especialidades" className="bg-sand-2 py-[70px]">
      <div className="wrap grid lg:grid-cols-[1fr_1.1fr_1fr] gap-8 items-stretch">
        <div className="reveal flex flex-col">
          <h4 className="text-[0.72rem] tracking-[0.16em] uppercase text-brand-orange font-bold mb-4.5">Especialidades</h4>
          <ul className="flex flex-col gap-3.5 list-none">
            {SPECIALTIES.map((s) => (
              <li key={s} className="flex items-center gap-3 font-semibold text-petrol">
                <span className="w-6 h-6 rounded-full bg-petrol/10 grid place-items-center text-petrol text-xs">✔</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div id="equipe" className="reveal flex flex-col">
          <h4 className="text-[0.72rem] tracking-[0.16em] uppercase text-brand-orange font-bold mb-4.5">Nossa Equipe</h4>
          <div className="flex items-end gap-4">
            <Image src="/assets/equipe.png" alt="Veterinária da Caopestre segurando um cachorro com carinho" width={150} height={200} className="w-[150px] h-auto drop-shadow-xl" />
            <div>
              <h3 className="font-serif text-petrol text-[1.15rem] mb-2 leading-tight">Profissionais apaixonados por cuidar de vidas.</h3>
              <p className="text-[0.84rem] text-[#6a6258]">Conhecimento técnico, empatia e dedicação em cada atendimento.</p>
            </div>
          </div>
        </div>
        <div id="depoimentos" className="reveal flex flex-col">
          <h4 className="text-[0.72rem] tracking-[0.16em] uppercase text-brand-orange font-bold mb-4.5">Depoimentos</h4>
          <div className="text-brand-orange text-base tracking-widest mb-3.5">★★★★★</div>
          <blockquote className="font-serif text-petrol text-[1.02rem] leading-relaxed mb-3.5 font-medium">&ldquo;{TESTIMONIALS[i].q}&rdquo;</blockquote>
          <cite className="not-italic font-bold text-[0.86rem] text-[#6a6258]">— {TESTIMONIALS[i].a}</cite>
          <div className="flex gap-2 mt-4">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} aria-label={`Depoimento ${k + 1}`} onClick={() => setI(k)} className={`h-[9px] rounded-full transition-all ${k === i ? "w-[22px] bg-brand-orange" : "w-[9px] bg-petrol/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
