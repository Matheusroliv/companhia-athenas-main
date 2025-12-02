import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<number | null>(null);
  const navigate = useNavigate();

  // Importar todas as imagens de 0 a 41
  const images = Array.from({ length: 42 }, (_, i) => ({
    src: new URL(`../assets/${i}.jpg`, import.meta.url).href,
    alt: `Galeria Athenas ${i + 1}`,
  }));

  // Mostrar apenas 6 imagens na home
  const displayImages = images.slice(0, 6);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const openModal = (index: number) => {
    setModalImage(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextModalImage = () => {
    if (modalImage !== null) {
      setModalImage((modalImage + 1) % displayImages.length);
    }
  };

  const prevModalImage = () => {
    if (modalImage !== null) {
      setModalImage((modalImage - 1 + displayImages.length) % displayImages.length);
    }
  };

  // Fechar modal com ESC e navegar com setas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
      if (e.key === 'ArrowRight' && modalImage !== null) {
        setModalImage((modalImage + 1) % displayImages.length);
      }
      if (e.key === 'ArrowLeft' && modalImage !== null) {
        setModalImage((modalImage - 1 + displayImages.length) % displayImages.length);
      }
    };

    if (modalImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [modalImage, displayImages.length]);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-4 font-normal">
              GALERIA
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa estrutura e ambiente através das imagens da Companhia Athenas
            </p>
          </div>
        </ScrollReveal>

        {/* Carrossel Principal */}
        <ScrollReveal direction="up" delay={200}>
          <div className="relative max-w-5xl mx-auto mb-8">
            <div 
              className="relative aspect-video rounded-lg overflow-hidden bg-muted cursor-pointer group"
              onClick={() => openModal(currentIndex)}
            >
              <img
                src={displayImages[currentIndex].src}
                alt={displayImages[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Botões de Navegação */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {currentIndex + 1} / {displayImages.length}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid de Miniaturas */}
        <ScrollReveal direction="up" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  openModal(index);
                }}
                className="aspect-square rounded-lg overflow-hidden transition-all hover:scale-105 hover:ring-2 hover:ring-primary"
              >
                <img
                  src={image.src}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Botão Ver Galeria Completa */}
        <ScrollReveal direction="up" delay={400}>
          <div className="flex justify-center">
            <Button
              onClick={() => navigate('/galeria')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              VER GALERIA COMPLETA
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal de Imagem em Tela Cheia */}
      {modalImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevModalImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextModalImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative w-[90vw] h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={displayImages[modalImage].src}
              alt={displayImages[modalImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-black">
                {modalImage + 1} / {displayImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
