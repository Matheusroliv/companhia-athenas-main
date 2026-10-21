import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Photo from "./Photo";
import { amenities } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const photos = [
  { name: "2", alt: "Área de peso livre com halteres na Companhia Athenas", className: "col-span-2 row-span-2" },
  { name: "37", alt: "Piscina coberta para natação e hidroginástica", className: "row-span-2" },
  { name: "fachada", alt: "Fachada de vidro da Companhia Athenas Fitness na QR 208, Samambaia Norte", className: "row-span-2" },
  { name: "12", alt: "Espaço de lutas com ringue", className: "" },
  { name: "14", alt: "Área de cardio com escadas e elípticos", className: "" },
  { name: "38", alt: "Estúdio de pilates no prédio da academia", className: "" },
  { name: "25", alt: "Área de treino com piso de madeira", className: "" },
];

const Structure = () => (
  <section id="estrutura" className="py-24 md:py-32">
    <div className="container px-4">
      <ScrollReveal>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Estrutura</p>
            <h2 className="section-title mt-4">
              29 anos de casa, <span className="text-primary">estrutura de gente grande</span>
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/75">
            {amenities.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-primary" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4">
          {photos.map((p) => (
            <figure key={p.name} className={`overflow-hidden rounded-3xl ${p.className}`}>
              <Photo
                name={p.name}
                alt={p.alt}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-8 flex justify-center">
        <Link to="/galeria" className="btn-ghost">
          Ver galeria completa <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default Structure;
