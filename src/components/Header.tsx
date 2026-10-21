import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { whatsapp } from "@/data/site";
import { WhatsAppIcon } from "./icons";

const links = [
  { href: "/#modalidades", label: "Modalidades" },
  { href: "/#aulas", label: "Grade de aulas" },
  { href: "/#estrutura", label: "Estrutura" },
  { href: "/#comece", label: "Comece agora" },
  { href: "/#duvidas", label: "Dúvidas" },
  { href: "/#contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-foreground/10 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between gap-6 px-4 md:h-20" aria-label="Principal">
        <Link to="/" className="flex items-center gap-3" aria-label="Companhia Athenas, página inicial">
          <img src={logo} alt="" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10" />
          <span className="font-display text-2xl leading-none tracking-wider">
            Companhia <span className="text-primary">Athenas</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsapp("Olá! Quero agendar uma aula experimental na Companhia Athenas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex"
          >
            Aula experimental
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        className={`lg:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-4rem)] overflow-y-auto border-t border-foreground/10 bg-background`}
      >
        <ul className="container flex flex-col px-4 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-foreground/10 py-4 font-display text-4xl tracking-wide hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container px-4">
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="btn-whats w-full">
            <WhatsAppIcon /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
