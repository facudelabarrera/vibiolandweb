import type { Metadata } from "next";
import Image from "next/image";
import {
  ProjectInfoAccordion,
  type InfoItem,
} from "@/components/sections/ProjectInfoAccordion";
import { CasaCard } from "@/components/sections/CasaCard";
import {
  BerlangaFaqAccordion,
  HigueraContactForm,
} from "@/components/sections/HigueraAccordions";

export const metadata: Metadata = {
  title: "vibio.berlanga — Berlanga de Duero, Soria",
  description:
    "Una comunidad para un territorio con mucha historia. Al sur de la provincia de Soria, viviendas para el máximo confort y eficiencia.",
};

// ── Icons: isotipo SVG files (same visual system as higuera) ─────────────────

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

// ── Berlanga accordion data ───────────────────────────────────────────────────

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

// ── Casa data (3 typologies for Berlanga) ────────────────────────────────────

const casaBerta = {
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
};

const casaSunita = {
  name: "Casa Sunita",
  sqm: "70",
  images: [
    "/images/sunita1.png",
    "/images/sunita2.png",
    "/images/sunita3.png",
    "/images/sunita4.png",
  ],
  description:
    "Si sois un par de familias pequeñas, esta tipología es perfecta. Juntos pero no revueltos.",
};

const casaMollison = {
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
};

// ── Personaliza items (shared with higuera) ───────────────────────────────────

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
      <section className="relative overflow-hidden h-svh lg:h-dvh lg:min-h-[784px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/berlanga-foto.jpg"
            alt=""
            fill
            priority
            sizes="110vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative h-full flex flex-col items-center px-4 pt-16 pb-8 lg:p-[80px]">
          <div className="flex-1 flex flex-col items-start justify-between w-full max-w-[1200px]">

            {/* Top group */}
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
                  EN DISEÑO
                </span>
              </div>

              {/* Title */}
              <h1
                className="font-serif text-[#f1efe4] text-[36px] lg:text-[75px] leading-[1.1]"
                style={{ letterSpacing: "-1.5px" }}
              >
                Berlanga de Duero,{" "}
                <br aria-hidden />
                un pueblo donde{" "}
                <em>
                  merece
                  <br aria-hidden />
                  la pena prosperar
                </em>
              </h1>

              {/* Subtitle */}
              <p className="font-sans font-medium text-[#f1efe4] text-[15px] lg:text-[30px] leading-[1.3]">
                3 comunidades. 26 viviendas. 3 espacios comunes.
                <br aria-hidden />
                Grupo semilla abierto.
              </p>
            </div>

            {/* CTA */}
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

      {/* 2. vibio.berlanga intro */}
      <section className="px-4 py-12 lg:px-[80px] lg:py-[100px]" style={{ backgroundColor: "#f1efe4" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">
          {/* Photo */}
          <div className="relative w-full h-[220px] lg:h-[424px] rounded-[16px] lg:rounded-[25px] overflow-hidden lg:w-[589px] lg:shrink-0">
            <Image
              src="/images/berlanga.jpg"
              alt="Berlanga de Duero, Soria"
              fill
              sizes="(max-width: 1024px) 100vw, 589px"
              className="object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-1 lg:justify-between lg:self-stretch">
            <div className="flex items-center justify-between w-full shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/vibio-berlanga.svg" alt="vibio.berlanga" className="h-9 w-auto lg:h-[60px]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/vibio-berlanga-isotipo.svg" alt="" className="w-10 h-10 lg:w-[60px] lg:h-[60px]" />
            </div>

            <div className="flex flex-col gap-4 lg:gap-[16px] w-full lg:max-w-[476px]">
              <h3
                className="font-serif text-[20px] lg:text-[30px] leading-[1.2]"
                style={{ letterSpacing: "-0.3px", color: "#847132" }}
              >
                Una comunidad para un territorio con mucha historia
              </h3>
              <p className="font-sans text-[16px] lg:text-[18px] leading-[1.44]" style={{ color: "#847132" }}>
                Al sur de la provincia de Soria, una comunidad de comunidades.
                Viviendas para el máximo confort y eficiencia, con espacios
                diseñados para la convivencia y la ventaja de contar con todos
                los servicios en un entorno rural. Un proyecto en pleno
                crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Info accordion */}
      <section className="bg-white px-4 py-12 lg:px-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <ProjectInfoAccordion items={berlangaAccordionItems} variant="higuera" />
        </div>
      </section>

      {/* 4. Tu casa */}
      <section id="casas" className="px-4 py-12 lg:px-[80px] lg:py-[100px]" style={{ backgroundColor: "#f8f7f2" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:gap-[72px]">

          {/* Heading + body text */}
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-[72px] lg:items-start">
            <h2
              className="font-serif text-[#242018] text-[28px] lg:text-[48px] leading-[1.1]"
              style={{ letterSpacing: "-0.96px" }}
            >
              Tu casa pensada para
              <br />
              el lugar, diseñada para ti
            </h2>
            <div
              className="font-sans font-semibold text-[#242018] text-[17px] lg:text-[22px] leading-[1.4] flex flex-col gap-4"
              style={{ letterSpacing: "-0.044px" }}
            >
              <p>
                Cada casa está pensada para el lugar: orientada al sur, con
                vistas al paisaje de la Meseta y a la silueta del castillo,
                construida con materiales que respetan el entorno que las rodea.
              </p>
              <p>
                La finca tiene una pendiente suave con olivos, perales, higueras,
                almendros y un pino de casi 20 metros. Un afloramiento rocoso
                rodea un grupo de robles en el centro: el corazón natural de la
                comunidad, donde se sitúan los espacios comunes.
              </p>
            </div>
          </div>

          {/* Casa cards */}
          <div className="flex flex-col gap-4 lg:gap-[24px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[24px]">
              <CasaCard {...casaBerta} />
              <CasaCard {...casaSunita} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[24px]">
              <CasaCard {...casaMollison} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Personaliza */}
      <section className="bg-white px-4 py-12 lg:px-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:gap-[48px]">
          <div className="flex flex-col gap-2 lg:gap-[16px]">
            <p className="font-sans font-semibold uppercase text-[16px] leading-normal" style={{ color: "#5f5134" }}>
              TOPPINGS
            </p>
            <h2
              className="font-serif text-[#242018] text-[28px] lg:text-[48px]"
              style={{ lineHeight: "1.1", letterSpacing: "-0.96px" }}
            >
              Personaliza tu casa
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-[48px] lg:gap-y-[48px] lg:px-[120px]">
            {personalizaItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-[6px]"
                style={{ minHeight: "238px" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <p className="font-sans text-[18px] leading-normal text-[#242018] text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="px-4 py-12 lg:px-[80px] lg:py-[100px]" style={{ backgroundColor: "#3F3926" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:gap-[48px]">
          <h2
            className="font-serif text-[#f1efe4] text-[22px] lg:text-[30px]"
            style={{ lineHeight: "1.2", letterSpacing: "-0.3px" }}
          >
            Preguntas frecuentes
          </h2>
          <BerlangaFaqAccordion />
        </div>
      </section>

      {/* 7. Contact */}
      <section className="px-4 py-12 lg:px-[80px] lg:py-[100px]" style={{ backgroundColor: "#f1efe4" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">

          {/* Left: heading + copy */}
          <div className="flex flex-col gap-5 lg:gap-[24px] lg:flex-1">
            <h2 className="font-serif text-black text-[28px] lg:text-[48px]" style={{ lineHeight: "1.1" }}>
              Si sientes que
              <br />
              <em style={{ color: "#a79854" }}>vibio.berlanga</em>
              <br />
              puede ser para ti, escríbenos.
            </h2>
            <div
              className="font-sans font-semibold text-[#15130c] text-[17px] lg:text-[22px] leading-[1.4] flex flex-col gap-4"
              style={{ letterSpacing: "-0.044px" }}
            >
              <p>Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás, y qué buscas.</p>
              <p>Así, nuestro equipo podrá proporcionarte toda la información que necesites y responder a tus preguntas.</p>
            </div>
            <p className="font-sans text-[#15130c] text-[16px] lg:text-[23px]" style={{ lineHeight: "normal" }}>
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
          <div className="w-full lg:w-[592px] lg:shrink-0">
            <HigueraContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
