import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, MessageCircle, ShoppingBag, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { getProduct, getCategory, formatCOP, WHATSAPP_PHONE } from "@/data/products";
import { useCart } from "@/store/cart";
import { InterestCarousel } from "@/components/InterestCarousel";

export const Route = createFileRoute("/producto/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product, category: getCategory(product.categorySlug)! };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} · AR7E Personalizado` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.images[0] },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <h1 className="font-display text-3xl">Producto no encontrado</h1>
      <Link to="/catalogo" className="text-accent underline mt-4 inline-block">Ver catálogo</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, category } = Route.useLoaderData();
  const { add, open } = useCart();
  const [idx, setIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const next = () => setIdx((i) => (i + 1) % product.images.length);
  const prev = () => setIdx((i) => (i - 1 + product.images.length) % product.images.length);

  const orderMsg = `Hola buen día, estoy interesad@ en este artículo: ${product.name}. ¿Está disponible?`;
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(orderMsg)}`;

  return (
    <>
      <section className="pt-28 md:pt-36 pb-16 max-w-7xl mx-auto px-5 md:px-8">
        <Link
          to="/categoria/$slug"
          params={{ slug: category.slug }}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> {category.name}
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary shadow-elegant">
            {product.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${product.name} ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/85 backdrop-blur flex items-center justify-center hover:bg-background">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/85 backdrop-blur flex items-center justify-center hover:bg-background">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-8 bg-primary" : "w-2 bg-background/80"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-2">{category.name}</p>
              <h1 className="font-display text-4xl md:text-5xl text-primary">{product.name}</h1>
            </div>
            <p className="font-display text-3xl text-primary">{formatCOP(product.price)}</p>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cantidad</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={() => add(product, qty)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ShoppingBag className="w-4 h-4" /> Agregar al carrito
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-coffee-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Realizar pedido
              </a>
            </div>

            <button
              onClick={open}
              className="text-sm text-accent hover:underline self-start"
            >
              Ver carrito →
            </button>
          </div>
        </div>
      </section>
      <InterestCarousel />
    </>
  );
}
