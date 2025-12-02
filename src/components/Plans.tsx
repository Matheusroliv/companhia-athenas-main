import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "MENSAL",
    price: "R$ 149",
    period: "/mês",
    features: [
      "Acesso a todas as atividades",
      "Avaliação física inicial",
      "Treino personalizado",
      "Armário individual",
    ],
    highlighted: false,
  },
  {
    name: "TRIMESTRAL",
    price: "R$ 399",
    period: "/3 meses",
    features: [
      "Acesso a todas as atividades",
      "Avaliação física mensal",
      "Treino personalizado",
      "Armário individual",
      "Acompanhamento nutricional básico",
      "15% de desconto",
    ],
    highlighted: true,
  },
  {
    name: "ANUAL",
    price: "R$ 1.499",
    period: "/ano",
    features: [
      "Acesso a todas as atividades",
      "Avaliação física mensal",
      "Treino personalizado premium",
      "Armário VIP",
      "Acompanhamento nutricional completo",
      "Personal trainer 1x/semana",
      "25% de desconto",
    ],
    highlighted: false,
  },
];

const Plans = () => {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-4">
              ESCOLHA SEU PLANO
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mensalidades flexíveis para você começar sua transformação
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <Card 
              className={`relative ${
                plan.highlighted 
                  ? 'bg-primary text-primary-foreground border-primary shadow-[0_10px_40px_-10px_hsl(60_100%_50%/0.4)] scale-105' 
                  : 'bg-card border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="font-display text-3xl mb-4">
                  {plan.name}
                </CardTitle>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-display text-5xl">{plan.price}</span>
                  <span className={`text-lg mb-2 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className={plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-background text-primary hover:bg-background/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  } font-bold`}
                  size="lg"
                >
                  ESCOLHER PLANO
                </Button>
              </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
