import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import heroImage from "@/assets/3.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40 w-full" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-3xl">
          <ScrollReveal direction="left">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 text-primary leading-none">
              TREINE COMO UM GUERREIRO
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={200}>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-xl">
              Transforme seu corpo e mente na Companhia Athenas. Natação, Hidroginástica, Musculação, Jump, Power Funcional e Ritbox.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-full items-stretch">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base sm:text-lg w-full sm:w-auto py-3 h-auto"
              onClick={() => scrollToSection("planos")}
            >
              COMEÇAR AGORA
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-base sm:text-lg w-full sm:w-auto whitespace-normal py-3 h-auto leading-tight"
              onClick={() => scrollToSection("atividades")}
            >
              CONHEÇA AS MODALIDADES
            </Button>
            <a
              href="https://wa.me/5561982857467?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20Academia%20Companhia%20Athenas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto"
            >
              <Button 
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 font-bold text-base sm:text-lg w-full py-3 h-auto"
              >
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M20.52 3.482A11.87 11.87 0 0012.004 0C5.392 0 .078 5.314.078 11.926c0 2.101.55 4.154 1.594 5.96L0 24l6.3-1.645a11.837 11.837 0 005.704 1.459h.006c6.612 0 11.926-5.314 11.926-11.927a11.835 11.835 0 00-3.416-8.405zm-8.516 18.96h-.005c-1.94 0-3.84-.52-5.5-1.5l-.395-.234-3.737.976 1-3.65-.258-.374a9.958 9.958 0 01-1.536-5.287c0-5.519 4.49-10.009 10.017-10.009 2.671 0 5.182 1.04 7.07 2.927a9.943 9.943 0 012.94 7.076c-.003 5.52-4.494 10.075-10.596 10.075zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.671.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.476-.883-.787-1.48-1.761-1.653-2.058-.173-.298-.018-.459.13-.607.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.671-1.613-.92-2.207-.242-.58-.487-.5-.671-.51-.173-.01-.371-.011-.57-.011-.198 0-.521.074-.793.372-.273.298-1.04 1.017-1.04 2.48 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.199 5.076 4.487.709.306 1.262.49 1.694.626.712.227 1.36.195 1.872.119.571-.085 1.758-.72 2.006-1.414.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                FALAR NO WHATSAPP
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Greek Pattern Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
    </section>
  );
};

export default Hero;
