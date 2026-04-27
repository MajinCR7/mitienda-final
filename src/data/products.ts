// Categorías
import catGusticos from "@/assets/categorias/gusticos.jpg";
import catDetalles from "@/assets/categorias/detalles.jpg";
import catPersonalizados from "@/assets/categorias/personalizados.jpg";
import catRamos from "@/assets/categorias/ramos-rosas-eternas.jpg";
import catPapel from "@/assets/categorias/papel-coreano.jpg";
import catCintas from "@/assets/categorias/cintas-satin.jpg";
import catFloresMayor from "@/assets/categorias/flores-eternas-mayor.jpg";
import catTopper from "@/assets/categorias/topper.jpg";
import catCajas from "@/assets/categorias/cajas.jpg";

// Productos - Gusticos
import gusticos1 from "@/assets/productos/gusticos/gusticos-1.jpg";
import gusticos2 from "@/assets/productos/gusticos/gusticos-2.jpg";
import gusticos3 from "@/assets/productos/gusticos/gusticos-3.jpg";
import gusticos4 from "@/assets/productos/gusticos/gusticos-4.jpg";

// Productos - Detalles
import detalles1 from "@/assets/productos/detalles/detalles-1.jpg";
import detalles2 from "@/assets/productos/detalles/detalles-2.jpg";
import detalles3 from "@/assets/productos/detalles/detalles-3.jpg";
import detalles4 from "@/assets/productos/detalles/detalles-4.jpg";

// Productos - Personalizados
import personalizados1 from "@/assets/productos/personalizados/personalizados-1.jpg";
import personalizados2 from "@/assets/productos/personalizados/personalizados-2.jpg";
import personalizados3 from "@/assets/productos/personalizados/personalizados-3.jpg";
import personalizados4 from "@/assets/productos/personalizados/personalizados-4.jpg";
import personalizados5 from "@/assets/productos/personalizados/personalizados-4.jpg";

// Productos - Ramos rosas eternas
import ramos1 from "@/assets/productos/ramos-rosas-eternas/ramos-rosas-eternas-1.jpg";
import ramos2 from "@/assets/productos/ramos-rosas-eternas/ramos-rosas-eternas-2.jpg";
import ramos3 from "@/assets/productos/ramos-rosas-eternas/ramos-rosas-eternas-3.jpg";
import ramos4 from "@/assets/productos/ramos-rosas-eternas/ramos-rosas-eternas-4.jpg";

// Productos - Papel coreano
import papel1 from "@/assets/productos/papel-coreano/papel-coreano-1.jpg";
import papel2 from "@/assets/productos/papel-coreano/papel-coreano-2.jpg";
import papel3 from "@/assets/productos/papel-coreano/papel-coreano-3.jpg";
import papel4 from "@/assets/productos/papel-coreano/papel-coreano-4.jpg";

// Productos - Cintas satín
import cintas1 from "@/assets/productos/cintas-satin/cintas-satin-1.jpg";
import cintas2 from "@/assets/productos/cintas-satin/cintas-satin-2.jpg";
import cintas3 from "@/assets/productos/cintas-satin/cintas-satin-3.jpg";
import cintas4 from "@/assets/productos/cintas-satin/cintas-satin-4.jpg";

// Productos - Flores eternas al por mayor
import floresMayor1 from "@/assets/productos/flores-eternas-mayor/flores-eternas-mayor-1.jpg";
import floresMayor2 from "@/assets/productos/flores-eternas-mayor/flores-eternas-mayor-2.jpg";
import floresMayor3 from "@/assets/productos/flores-eternas-mayor/flores-eternas-mayor-3.jpg";
import floresMayor4 from "@/assets/productos/flores-eternas-mayor/flores-eternas-mayor-4.jpg";

// Productos - Topper
import topper1 from "@/assets/productos/topper/topper-1.jpg";
import topper2 from "@/assets/productos/topper/topper-2.jpg";
import topper3 from "@/assets/productos/topper/topper-3.jpg";
import topper4 from "@/assets/productos/topper/topper-4.jpg";

// Productos - Cajas
import cajas1 from "@/assets/productos/cajas/cajas-1.jpg";
import cajas2 from "@/assets/productos/cajas/cajas-2.jpg";
import cajas3 from "@/assets/productos/cajas/cajas-3.jpg";
import cajas4 from "@/assets/productos/cajas/cajas-4.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  categorySlug: string;
};

export type Category = {
  slug: string;
  name: string;
  cover: string;
  tagline: string;
};

export const categories: Category[] = [
  { slug: "gusticos", name: "Gusticos", cover: catGusticos, tagline: "Antojos para consentir" },
  { slug: "detalles", name: "Detalles", cover: catDetalles, tagline: "Pequeños grandes gestos" },
  { slug: "personalizados", name: "Personalizados", cover: catPersonalizados, tagline: "Hechos para ti" },
  { slug: "ramos-rosas-eternas", name: "Ramos de rosas eternas", cover: catRamos, tagline: "Amor que perdura" },
  { slug: "papel-coreano", name: "Papel coreano", cover: catPapel, tagline: "Envoltura premium" },
  { slug: "cintas-satin", name: "Cintas de satín", cover: catCintas, tagline: "Acabados de lujo" },
  { slug: "flores-eternas-mayor", name: "Flores eternas al por mayor", cover: catFloresMayor, tagline: "Para tu negocio" },
  { slug: "topper", name: "Topper", cover: catTopper, tagline: "El detalle final" },
  { slug: "cajas", name: "Cajas", cover: catCajas, tagline: "Empaque elegante" },
];

const make = (
  categorySlug: string,
  items: { id: string; name: string; price: number; description: string; images: string[] }[]
): Product[] => items.map((p) => ({ ...p, categorySlug }));

export const products: Product[] = [
  ...make("gusticos", [
    { id: "gusticos-1", name: "Caja Antojo Dulce", price: 65000, description: "Selección de chocolates artesanales y galletas finas.", images: [gusticos1] },
    { id: "gusticos-2", name: "Cesta Café & Cacao", price: 89000, description: "Café de origen, bombones y dulces premium.", images: [gusticos2] },
    { id: "gusticos-3", name: "Snack Box Romántica", price: 55000, description: "Mix de snacks gourmet en empaque vintage.", images: [gusticos3] },
    { id: "gusticos-4", name: "Picnic Vintage", price: 120000, description: "Cesta completa para una tarde inolvidable.", images: [gusticos4] },
  ]),
  ...make("detalles", [
    { id: "detalles-1", name: "Mini Caja Sorpresa", price: 35000, description: "Pequeño detalle con flor seca y cinta de satín.", images: [detalles1] },
    { id: "detalles-2", name: "Sobre Romántico", price: 22000, description: "Tarjeta artesanal con dedicatoria personalizada.", images: [detalles2] },
    { id: "detalles-3", name: "Detalle Aroma", price: 48000, description: "Vela de soya y jabón artesanal.", images: [detalles3] },
    { id: "detalles-4", name: "Mini Bouquet Seco", price: 42000, description: "Ramillete de flores secas en kraft.", images: [detalles4] },
  ]),
  ...make("personalizados", [
    { id: "personalizados-1", name: "Caja Grabada en Madera", price: 95000, description: "Caja personalizada con nombre o frase grabada.", images: [personalizados1] },
    { id: "personalizados-2", name: "Taza con Nombre", price: 38000, description: "Taza cerámica personalizada en empaque elegante.", images: [personalizados2] },
    { id: "personalizados-3", name: "Cuadro Romántico", price: 75000, description: "Lámina personalizada con tipografía vintage.", images: [personalizados3] },
    { id: "personalizados-4", name: "Llavero a la Medida", price: 28000, description: "Llavero en cuero con grabado láser.", images: [personalizados4] },
    { id: "personalizados-5", name: "Niño lindo", price: 35000, description: "Un gustico de mi esposa y mio.", images: [personalizados5] },
  ]),
  ...make("ramos-rosas-eternas", [
    { id: "ramos-rosas-eternas-1", name: "Ramo Eterno Crema", price: 180000, description: "12 rosas preservadas en envoltura kraft.", images: [ramos1] },
    { id: "ramos-rosas-eternas-2", name: "Ramo Café Vintage", price: 195000, description: "Rosas eternas tonos coffee con satín.", images: [ramos2] },
    { id: "ramos-rosas-eternas-3", name: "Mini Ramo Eterno", price: 95000, description: "6 rosas preservadas, perfectas para regalar.", images: [ramos3] },
    { id: "ramos-rosas-eternas-4", name: "Ramo XL Romántico", price: 290000, description: "24 rosas eternas con acabado premium.", images: [ramos4] },
  ]),
  ...make("papel-coreano", [
    { id: "papel-coreano-1", name: "Papel Coreano Beige", price: 12000, description: "Pliego premium acabado mate.", images: [papel1] },
    { id: "papel-coreano-2", name: "Papel Coreano Café", price: 12000, description: "Pliego tono coffee, ideal para envoltura.", images: [papel2] },
    { id: "papel-coreano-3", name: "Pack 10 Pliegos", price: 95000, description: "Surtido en tonos beige y coffee.", images: [papel3] },
    { id: "papel-coreano-4", name: "Papel Coreano Crema", price: 12000, description: "Pliego color crema vainilla.", images: [papel4] },
  ]),
  ...make("cintas-satin", [
    { id: "cintas-satin-1", name: "Cinta Satín Crema 2.5cm", price: 8000, description: "Rollo de 10m, acabado brillante.", images: [cintas1] },
    { id: "cintas-satin-2", name: "Cinta Satín Café 4cm", price: 12000, description: "Rollo de 10m tono coffee.", images: [cintas2] },
    { id: "cintas-satin-3", name: "Cinta Doble Faz Beige", price: 15000, description: "Rollo de 10m doble faz premium.", images: [cintas3] },
    { id: "cintas-satin-4", name: "Pack Cintas Surtidas", price: 45000, description: "5 rollos en tonos beige y café.", images: [cintas4] },
  ]),
  ...make("flores-eternas-mayor", [
    { id: "flores-eternas-mayor-1", name: "Caja 25 Rosas Eternas", price: 350000, description: "Rosas preservadas grado A para mayoristas.", images: [floresMayor1] },
    { id: "flores-eternas-mayor-2", name: "Caja 50 Rosas Eternas", price: 650000, description: "Pack mayorista tonos crema y café.", images: [floresMayor2] },
    { id: "flores-eternas-mayor-3", name: "Hortensia Preservada", price: 85000, description: "Cabeza de hortensia preservada por unidad.", images: [floresMayor3] },
    { id: "flores-eternas-mayor-4", name: "Pack Flores Mixtas", price: 220000, description: "Surtido para arreglos profesionales.", images: [floresMayor4] },
  ]),
  ...make("topper", [
    { id: "topper-1", name: "Topper Caligrafía Dorada", price: 25000, description: "Topper personalizable con nombre.", images: [topper1] },
    { id: "topper-2", name: "Topper Feliz Cumpleaños", price: 22000, description: "Diseño vintage en madera.", images: [topper2] },
    { id: "topper-3", name: "Topper Romántico", price: 28000, description: "Para bodas y aniversarios.", images: [topper3] },
    { id: "topper-4", name: "Topper Mini Pack", price: 45000, description: "Set de 3 toppers decorativos.", images: [topper4] },
  ]),
  ...make("cajas", [
    { id: "cajas-1", name: "Caja Premium Beige", price: 32000, description: "Caja rígida con cinta de satín.", images: [cajas1] },
    { id: "cajas-2", name: "Caja Kraft Vintage", price: 26000, description: "Caja kraft con detalle natural.", images: [cajas2] },
    { id: "cajas-3", name: "Caja Redonda Café", price: 38000, description: "Caja redonda tono coffee con tapa.", images: [cajas3] },
    { id: "cajas-4", name: "Set 3 Cajas Apilables", price: 85000, description: "Trío de cajas en gradiente beige.", images: [cajas4] },
  ]),
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);

export const formatCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

export const WHATSAPP_PHONE = "573012832055";
