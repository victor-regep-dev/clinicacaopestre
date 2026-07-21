import { DIFFERENTIALS } from "@/lib/site";
export default function Differentials() {
  return (
    <section className="bg-gradient-to-br from-petrol to-petrol-2 text-white py-24">
      <div className="wrap">
        <div className="reveal text-center max-w-[640px] mx-auto mb-10">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="font-serif text-white text-[clamp(2rem,4vw,2.8rem)]">Por que escolher a Caopestre?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIFFERENTIALS.map((d) => (
            <div key={d} className="reveal flex items-center gap-3 bg-white/[0.06] border border-white/10 px-5 py-4.5 rounded-xl font-semibold text-[0.92rem] transition hover:bg-white/10 hover:-translate-y-1">
              <span className="w-7 h-7 rounded-full bg-brand-orange grid place-items-center text-sm flex-shrink-0">✔</span>{d}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
