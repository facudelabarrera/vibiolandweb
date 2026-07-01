import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const projects = [
  {
    slug: "higuera",
    logotipo: "/vibio-higuera.svg",
    isotipo: "/vibio-higuera-isotipo.svg",
    isotipoClass: "absolute top-0 right-0 w-[44px] h-[46px] lg:w-[88px] lg:h-[93px]",
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
    isotipoClass: "absolute top-0 right-0 w-[48px] h-[48px] lg:w-[100px] lg:h-[100px]",
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
    <section className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-8 lg:gap-[72px]">

        {/* Heading */}
        <div className="flex flex-col gap-5">
          <p className="font-sans text-[14px] leading-[1.6] text-brand-gold uppercase">COMUNIDADES</p>
          <h2 className="font-serif text-[32px] lg:text-[48px] leading-[1.15] lg:leading-[55px] tracking-[-0.96px] text-text-secondary">
            <em>Dos proyectos en desarrollo</em>
            <br />
            y cuatro en estudio
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:[grid-template-rows:repeat(6,auto)]">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="rounded-[24px] p-4 lg:p-12 grid gap-4 lg:gap-6 lg:[grid-template-rows:subgrid] lg:[grid-row:span_6]"
              style={{ backgroundColor: "#f8f7f2" }}
            >
              {/* Header: logotipo + isotipo */}
              <div className="relative flex items-start w-full h-[38px] lg:h-[61px]">
                <div className="relative h-[38px] lg:h-[61px] w-full max-w-[155px] lg:max-w-[271px]">
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
              <div className="flex flex-col gap-3 lg:gap-8 px-2 lg:px-3">
                <div className="w-fit">
                  <Badge variant={p.badge}>{p.badgeLabel}</Badge>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-serif italic text-[18px] leading-[24px] text-black">{p.location}</p>
                  <p className="font-serif italic text-[18px] leading-[24px] text-black">{p.distance}</p>
                </div>
              </div>

              {/* Descripción */}
              <p className="font-sans text-[16px] lg:text-[18px] font-normal leading-[1.45] lg:leading-[1.6] text-text-secondary text-justify">
                {p.description}
              </p>

              {/* Imagen */}
              <div className="relative h-[220px] lg:h-[350px] rounded-[20px] overflow-hidden">
                <Image src={p.image} alt={`vibio.${p.slug}`} fill className="object-cover" />
              </div>

              {/* Stats */}
              <div>
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
                    <span className="font-serif italic text-[18px] text-text-primary text-right leading-[1.6]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-row gap-3 lg:gap-4">
                <Link
                  href={`/${p.slug}`}
                  className="px-5 py-1.5 lg:h-12 flex items-center justify-center rounded-full font-sans text-[14px] lg:text-[16px] font-medium tracking-[0.08px] text-bg-dark hover:opacity-80 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#dedaa9" }}
                >
                  Saber más
                </Link>
                <Link
                  href="/contacta"
                  className="flex-1 py-1.5 lg:h-12 flex items-center justify-center rounded-full font-sans text-[14px] lg:text-[16px] font-medium tracking-[0.08px] text-bg-dark hover:opacity-80 transition-opacity text-center"
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
