import { useState } from "react";
import { modalities, weekdays, whatsapp } from "@/data/site";
import { useOpenStatus } from "@/hooks/use-open-status";
import ScrollReveal from "./ScrollReveal";

const days = [1, 2, 3, 4, 5];

const period = (time: string) => {
  const h = Number(time.slice(0, 2));
  return h < 12 ? "Manhã" : h < 18 ? "Tarde" : "Noite";
};

const Schedule = () => {
  const { day: today } = useOpenStatus();
  const [day, setDay] = useState(days.includes(today) ? today : 1);

  const classes = modalities
    .flatMap((m) => m.slots.filter((s) => s.day === day).map((s) => ({ ...s, name: m.name, intensity: m.intensity })))
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <section id="aulas" className="relative border-y border-foreground/10 bg-secondary/40 py-24 md:py-32">
      <div className="container grid gap-12 px-4 lg:grid-cols-[1fr_1.4fr]">
        <ScrollReveal>
          <p className="eyebrow">Grade de aulas coletivas</p>
          <h2 className="section-title mt-4">
            Escolha o dia, <span className="text-primary">a gente cuida do resto</span>
          </h2>
          <p className="mt-6 max-w-md text-foreground/70">
            Escolha o dia e veja as aulas. Gostou de alguma? Reserve sua aula experimental pelo WhatsApp.
          </p>
          <p className="mt-4 text-sm text-foreground/60">Grade sujeita a alterações. Ritbox, natação e hidro: consulte turmas.</p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="glass rounded-3xl p-3 sm:p-4">
            <div className="grid grid-cols-5 gap-1.5" role="tablist" aria-label="Dia da semana">
              {days.map((d) => (
                <button
                  key={d}
                  role="tab"
                  aria-selected={day === d}
                  onClick={() => setDay(d)}
                  className={`relative rounded-2xl py-3 text-sm font-semibold transition-colors ${
                    day === d ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:bg-foreground/5"
                  }`}
                >
                  <span className="sm:hidden">{weekdays[d].slice(0, 3)}</span>
                  <span className="hidden sm:inline">{weekdays[d]}</span>
                  {d === today && (
                    <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-current" aria-label="hoje" />
                  )}
                </button>
              ))}
            </div>

            <div role="tabpanel">
            <ol className="mt-3 divide-y divide-foreground/10">
              {classes.map((c) => (
                <li key={`${c.name}-${c.time}`} className="flex items-center gap-4 px-3 py-4">
                  <span className="w-16 font-display text-3xl tabular-nums text-primary">{c.time}</span>
                  <span className="flex-1 font-semibold">{c.name}</span>
                  <span className="hidden w-14 text-right text-xs uppercase tracking-widest text-foreground/60 sm:inline">
                    {period(c.time)}
                  </span>
                  <span className="text-xs text-foreground/60">{"●".repeat(c.intensity)}</span>
                </li>
              ))}
            </ol>
            </div>
            <a
              href={whatsapp(`Olá! Vi a grade de ${weekdays[day].toLowerCase()} no site e quero agendar uma aula experimental.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
            >
              Reservar aula experimental
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Schedule;
