import { Link } from "@tanstack/react-router";
import { categories } from "@/data/products";
import { Marquee } from "@/components/Marquee";

export function CategoryCarousel() {
  return (
    <>
      <Marquee />
      <section id="catalogo" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10 md:mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Nuestra colección</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">Nuestro catálogo</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Cada categoría está pensada para crear momentos únicos e inolvidables.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-3 gap-3 sm:gap-5 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/categoria/$slug"
              params={{ slug: cat.slug }}
              className="group flex flex-col bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={cat.cover}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4 text-center">
                <h3 className="font-display text-sm sm:text-base md:text-lg text-primary leading-tight">{cat.name}</h3>
                <p className="hidden sm:block text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
