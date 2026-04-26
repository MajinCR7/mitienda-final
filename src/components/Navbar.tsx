import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/store/cart";

export function Navbar() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl md:text-2xl tracking-wide text-primary">
            AR7E
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Personalizado
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em]">
          <Link to="/" className="hover:text-accent transition-colors" activeOptions={{ exact: true }}>
            Inicio
          </Link>
          <Link to="/catalogo" className="hover:text-accent transition-colors">
            Catálogo
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={open}
            aria-label="Abrir carrito"
            className="relative p-2.5 rounded-full hover:bg-secondary transition-colors"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center shadow-soft">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobile((m) => !m)}
            className="md:hidden p-2.5 rounded-full hover:bg-secondary"
            aria-label="Menú"
          >
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in-up">
          <div className="px-5 py-4 flex flex-col gap-3 text-sm uppercase tracking-[0.2em]">
            <Link to="/" onClick={() => setMobile(false)}>Inicio</Link>
            <Link to="/catalogo" onClick={() => setMobile(false)}>Catálogo</Link>
          </div>
        </div>
      )}
    </header>
  );
}
