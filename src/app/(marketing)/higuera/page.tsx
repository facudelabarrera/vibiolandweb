import type { Metadata } from "next";
import Image from "next/image";
import { HigueraFaqAccordion, HigueraContactForm } from "@/components/sections/HigueraAccordions";
import { CasaCard } from "@/components/sections/CasaCard";
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
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/comunidad-isotipo.svg" alt="" aria-hidden className="h-7 w-auto lg:h-auto lg:w-full" />
);

const TerritorioIcon = (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/terrritorio-isotipo.svg" alt="" aria-hidden className="h-7 w-auto lg:h-auto lg:w-full" />
);

const ArquitecturaIcon = (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/arquitectura-isotipo.svg" alt="" aria-hidden className="h-7 w-auto lg:h-auto lg:w-full" />
);

const ImpactoIcon = (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/impacto-isotipo.svg" alt="" aria-hidden className="h-7 w-auto lg:h-auto lg:w-full" />
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
  {
    name: "Casa Berta",
    sqm: "60",
    images: [
      "/images/berta1.jpg",
      "/images/berta2.jpg",
      "/images/berta3.jpg",
      "/images/berta4.jpg",
    ],
    description:
      "Si la accesibilidad es importante para ti, esta vivienda está resuelta en una sola planta.",
  },
  {
    name: "Casa Sunita",
    sqm: "70",
    images: [
      "/images/sunita1.png",
      "/images/sunita2.png",
      "/images/sunita3.png",
      "/images/sunita4.png",
    ],
    description:
      "Si sois un par de familias pequeñas, esta tipología es perfecta: juntos pero no revueltos.",
  },
  {
    name: "Casa Canon",
    sqm: "90",
    images: [
      "/images/carson1.jpg",
      "/images/carson2.jpg",
      "/images/carson3.jpg",
      "/images/carson4.jpg",
    ],
    description:
      "Una composición moderna y eficaz con dos dormitorios en dos plantas con un posible tercer dormitorio en planta baja.",
  },
  {
    name: "Casa Mollison",
    sqm: "115",
    images: [
      "/images/mollison1.jpg",
      "/images/mollison2.png",
      "/images/mollison3.jpg",
      "/images/mollison4.jpg",
    ],
    description:
      "Vivienda amplia para familias grandes. Posibilidad de tener cuatro dormitorios.",
  },
];

// ── Personaliza data ──────────────────────────────────────────────────────────

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
      <section className="relative overflow-hidden h-svh lg:h-dvh lg:min-h-[784px]">
        {/* Background image */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-higuera.png"
            alt=""
            fill
            priority
            sizes="110vw"
            className="object-cover object-left-top"
          />
        </div>
        {/* Flat overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center px-4 pt-16 pb-8 lg:p-[80px]">
          <div className="flex-1 flex flex-col items-start justify-between w-full max-w-[1200px]">

            {/* Top group: badge + title + subtitle */}
            <div className="flex flex-col gap-4 lg:gap-[24px] items-start w-full">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 lg:gap-3 h-[32px] lg:h-[50px] px-3 lg:px-4 rounded-full border-[1.5px] border-[#f1efe4] shrink-0"
                style={{ backgroundColor: "rgba(36,32,24,0.4)" }}
              >
                <span
                  className="rounded-full shrink-0 w-3 h-3 lg:w-[18px] lg:h-[18px]"
                  style={{ backgroundColor: "#6aaa74" }}
                />
                <span className="font-sans font-medium text-[12px] lg:text-[16px] leading-normal text-[#f1efe4] whitespace-nowrap">
                  EN CONSTRUCCIÓN
                </span>
              </div>

              {/* Title */}
              <h1
                className="font-serif text-[#f1efe4] text-[36px] lg:text-[75px] leading-[1.1]"
                style={{ letterSpacing: "-1.5px" }}
              >
                Una{" "}
                <em>
                  comunidad
                  <br aria-hidden />
                  ecológica
                </em>{" "}
                junto a{" "}
                <br aria-hidden />
                la Sierra de Gredos
              </h1>

              {/* Subtitle */}
              <p
                className="font-sans font-medium text-[#f1efe4] text-[15px] lg:text-[30px] leading-[1.3]"
              >
                70 casas. Espacios comunes. Cohousing.
              </p>
            </div>

            {/* CTA — pushed to bottom by justify-between */}
            <a
              href="#casas"
              className="inline-flex items-center justify-center py-1.5 lg:py-3 px-5 lg:px-8 rounded-full font-sans font-semibold text-[14px] lg:text-[16px] leading-[1.4] text-[#15130c] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#dbc56c" }}
            >
              Casas disponibles
            </a>
          </div>
        </div>
      </section>

      {/* 2. vibio.higuera intro */}
      <section
        className="px-4 py-12 lg:px-[80px] lg:py-[100px]"
        style={{ backgroundColor: "#f1efe4" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">
          {/* Photo */}
          <div
            className="relative w-full h-[220px] lg:shrink-0 lg:rounded-[25px] overflow-hidden rounded-[16px]"
            style={{ maxWidth: "589px" }}
          >
            <div className="relative w-full h-full lg:h-[424px]" style={{ height: "220px" }}>
              <Image
                src="/images/higuera.jpg"
                alt="Higuera de las Dueñas"
                fill
                sizes="(max-width: 1024px) 100vw, 589px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: logo + text */}
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-1 lg:justify-between lg:self-stretch">
            {/* Top: logo + icon */}
            <div className="flex items-center justify-between w-full shrink-0">
              <img
                src="/vibio-higuera.svg"
                alt="vibio.higuera"
                className="h-9 w-auto lg:h-[60px]"
              />
              <img
                src="/vibio-higuera-isotipo.svg"
                alt=""
                className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              />
            </div>

            {/* Bottom: text content */}
            <div className="flex flex-col gap-4 lg:gap-[16px] w-full lg:max-w-[476px]">
              <h3
                className="font-serif text-[20px] lg:text-[30px] leading-[1.2]"
                style={{ letterSpacing: "-0.3px", color: "#847132" }}
              >
                El primero. Una comunidad en Higuera de las Dueñas
              </h3>

              <p
                className="font-sans text-[16px] lg:text-[18px] leading-[1.44]"
                style={{ color: "#847132" }}
              >
                70 viviendas en el Valle del Tiétar, a una hora de Madrid.
                Arquitectura bioclimática, espacios comunes y un modelo de
                convivencia diseñado para que funcione. El primer proyecto de
                una red que crece.
              </p>

              <a
                href="#"
                className="self-start inline-flex items-center justify-center py-1.5 lg:py-3 px-4 lg:px-6 rounded-full font-sans font-medium text-[14px] lg:text-[16px] leading-[1.4] hover:opacity-80 transition-opacity"
                style={{ border: "1px solid #847132", color: "#847132", borderRadius: "1000px" }}
              >
                Últimas noticias
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Info accordion */}
      <section className="bg-white px-4 py-12 lg:px-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <ProjectInfoAccordion items={higueraAccordionItems} variant="higuera" />
        </div>
      </section>

      {/* 4. Tu casa */}
      <section
        id="casas"
        className="px-4 py-12 lg:px-[80px] lg:py-[100px]"
        style={{ backgroundColor: "#f8f7f2" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[72px] lg:items-start mb-8 lg:mb-[72px]">
            <h2
              className="font-serif text-[28px] lg:text-[48px] leading-[1.1] lg:shrink-0"
              style={{
                letterSpacing: "-0.96px",
                color: "#242018",
                maxWidth: "450px",
              }}
            >
              Tu casa pensada para
              <br />
              el lugar, diseñada para ti
            </h2>
            <div
              className="flex flex-col font-sans font-semibold text-[17px] lg:text-[22px] leading-[1.4]"
              style={{
                letterSpacing: "-0.044px",
                color: "#242018",
                gap: "1.2em",
              }}
            >
              <p>
                Cada casa está pensada para el lugar: orientada al sur, con
                vistas a la dehesa y a la Sierra de San Vicente, construida con
                materiales que respetan el entorno que los rodea.
              </p>
              <p>
                La finca tiene una pendiente suave, olivos, perales, higueros,
                almendros y un pino de casi 20 metros. Un afloramiento rocoso
                rodea un grupo de robles en el centro: el corazón natural de la
                comunidad, donde se ubican los espacios comunes.
              </p>
            </div>
          </div>

          {/* Casa cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[24px]">
            {casas.map((casa) => (
              <CasaCard key={casa.name} {...casa} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Personaliza */}
      <section className="bg-white px-4 py-12 lg:px-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <p
            className="font-sans font-semibold text-[16px] leading-normal uppercase mb-[8px]"
            style={{ color: "#5f5134" }}
          >
            TOPPINGS
          </p>
          <h2
            className="font-serif mb-8 lg:mb-[72px] text-[28px] lg:text-[48px]"
            style={{
              lineHeight: "1.1",
              letterSpacing: "-0.96px",
              color: "#242018",
            }}
          >
            Personaliza tu casa
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[24px]">
            {personalizaItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-[12px]">
                <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <span
                  className="font-sans text-center"
                  style={{ fontSize: "18px", color: "#3f3926" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="px-4 py-12 lg:px-[80px] lg:py-[100px]" style={{ backgroundColor: "#3F3926" }}>
        <div className="max-w-[1200px] mx-auto">
          <h4
            className="font-serif mb-[48px]"
            style={{
              fontSize: "30px",
              lineHeight: "1.2",
              letterSpacing: "-0.3px",
              color: "#f1efe4",
              maxWidth: "540px",
            }}
          >
            Preguntas frecuentes
          </h4>
          <HigueraFaqAccordion />
        </div>
      </section>

      {/* 7. Contacto */}
      <section
        className="px-4 py-12 lg:px-[80px] lg:py-[100px]"
        style={{ backgroundColor: "#f1efe4" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">
          {/* Left: heading + body */}
          <div className="flex flex-col gap-5 lg:gap-[24px] lg:w-[430px] lg:shrink-0">
            <h2
              className="font-serif text-[28px] lg:text-[48px] leading-[1.1]"
              style={{
                letterSpacing: "-0.96px",
                color: "#15130c",
              }}
            >
              Si sientes que{" "}
              <em style={{ color: "#a79854" }}>vibio.higuera</em> puede ser
              para ti, escríbenos.
            </h2>

            <p
              className="font-sans font-semibold text-[17px] lg:text-[22px] leading-[1.4]"
              style={{ letterSpacing: "-0.044px", color: "#15130c" }}
            >
              Este formulario nos ayuda a entender tu contexto: quién eres,
              dónde estás, qué buscas y qué comunidad o territorio podrían
              encajar contigo.
            </p>

            <p
              className="font-sans font-semibold text-[17px] lg:text-[22px] leading-[1.4]"
              style={{ letterSpacing: "-0.044px", color: "#15130c" }}
            >
              Nuestro equipo podrá proporcionarte toda la información para
              acompañarte y responder a tus preguntas.
            </p>

            <p className="font-sans text-[16px] lg:text-[23px]" style={{ color: "#15130c" }}>
              También puedes comunicarte por teléfono al{" "}
              <a
                href="tel:+34655920839"
                className="font-semibold underline hover:opacity-80 transition-opacity"
                style={{ color: "#a79854" }}
              >
                +34 655 920 839
              </a>
            </p>
          </div>

          {/* Right: form */}
          <div className="flex-1 min-w-0">
            <HigueraContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
