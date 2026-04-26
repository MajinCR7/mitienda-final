import { Link } from "@tanstack/react-router";
import { products, formatCOP } from "@/data/products";

export function InterestCarousel() {
  const list = [...products, ...products];
  return (
    <section className="py-16 md:py-20 bg-gradient-warm overflow-hidden border-y border-border">
      <div className="text-center mb-10 px-5">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Descubre más</p>
        <h2 className="font-display text-3xl md:text-4xl text-primary">
          También te puede interesar
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee-slow w-max">
          {list.map((p, i) => (
            <Link
              key={`${p.id}-${i}`}
              to="/producto/$id"
              params={{ id: p.id }}
              className="w-56 shrink-0 bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.images[0]} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-display text-base text-primary line-clamp-1">{p.name}</h3>
                <p className="text-sm text-accent mt-1">{formatCOP(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
