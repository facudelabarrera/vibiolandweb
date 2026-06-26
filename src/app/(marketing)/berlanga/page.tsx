import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ComoFuncionaContactForm } from "@/components/sections/ComoFuncionaContactForm";
import { BerlangaFaqAccordion } from "@/components/sections/HigueraAccordions";
import {
  ProjectInfoAccordion,
  type InfoItem,
} from "@/components/sections/ProjectInfoAccordion";

export const metadata: Metadata = {
  title: "vibio.berlanga — Berlanga de Duero, Soria",
  description:
    "Una comunidad para un territorio con mucha historia. Berlanga de Duero, uno de los conjuntos medievales mejor conservados de España.",
};

// ── Accordion icons (same 4 concepts as Higuera) ─────────────────────────────

const ComunidadIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.3" />
    <path d="M2 28c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="28" cy="16" r="3" stroke="currentColor" strokeWidth="1.3" />
    <path d="M34 28c0-3.314-2.686-6-6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const TerritorioIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="20" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="20" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ArquitecturaIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M5 15L18 4l13 11v17H5V15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 32V22h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ImpactoIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 32V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 18C18 12 12 6 6 7c0 6 5 11 12 11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 24C18 18 24 12 30 13c0 6-5 11-12 11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 12C18 7 15 4 11 4c0 4 3 8 7 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Berlanga accordion data ────────────────────────────────────────────────────

const berlangaAccordionItems: InfoItem[] = [
  {
    icon: ComunidadIcon,
    label: "Comunidad",
    content: {
      type: "text-photo",
      subheading: "Una comunidad viva en un pueblo vivo",
      paragraphs: [
        "vibio.berlanga no construye desde cero: entra a formar parte de un lugar que lleva más de mil años habitado. Se implanta en el tejido urbano de Berlanga de Duero, integrándose en su historia, su economía y su vida cotidiana.",
        "En ella conviven familias con hijos, personas mayores que no quieren envejecer solas, profesionales en remoto que buscan arraigo. Lo que los une es la misma voluntad: vivir de otra manera, sin renunciar a nada esencial.",
        "La comunidad se organiza en comisiones donde cada quien participa según su tiempo y sus ganas. Nadie está obligado a más de lo que le apetece.",
      ],
      button: { label: "Ver video", href: "#" },
      photo: "/images/comunidad-nerlanga.png",
      photoAlt: "Comunidad Vibio Berlanga",
    },
  },
  {
    icon: TerritorioIcon,
    label: "Territorio",
    content: {
      type: "text-photo",
      subheading: "Un castillo al horizonte. Un pueblo de verdad.",
      paragraphs: [
        "Berlanga de Duero es uno de los conjuntos medievales mejor conservados de España: su castillo, su colegiata, su muralla y su plaza mayor forman parte del paisaje cotidiano. Un lugar donde la historia no está en los museos, está en la calle.",
        "A dos horas de Madrid y a 45 minutos de Soria, en plenas serranías de la Meseta soriana. Un clima continental con veranos frescos, inviernos nevados y una calidad de luz que recuerda que Castilla no se reduce a un tópico.",
        "Los servicios están: farmacia, médico, bares, colegio, comercio. Y si necesitas más, Almazán queda a 20 minutos.",
      ],
      photo: "/images/berlanga.jpg",
      photoAlt: "Berlanga de Duero, Soria",
    },
  },
  {
    icon: ArquitecturaIcon,
    label: "Arquitectura",
    content: {
      type: "carousel",
      paragraph:
        "Un gran ventanal al sur: el campo castellano, dentro de casa. Madera, tierra y luz —los materiales de siempre— con la eficiencia que exige el tiempo que viene. Casas que en invierno se calientan solas y en verano respiran, con la austeridad y la belleza que tiene lo que está bien hecho.",
      photos: ["/images/arq1.png", "/images/arq2.png", "/images/arq3.png"],
    },
  },
  {
    icon: ImpactoIcon,
    label: "Impacto",
    content: {
      type: "bullets-photo",
      subheading:
        "Un proyecto que cuida el territorio tanto como cuida a las personas",
      lead: "Lo que estamos construyendo:",
      bullets: [
        "280 nuevos árboles (35 especies autóctonas)",
        "Restauración de la vegetación autóctona ribereña",
        "Creación de hábitats para aves y pequeños mamíferos",
        "Comunidad energética con fotovoltaica compartida",
        "Sistema de captación y reutilización del agua de lluvia",
        "Compostaje comunitario",
        "Colaboración con los agricultores del entorno",
        "Empleo local en construcción y mantenimiento",
      ],
      photo: "/images/impacto-berlanga.jpg",
      photoAlt: "Impacto natural en Berlanga de Duero",
    },
  },
];

// ── Casa data (3 typologies for Berlanga) ─────────────────────────────────────

const casas = [
  { name: "Casa Sunita", sqm: "70", image: "/images/sunita1.png", description: "Si sois un par de familias pequeñas, esta tipología es perfecta: juntos pero no revueltos." },
  { name: "Casa Canon", sqm: "90", image: "/images/carson1.jpg", description: "Una composición moderna y eficaz con dos dormitorios en dos plantas con un posible tercer dormitorio en planta baja." },
  { name: "Casa Mollison", sqm: "115", image: "/images/mollison1.jpg", description: "Vivienda amplia para familias grandes. Posibilidad de tener cuatro dormitorios." },
];

const personalizaItems = [
  { label: "Invernadero", image: "/images/invernadero.png" },
  { label: "Tarima", image: "/images/tarima.png" },
  { label: "Parking bicis", image: "/images/parkingbicis.png" },
  { label: "Alicantinas", image: "/images/alicantinas.png" },
  { label: "Zaguán", image: "/images/zaguan.png" },
  { label: "Estufa", image: "/images/estufa.jpg" },
  { label: "Veranda", image: "/images/varanda.jpg" },
  { label: "Toldos", image: "/images/toldos.jpg" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BerlangaPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-[600px] overflow-hidden">
        <Image src="/images/lacomunidad.jpg" alt="Comunidad Vibio Berlanga" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-tierra-900/80 via-tierra-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-[80px] pb-[80px]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[20px]">
            <div className="inline-flex w-fit items-center gap-2 border border-bg-default/50 text-bg-default rounded-full px-3 py-1.5">
              <span className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: "#F38163" }} />
              <span className="font-sans text-[12px] font-semibold">EN PREVIO</span>
            </div>
            <h1 className="font-serif text-[64px] leading-[1.05] text-bg-default max-w-[760px]">
              Berlanga de Duero, un pueblo donde <em>merece la pena prosperar</em>
            </h1>
            <p className="font-sans text-[18px] text-tierra-200">3 comunidades. 20 viviendas. 3 espacios comunes. Grupo semilla abierto.</p>
            <div><Button href="#casas" variant="amarillo" size="lg">Casas disponibles</Button></div>
          </div>
        </div>
      </section>

      {/* 2. vibio.berlanga intro */}
      <section className="bg-white py-[80px] px-[80px]">
        <div className="max-w-[1200px] mx-auto flex gap-[72px] items-start">
          <div className="relative shrink-0 w-[480px] h-[420px] rounded-[16px] overflow-hidden">
            <Image src="/images/vibio-berlanga.png" alt="Berlanga de Duero, Soria" fill sizes="480px" className="object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-[24px] pt-[8px]">
            <div className="flex items-start gap-[16px]">
              <h2 className="font-serif text-[40px] leading-[1.1] text-text-primary">
                vibio<em>.berlanga</em>
              </h2>
              <div className="w-[60px] h-[60px] rounded-full border-2 border-tierra-500 flex items-center justify-center shrink-0 mt-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-tierra-500">
                  <path d="M12 22V8M12 8C12 8 7 4 3 5c0 0 2 8 9 9M12 8c0 0 5-4 9-3 0 0-2 8-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h3 className="font-serif text-[26px] leading-[1.2] text-tierra-700">Una comunidad para un territorio con mucha historia</h3>
            <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">
              Al sur de la provincia de Soria, a menos de dos horas de Madrid, Berlanga de Duero es uno de los pueblos medievales mejor conservados de la Península. Vibio se instala aquí para crear una comunidad de primera residencia que honre ese territorio: arquitectura eficiente, espacios diseñados para la convivencia y un modelo que devuelve más de lo que toma.
            </p>
            <a href="#" className="font-sans text-[16px] font-semibold text-brand-gold underline hover:opacity-80 transition-opacity w-fit">
              Últimas noticias →
            </a>
          </div>
        </div>
      </section>

      {/* 3. Info accordion */}
      <section className="bg-white px-[80px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <ProjectInfoAccordion items={berlangaAccordionItems} />
        </div>
      </section>

      {/* 4. Tu casa */}
      <section id="casas" className="bg-white px-[80px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[420px_1fr] gap-[72px] items-start mb-[72px]">
            <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">Tu casa pensada para el lugar, diseñada para ti</h2>
            <div className="pt-[8px] flex flex-col gap-[20px]">
              <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">
                Cada casa está pensada para el lugar: orientada al sur, con vistas al paisaje de la Meseta y a la silueta del castillo, construida con materiales que respetan el entorno que los rodea.
              </p>
              <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">
                Berlanga de Duero lleva mil años habitado. Vibio llega para quedarse y contribuir, no para transformar lo que ya funciona. Las viviendas se integran en el tejido urbano existente.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[24px]">
            {casas.map((casa) => (
              <div key={casa.name} className="bg-bg-default rounded-[16px] overflow-hidden border border-tierra-200">
                <div className="flex items-center justify-between px-[24px] pt-[20px] pb-[12px]">
                  <span className="font-serif text-[20px] text-text-primary">{casa.name}</span>
                  <span className="font-sans text-[16px] text-tierra-600">{casa.sqm} m²</span>
                </div>
                <div className="relative w-full h-[220px]">
                  <Image src={casa.image} alt={casa.name} fill sizes="576px" className="object-cover" />
                </div>
                <div className="px-[24px] pt-[16px] pb-[20px] flex flex-col gap-[16px]">
                  <p className="font-sans text-[16px] leading-[1.6] text-tierra-700">{casa.description}</p>
                  <div className="flex items-center gap-[12px]">
                    <Button href="#" variant="lima" size="md">Ver tour virtual</Button>
                    <Button href="#" variant="amarillo" size="md">Descargar PDF</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Personaliza */}
      <section className="bg-bg-default px-[80px] py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-[13px] font-semibold tracking-[0.08em] uppercase text-tierra-500 mb-[16px]">Condicionado</p>
          <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary mb-[72px]">Personaliza tu casa</h2>
          <div className="grid grid-cols-4 gap-[24px]">
            {personalizaItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-[12px]">
                <div className="relative w-full h-[160px] rounded-[16px] overflow-hidden">
                  <Image src={item.image} alt={item.label} fill sizes="280px" className="object-cover" />
                </div>
                <span className="font-sans text-[14px] text-tierra-700 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-bg-dark px-[80px] py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-[13px] font-semibold tracking-[0.08em] uppercase text-tierra-500 mb-[48px]">Preguntas frecuentes</p>
          <BerlangaFaqAccordion />
        </div>
      </section>

      {/* 7. Contacto */}
      <section className="bg-bg-default px-[80px] py-[100px]">
        <div className="max-w-[1200px] mx-auto flex gap-[48px] items-start">
          <div className="w-[400px] shrink-0 flex flex-col gap-[24px]">
            <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">
              Si sientes que <em>vibio.berlanga</em> puede ser para ti, escríbenos.
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás, y qué buscas.</p>
            <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">Así, nuestro equipo podrá proporcionarte toda la información que necesitáis y responder a tus preguntas.</p>
            <p className="font-sans text-[18px] text-tierra-700">
              También puedes comunicarte por teléfono al{" "}
              <a href="tel:+34655920839" className="font-semibold underline text-brand-gold">+34 655 920 839</a>
            </p>
          </div>
          <div className="flex-1"><ComoFuncionaContactForm /></div>
        </div>
      </section>
    </>
  );
}
