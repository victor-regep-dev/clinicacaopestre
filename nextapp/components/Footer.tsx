import Image from "next/image";
import { WHATSAPP, PHONE_DISPLAY } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="bg-petrol-dark text-white/80 pt-16 pb-7">
      <div className="wrap">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-9 mb-10">
          <div>
            <div className="flex items-center mb-4"><Image src="/assets/logo.png" alt="Logotipo Caopestre" width={120} height={120} className="w-[120px] h-[120px] rounded-full" /></div>
            <p className="text-[0.9rem]">Clínica veterinária em Santo André com atendimento completo para cães, gatos e animais silvestres, com amor, carinho e dedicação.</p>
          </div>
          <div>
            <h4 className="text-white text-[0.95rem] mb-4 font-bold">Contato</h4>
            <ul className="flex flex-col gap-2.5 text-[0.9rem] list-none">
              <li><a href={WHATSAPP} className="hover:text-brand-orange">📱 {PHONE_DISPLAY}</a></li>
              <li>📍 Rua Manacá, 46</li><li>Campestre · Santo André/SP</li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-brand-orange">📷 Instagram</a> · <a href="#" className="hover:text-brand-orange">📘 Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[0.95rem] mb-4 font-bold">Atendimento</h4>
            <ul className="flex flex-col gap-2.5 text-[0.9rem] list-none"><li>Segunda a Sexta-feira</li><li>das 8h às 20h</li><li>Sábados das 8h às 17h</li><li>Domingos: fechado</li></ul>
          </div>
          <div>
            <h4 className="text-white text-[0.95rem] mb-4 font-bold">Localização</h4>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe loading="lazy" title="Mapa Caopestre" className="w-full h-[150px] border-0 block" src="https://maps.google.com/maps?q=Rua%20Manac%C3%A1%2046%20Campestre%20Santo%20Andr%C3%A9%20SP&z=15&output=embed" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 text-center text-[0.82rem] opacity-65">© 2026 Caopestre Clínica Veterinária — Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
