import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <ScrollReveal direction="up">
            <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Companhia Athenas" className="h-12 w-12" />
              <span className="font-display text-2xl text-primary">ATHENAS</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transforme seu corpo e mente na Companhia Athenas. 
              Treine como um guerreiro com os melhores profissionais.
            </p>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>
                <strong className="text-foreground">Telefone:</strong> <a className="hover:text-primary transition-colors" href="https://wa.me/5561982857467" target="_blank" rel="noopener noreferrer">(61) 98285-7467</a>
              </p>
              <p>
                <strong className="text-foreground">E-mail:</strong> <a className="hover:text-primary transition-colors" href="mailto:academiaathenas@gmail.com">academiaathenas@gmail.com</a>
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={150}>
            <div>
            <h3 className="font-display text-xl text-primary mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#atividades" className="text-muted-foreground hover:text-primary transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          </ScrollReveal>

          {/* Social Media */}
          <ScrollReveal direction="up" delay={300}>
            <div>
            <h3 className="font-display text-xl text-primary mb-4">REDES SOCIAIS</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/companhiaathenas/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground p-3 rounded transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/p/Academia-Athenas-61553968802367/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground p-3 rounded transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Companhia Athenas. Todos os direitos reservados.
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                CNPJ: 25.451.341/0001-04
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
