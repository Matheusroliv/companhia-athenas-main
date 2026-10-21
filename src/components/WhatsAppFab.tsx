import { whatsapp } from "@/data/site";
import { WhatsAppIcon } from "./icons";

const WhatsAppFab = () => (
  <a
    href={whatsapp()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com a Companhia Athenas no WhatsApp"
    className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[hsl(var(--success-strong))] text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] transition-transform hover:scale-110"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default WhatsAppFab;
