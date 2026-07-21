import { SERVICES } from "@/lib/site";
export default function Services() {
  return (
    <section id="servicos" className="bg-sand pt-28 pb-24">
      <div className="wrap">
        <div className="reveal text-center max-w-[640px] mx-auto mb-12">
          <span className="eyebrow">Nossos Serviços</span>
          <h2 className="font-serif text-petrol text-[clamp(2rem,4vw,2.8rem)]">Tudo o que seu pet precisa,<br />em um só lugar.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="reveal bg-white border border-[#ece3d5] rounded-2xl px-4 py-7 text-center transition hover:-translate-y-2 hover:shadow-softsm hover:border-brand-orange/50">
              <span className="text-[2rem] block mb-3.5">{s.icon}</span>
              <h3 className="font-serif text-petrol text-[1.02rem] font-semibold mb-1.5">{s.title}</h3>
              <div className="w-7 h-[3px] bg-brand-orange rounded mx-auto mb-3" />
              <p className="text-[0.78rem] text-[#7a7268] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
