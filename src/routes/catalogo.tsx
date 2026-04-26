import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/products";
import { InterestCarousel } from "@/components/InterestCarousel";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo · AR7E Personalizado" },
      { name: "description", content: "Explora todas las categorías: gusticos, detalles, personalizados, ramos eternos y más." },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 text-center px-5">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Explora</p>
        <h1 className="font-display text-5xl md:text-6xl text-primary">Catálogo</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Descubre nuestras colecciones cuidadosamente curadas.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to="/categoria/$slug"
            params={{ slug: cat.slug }}
            className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={cat.cover}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
              <h2 className="font-display text-2xl">{cat.name}</h2>
              <p className="text-xs uppercase tracking-[0.25em] opacity-90 mt-1">{cat.tagline}</p>
            </div>
          </Link>
        ))}
      </section>
      <InterestCarousel />
    </>
  );
}
