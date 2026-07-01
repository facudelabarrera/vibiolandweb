"use client";

import { useCallback, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import gsap from "gsap";

const MOBILE_QUERY = "(max-width: 1023px)";

function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

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
    mobileCollapsedH: 372,
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
    mobileCollapsedH: 152,
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
    mobileCollapsedH: 152,
  },
];

export function FormasDeVivirSection() {
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, () => false);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandedRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef<number | null>(null);

  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileMounted = useRef(false);

  const applyBasis = useCallback((active: number | null) => {
    cardRefs.current.forEach((card, j) => {
      if (!card) return;
      const basis =
        active === null ? formas[j].defaultBasis : active === j ? "100%" : "0%";
      gsap.set(card, { flexBasis: basis });
    });
  }, []);

  const expand = useCallback((i: number) => {
    if (activeRef.current === i) return;
    activeRef.current = i;

    cardRefs.current.forEach((card, j) => {
      if (!card) return;
      gsap.to(card, {
        flexBasis: j === i ? "100%" : "0%",
        duration: 0.42,
        ease: "power3.inOut",
        overwrite: true,
      });
    });

    expandedRefs.current.forEach((el, j) => {
      if (!el) return;
      if (j === i) {
        gsap.to(el, {
          opacity: 1,
          duration: 0.3,
          delay: 0.18,
          ease: "power2.out",
          overwrite: true,
        });
      } else {
        gsap.to(el, { opacity: 0, duration: 0.12, ease: "power2.in", overwrite: true });
      }
    });
  }, []);

  const collapse = useCallback(() => {
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
  }, []);

  useLayoutEffect(() => {
    applyBasis(activeRef.current);
    expandedRefs.current.forEach((el, j) => {
      if (!el) return;
      gsap.set(el, { opacity: activeRef.current === j ? 1 : 0 });
    });
  }, [isMobile, applyBasis]);

  // Mobile accordion — GSAP drives the height (measures "auto") and content fade
  useLayoutEffect(() => {
    mobileCardRefs.current.forEach((card, j) => {
      if (!card) return;
      const content = mobileContentRefs.current[j];
      const isOpen = mobileOpen === j;
      const isHidden = mobileOpen !== null && !isOpen;

      // First run: set collapsed state instantly (no animation on mount)
      if (!mobileMounted.current) {
        gsap.set(card, { height: formas[j].mobileCollapsedH, autoAlpha: 1 });
        if (content) gsap.set(content, { autoAlpha: 0 });
        return;
      }

      if (isHidden) {
        gsap.to(card, { height: 0, autoAlpha: 0, duration: 0.4, ease: "power3.inOut", overwrite: true });
        if (content) gsap.to(content, { autoAlpha: 0, duration: 0.15, ease: "power2.in", overwrite: true });
      } else if (isOpen) {
        gsap.to(card, { height: "auto", autoAlpha: 1, duration: 0.44, ease: "power3.inOut", overwrite: true });
        if (content)
          gsap.to(content, { autoAlpha: 1, duration: 0.3, delay: 0.14, ease: "power2.out", overwrite: true });
      } else {
        gsap.to(card, {
          height: formas[j].mobileCollapsedH,
          autoAlpha: 1,
          duration: 0.44,
          ease: "power3.inOut",
          overwrite: true,
        });
        if (content) gsap.to(content, { autoAlpha: 0, duration: 0.15, ease: "power2.in", overwrite: true });
      }
    });
    mobileMounted.current = true;
  }, [mobileOpen]);

  return (
    <section className="bg-white py-12 px-4 lg:py-[100px] lg:px-[80px]">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1]">
          En Vibio hay muchas
          <br />
          formas de vivir en común
        </h2>

        <p className="mt-12 max-w-[845px] font-sans text-[16px] lg:text-[18px] leading-[1.6] text-text-secondary whitespace-pre-line">
          {`La esencia de Vibio son las relaciones y lo compartido. Por eso en Vibio la privacidad no se sacrifica, se cuida. Y lo común no se impone, se elige.

Esta filosofía se traduce en un objetivo concreto: construir una comunidad de primera residencia. El 80% de las personas que viven en Vibio están aquí de forma permanente; el 20% restante son vecinos de media estancia, una población flotante que enriquece la comunidad y sirve de puerta de entrada para quienes quieren probar antes de dar el paso.

Para hacerlo posible, Vibio ofrece tres formas de vivienda colaborativa:`}
        </p>

        {/* ── Desktop: hover-expand con animación GSAP de flex-basis ── */}
        <div
          className="hidden lg:flex lg:flex-row mt-12 lg:h-[420px] rounded-[24px] overflow-hidden"
          onMouseLeave={() => {
            if (!isMobile) collapse();
          }}
        >
          {formas.map((forma, i) => (
            <div
              key={forma.label}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="relative w-full overflow-hidden cursor-pointer shrink-0 grow-0 min-h-0 min-w-0"
              style={{
                flexBasis: forma.defaultBasis,
                backgroundColor: forma.bg,
              }}
              onMouseEnter={() => {
                if (!isMobile) expand(i);
              }}
              onClick={() => expand(i)}
            >
              <div className="absolute top-[32px] left-[32px] z-10 pointer-events-none">
                <p
                  className="font-serif text-[88px] leading-[1]"
                  style={{ color: forma.numColor }}
                >
                  {forma.percentage}
                </p>
                <p
                  className="font-serif text-[28px] leading-[1.3] mt-1"
                  style={{ color: forma.numColor }}
                >
                  {forma.label}
                </p>
              </div>

              <div
                ref={(el) => {
                  expandedRefs.current[i] = el;
                }}
                className="absolute inset-0 flex flex-row pointer-events-none"
                style={{ opacity: 0 }}
              >
                <div className="flex flex-col justify-end flex-1 p-[32px] pb-[36px] pr-0 w-[52%]">
                  <p
                    className="font-sans text-[15px] leading-[1.6]"
                    style={{ color: forma.descColor }}
                  >
                    {forma.description}
                  </p>
                </div>
                <div className="flex flex-1 py-[14px] pr-[14px] pl-[10px]">
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                    <Image src={forma.image} alt={forma.label} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: colapsado usa proporción 60/20/20 (alto fijo); al abrir crece a alto natural ── */}
        <div className="lg:hidden mt-12 rounded-[24px] overflow-hidden flex flex-col">
          {formas.map((forma, i) => {
            const open = mobileOpen === i;
            return (
              <div
                key={forma.label}
                ref={(el) => {
                  mobileCardRefs.current[i] = el;
                }}
                className="relative cursor-pointer flex-none overflow-hidden"
                style={{ backgroundColor: forma.bg }}
                onClick={() => setMobileOpen(open ? null : i)}
              >
                {/* Icono plus coherente (rota a X) — esquina superior derecha, respeta el padding */}
                <span
                  aria-hidden
                  className="absolute top-5 right-5 z-10 w-7 h-7 rounded-full border border-current flex items-center justify-center transition-transform duration-300 ease-in-out"
                  style={{
                    color: forma.numColor,
                    transform: open ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M5.5 1v9M1 5.5h9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                {/* Header: número grande + título */}
                <div className="p-5 pr-16">
                  <p
                    className="font-serif text-[64px] leading-[0.75]"
                    style={{ color: forma.numColor }}
                  >
                    {forma.percentage}
                  </p>
                  <p
                    className="font-serif text-[24px] leading-[1.1] -mt-6"
                    style={{ color: forma.numColor }}
                  >
                    {forma.label}
                  </p>
                </div>

                {/* Contenido expandible: párrafo + imagen con radius — GSAP maneja altura y fade */}
                <div
                  ref={(el) => {
                    mobileContentRefs.current[i] = el;
                  }}
                  className="px-5 pb-6"
                >
                  <p
                    className="font-sans text-[15px] leading-[1.6]"
                    style={{ color: forma.descColor }}
                  >
                    {forma.description}
                  </p>
                  <div className="relative w-full aspect-[4/3] mt-5 rounded-[16px] overflow-hidden">
                    <Image src={forma.image} alt={forma.label} fill className="object-cover" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
