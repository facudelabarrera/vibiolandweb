"use client";

import { useRef, useState, useCallback } from "react";

const stats = [
  {
    value: "80",
    label: "FAMILIAS EN VIBIO",
    description:
      "Ya forman parte del primer Vibio. No son compradores anónimos: son co-autores que llevan dos años participando en el diseño del proyecto.",
  },
  {
    value: "2.000",
    label: "PERSONAS INTERESADAS",
    description:
      "Forman la comunidad de interesadas que confirma que no hablamos de un nicho sino de la necesidad creciente de encontrar otra forma de vivir.",
  },
  {
    value: "23,2M€",
    label: "DE INVERSIÓN DIRECTA EN VIBIO.HIGUERA",
    description:
      "Financiación cerrada con Triodos Bank (primer banco ético europeo, B Corp) y copromotores privados. Sin subvenciones, sin dependencia de ayudas públicas.",
  },
  {
    value: "70-80%",
    label: "CASAS MÁS EFICIENTES",
    description:
      "Que una vivienda rural convencional. Arquitectura pasiva, aerotermia, fotovoltaica, aislamiento con textiles reciclados. Consumo eléctrico de 20-50 € al mes y 22 toneladas de CO₂ capturadas por vivienda.",
  },
  {
    value: "400",
    label: "ÁRBOLES, 96 ESPECIES",
    description:
      "Restauración de la vegetación para atraer fauna, absorber agua y mejorar la biodiversidad del entorno durante décadas.",
  },
  {
    value: "15%",
    label: "BENEFICIO LIMITADO",
    description:
      "Vibio está alineado con los criterios de las Housing Associations de Europa, un modelo de beneficio limitado orientado al triple impacto económico, social y medioambiental.",
  },
];

const CARD_W = 340;
const GAP = 80;
const SCROLL_STEP = CARD_W + GAP;

export function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);

  const handleScroll = useCallback(() => {
    setAtStart((scrollRef.current?.scrollLeft ?? 0) <= 0);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? SCROLL_STEP : -SCROLL_STEP,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-cta py-24 lg:py-28">
      {/* Heading: contenido centrado */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.15] lg:leading-[55px] tracking-[-0.96px] text-text-primary mb-10 lg:mb-40">
          Datos que diferencian una
          <br />
          {"promesa de un "}
          <em>compromiso</em>
        </h2>
      </div>

      {/* Scroll full-bleed: sin right-boundary para que la card siempre asoma */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory] lg:[scroll-snap-type:none] [scroll-padding-left:16px] lg:[scroll-padding-left:0]"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="flex gap-3 lg:gap-[80px] pb-2"
          style={{
            paddingLeft: "max(16px, calc((100vw - 1280px) / 2 + 32px))",
            paddingRight: "max(16px, calc((100vw - 1280px) / 2 + 32px))",
          }}
        >
          {stats.map(({ value, label, description }) => (
            <div
              key={label}
              className="border-l border-text-primary pl-6 flex flex-col justify-between h-[432px] shrink-0 w-[75vw] lg:w-[340px] [scroll-snap-align:start] lg:[scroll-snap-align:none]"
            >
              <div>
                <p className="font-serif text-[64px] lg:text-[72px] text-text-primary leading-[1.05] mb-1">
                  {value}
                </p>
                <p className="font-sans text-[14px] text-black leading-relaxed uppercase tracking-wide">
                  {label}
                </p>
              </div>
              <p className="font-sans text-[18px] text-text-primary leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows: desktop only */}
      <div className="hidden lg:block mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className={`w-[42px] h-[42px] rounded-full border border-text-primary flex items-center justify-center text-text-primary transition-all duration-200 hover:opacity-60 ${atStart ? "invisible" : "visible"}`}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M16 10H4M9 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="w-[42px] h-[42px] rounded-full border border-text-primary flex items-center justify-center text-text-primary hover:opacity-60 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
