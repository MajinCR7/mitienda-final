import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, MessageCircle, ShoppingBag } from "lucide-react";
import { useRef, useState } from "react";
import type { Product } from "@/data/products";
import { formatCOP, WHATSAPP_PHONE } from "@/data/products";
import { useCart } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIdx((i) => (i + 1) % product.images.length);
  const prev = () => setIdx((i) => (i - 1 + product.images.length) % product.images.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  const orderMsg = `Hola buen día, estoy interesad@ en este artículo: ${product.name}. ¿Está disponible?`;
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(orderMsg)}`;

  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 flex flex-col">
      <div
        className="relative aspect-square overflow-hidden bg-secondary"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {product.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${product.name} ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-primary" : "w-1.5 bg-background/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <Link
          to="/producto/$id"
          params={{ id: product.id }}
          className="font-display text-lg text-primary hover:text-accent transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{product.description}</p>
        <div className="font-display text-xl text-primary">{formatCOP(product.price)}</div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={() => add(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-secondary text-secondary-foreground py-2.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Agregar
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground py-2.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-coffee-dark transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}
