import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";
import WhatsAppFab from "@/components/WhatsAppFab";
import Photo, { photoSrc } from "@/components/Photo";

const images = Array.from({ length: 42 }, (_, n) => ({
  name: String(n),
  alt: `Companhia Athenas: foto ${n + 1} da academia em Samambaia Norte`,
}));

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [],
  );

  useSeo({
    title: "Fotos da academia | Companhia Athenas Fitness, Samambaia Norte",
    description: "Veja fotos reais da Companhia Athenas: salão de musculação, cardio, piscina coberta, espaço de lutas e sala de aulas coletivas na QR 208, Samambaia Norte - DF.",
    path: "/galeria",
  });

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <Header />
      <main className="container px-4 pb-24 pt-28 md:pt-36">
        <Link to="/#estrutura" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <p className="eyebrow mt-8 flex">Galeria</p>
        <h1 className="section-title mt-4">
          Por dentro da <span className="text-primary">Athenas</span>
        </h1>
        <p className="mt-4 max-w-xl text-foreground/70">Fotos reais da nossa estrutura, aulas e alunos.</p>

        <ul className="mt-12 columns-2 gap-3 md:columns-3 lg:columns-4">
          {images.map((img, i) => (
            <li key={img.name} className="mb-3 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="block w-full overflow-hidden rounded-2xl"
                aria-label={`Ampliar foto ${i + 1}`}
              >
                <Photo
                  name={img.name}
                  alt={img.alt}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="w-full transition-transform duration-500 hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
      <WhatsAppFab />

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={photoSrc(images[open].name)}
            alt={images[open].alt}
            className="max-h-[85dvh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white" aria-label="Fechar">
            <X />
          </button>
          {[
            { d: -1, label: "Foto anterior", icon: <ChevronLeft />, pos: "left-2 md:left-6" },
            { d: 1, label: "Próxima foto", icon: <ChevronRight />, pos: "right-2 md:right-6" },
          ].map((b) => (
            <button
              key={b.d}
              onClick={(e) => {
                e.stopPropagation();
                step(b.d);
              }}
              className={`absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-primary hover:text-primary-foreground ${b.pos}`}
              aria-label={b.label}
            >
              {b.icon}
            </button>
          ))}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70 tabular-nums">
            {open + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
};

export default Gallery;
