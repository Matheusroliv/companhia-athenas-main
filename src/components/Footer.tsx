import { Link } from "react-router-dom";
import { ArrowRight, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { business, whatsapp } from "@/data/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const Footer = () => (
  <footer className="relative overflow-hidden">
    <div className="container px-4 py-20 text-center md:py-28">
      <p className="eyebrow justify-center">Disciplina · Foco · Resultados</p>
      <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(3rem,9vw,7rem)] leading-[0.88] tracking-wide">
        Bora começar <span className="text-primary">essa semana?</span>
      </h2>
      <a
        href={whatsapp("Olá! Quero agendar minha aula experimental na Companhia Athenas.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-10"
      >
        Agendar aula experimental <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-5 text-sm text-foreground/60">
        ou siga{" "}
        <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
          @companhiaathenas
        </a>{" "}
        no Instagram
      </p>
    </div>

    <div className="greek-band" />
    <div className="container flex flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
        <span className="font-display text-2xl tracking-wider">
          Companhia <span className="text-primary">Athenas</span>
        </span>
      </Link>
      <div className="flex gap-3">
        {[
          { href: business.instagram, label: "Instagram", icon: <InstagramIcon /> },
          { href: business.facebook, label: "Facebook", icon: <Facebook className="h-5 w-5" /> },
          { href: whatsapp(), label: "WhatsApp", icon: <WhatsAppIcon /> },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 transition-colors hover:border-primary hover:text-primary"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
    <div className="container flex flex-col gap-2 px-4 pb-10 text-xs text-foreground/60 md:flex-row md:justify-between">
      <p>
        © {new Date().getFullYear()} {business.name} · CNPJ {business.cnpj}
      </p>
      <p>
        {business.address.street}, {business.address.district} · {business.address.city}-{business.address.region}
      </p>
    </div>
  </footer>
);

export default Footer;
