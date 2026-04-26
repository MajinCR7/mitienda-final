const messages = [
  "Envíos a toda Colombia",
  "Personalización gratuita",
  "Empaque premium incluido",
  "Hecho con amor en cada detalle",
  "Atención inmediata por WhatsApp",
];

export function Marquee() {
  const row = [...messages, ...messages, ...messages, ...messages];
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden border-y border-coffee-dark/20">
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {row.map((m, i) => (
          <span key={i} className="mx-8 text-xs uppercase tracking-[0.35em] opacity-90">
            ✦ {m}
          </span>
        ))}
      </div>
    </div>
  );
}
