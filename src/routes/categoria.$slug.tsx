import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { getCategory, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { InterestCarousel } from "@/components/InterestCarousel";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { category: cat, products: getProductsByCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} · AR7E Personalizado` },
          { name: "description", content: loaderData.category.tagline },
          { property: "og:title", content: `${loaderData.category.name} · AR7E` },
          { property: "og:description", content: loaderData.category.tagline },
          { property: "og:image", content: loaderData.category.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <h1 className="font-display text-3xl">Categoría no encontrada</h1>
      <Link to="/catalogo" className="text-accent underline mt-4 inline-block">Ver catálogo</Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  return (
    <>
      <section className="pt-28 md:pt-36 pb-10 px-5 md:px-8 max-w-7xl mx-auto">
        <Link to="/catalogo" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-6">
          <ChevronLeft className="w-4 h-4" /> Volver al catálogo
        </Link>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">{category.tagline}</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary">{category.name}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      <InterestCarousel />
    </>
  );
}
