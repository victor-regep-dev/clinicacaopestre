"use client";
import { useState } from "react";
import { WHATSAPP, TIMES } from "@/lib/site";

type Errors = Record<string, boolean>;
const REQUIRED = ["tutor", "whats", "pet", "tipo", "servico", "data", "hora"] as const;

export default function Booking() {
  const [errors, setErrors] = useState<Errors>({});
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const next: Errors = {};
    REQUIRED.forEach((k) => { if (!data[k]?.trim()) next[k] = true; });
    if (data.data) {
      const day = new Date(data.data + "T00:00").getDay();
      if (day === 0) next.data = true; // domingo fechado
    }
    if (data.whats && data.whats.replace(/\D/g, "").length < 10) next.whats = true;
    setErrors(next);
    if (Object.keys(next).length) return;

    const dataBR = data.data.split("-").reverse().join("/");
    const msg =
      `Olá, tudo bem?\nGostaria de solicitar um agendamento na Clínica Caopestre.\n\n` +
      `Nome do Tutor: ${data.tutor}\nWhatsApp: ${data.whats}\nNome do Pet: ${data.pet}\n` +
      `Tipo de Pet: ${data.tipo}\nServiço Desejado: ${data.servico}\nData Desejada: ${dataBR}\n` +
      `Horário Desejado: ${data.hora}\nObservação: ${data.obs || "—"}\n\nAguardo confirmação.\nMuito obrigado(a).`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  const field = (k: string) => `w-full px-3.5 py-3 border-[1.5px] rounded-xl text-[0.94rem] bg-white outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/15 ${errors[k] ? "border-red-600" : "border-[#e2ddd2]"}`;
  const label = "block font-semibold text-[0.82rem] text-petrol mb-1.5";

  return (
    <section id="agendar" className="bg-white py-24">
      <div className="wrap grid lg:grid-cols-[1.4fr_0.9fr] gap-9 items-start">
        <div className="reveal bg-sand rounded-2xl p-9 shadow-softsm">
          <h2 className="font-serif text-petrol text-[1.8rem] mb-2">Agende o cuidado do seu pet em poucos cliques.</h2>
          <p className="text-[#6a6258] mb-6 text-[0.95rem]">Escolha o serviço desejado, selecione a data e horário e nossa equipe entrará em contato para confirmar.</p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-4">
              <div><label className={label}>Nome do Tutor *</label><input name="tutor" className={field("tutor")} /></div>
              <div><label className={label}>WhatsApp *</label><input name="whats" type="tel" placeholder="(11) 90000-0000" className={field("whats")} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-4">
              <div><label className={label}>Nome do Pet *</label><input name="pet" className={field("pet")} /></div>
              <div><label className={label}>Tipo de Pet *</label>
                <select name="tipo" className={field("tipo")} defaultValue=""><option value="" disabled>Selecione</option><option>Cão</option><option>Gato</option><option>Animal Silvestre</option><option>Outro</option></select>
              </div>
            </div>
            <div className="mb-4"><label className={label}>Serviço Desejado *</label>
              <select name="servico" className={field("servico")} defaultValue=""><option value="" disabled>Selecione</option><option>Consulta</option><option>Banho e Tosa</option><option>Vacina</option></select>
            </div>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-4">
              <div><label className={label}>Data Desejada *</label><input name="data" type="date" min={today} className={field("data")} /></div>
              <div><label className={label}>Horário Desejado *</label>
                <select name="hora" className={field("hora")} defaultValue=""><option value="" disabled>Selecione</option>{TIMES.map((t) => <option key={t}>{t}</option>)}</select>
              </div>
            </div>
            <div className="mb-4"><label className={label}>Observações (opcional)</label><textarea name="obs" className={`${field("obs")} min-h-[70px] resize-y`} /></div>
            <button type="submit" className="btn btn-orange w-full justify-center !py-4 text-[1.02rem]">Enviar Agendamento pelo WhatsApp</button>
          </form>
        </div>
        <aside className="reveal bg-gradient-to-br from-petrol to-petrol-2 text-white rounded-2xl px-8 py-9 shadow-soft lg:sticky lg:top-24">
          <h3 className="font-serif text-[1.35rem] mb-5 font-semibold">Confiança em cada detalhe</h3>
          <ul className="flex flex-col gap-3.5 list-none">
            {["Atendimento de Segunda a Sábado","Confirmação pelo WhatsApp","Consultas, Vacinas e Banho & Tosa","Atendimento para Cães, Gatos e Animais Silvestres"].map((t) => (
              <li key={t} className="flex gap-3 text-[0.93rem] text-white/90"><span className="w-6 h-6 rounded-full bg-brand-orange grid place-items-center text-xs flex-shrink-0">✔</span>{t}</li>
            ))}
          </ul>
          <p className="mt-6 pt-5 border-t border-white/15 italic text-white/80 text-[0.9rem]">Nossa equipe confirmará o horário escolhido através do WhatsApp.</p>
        </aside>
      </div>
    </section>
  );
}
