import Image from "next/image";
import WaIcon from "./WaIcon";

const indicators = [
  { icon: "❤", label: "Atendimento Humanizado" },
  { icon: "🛡", label: "Equipe Especializada" },
  { icon: "★", label: "Estrutura Completa" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[660px] flex items-center overflow-hidden bg-petrol">
      <Image src="/assets/consultorio.png" alt="" fill priority className="object-cover scale-110 blur-md opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#083F4A_18%,rgba(8,63,74,.85)_38%,rgba(8,63,74,.25)_55%,rgba(8,63,74,0)_70%)]" />
      <div className="absolute right-0 bottom-0 h-[102%] w-[55%] hidden md:block">
        <Image src="/assets/cao-gato.png" alt="Golden Retriever e gato juntos sob cuidado da Caopestre" fill className="object-contain object-bottom" priority />
      </div>
      <div className="wrap relative z-10 w-full text-white">
        <div className="reveal max-w-[560px] pt-32 pb-36">
          <h1 className="font-serif font-medium leading-[1.08] text-[clamp(2.6rem,5vw,4rem)]">
            Cuidado completo,<br /><span className="text-brand-orange">carinho de verdade.</span>
          </h1>
          <p className="text-white/85 text-[1.04rem] my-6 max-w-[440px]">
            Consultas, vacinas, exames, cirurgias e muito mais. Atendimento especializado para cães, gatos e animais silvestres em Santo André.
          </p>
          <a href="#agendar" className="btn btn-wa !px-7"><WaIcon /> AGENDAR PELO WHATSAPP</a>
          <div className="flex flex-wrap gap-9 mt-10">
            {indicators.map((it) => (
              <div key={it.label} className="flex flex-col gap-1 font-bold text-[0.74rem] uppercase tracking-wide max-w-[110px] leading-snug">
                <span className="text-brand-orange text-2xl mb-2">{it.icon}</span>{it.label}
              </div>
            ))}
          </div>
        </div>
        <div className="reveal md:absolute md:right-0 md:bottom-8 bg-petrol-dark/85 backdrop-blur-md border border-white/15 rounded-2xl px-7 py-5 flex flex-wrap gap-10 shadow-soft z-20 mb-10 md:mb-0">
          <div>
            <small className="flex items-center gap-2 text-[0.64rem] tracking-[0.13em] uppercase text-brand-orange font-bold mb-2">🕗 Horário de Atendimento</small>
            <strong className="block text-[0.88rem] font-medium leading-relaxed text-white/95">Segunda a Sexta-feira<br />das 8h às 20h<br />Sábados das 8h às 17h<br />Domingos: fechado</strong>
          </div>
          <div>
            <small className="flex items-center gap-2 text-[0.64rem] tracking-[0.13em] uppercase text-brand-orange font-bold mb-2">📍 Onde Estamos</small>
            <strong className="block text-[0.88rem] font-medium leading-relaxed text-white/95">Rua Manacá, 46<br />Campestre · Santo André/SP</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
