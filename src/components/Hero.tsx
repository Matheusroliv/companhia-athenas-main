import { ArrowRight, MapPin } from "lucide-react";
import Photo from "./Photo";
import { business, whatsapp } from "@/data/site";
import { InstagramIcon } from "./icons";
import { useOpenStatus } from "@/hooks/use-open-status";

const stats = [
  { value: "29", label: "anos transformando vidas" },
  { value: "4,85★", label: "124 avaliações no Wellhub" },
  { value: "05h", label: "abre cedo, seg a sex" },
];

const Hero = () => {
  const status = useOpenStatus();

  return (
    <section id="inicio" className="grain relative isolate flex min-h-[min(88svh,780px)] items-end overflow-hidden pb-12 pt-24 md:items-center md:pb-16 md:pt-28">
      <Photo
        name="capa"
        alt="Fachada de vidro da Companhia Athenas Fitness na QR 208, Samambaia Norte"
        sizes="(min-width: 768px) 60vw, 100vw"
        loading="eager"
        {...{ fetchpriority: "high" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_30%] md:left-auto md:right-0 md:w-[62%] md:object-[50%_55%] md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background/30 md:bg-gradient-to-r md:from-background md:from-35% md:via-background/40 md:via-55% md:to-transparent" />
      <div className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" aria-hidden="true" />

      <div className="container px-4">
        <div className="max-w-3xl">
          <a
            href="#contato"
            className={`mb-7 inline-flex items-center gap-4 rounded-2xl border py-3 pl-4 pr-5 backdrop-blur-xl transition-colors ${
              status.open
                ? "border-[hsl(var(--success)/0.45)] bg-[hsl(var(--success)/0.12)] hover:bg-[hsl(var(--success)/0.18)]"
                : "border-foreground/15 bg-foreground/5 hover:bg-foreground/10"
            }`}
          >
            <span className="relative grid h-10 w-10 shrink-0 place-items-center">
              {status.open && (
                <span className="absolute inset-0 animate-ping rounded-full bg-[hsl(var(--success)/0.35)]" aria-hidden="true" />
              )}
              <span
                className={`relative h-3.5 w-3.5 rounded-full ${status.open ? "bg-[hsl(var(--success))] shadow-[0_0_16px_hsl(var(--success))]" : "bg-muted-foreground"}`}
              />
            </span>
            <span className="text-left leading-tight">
              <span className={`block font-display text-2xl tracking-wide ${status.open ? "text-[hsl(var(--success))]" : ""}`}>
                {status.label.split(" · ")[0]}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-foreground/70 sm:text-sm">
                {status.label.split(" · ")[1]}
                <span className="text-foreground/30">·</span>
                <MapPin className="h-3.5 w-3.5" /> {business.address.district}
              </span>
            </span>
          </a>

          <h1 className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.9] tracking-wide">
            Academia em Samambaia.
            <span className="block text-primary">Treine como guerreiro.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base text-foreground/75 sm:text-lg">
            Musculação, natação, hidroginástica e 11 aulas coletivas em um só lugar, com professores que acompanham o seu
            treino de verdade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsapp("Olá! Quero agendar uma aula experimental na Companhia Athenas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar aula experimental <ArrowRight className="h-4 w-4" />
            </a>
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <InstagramIcon className="h-4 w-4" /> Ver no Instagram
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl text-primary sm:text-4xl">{s.value}</dd>
                <dd className="text-xs text-foreground/60 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

    </section>
  );
};

export default Hero;
