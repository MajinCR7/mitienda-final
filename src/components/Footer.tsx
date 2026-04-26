import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";
import { WHATSAPP_PHONE } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl mb-3">AR7E Personalizado</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Detalles únicos, hechos con amor. Regalos personalizados que enamoran.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-4 opacity-70">Políticas</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/politicas/$slug" params={{ slug: "envios" }} className="hover:text-accent transition-colors">Envíos y entregas</Link></li>
            <li><Link to="/politicas/$slug" params={{ slug: "devoluciones" }} className="hover:text-accent transition-colors">Cambios y devoluciones</Link></li>
            <li><Link to="/politicas/$slug" params={{ slug: "terminos" }} className="hover:text-accent transition-colors">Términos & condiciones</Link></li>
            <li><Link to="/politicas/$slug" params={{ slug: "privacidad" }} className="hover:text-accent transition-colors">Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-4 opacity-70">Contacto</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <a href={`https://wa.me/${WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                301 283 2055
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hola@ar7epersonalizado.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>@ar7epersonalizado</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-4 opacity-70">Dirección</h4>
          <p className="text-sm flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span>Colombia · Atención por WhatsApp y entregas a nivel nacional</span>
          </p>
          <h4 className="text-xs uppercase tracking-[0.3em] mt-8 mb-3 opacity-70">Conócenos</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            Somos un taller artesanal dedicado a transformar emociones en regalos memorables.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} AR7E Personalizado · Hecho con cariño
      </div>
    </footer>
  );
}
