/** Dados do negócio. Tudo que muda (telefone, horário, preço) mora aqui. */
export const business = {
  name: "Companhia Athenas",
  url: "https://companhiaathenas.com.br",
  phone: "+5561982857467",
  phoneLabel: "(61) 98285-7467",
  email: "academiaathenas@gmail.com",
  cnpj: "25.451.341/0001-04",
  address: {
    street: "QR 208 Conjunto 1, Lote 1",
    district: "Samambaia Norte",
    city: "Brasília",
    region: "DF",
    zip: "72316-510",
  },
  geo: { lat: -15.86657, lng: -48.0506 },
  instagram: "https://www.instagram.com/companhiaathenas/",
  facebook: "https://www.facebook.com/p/Academia-Athenas-61553968802367/",
};

export const amenities = [
  "Ar-condicionado",
  "Armários",
  "Vestiários com chuveiro",
  "Estacionamento",
  "Wi-Fi",
  "Personal trainers",
  "Nutricionista",
  "Pilates e fisioterapia no prédio",
  "Loja de artigos esportivos",
];

export const whatsapp = (text = "Olá! Vim pelo site e quero saber mais sobre a Companhia Athenas.") =>
  `https://wa.me/${business.phone.replace("+", "")}?text=${encodeURIComponent(text)}`;

export const mapsLink = "https://www.google.com/maps?cid=10049613874302747117";
const mapsQuery = `${business.name}, ${business.address.street}, ${business.address.district}, ${business.address.city} - ${business.address.region}, ${business.address.zip}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=17&output=embed`;

/** 0 = domingo … 6 = sábado. Minutos desde 00:00. */
export const openingHours: { days: number[]; label: string; open?: number; close?: number }[] = [
  { days: [1, 2, 3, 4, 5], label: "Segunda a sexta", open: 5 * 60, close: 22 * 60 },
  { days: [6], label: "Sábado", open: 7 * 60, close: 14 * 60 },
  { days: [0], label: "Domingo" },
];

export const fmtTime = (min: number) =>
  `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;

export const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export type Modality = {
  slug: string;
  name: string;
  category: "Musculação" | "Piscina" | "Aulas coletivas";
  tagline: string;
  description: string;
  photo: string;
  /** Só as que aparecem como card em Modalidades. */
  featured?: boolean;
  intensity: 1 | 2 | 3;
  slots: { day: number; time: string }[];
};

const s = (days: number[], ...times: string[]) => days.flatMap((day) => times.map((time) => ({ day, time })));

export const modalities: Modality[] = [
  {
    slug: "musculacao",
    name: "Musculação",
    category: "Musculação",
    tagline: "Força, hipertrofia e emagrecimento",
    description:
      "Salão amplo com aparelhos de linha profissional, peso livre e professores acompanhando o seu treino.",
    photo: "22",
    intensity: 2,
    slots: [],
  },
  {
    slug: "natacao",
    name: "Natação",
    category: "Piscina",
    tagline: "Bebê, infantil e adulto",
    description:
      "Piscina coberta, turmas por nível e idade. Da adaptação do bebê à técnica dos quatro estilos.",
    photo: "9",
    intensity: 2,
    slots: [],
  },
  {
    slug: "hidroginastica",
    name: "Hidroginástica",
    category: "Piscina",
    tagline: "Condicionamento sem impacto",
    description:
      "Exercício na água que protege as articulações. Indicada para todas as idades, gestantes e quem está voltando a treinar.",
    photo: "39",
    intensity: 1,
    slots: [],
  },
  {
    slug: "fit-dance",
    name: "Fit Dance",
    category: "Aulas coletivas",
    tagline: "Dança, suor e muita energia",
    description: "Coreografias animadas para todos os níveis. Não precisa saber dançar.",
    photo: "16",
    intensity: 2,
    slots: [...s([1, 3, 5], "08:10"), ...s([2, 4], "17:00", "20:00")],
  },
  {
    slug: "power-hit",
    name: "Power Hit",
    category: "Aulas coletivas",
    tagline: "HIIT focado em emagrecimento",
    description: "Treino intervalado de alta intensidade para acelerar o metabolismo e queimar gordura.",
    photo: "16",
    intensity: 3,
    slots: s([1, 3], "09:00"),
  },
  {
    slug: "power-gap",
    name: "Power G.A.P.",
    category: "Aulas coletivas",
    tagline: "Glúteos, abdômen e pernas",
    description: "Fortalecimento e tonificação de inferiores e core, com foco em postura e equilíbrio.",
    photo: "16",
    intensity: 2,
    slots: [...s([1, 3], "18:15"), ...s([2, 4, 5], "07:50")],
  },
  {
    slug: "funcional",
    name: "Funcional Cárdio",
    category: "Aulas coletivas",
    tagline: "Força + cardio no mesmo treino",
    description: "Circuitos que melhoram resistência, agilidade e coordenação.",
    photo: "16",
    intensity: 3,
    slots: [...s([1, 3], "19:00"), ...s([2, 4, 5], "08:30")],
  },
  {
    slug: "power-jump",
    name: "Power Jump",
    category: "Aulas coletivas",
    tagline: "Mini-trampolim de alta queima",
    description: "Aula intensa e divertida, com baixo impacto nas articulações.",
    photo: "16",
    intensity: 3,
    slots: s([1, 3], "19:45"),
  },
  {
    slug: "step",
    name: "Step",
    category: "Aulas coletivas",
    tagline: "Cardio coreografado na plataforma",
    description: "Trabalha pernas e glúteos e melhora o condicionamento cardiovascular.",
    photo: "16",
    intensity: 2,
    slots: [...s([1, 3], "18:30", "19:00"), ...s([2, 4, 5], "09:00")],
  },
  {
    slug: "aerobic",
    name: "Aerobic",
    category: "Aulas coletivas",
    tagline: "Ginástica aeróbica clássica",
    description: "Movimentos coreografados para resistência e gasto calórico.",
    photo: "16",
    intensity: 2,
    slots: s([1, 3], "19:30"),
  },
  {
    slug: "zumba",
    name: "Zumba",
    category: "Aulas coletivas",
    tagline: "Ritmos latinos",
    description: "Salsa, merengue e reggaeton numa festa fitness.",
    photo: "16",
    intensity: 2,
    slots: s([4], "19:30"),
  },
  {
    slug: "alongamento",
    name: "Alongamento",
    category: "Aulas coletivas",
    tagline: "Mobilidade e recuperação",
    description: "Flexibilidade, prevenção de lesões e alívio de tensão.",
    photo: "16",
    intensity: 1,
    slots: s([2, 4, 5], "18:00"),
  },
  {
    slug: "abdominal",
    name: "Abdominal",
    category: "Aulas coletivas",
    tagline: "Core forte",
    description: "Fortalecimento do abdômen e estabilidade do tronco.",
    photo: "16",
    intensity: 2,
    slots: s([2, 4, 5], "18:30"),
  },
  {
    slug: "ritbox",
    name: "Ritbox",
    category: "Aulas coletivas",
    tagline: "Boxe no ritmo da música",
    description: "Golpes de boxe com música: coordenação, reflexo e muita queima.",
    photo: "13",
    intensity: 3,
    slots: [],
  },
];

export const faqs = [
  {
    q: "Qual o horário de funcionamento da Companhia Athenas?",
    a: "Segunda a sexta das 05:00 às 22:00 e sábado das 07:00 às 14:00. Aos domingos a academia fica fechada.",
  },
  {
    q: "Onde fica a academia?",
    a: "Na QR 208 Conjunto 1, Lote 1, Samambaia Norte, Brasília - DF, CEP 72316-510. É o prédio de vidro com a fachada da Companhia Athenas Fitness.",
  },
  {
    q: "Posso fazer uma aula experimental?",
    a: "Sim. Chame a gente no WhatsApp, diga qual modalidade quer conhecer e agendamos o melhor horário para você.",
  },
  {
    q: "A academia tem piscina?",
    a: "Tem. A piscina é coberta, com aulas de natação para bebês, crianças e adultos e turmas de hidroginástica.",
  },
  {
    q: "Quais aulas coletivas a academia oferece?",
    a: "Fit Dance, Power Hit, Power G.A.P., Funcional, Power Jump, Step, Aerobic, Zumba, Alongamento, Abdominal e Ritbox. Veja a grade com dias e horários aqui no site.",
  },
  {
    q: "A Companhia Athenas aceita Gympass / Wellhub?",
    a: "Sim, a academia é parceira Wellhub (antigo Gympass). Confirme na recepção quais modalidades estão liberadas no seu plano.",
  },
];

/** Cards da seção Modalidades, todos com foto real. As aulas coletivas viram um card só. */
export type Program = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  photo: string;
  photoAlt: string;
  /** Texto de horário quando não há grade fixa. */
  hours?: string;
  /** Aulas da grade que entram neste card. */
  classes?: string[];
};

export const programs: Program[] = [
  {
    slug: "musculacao",
    name: "Musculação",
    tagline: "Força, hipertrofia e emagrecimento",
    description:
      "Salão amplo com aparelhos de linha profissional, peso livre e professores acompanhando o seu treino.",
    photo: "22",
    photoAlt: "Salão de musculação da Companhia Athenas com crossover e aparelhos",
    hours: "Livre durante todo o funcionamento: seg a sex 05:00–22:00, sáb 07:00–14:00.",
  },
  {
    slug: "cardio",
    name: "Cardio",
    tagline: "Esteiras, bikes, elípticos e escadas",
    description: "Área de cardio com vista para a rua e equipamentos para aquecer, queimar e ganhar fôlego.",
    photo: "15",
    photoAlt: "Área de cardio com elípticos e escadas da Companhia Athenas",
    hours: "Livre durante todo o funcionamento: seg a sex 05:00–22:00, sáb 07:00–14:00.",
  },
  {
    slug: "natacao",
    name: "Natação",
    tagline: "Bebê, infantil e adulto",
    description: "Piscina coberta, turmas por nível e idade. Da adaptação do bebê à técnica dos quatro estilos.",
    photo: "9",
    photoAlt: "Piscina coberta da Companhia Athenas com raias",
    hours: "Turmas em vários horários. Fale com a gente para encontrar a sua.",
  },
  {
    slug: "hidroginastica",
    name: "Hidroginástica",
    tagline: "Condicionamento sem impacto",
    description:
      "Exercício na água que protege as articulações. Indicada para todas as idades, gestantes e quem está voltando a treinar.",
    photo: "39",
    photoAlt: "Aula de hidroginástica na piscina da Companhia Athenas",
    hours: "Turmas em vários horários. Fale com a gente para encontrar a sua.",
  },
  {
    slug: "aulas-coletivas",
    name: "Aulas coletivas",
    tagline: "10 aulas por semana para todos os gostos",
    description:
      "Fit Dance, Power Hit, Power G.A.P., Funcional, Power Jump, Step, Aerobic, Zumba, Alongamento e Abdominal em sala própria.",
    photo: "16",
    photoAlt: "Sala de aulas coletivas da Companhia Athenas com piso de madeira",
    classes: ["fit-dance", "power-hit", "power-gap", "funcional", "power-jump", "step", "aerobic", "zumba", "alongamento", "abdominal"],
  },
  {
    slug: "ritbox",
    name: "Ritbox e lutas",
    tagline: "Ringue, sacos e muita energia",
    description: "Espaço de lutas com ringue e sacos de pancada. No Ritbox, golpes de boxe no ritmo da música.",
    photo: "13",
    photoAlt: "Espaço de lutas com sacos de pancada e ringue da Companhia Athenas",
    hours: "Consulte os horários das turmas.",
  },
];

export const steps = [
  { title: "Chame no WhatsApp", text: "Diga seu objetivo e a modalidade que quer conhecer." },
  { title: "Agende sua aula experimental", text: "Escolhemos juntos o melhor dia e horário para você." },
  { title: "Venha treinar", text: "Traga roupa confortável, tênis e garrafinha. O professor te recebe." },
];
