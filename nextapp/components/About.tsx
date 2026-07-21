import Image from "next/image";
export default function About() {
  return (
    <section id="sobre" className="bg-sand pb-24">
      <div className="wrap grid lg:grid-cols-[1fr_1.15fr] gap-14 items-center">
        <div className="reveal">
          <span className="eyebrow">Sobre Nós</span>
          <h2 className="font-serif text-petrol text-[clamp(1.8rem,3.4vw,2.5rem)] mb-4.5">Mais que uma clínica, um espaço de <span className="text-brand-orange">cuidado</span> e dedicação.</h2>
          <p className="text-[#5f574d] max-w-[420px]">Na Caopestre, cada detalhe foi pensado para oferecer conforto, segurança e bem-estar para o seu pet. Contamos com uma equipe apaixonada, estrutura completa e atendimento humanizado.</p>
        </div>
        <div className="reveal relative">
          <Image src="/assets/consultorio.png" alt="Consultório veterinário premium da Caopestre" width={760} height={500} className="rounded-2xl shadow-soft w-full h-auto object-cover" />
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full bg-white shadow-soft grid place-items-center text-center p-3.5">
            <span className="font-serif text-[0.72rem] font-semibold text-petrol uppercase tracking-wide leading-snug">Cuidado que Transforma<span className="block text-brand-orange text-xl mt-1">🐾</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
