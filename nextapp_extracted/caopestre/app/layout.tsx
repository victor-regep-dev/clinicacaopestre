import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-fraunces" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Caopestre Clínica Veterinária | Santo André - Consultas, Vacinas, Cirurgias e Animais Silvestres",
  description: "Clínica Veterinária em Santo André (Campestre). Consultas, vacinas, exames, cirurgias, banho e tosa e atendimento para cães, gatos e animais silvestres. Agende pelo WhatsApp.",
  keywords: ["Clínica Veterinária Santo André","Veterinário Campestre","Vacina para Cachorro Santo André","Banho e Tosa Santo André","Animais Silvestres Santo André"],
  openGraph: {
    title: "Caopestre Clínica Veterinária | Cuidado completo, carinho de verdade.",
    description: "Consultas, vacinas, exames, cirurgias e atendimento especializado para cães, gatos e animais silvestres em Santo André/SP.",
    locale: "pt_BR", type: "website",
  },
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans text-ink bg-white overflow-x-hidden">{children}</body>
    </html>
  );
}
