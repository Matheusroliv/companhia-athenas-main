import { Dumbbell, Activity, Zap, Music, Heart, Flame, Target, Wind, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import musculacaoImg from "@/assets/musculacao.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import boxeImg from "@/assets/boxe.jpg";
import heroImg from "@/assets/hero-gym.jpg";

const activities = [
  {
    title: "Musculação",
    description: "Equipamentos de qualidade e acompanhamento profissional para força e hipertrofia.",
    icon: Dumbbell,
    image: musculacaoImg,
    schedule: "2ª a 6ª: 5h às 22h30 • Sábado: 7h às 14h",
    detailedSchedule: "Segunda a Sexta-feira: 5h às 22h30\nSábado: 7h às 14h",
    fullDescription: "Nossa área de musculação conta com equipamentos modernos e de alta qualidade para todos os níveis de treinamento. Oferecemos acompanhamento profissional personalizado, avaliação física completa e treinos específicos para seus objetivos, seja ganho de massa muscular, emagrecimento ou condicionamento físico.",
  },
  {
    title: "Fit Dance",
    description: "Dança fitness com coreografias animadas para queimar calorias e se divertir.",
    icon: Music,
    image: heroImg,
    schedule: "2ª e 4ª: 08h10 • 3ª: 17h e 20h • 5ª: 17h e 20h • 6ª: 08h10",
    detailedSchedule: "Segunda-feira: 08h10\nTerça-feira: 17h00 e 20h00\nQuarta-feira: 08h10\nQuinta-feira: 17h00 e 20h00\nSexta-feira: 08h10",
    fullDescription: "Aulas de dança fitness com coreografias empolgantes e músicas animadas. Perfeito para quem quer queimar calorias, melhorar o condicionamento cardiovascular e se divertir ao mesmo tempo. Não precisa saber dançar, nossas aulas são para todos os níveis!",
  },
  {
    title: "Power Hit Emagrecimento",
    description: "Treino de alta intensidade focado em emagrecimento e condicionamento físico.",
    icon: Flame,
    image: funcionalImg,
    schedule: "2ª e 4ª: 09h00",
    detailedSchedule: "Segunda-feira: 09h00\nQuarta-feira: 09h00",
    fullDescription: "Treino intervalado de alta intensidade (HIIT) especialmente desenvolvido para acelerar o metabolismo e maximizar a queima de gordura. Combina exercícios aeróbicos e anaeróbicos em uma aula dinâmica e desafiadora.",
  },
  {
    title: "Power G.A.P",
    description: "Exercícios focados em Glúteos, Abdômen e Pernas para tonificação muscular.",
    icon: Target,
    image: funcionalImg,
    schedule: "2ª e 4ª: 18h15 • 3ª, 5ª e 6ª: 07h50",
    detailedSchedule: "Segunda-feira: 18h15\nTerça-feira: 07h50\nQuarta-feira: 18h15\nQuinta-feira: 07h50\nSexta-feira: 07h50",
    fullDescription: "Aula focada no fortalecimento e tonificação de Glúteos, Abdômen e Pernas. Exercícios específicos para definir e fortalecer essas regiões, melhorando postura, equilíbrio e força muscular.",
  },
  {
    title: "Funcional Cárdio",
    description: "Treino funcional com foco cardiovascular para resistência e condicionamento.",
    icon: Heart,
    image: funcionalImg,
    schedule: "2ª e 4ª: 19h00 • 3ª, 5ª e 6ª: 08h30",
    detailedSchedule: "Segunda-feira: 19h00\nTerça-feira: 08h30\nQuarta-feira: 19h00\nQuinta-feira: 08h30\nSexta-feira: 08h30",
    fullDescription: "Treino funcional que combina exercícios de força com movimentos cardiovasculares intensos. Melhora resistência, coordenação motora, agilidade e queima muitas calorias em uma única aula.",
  },
  {
    title: "Power Jump",
    description: "Aulas dinâmicas no mini-trampolim para queimar calorias e melhorar o condicionamento.",
    icon: Activity,
    image: heroImg,
    schedule: "2ª e 4ª: 19h45",
    detailedSchedule: "Segunda-feira: 19h45\nQuarta-feira: 19h45",
    fullDescription: "Aula no mini-trampolim que combina diversão e exercício intenso. Trabalha todo o corpo, melhora o equilíbrio, fortalece a musculatura e queima muitas calorias com baixo impacto nas articulações.",
  },
  {
    title: "Step",
    description: "Exercícios aeróbicos com step para trabalhar membros inferiores e cardio.",
    icon: Activity,
    image: heroImg,
    schedule: "3ª, 5ª e 6ª: 09h00 • 2ª e 4ª: 18h30 e 19h00",
    detailedSchedule: "Segunda-feira: 18h30 e 19h00\nTerça-feira: 09h00\nQuarta-feira: 18h30 e 19h00\nQuinta-feira: 09h00\nSexta-feira: 09h00",
    fullDescription: "Aula aeróbica com plataforma (step) que trabalha principalmente membros inferiores. Melhora condicionamento cardiovascular, coordenação motora e fortalece pernas e glúteos com coreografias dinâmicas.",
  },
  {
    title: "Alongamento",
    description: "Aulas de alongamento para flexibilidade, relaxamento e prevenção de lesões.",
    icon: Wind,
    image: heroImg,
    schedule: "3ª e 6ª: 18h00 • 5ª: 18h00",
    detailedSchedule: "Terça-feira: 18h00\nQuinta-feira: 18h00\nSexta-feira: 18h00",
    fullDescription: "Aula focada em alongamentos e flexibilidade. Essencial para prevenir lesões, melhorar amplitude de movimento, reduzir tensões musculares e promover relaxamento. Ideal para complementar outros treinos.",
  },
  {
    title: "Abdominal",
    description: "Treino específico para fortalecimento e definição da região abdominal.",
    icon: Target,
    image: funcionalImg,
    schedule: "3ª e 6ª: 18h30 • 5ª: 18h30",
    detailedSchedule: "Terça-feira: 18h30\nQuinta-feira: 18h30\nSexta-feira: 18h30",
    fullDescription: "Aula dedicada ao fortalecimento da região abdominal e core. Exercícios variados para trabalhar todos os músculos do abdômen, melhorando postura, estabilidade e definição muscular.",
  },
  {
    title: "Aerobic",
    description: "Exercícios aeróbicos para melhorar condicionamento cardiovascular e resistência.",
    icon: Heart,
    image: heroImg,
    schedule: "2ª e 4ª: 19h30",
    detailedSchedule: "Segunda-feira: 19h30\nQuarta-feira: 19h30",
    fullDescription: "Aula de ginástica aeróbica clássica com movimentos coreografados. Excelente para melhorar condicionamento cardiovascular, queimar calorias e aumentar resistência física de forma divertida.",
  },
  {
    title: "Zumba",
    description: "Dança fitness com ritmos latinos para queimar calorias de forma divertida.",
    icon: Music,
    image: heroImg,
    schedule: "5ª: 19h30",
    detailedSchedule: "Quinta-feira: 19h30",
    fullDescription: "Aula de dança fitness com ritmos latinos como salsa, merengue, reggaeton e muito mais! Uma festa fitness que queima muitas calorias enquanto você se diverte dançando. Não precisa experiência prévia!",
  },
  {
    title: "Ritbox",
    description: "Ritmo e movimento com inspirações do boxe para um treino empolgante.",
    icon: Zap,
    image: boxeImg,
    schedule: "Consulte horários disponíveis",
    detailedSchedule: "Horários flexíveis\nConsulte a recepção para mais informações",
    fullDescription: "Aula que combina movimentos de boxe com ritmo e música. Trabalha todo o corpo, melhora coordenação, reflexos, força e resistência. Excelente para aliviar o estresse e queimar muitas calorias!",
  },
];

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  return (
    <section id="atividades" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-4">
              MODALIDADES
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              As modalidades que oferecemos para você alcançar seus objetivos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card 
              onClick={() => setSelectedActivity(index)}
              className="bg-card border-border overflow-hidden group hover:shadow-[0_10px_40px_-10px_hsl(60_100%_50%/0.3)] transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary p-2 rounded">
                      <activity.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-3xl text-primary">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                <p className="text-foreground flex-1">
                  {activity.description}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-border mt-auto">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {activity.schedule}
                  </p>
                </div>
              </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal de Detalhes */}
        <Dialog open={selectedActivity !== null} onOpenChange={() => setSelectedActivity(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedActivity !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary p-3 rounded">
                      {(() => {
                        const ActivityIcon = activities[selectedActivity].icon;
                        return <ActivityIcon className="w-8 h-8 text-primary-foreground" />;
                      })()}
                    </div>
                    <DialogTitle className="font-display text-4xl text-primary font-normal">
                      {activities[selectedActivity].title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-base text-foreground">
                    {activities[selectedActivity].fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  {/* Imagem */}
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={activities[selectedActivity].image}
                      alt={activities[selectedActivity].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Horários Detalhados */}
                  <div className="bg-secondary p-6 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-2xl text-primary font-normal">HORÁRIOS</h3>
                    </div>
                    <div className="space-y-2 text-foreground whitespace-pre-line">
                      {activities[selectedActivity].detailedSchedule}
                    </div>
                  </div>

                  {/* Botão de Contato */}
                  <a
                    href={`https://wa.me/5561982857467?text=Olá! Gostaria de saber mais sobre a modalidade ${activities[selectedActivity].title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.52 3.482A11.87 11.87 0 0012.004 0C5.392 0 .078 5.314.078 11.926c0 2.101.55 4.154 1.594 5.96L0 24l6.3-1.645a11.837 11.837 0 005.704 1.459h.006c6.612 0 11.926-5.314 11.926-11.927a11.835 11.835 0 00-3.416-8.405zm-8.516 18.96h-.005c-1.94 0-3.84-.52-5.5-1.5l-.395-.234-3.737.976 1-3.65-.258-.374a9.958 9.958 0 01-1.536-5.287c0-5.519 4.49-10.009 10.017-10.009 2.671 0 5.182 1.04 7.07 2.927a9.943 9.943 0 012.94 7.076c-.003 5.52-4.494 10.075-10.596 10.075zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.671.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.476-.883-.787-1.48-1.761-1.653-2.058-.173-.298-.018-.459.13-.607.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.671-1.613-.92-2.207-.242-.58-.487-.5-.671-.51-.173-.01-.371-.011-.57-.011-.198 0-.521.074-.793.372-.273.298-1.04 1.017-1.04 2.48 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.199 5.076 4.487.709.306 1.262.49 1.694.626.712.227 1.36.195 1.872.119.571-.085 1.758-.72 2.006-1.414.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                      FALAR NO WHATSAPP
                    </button>
                  </a>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Activities;
