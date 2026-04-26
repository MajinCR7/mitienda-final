import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/store/cart";
import { formatCOP, WHATSAPP_PHONE } from "@/data/products";

export function CartPanel() {
  const { isOpen, close, items, total, setQty, remove, clear } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const checkout = () => {
    if (items.length === 0) return;
    const lines = items
      .map((i) => `• ${i.product.name} (x${i.quantity}) — ${formatCOP(i.product.price * i.quantity)}`)
      .join("\n");
    const msg = `Hola buen día, quiero realizar el siguiente pedido:\n\n${lines}\n\nTotal: ${formatCOP(total)}\n\n¿Está disponible?`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    clear();
    close();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-coffee-dark/40 backdrop-blur-sm"
        onClick={close}
      />
      <aside className="absolute top-0 right-0 h-full w-full sm:w-[420px] bg-background shadow-elegant flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-display text-2xl text-primary">Tu carrito</h2>
          <button onClick={close} className="p-2 rounded-full hover:bg-secondary" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground gap-3">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <p className="font-display text-xl text-primary">Tu carrito está vacío</p>
              <p className="text-sm">Agrega productos del catálogo para comenzar</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.product.id} className="flex gap-3 p-3 rounded-xl bg-card shadow-soft">
                  <img
                    src={it.product.images[0]}
                    alt={it.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-primary truncate">{it.product.name}</h3>
                    <p className="text-xs text-muted-foreground">{formatCOP(it.product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => setQty(it.product.id, it.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center"
                        aria-label="Disminuir"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm">{it.quantity}</span>
                      <button
                        onClick={() => setQty(it.product.id, it.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center"
                        aria-label="Aumentar"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => remove(it.product.id)}
                        className="ml-auto p-1.5 text-muted-foreground hover:text-destructive"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-primary self-center whitespace-nowrap">
                    {formatCOP(it.product.price * it.quantity)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-5 space-y-4 bg-card">
          <div className="flex items-baseline justify-between">
            <span className="uppercase tracking-[0.25em] text-xs text-muted-foreground">Total</span>
            <span className="font-display text-2xl text-primary">{formatCOP(total)}</span>
          </div>
          <button
            onClick={checkout}
            disabled={items.length === 0}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-full font-medium uppercase tracking-[0.18em] text-sm shadow-soft hover:bg-coffee-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageCircle className="w-4 h-4" />
            Finalizar pedido
          </button>
          <p className="text-[11px] text-center text-muted-foreground">
            Te conectamos por WhatsApp para confirmar tu pedido
          </p>
        </div>
      </aside>
    </div>
  );
}
