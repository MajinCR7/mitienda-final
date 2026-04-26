import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { WHATSAPP_PHONE } from "@/data/products";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Regalos personalizados AR7E"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/90" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center animate-fade-in-up">
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-accent mb-6">
          Detalles que enamoran
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary leading-[1.05]">
          AR7E
          <span className="block italic font-light text-coffee mt-1">Personalizado</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-foreground/85 max-w-xl mx-auto leading-relaxed">
          Regalos artesanales, flores eternas y empaques únicos. Cada pieza, hecha con dedicación
          para crear momentos inolvidables.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/catalogo"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] shadow-elegant hover:bg-coffee-dark transition-colors"
          >
            Ver catálogo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hola buen día, me gustaría conocer más sobre sus productos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background/85 backdrop-blur border border-border text-primary px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
