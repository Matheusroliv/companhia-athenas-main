import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table";
import ScrollReveal from "./ScrollReveal";

const musculacao = [
  { label: "Anual (Recorrente)", price: "R$ 139,90" },
  { label: "Anual (Crédito)", price: "R$ 129,90" },
  { label: "Semestral (Crédito 6x)", price: "R$ 149,90" },
  { label: "Mensal", price: "R$ 169,90" },
  { label: "Avaliação Física", price: "R$ 69,90" },
  { label: "Taxa de Matrícula", price: "R$ 59,90" },
];

const musculacaoPiscina = [
  { label: "Anual 2x (Recorrente)", price: "R$ 239,90" },
  { label: "Anual 3x (Recorrente)", price: "R$ 249,90" },
  { label: "Avaliação Física", price: "R$ 69,90" },
  { label: "Taxa de Matrícula", price: "R$ 59,90" },
];

const natacaoHidro = [
  { label: "Recorrente (1x na semana) 10x de", price: "R$ 155,88" },
  { label: "Recorrente (2x na semana) 10x de", price: "R$ 203,88" },
  { label: "Recorrente (3x na semana) 10x de", price: "R$ 215,88" },
  { label: "Anual (1x na semana)", price: "R$ 129,90" },
  { label: "Anual (2x na semana)", price: "R$ 169,90" },
  { label: "Anual (3x na semana)", price: "R$ 179,90" },
  { label: "Semestral (1x na semana)", price: "R$ 159,90" },
  { label: "Semestral (2x na semana)", price: "R$ 199,90" },
  { label: "Semestral (3x na semana)", price: "R$ 209,90" },
  { label: "Mensal (1x na semana)", price: "R$ 179,90" },
  { label: "Mensal (2x na semana)", price: "R$ 219,90" },
  { label: "Mensal (3x na semana)", price: "R$ 229,90" },
  { label: "Taxa de Matrícula", price: "R$ 59,90" },
  { label: "Avaliação Física", price: "R$ 69,90" },
];

 

const Pricing = () => {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-4 font-normal">VALORES</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Consulte nossos valores por modalidade. Horários e preços podem sofrer alterações.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <Tabs defaultValue="musculacao" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-3 gap-2 bg-secondary">
            <TabsTrigger value="musculacao">Musculação</TabsTrigger>
            <TabsTrigger value="musculacaoPiscina">Musculação + Piscina</TabsTrigger>
            <TabsTrigger value="natacaoHidro">Natação / Hidroginástica</TabsTrigger>
          </TabsList>

          <TabsContent value="musculacao">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary font-normal">Musculação</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plano</TableHead>
                      <TableHead className="text-right">Preço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {musculacao.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{item.label}</TableCell>
                        <TableCell className="text-right font-semibold">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableCaption>
                    Taxa de Matrícula: R$ 59,90 • Avaliação Física: R$ 69,90 • Valores sujeitos a alterações.
                  </TableCaption>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="musculacaoPiscina">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary font-normal">Musculação + Piscina</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plano</TableHead>
                      <TableHead className="text-right">Preço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {musculacaoPiscina.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{item.label}</TableCell>
                        <TableCell className="text-right font-semibold">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableCaption>
                    Taxa de Matrícula: R$ 59,90 • Avaliação Física: R$ 69,90 • Valores sujeitos a alterações.
                  </TableCaption>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="natacaoHidro">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary font-normal">Natação / Hidroginástica</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plano</TableHead>
                      <TableHead className="text-center">1x/sem</TableHead>
                      <TableHead className="text-center">2x/sem</TableHead>
                      <TableHead className="text-center">3x/sem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Recorrente (10x)</TableCell>
                      <TableCell className="text-center font-semibold">R$ 155,88</TableCell>
                      <TableCell className="text-center font-semibold">R$ 203,88</TableCell>
                      <TableCell className="text-center font-semibold">R$ 215,88</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Anual</TableCell>
                      <TableCell className="text-center font-semibold">R$ 129,90</TableCell>
                      <TableCell className="text-center font-semibold">R$ 169,90</TableCell>
                      <TableCell className="text-center font-semibold">R$ 179,90</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Semestral</TableCell>
                      <TableCell className="text-center font-semibold">R$ 159,90</TableCell>
                      <TableCell className="text-center font-semibold">R$ 199,90</TableCell>
                      <TableCell className="text-center font-semibold">R$ 209,90</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mensal</TableCell>
                      <TableCell className="text-center font-semibold">R$ 179,90</TableCell>
                      <TableCell className="text-center font-semibold">R$ 219,90</TableCell>
                      <TableCell className="text-center font-semibold">R$ 229,90</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption>
                    Recorrente: 10 parcelas • Taxa de Matrícula: R$ 59,90 • Avaliação Física: R$ 69,90 • Valores sujeitos a alterações.
                  </TableCaption>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/5561982857467?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20ou%20saber%20mais%20sobre%20os%20valores."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 text-white hover:bg-green-700 font-bold" size="lg">
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M20.52 3.482A11.87 11.87 0 0012.004 0C5.392 0 .078 5.314.078 11.926c0 2.101.55 4.154 1.594 5.96L0 24l6.3-1.645a11.837 11.837 0 005.704 1.459h.006c6.612 0 11.926-5.314 11.926-11.927a11.835 11.835 0 00-3.416-8.405zm-8.516 18.96h-.005c-1.94 0-3.84-.52-5.5-1.5l-.395-.234-3.737.976 1-3.65-.258-.374a9.958 9.958 0 01-1.536-5.287c0-5.519 4.49-10.009 10.017-10.009 2.671 0 5.182 1.04 7.07 2.927a9.943 9.943 0 012.94 7.076c-.003 5.52-4.494 10.075-10.596 10.075zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.671.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.476-.883-.787-1.48-1.761-1.653-2.058-.173-.298-.018-.459.13-.607.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.671-1.613-.92-2.207-.242-.58-.487-.5-.671-.51-.173-.01-.371-.011-.57-.011-.198 0-.521.074-.793.372-.273.298-1.04 1.017-1.04 2.48 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.199 5.076 4.487.709.306 1.262.49 1.694.626.712.227 1.36.195 1.872.119.571-.085 1.758-.72 2.006-1.414.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              FALAR NO WHATSAPP
            </Button>
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
