"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const formas = [
  {
    percentage: "60%",
    label: "Covivienda",
    bg: "#847132",
    numColor: "#f1edcf",
    descColor: "rgba(241,237,207,0.8)",
    image: "/images/card1.jpg",
    description:
      "60% de Vibio es vivienda unifamiliar en propiedad individual. Tu casa es completamente tuya, con división horizontal al final de la obra. Lo que te une a la comunidad no es la propiedad compartida, sino la elección consciente de construir vecindad activa y cultura de cuidados.",
    defaultBasis: "60%",
  },
  {
    percentage: "20%",
    label: "Cohousing",
    bg: "#ecc39c",
    numColor: "#f38163",
    descColor: "#f38163",
    image: "/images/card2.jpg",
    description:
      "20% de Vibio es propiedad colectiva en cooperativa, con derecho de uso. Nace de un grupo motor que elige vivir juntos y compartir una filosofía de vida. Nadie puede vender su vivienda de forma individual. Si alguien se va, recibe su aportación y entra otra persona con el visto bueno de la cooperativa.",
    defaultBasis: "20%",
  },
  {
    percentage: "20%",
    label: "Coliving",
    bg: "#abc2d9",
    numColor: "#3f3926",
    descColor: "#5f5134",
    image: "/images/card3.jpg",
    description:
      "20% de Vibio es alojamiento gestionado por una entidad que se ofrece en régimen de alquiler temporal: desde los 4 hasta los 12 meses. Tienen espacios privados (habitación, baño, escritorio) y áreas comunes compartidas (salones, cocinas...). Este modelo permite tener en Vibio una población flotante que pasa por la comunidad, la enriquece y se lleva algo de ella.",
    defaultBasis: "20%",
  },
];

export function FormasDeVivirSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandedRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Track active without React state — no re-renders during animation
  const activeRef = useRef<number | null>(null);

  const expand = (i: number) => {
    if (activeRef.current === i) return;
    activeRef.current = i;

    // Width: parallel, overwrite in-flight tweens
    cardRefs.current.forEach((card, j) => {
      if (!card) return;
      gsap.to(card, {
        flexBasis: j === i ? "100%" : "0%",
        duration: 0.42,
        ease: "power3.inOut",
        overwrite: true,
      });
    });

    // Content: fade out others instantly, fade in active with slight delay
    expandedRefs.current.forEach((el, j) => {
      if (!el) return;
      if (j === i) {
        gsap.to(el, { opacity: 1, duration: 0.3, delay: 0.18, ease: "power2.out", overwrite: true });
      } else {
        gsap.to(el, { opacity: 0, duration: 0.12, ease: "power2.in", overwrite: true });
      }
    });
  };

  const collapse = () => {
    if (activeRef.current === null) return;
    activeRef.current = null;

    cardRefs.current.forEach((card, j) => {
      if (!card) return;
      gsap.to(card, {
        flexBasis: formas[j].defaultBasis,
        duration: 0.42,
        ease: "power3.inOut",
        overwrite: true,
      });
    });

    expandedRefs.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, { opacity: 0, duration: 0.15, ease: "power2.in", overwrite: true });
    });
  };

  return (
    <section className="bg-white py-[100px] px-[80px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-[48px] leading-[1.1]">
          En Vibio hay muchas formas
          <br />
          de vivir en común
        </h2>

        <p className="mt-12 max-w-[845px] font-sans text-[18px] leading-[1.6] text-text-secondary whitespace-pre-line">
          {`La esencia de Vibio son las relaciones y lo compartido. Por eso en Vibio la privacidad no se sacrifica, se cuida. Y lo común no se impone, se elige.

Esta filosofía se traduce en un objetivo concreto: construir una comunidad de primera residencia. El 80% de las personas que viven en Vibio están aquí de forma permanente; el 20% restante son vecinos de media estancia, una población flotante que enriquece la comunidad y sirve de puerta de entrada para quienes quieren probar antes de dar el paso.

Para hacerlo posible, Vibio ofrece tres formas de vivienda colaborativa:`}
        </p>

        {/* Cards — no gap so collapsed cards disappear cleanly */}
        <div
          className="flex mt-12 h-[420px] rounded-[24px] overflow-hidden"
          onMouseLeave={collapse}
        >
          {formas.map((forma, i) => (
            <div
              key={forma.label}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative overflow-hidden cursor-pointer"
              style={{
                flexBasis: forma.defaultBasis,
                flexShrink: 0,
                flexGrow: 0,
                minWidth: 0,
                backgroundColor: forma.bg,
              }}
              onMouseEnter={() => expand(i)}
            >
              {/* Percentage + label: always visible */}
              <div className="absolute top-[32px] left-[32px] z-10 pointer-events-none">
                <p className="font-serif text-[88px] leading-[1]" style={{ color: forma.numColor }}>
                  {forma.percentage}
                </p>
                <p className="font-serif text-[28px] leading-[1.3] mt-1" style={{ color: forma.numColor }}>
                  {forma.label}
                </p>
              </div>

              {/* Expanded content — opacity 0 initially, GSAP controls it */}
              <div
                ref={(el) => { expandedRefs.current[i] = el; }}
                className="absolute inset-0 flex pointer-events-none"
                style={{ opacity: 0 }}
              >
                {/* Left: description at bottom */}
                <div className="flex flex-col justify-end p-[32px] pb-[36px] pr-0 w-[52%]">
                  <p className="font-sans text-[15px] leading-[1.6]" style={{ color: forma.descColor }}>
                    {forma.description}
                  </p>
                </div>
                {/* Right: image inset */}
                <div className="flex-1 py-[14px] pr-[14px] pl-[10px]">
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                    <Image src={forma.image} alt={forma.label} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
