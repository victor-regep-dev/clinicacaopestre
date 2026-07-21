import WaIcon from "./WaIcon";
export default function CtaBand() {
  return (
    <section className="relative bg-gradient-to-br from-petrol to-petrol-2 text-white py-20 overflow-hidden">
      <span className="absolute -right-10 -bottom-8 text-[18rem] opacity-5 leading-none select-none">🐕</span>
      <div className="wrap relative z-10 flex flex-wrap items-center justify-between gap-10">
        <h2 className="font-serif font-medium text-[clamp(1.7rem,3.4vw,2.5rem)] max-w-[640px]">Agende agora e proporcione mais saúde e qualidade de vida para <span className="text-brand-orange">quem você ama.</span></h2>
        <a href="#agendar" className="btn btn-wa !px-8 !py-4 text-[1.02rem]"><WaIcon /> AGENDAR PELO WHATSAPP</a>
      </div>
    </section>
  );
}
