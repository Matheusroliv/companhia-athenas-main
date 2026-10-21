import { useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { modalities, programs, weekdays, whatsapp, type Program } from "@/data/site";
import Photo from "./Photo";
import ScrollReveal from "./ScrollReveal";
import { WhatsAppIcon } from "./icons";

const classDays = (p: Program) => {
  const days = new Set(modalities.filter((m) => p.classes?.includes(m.slug)).flatMap((m) => m.slots.map((s) => s.day)));
  return [...days].sort().map((d) => weekdays[d].slice(0, 3)).join(" · ");
};

const Modalities = () => {
  const [selected, setSelected] = useState<Program | null>(null);
  const classes = selected?.classes ? modalities.filter((m) => selected.classes?.includes(m.slug)) : [];

  return (
    <section id="modalidades" className="py-24 md:py-32">
      <div className="container px-4">
        <ScrollReveal>
          <p className="eyebrow">Modalidades</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Um treino para cada <span className="text-primary">objetivo</span>
          </h2>
        </ScrollReveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <li key={p.slug}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl text-left sm:aspect-[4/3] lg:aspect-[4/5]"
              >
                <Photo
                  name={p.photo}
                  alt={p.photoAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background/60 backdrop-blur transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-4xl leading-none tracking-wide text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/75">{p.tagline}</p>
                  <p className="mt-4 flex items-center gap-2 border-t border-white/15 pt-4 text-xs text-white/60">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {p.classes ? classDays(p) : p.hours?.split(/[:.]/)[0]}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90dvh] max-w-lg overflow-y-auto rounded-3xl border-foreground/10 p-0">
          {selected && (
            <>
              <Photo name={selected.photo} alt={selected.photoAlt} sizes="512px" loading="eager" className="aspect-video w-full object-cover" />
              <div className="space-y-6 p-6">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-display text-5xl font-normal tracking-wide">{selected.name}</DialogTitle>
                  <DialogDescription className="text-base text-foreground/75">{selected.description}</DialogDescription>
                </DialogHeader>
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Clock className="h-4 w-4 text-primary" /> Horários
                  </p>
                  {classes.length ? (
                    <ul className="space-y-1.5 text-sm">
                      {classes.map((m) => (
                        <li key={m.slug} className="flex justify-between gap-4">
                          <span className="text-foreground/70">{m.name}</span>
                          <span className="text-right font-medium">
                            {[...new Set(m.slots.map((s) => s.day))].map((d) => weekdays[d].slice(0, 3)).join(", ")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-foreground/70">{selected.hours}</p>
                  )}
                  {classes.length > 0 && (
                    <a href="#aulas" onClick={() => setSelected(null)} className="mt-4 inline-block text-sm text-primary underline underline-offset-4">
                      Ver grade completa com horários
                    </a>
                  )}
                </div>
                <a
                  href={whatsapp(`Olá! Vi no site e quero agendar uma aula experimental de ${selected.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whats w-full"
                >
                  <WhatsAppIcon /> Agendar aula experimental
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Modalities;
