import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Me chamo ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    );
    window.open(`https://wa.me/5561982857467?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-primary mb-4">
              ENTRE EM CONTATO
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Venha conhecer nossa estrutura e começar sua transformação
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">
                      Qr 208 Cj 1 - s/n Lt 1<br />
                      Samambaia Norte, Brasília - DF<br />
                      CEP: 72316-510
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+5561982857467"
                        className="hover:text-primary transition-colors"
                      >
                        (61) 98285-7467
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:academiaathenas@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        academiaathenas@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Horário</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 5h às 22h30<br />
                      Sábado: 7h às 14h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </ScrollReveal>

          {/* Google Maps */}
          <ScrollReveal direction="right">
            <div className="lg:sticky lg:top-24 h-fit">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4!2d-48.1234567!3d-15.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b5c5c5c5c5c%3A0x8b776692d3a701ed!2sQr%20208%20Cj%201%20-%20Samambaia%20Norte%2C%20Bras%C3%ADlia%20-%20DF%2C%2072316-510!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Academia Athenas"
                ></iframe>
              </CardContent>
            </Card>
            <Button
              onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Qr+208+Cj+1+Samambaia+Norte+Brasília+DF+72316-510", "_blank")}
              className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              size="lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              VER MAPA AMPLIADO
            </Button>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
