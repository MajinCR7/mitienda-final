import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

const policies: Record<string, { title: string; body: string[] }> = {
  envios: {
    title: "Envíos y entregas",
    body: [
      "Realizamos envíos a toda Colombia mediante transportadoras aliadas. Los tiempos de entrega varían entre 1 y 5 días hábiles dependiendo de la ciudad de destino.",
      "Para envíos locales en la ciudad ofrecemos entrega el mismo día (sujeto a disponibilidad y horario de pedido antes de las 12:00 m).",
      "El costo de envío se calcula al confirmar el pedido por WhatsApp. Para pedidos superiores a $250.000 el envío es gratuito a nivel nacional.",
      "Cada pedido es empacado cuidadosamente para garantizar que llegue en perfectas condiciones.",
    ],
  },
  devoluciones: {
    title: "Cambios y devoluciones",
    body: [
      "Por la naturaleza personalizada y artesanal de nuestros productos, no realizamos devoluciones de dinero, salvo en casos de defecto de fabricación.",
      "Los cambios deben solicitarse dentro de los 3 días siguientes a la recepción del pedido, presentando evidencia fotográfica del producto.",
      "Los productos personalizados (con grabados, nombres o frases específicas) no admiten cambios.",
      "Cualquier inquietud, escríbenos por WhatsApp y te ayudaremos a resolverla.",
    ],
  },
  terminos: {
    title: "Términos & condiciones",
    body: [
      "Al realizar un pedido en AR7E Personalizado aceptas nuestros términos de servicio.",
      "Los precios están expresados en pesos colombianos (COP) y pueden modificarse sin previo aviso.",
      "La confirmación de un pedido se realiza una vez verificado el pago correspondiente.",
      "Las imágenes son de referencia; pueden existir leves variaciones de color o presentación por la naturaleza artesanal de cada pieza.",
    ],
  },
  privacidad: {
    title: "Privacidad",
    body: [
      "En AR7E Personalizado respetamos tu privacidad. Los datos que compartes (nombre, dirección, teléfono) se utilizan únicamente para gestionar tu pedido.",
      "No compartimos tu información con terceros, salvo cuando sea estrictamente necesario para procesar el envío.",
      "Puedes solicitar la eliminación de tus datos en cualquier momento escribiéndonos por WhatsApp.",
      "Toda la comunicación se realiza por canales seguros y cifrados.",
    ],
  },
};

export const Route = createFileRoute("/politicas/$slug")({
  loader: ({ params }) => {
    const policy = policies[params.slug];
    if (!policy) throw notFound();
    return { policy };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.policy.title} · AR7E` },
          { name: "description", content: loaderData.policy.body[0] },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <h1 className="font-display text-3xl">Política no encontrada</h1>
      <Link to="/" className="text-accent underline mt-4 inline-block">Volver al inicio</Link>
    </div>
  ),
  component: PolicyPage,
});

function PolicyPage() {
  const { policy } = Route.useLoaderData();
  return (
    <section className="pt-28 md:pt-36 pb-24 max-w-3xl mx-auto px-5 md:px-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-8">
        <ChevronLeft className="w-4 h-4" /> Inicio
      </Link>
      <h1 className="font-display text-4xl md:text-5xl text-primary mb-8">{policy.title}</h1>
      <div className="prose prose-stone max-w-none space-y-5 text-foreground/85 leading-relaxed">
        {policy.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
