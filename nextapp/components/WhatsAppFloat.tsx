import { WHATSAPP } from "@/lib/site";
export default function WhatsAppFloat() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 w-[60px] h-[60px] rounded-full bg-[#25D366] grid place-items-center shadow-xl z-[90] transition hover:scale-110 animate-pulse-wa">
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2A10 10 0 0 0 3.5 17.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 7 4z" /></svg>
    </a>
  );
}
