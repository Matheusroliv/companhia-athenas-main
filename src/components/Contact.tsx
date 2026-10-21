import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { business, fmtTime, mapsEmbed, mapsLink, openingHours, whatsapp } from "@/data/site";
import { useOpenStatus } from "@/hooks/use-open-status";
import ScrollReveal from "./ScrollReveal";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const Contact = () => {
  const status = useOpenStatus();
  const { address } = business;

  return (
    <section id="contato" className="border-t border-foreground/10 bg-secondary/40 py-24 md:py-32">
      <div className="container px-4">
        <ScrollReveal>
          <p className="eyebrow">Como chegar</p>
          <h2 className="section-title mt-4">
            Te esperamos na <span className="text-primary">QR 208</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <ScrollReveal className="space-y-5">
            <div className="glass rounded-3xl p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl tracking-wide">Horário de funcionamento</h3>
              </div>
              <p className={`mt-1 text-sm font-medium ${status.open ? "text-[hsl(var(--success))]" : "text-foreground/60"}`}>
                {status.label}
              </p>
              <dl className="mt-5 divide-y divide-foreground/10">
                {openingHours.map((h) => {
                  const isToday = h.days.includes(status.day);
                  return (
                    <div key={h.label} className={`flex justify-between py-3 ${isToday ? "font-semibold text-primary" : ""}`}>
                      <dt>
                        {h.label}
                        {isToday && <span className="ml-2 text-xs uppercase tracking-widest">hoje</span>}
                      </dt>
                      <dd className="tabular-nums">
                        {h.open !== undefined && h.close !== undefined ? `${fmtTime(h.open)} às ${fmtTime(h.close)}` : "Fechado"}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <address className="glass space-y-4 rounded-3xl p-7 not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  {address.street}
                  <br />
                  {address.district}, {address.city} - {address.region}, CEP {address.zip}
                </span>
              </p>
              <a href={`tel:${business.phone}`} className="flex gap-3 hover:text-primary">
                <Phone className="h-5 w-5 shrink-0 text-primary" /> {business.phoneLabel}
              </a>
              <a href={`mailto:${business.email}`} className="flex gap-3 break-all hover:text-primary">
                <Mail className="h-5 w-5 shrink-0 text-primary" /> {business.email}
              </a>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="btn-whats flex-1">
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1">
                  <InstagramIcon className="h-4 w-4" /> Instagram
                </a>
              </div>
              <div className="flex">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1">
                  <Navigation className="h-4 w-4" /> Traçar rota
                </a>
              </div>
            </address>
          </ScrollReveal>

          <ScrollReveal delay={150} className="min-h-[360px]">
            <iframe
              src={mapsEmbed}
              title="Mapa: Companhia Athenas em Samambaia Norte"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full rounded-3xl border border-foreground/10 grayscale-[0.6] invert-[0.9] hue-rotate-180"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
