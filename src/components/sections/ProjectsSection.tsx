import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const projects = [
  {
    slug: "higuera",
    logotipo: "/vibio-higuera.svg",
    isotipo: "/vibio-higuera-isotipo.svg",
    isotipoClass: "absolute top-0 right-0 w-[88px] h-[93px]",
    location: "Higuera de las Dueñas · Ávila",
    distance: "1:15h de Madrid",
    badge: "en-construccion" as const,
    badgeLabel: "EN CONSTRUCCIÓN",
    description:
      "Cinco hectáreas junto al casco urbano del pueblo, con la Sierra de Gredos al norte, la de San Vicente al sur y frente a 400 hectáreas de dehesa pública.",
    image: "/images/vibio-higuera.png",
    stats: [
      { key: "VIVIENDAS", value: "70" },
      { key: "SUPERFICIE", value: "60/115 m²" },
      { key: "HECTÁREAS", value: "5" },
    ],
  },
  {
    slug: "berlanga",
    logotipo: "/vibio-berlanga.svg",
    isotipo: "/vibio-berlanga-isotipo.svg",
    isotipoClass: "absolute top-0 right-0 w-[100px] h-[100px]",
    location: "Berlanga de Duero · Soria",
    distance: "2 horas de Madrid / 45 minutos de Soria",
    badge: "en-diseno" as const,
    badgeLabel: "EN DISEÑO",
    description:
      "Entre encinas y viñedos, a los pies del Castillo de Berlanga, en uno de los conjuntos medievales mejor conservados de España. Un pueblo pequeño con identidad propia y tejido social activo.",
    image: "/images/vibio-berlanga.png",
    stats: [
      { key: "FASE", value: "En Diseño" },
      { key: "VIVIENDAS", value: "26" },
      { key: "PRE-REGISTRO", value: "Abierto" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-bg-default py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-[72px]">

        {/* Heading */}
        <div className="flex flex-col gap-5">
          <p className="font-sans text-[14px] leading-[1.6] text-brand-gold uppercase">COMUNIDADES</p>
          <h2 className="font-serif text-[48px] leading-[55px] tracking-[-0.96px] text-text-secondary">
            <em>Dos proyectos en desarrollo</em>
            <br />
            y cuatro en estudio
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="flex-1 min-w-0 rounded-[24px] p-12 flex flex-col gap-6"
              style={{ backgroundColor: "#f8f7f2", minWidth: "500px" }}
            >
              {/* Header: logotipo + isotipo */}
              <div className="relative flex items-start w-full h-[61px] shrink-0">
                <div className="relative h-[61px] w-[271px]">
                  <Image
                    src={p.logotipo}
                    alt={`vibio.${p.slug}`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className={p.isotipoClass}>
                  <Image src={p.isotipo} alt="" fill className="object-contain" />
                </div>
              </div>

              {/* Info: badge + ubicación */}
              <div className="flex flex-col gap-8 px-3 shrink-0">
                {/* Badge — hug: shrink-0, w-fit */}
                <div className="w-fit">
                  <Badge variant={p.badge}>{p.badgeLabel}</Badge>
                </div>
                {/* Location — STIX italic */}
                <div className="flex flex-col gap-0.5">
                  <p className="font-serif italic text-[18px] leading-[24px] text-black">{p.location}</p>
                  <p className="font-serif italic text-[18px] leading-[24px] text-black">{p.distance}</p>
                </div>
              </div>

              {/* Descripción */}
              <p className="font-sans text-[18px] font-normal leading-[1.6] text-text-secondary text-justify shrink-0">
                {p.description}
              </p>

              {/* Imagen */}
              <div className="relative h-[350px] rounded-[20px] overflow-hidden shrink-0">
                <Image src={p.image} alt={`vibio.${p.slug}`} fill className="object-cover" />
              </div>

              {/* Stats — solo strokes horizontales */}
              <div className="shrink-0">
                {p.stats.map(({ key, value }, i) => (
                  <div
                    key={key}
                    className="flex items-center justify-between py-2"
                    style={{
                      borderTop: i === 0 ? "0.3px solid #242018" : "none",
                      borderBottom: "0.3px solid #242018",
                    }}
                  >
                    <span className="font-sans text-[14px] font-medium tracking-[0.07px] uppercase text-text-primary leading-[1.4]">
                      {key}
                    </span>
                    {/* Valores en STIX italic */}
                    <span className="font-serif italic text-[18px] text-text-primary text-right leading-[1.6]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-4 shrink-0">
                <Link
                  href={`/${p.slug}`}
                  className="flex-1 h-12 flex items-center justify-center rounded-full font-sans text-[16px] font-medium tracking-[0.08px] text-bg-dark hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#dedaa9" }}
                >
                  Saber más
                </Link>
                <Link
                  href="/contacta"
                  className="flex-1 h-12 flex items-center justify-center rounded-full font-sans text-[16px] font-medium tracking-[0.08px] text-bg-dark hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#f1edcf" }}
                >
                  Ver viviendas disponibles
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
