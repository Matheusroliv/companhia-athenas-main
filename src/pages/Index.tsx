import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Modalities from "@/components/Modalities";
import Schedule from "@/components/Schedule";
import Structure from "@/components/Structure";
import Start from "@/components/Start";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  const { hash } = useLocation();

  useSeo({
    title: "Academia em Samambaia Norte - DF | Companhia Athenas Fitness",
    description:
      "Academia em Samambaia Norte (QR 208) há 29 anos: musculação, natação, hidroginástica e aulas coletivas. Seg a sex 05h–22h, sáb 07h–14h. Aceita Wellhub/Gympass. Agende sua aula experimental.",
    path: "/",
  });

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Modalities />
        <Schedule />
        <Structure />
        <Start />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
};

export default Index;
