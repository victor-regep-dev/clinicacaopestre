const PILLS = ["🦜 Calopsita","🐰 Coelho","🐢 Jabuti","🐹 Hamster","🐹 Porquinho-da-Índia"];
const BLOBS = ["🦜","🐰","🐢","🐹"];

export default function Wild() {
  return (
    <section id="silvestres" className="bg-sand py-24">
      <div className="wrap grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div className="reveal">
          <span className="eyebrow">Diferencial Exclusivo</span>
          <h2 className="font-serif text-petrol text-[clamp(1.9rem,3.6vw,2.6rem)] mb-4">Seu pet é diferente. Nosso cuidado também.</h2>
          <p className="text-[#5f574d] text-[1.04rem] mb-6 max-w-[440px]">Atendemos animais silvestres e exóticos com atenção especializada e acompanhamento profissional.</p>
          <div className="flex flex-wrap gap-3">
            {PILLS.map((p) => (<span key={p} className="bg-white rounded-full px-5.5 py-3 font-semibold text-petrol shadow-softsm text-[0.94rem] transition hover:-translate-y-1">{p}</span>))}
          </div>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {BLOBS.map((b, k) => (
            <div key={k} className={`aspect-square rounded-[22px] grid place-items-center text-[3rem] shadow-softsm ${k === 0 ? "bg-gradient-to-br from-petrol to-petrol-2 text-white" : k === 1 ? "bg-gradient-to-br from-brand-orange to-brand-orange-d text-white" : "bg-white"}`}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
