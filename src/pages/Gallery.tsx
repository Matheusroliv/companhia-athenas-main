import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [gridStartIndex, setGridStartIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [modalImage, setModalImage] = useState<number | null>(null);

  const images = Array.from({ length: 42 }, (_, i) => ({
    src: new URL(`../assets/${i}.jpg`, import.meta.url).href,
    alt: `Galeria Athenas ${i + 1}`,
  }));

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setGridStartIndex((prev) => (prev + 6) % images.length);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (index: number) => {
    setModalImage(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextModalImage = () => {
    if (modalImage !== null) {
      setModalImage((modalImage + 1) % images.length);
    }
  };

  const prevModalImage = () => {
    if (modalImage !== null) {
      setModalImage((modalImage - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
      if (e.key === 'ArrowRight' && modalImage !== null) {
        setModalImage((modalImage + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && modalImage !== null) {
        setModalImage((modalImage - 1 + images.length) % images.length);
      }
    };

    if (modalImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [modalImage, images.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className={`container mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="font-display text-4xl md:text-5xl text-center mb-4 text-primary">
            Galeria
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conheça nossa estrutura e ambiente através das imagens da Companhia Athenas
          </p>

          {/* Carrossel Principal */}
          <div className="relative max-w-5xl mx-auto mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted cursor-pointer" onClick={() => openModal(currentIndex)}>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Botões de Navegação */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full transition-all hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-14 gap-2 max-h-[400px] overflow-y-auto p-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`aspect-square rounded-md overflow-hidden transition-all hover:scale-105 hover:ring-2 hover:ring-primary ${
                    currentIndex === index ? 'ring-2 ring-primary scale-105' : 'opacity-60'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Imagens Alternativo (visível em telas maiores) */}
          <div className="hidden lg:grid grid-cols-3 gap-4 mt-16 max-w-6xl mx-auto">
            {images.slice(gridStartIndex, gridStartIndex + 6).map((image, index) => {
              const actualIndex = (gridStartIndex + index) % images.length;
              return (
                <div
                  key={`${gridStartIndex}-${index}`}
                  className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(actualIndex)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isFading ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
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
              src={images[modalImage].src}
              alt={images[modalImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-black">
                {modalImage + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
