import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Trio from "@/components/Trio";
import Differentials from "@/components/Differentials";
import Wild from "@/components/Wild";
import Booking from "@/components/Booking";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Trio />
        <Differentials />
        <Wild />
        <Booking />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Reveal />
    </>
  );
}
