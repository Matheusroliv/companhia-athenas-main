import { modalities } from "@/data/site";

const Marquee = () => {
  const items = [...modalities.map((m) => m.name), "Wellhub / Gympass"];
  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-primary py-4 text-primary-foreground" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-3xl tracking-wide">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item} <span className="text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
