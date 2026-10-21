import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, whatsapp } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const Faq = () => (
  <section id="duvidas" className="border-t border-foreground/10 py-24 md:py-32">
    <div className="container grid gap-12 px-4 lg:grid-cols-[1fr_1.5fr]">
      <ScrollReveal>
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="section-title mt-4">
          Antes de <span className="text-primary">começar</span>
        </h2>
        <p className="mt-6 max-w-sm text-foreground/70">
          Não achou sua resposta?{" "}
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
            Chame no WhatsApp
          </a>
          .
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-foreground/10">
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/70">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default Faq;
