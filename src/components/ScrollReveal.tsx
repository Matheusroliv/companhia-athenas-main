import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("scroll-reveal-visible");
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "scroll-reveal-up";
      case "down":
        return "scroll-reveal-down";
      case "left":
        return "scroll-reveal-left";
      case "right":
        return "scroll-reveal-right";
      case "fade":
        return "scroll-reveal-fade";
      default:
        return "scroll-reveal-up";
    }
  };

  return (
    <div ref={ref} className={`scroll-reveal ${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
