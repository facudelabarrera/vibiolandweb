import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ComoFuncionaContactForm } from "@/components/sections/ComoFuncionaContactForm";
import { HigueraFaqAccordion } from "@/components/sections/HigueraAccordions";
import {
  ProjectInfoAccordion,
  type InfoItem,
} from "@/components/sections/ProjectInfoAccordion";

export const metadata: Metadata = {
  title: "vibio.higuera — Higuera de las Dueñas, Ávila",
  description:
    "Una comunidad ecológica junto a la Sierra de Gredos. 70 casas, espacios comunes y cohousing en el Valle del Tiétar.",
};

// ── Accordion icons ────────────────────────────────────────────────────────────

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

// ── Higuera accordion data ────────────────────────────────────────────────────

const higueraAccordionItems: InfoItem[] = [
  {
    icon: ComunidadIcon,
    label: "Comunidad",
    content: {
      type: "text-photo",
      subheading: "Una comunidad diversa, en un valle enorme",
      paragraphs: [
        "vibio.higuera no llega a construir algo nuevo: llega a formar parte de lo que ya existe. Llega para quedarse, integrarse y contribuir a la regeneración del entorno, tejiendo lazos con el pueblo y sus habitantes.",
        "En ella conviven familias que querían que sus hijos crecieran en la naturaleza, profesionales que trabajan en remoto, personas que buscan una comunidad real y otras que no quieren envejecer solas. Todos llevaban tiempo queriendo que su forma de vida fuera coherente con lo que piensan.",
        "Se organiza en 10 plazas. Cada una tiene su propia identidad —su paisajismo, sus animales, su cobertizo con lavandería y herramientas compartidas. Y agrupa entre 7 y 10 viviendas alrededor de un espacio común: el lugar donde te cruzas con tus vecinos, decides sobre lo compartido y aparcas la bici.",
        "La comunidad se organiza en comisiones (energía, biodiversidad, gobernanza) donde cada quien participa según su tiempo y sus ganas. Nadie está obligado.",
      ],
      button: { label: "Ver video", href: "#" },
      photo: "/images/comunidad.png",
      photoAlt: "Comunidad Vibio Higuera",
    },
  },
  {
    icon: TerritorioIcon,
    label: "Territorio",
    content: {
      type: "text-photo",
      subheading: "400 Hectáreas de dehesa. Y un pueblo de verdad.",
      paragraphs: [
        "El Valle del Tiétar tiene algo difícil de explicar y fácil de sentir. Higuera de las Dueñas está protegida al norte por la Sierra de Gredos y abierta al sur hacia la Sierra de San Vicente. En este valle de clima cálido, la provincia de Ávila guarda uno de los paisajes más generosos de Castilla, sin masificación turística, sin ruido, sin prisa.",
        "Higuera de las Dueñas no es un pueblo turístico. Es un pueblo tranquilo, con carácter propio; y con 400 hectáreas de dehesa pública al otro lado del arroyo donde pastan las vacas y las ovejas. En primavera, los cerezos florecen. En la sierra, las flores cubren las laderas de color. Y el Arroyo de la Higuera bordea la finca con una suavidad que regala privacidad y naturaleza a partes iguales.",
        "A menos de una hora y media de Madrid. A años luz del ruido.",
      ],
      photo: "/images/territorio.png",
      photoAlt: "Valle del Tiétar, Higuera de las Dueñas",
    },
  },
  {
    icon: ArquitecturaIcon,
    label: "Arquitectura",
    content: {
      type: "carousel",
      paragraph:
        "Un gran ventanal al sur: el campo, dentro de casa. Madera, tierra y luz —los materiales de siempre— con la eficiencia que exige el tiempo que viene. Interiores diseñados para el confort: temperatura estable, aire limpio, silencio. Casas que en invierno se calientan solas y en verano respiran, como si supieran exactamente dónde están.",
      photos: ["/images/arq1.png", "/images/arq2.png", "/images/arq3.png"],
    },
  },
  {
    icon: ImpactoIcon,
    label: "Impacto",
    content: {
      type: "bullets-photo",
      subheading:
        "Una comunidad diseñada para que la vida florezca y la naturaleza prospere",
      lead: "Lo que ya estamos haciendo:",
      bullets: [
        "380 nuevos árboles (42 especies)",
        "54 árboles conservados (olivos, perales, almendros, robles)",
        "12 olivos trasplantados",
        "5.000 m² de plantación de vivaces, gramíneas, arbustos y bulbos",
        "Creación de hábitats para aves, reptiles, insectos y pequeños mamíferos",
        "1.100 m³/año de agua de lluvia recuperada",
        "75 m³ depósito agua potable",
        "18.000 m³/año de agua depurada",
        "500 kW de potencia instalada",
        "400 m² de zonas comunes",
      ],
      photo: "/images/impacto.jpg",
      photoAlt: "Naturaleza y biodiversidad en Higuera de las Dueñas",
    },
  },
];

// ── Casa data ─────────────────────────────────────────────────────────────────

const casas = [
  { name: "Casa Berta", sqm: "60", image: "/images/berta1.jpg", description: "Si la accesibilidad es importante para ti, esta vivienda está resuelta en una sola planta." },
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

export default function HigueraPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-[600px] overflow-hidden">
        <Image src="/images/hero-higuera.png" alt="Vibio Higuera, Valle del Tiétar" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-tierra-900/80 via-tierra-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-[80px] pb-[80px]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[20px]">
            <div className="inline-flex w-fit items-center gap-2 border border-bg-default/50 text-bg-default rounded-full px-3 py-1.5">
              <span className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: "#abc2d9" }} />
              <span className="font-sans text-[12px] font-semibold">EL DESTINO</span>
            </div>
            <h1 className="font-serif text-[64px] leading-[1.05] text-bg-default max-w-[700px]">
              Una comunidad <em>ecológica</em> junto a la Sierra de Gredos
            </h1>
            <p className="font-sans text-[18px] text-tierra-200">70 casas. Espacios comunes. Cohousing</p>
            <div><Button href="#casas" variant="amarillo" size="lg">Casas disponibles</Button></div>
          </div>
        </div>
      </section>

      {/* 2. vibio.higuera intro */}
      <section className="bg-white py-[80px] px-[80px]">
        <div className="max-w-[1200px] mx-auto flex gap-[72px] items-start">
          <div className="relative shrink-0 w-[480px] h-[420px] rounded-[16px] overflow-hidden">
            <Image src="/images/higuera.jpg" alt="Higuera de las Dueñas" fill sizes="480px" className="object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-[24px] pt-[8px]">
            <div className="flex items-start gap-[16px]">
              <h2 className="font-serif text-[40px] leading-[1.1] text-text-primary">
                vibio<em>.higuera</em>
              </h2>
              <div className="w-[60px] h-[60px] rounded-full border-2 border-tierra-500 flex items-center justify-center shrink-0 mt-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-tierra-500">
                  <path d="M17 8C8 10 5.9 16.17 3.82 19.98M9 10.17C9 10.17 12.44 8.39 16 10c3.8 1.72 5.11 5.73 5.11 5.73M3 21s1-2 2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h3 className="font-serif text-[26px] leading-[1.2] text-tierra-700">El primero. Una comunidad en Higuera de las Dueñas</h3>
            <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">
              Se emplaza a las faldas del Tiébtar, a una hora de Madrid. Arquitectura bioclimática, espacios comunes y un modelo de copromoción diseñado para que funcione. El primer proyecto de una red que crece.
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
          <ProjectInfoAccordion items={higueraAccordionItems} />
        </div>
      </section>

      {/* 4. Tu casa */}
      <section id="casas" className="bg-white px-[80px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[420px_1fr] gap-[72px] items-start mb-[72px]">
            <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">Tu casa pensada para el lugar, diseñada para ti</h2>
            <div className="pt-[8px] flex flex-col gap-[20px]">
              <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">
                Cada casa está pensada para el lugar: orientada al sur, con vistas a la dehesa y a la Sierra de San Vicente, construida con materiales que respetan el entorno que los rodea.
              </p>
              <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">
                La finca tiene una pendiente suave, olivos, perales, higueros, almendros y un pino de casi 20 metros. Un afloramiento rocoso rodea un grupo de robles en el centro: el corazón natural de la comunidad, donde se ubican los espacios comunes.
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
          <HigueraFaqAccordion />
        </div>
      </section>

      {/* 7. Contacto */}
      <section className="bg-bg-default px-[80px] py-[100px]">
        <div className="max-w-[1200px] mx-auto flex gap-[48px] items-start">
          <div className="w-[400px] shrink-0 flex flex-col gap-[24px]">
            <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">
              Si sientes que <em>vibio.higuera</em> puede ser para ti, escríbenos.
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás, y qué buscas.</p>
            <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">Nuestro equipo podrá proporcionarte toda la información para acompañarte y responder a tus preguntas.</p>
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
