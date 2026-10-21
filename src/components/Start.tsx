import { useState } from "react";
import { business, steps, whatsapp } from "@/data/site";
import ScrollReveal from "./ScrollReveal";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const goals = [
  { label: "Emagrecer", msg: "meu objetivo é emagrecer" },
  { label: "Ganhar massa", msg: "meu objetivo é ganhar massa muscular" },
  { label: "Natação", msg: "quero fazer natação" },
  { label: "Natação para meu filho", msg: "quero natação para o meu filho" },
  { label: "Hidroginástica", msg: "quero fazer hidroginástica" },
  { label: "Aulas coletivas", msg: "quero fazer aulas coletivas" },
  { label: "Saúde e bem-estar", msg: "quero treinar pela saúde e bem-estar" },
];

const Start = () => {
  const [goal, setGoal] = useState(goals[0]);

  return (
    <section id="comece" className="relative overflow-hidden border-t border-foreground/10 py-24 md:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <div className="container grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <p className="eyebrow">Comece agora</p>
          <h2 className="section-title mt-4">
            Sua primeira aula <span className="text-primary">é experimental</span>
          </h2>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="font-display text-5xl leading-none text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-foreground/65">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <p className="font-display text-3xl tracking-wide">Qual é o seu objetivo?</p>
            <p className="mt-1 text-sm text-foreground/60">Escolha e a gente já sabe por onde começar.</p>
            <div className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Objetivo">
              {goals.map((g) => (
                <button
                  key={g.label}
                  type="button"
                  role="radio"
                  aria-checked={goal === g}
                  onClick={() => setGoal(g)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    goal === g
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-foreground/15 text-foreground/75 hover:border-primary hover:text-primary"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <a
              href={whatsapp(`Olá! Vim pelo site, ${goal.msg} e quero agendar uma aula experimental.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whats mt-8 w-full !py-4 text-base"
            >
              <WhatsAppIcon /> Agendar pelo WhatsApp
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-3 w-full"
            >
              <InstagramIcon /> Prefiro chamar no Instagram
            </a>
            <p className="mt-4 text-center text-xs text-foreground/60">Resposta rápida no horário de funcionamento.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Start;
