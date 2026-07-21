export default function WaIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <span className={`grid place-items-center rounded-full bg-[#25D366] flex-shrink-0 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 fill-white"><path d="M12 2A10 10 0 0 0 3.5 17.2L2 22l4.9-1.3A10 10 0 1 0 12 2z" /></svg>
    </span>
  );
}
