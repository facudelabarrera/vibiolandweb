"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";

const GAP = 16;
const ICON = 83;
// Desktop: each step ~412px. Mobile: narrower so the 2nd item peeks (scroll affordance).
const STEP_W = (2980 - 6 * GAP) / 7; // ≈ 412
const STEP_W_MOBILE = 270;

const MOBILE_QUERY = "(max-width: 1023px)";
function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getMobileSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

const steps = [
  {
    title: "Primero, nos cuentas",
    body: "Quién eres, cuál es tu momento, qué tipo de vivienda necesitas y qué comunidad estás buscando.",
  },
  {
    title: "Después, te orientamos",
    body: "Te ayudamos a encontrar el territorio, la comunidad y la casa que más sentido tienen para ti ahora.",
  },
  {
    title: "Sin compromiso, pre-registro",
    body: "Sin compromiso. Te sumas a la comunidad de personas interesadas, recibes actualizaciones y participas en encuentros abiertos.",
  },
  {
    title: "Cuando estés listo, reserva",
    body: "Eliges tipología de vivienda y parcela. Se firma contrato de reserva y encuentras tu lugar en la comunidad.",
  },
  {
    title: "Mientras, se construye",
    body: "Pago el 20% al iniciar la obra. Subrogación hipotecaria con Triodos Bank. Seguimiento del proyecto.",
  },
  {
    title: "A continuación, mudanza",
    body: "Entrega de llaves tras 18-20 meses de construcción. Entras a una comunidad que ya es tuya. ¡Empieza tu nueva vida!",
  },
  {
    title: "Al final, ¡vivir!",
    body: "En una comunidad activa y resiliente, integrada en la naturaleza, con una casa que genera su propia energía, capta su propia agua y donde cultivar tu propio alimento. Menos dependencia. Más vida.",
  },
];

export function PasosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, () => false);

  const stepW = isMobile ? STEP_W_MOBILE : STEP_W;
  const scrollAmt = stepW + GAP;
  const innerW = 7 * stepW + 6 * GAP;
  const iconLeft = 6 * scrollAmt - ICON / 2;

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: scrollAmt, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12 lg:py-[100px] px-4 lg:px-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[72px]">

        {/* Heading */}
        <div className="flex flex-col gap-[24px]">
          <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1] tracking-[-0.96px] text-text-primary">
            Primero entendemos
            <br />
            <em>qué estás buscando</em>.
            <br />
            Después hablamos
            <br />
            de proyecto.
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] text-text-primary">
            Sin prisas, sin presión. Cada paso se construye en común.
          </p>
        </div>

        {/* Timeline + arrow */}
        <div className="flex flex-col gap-[24px] items-end">
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Fixed-width inner container */}
            <div className="relative" style={{ width: `${innerW}px` }}>

              {/* Horizontal line — full width, behind icon */}
              <div
                className="absolute left-0 right-0 border-t border-text-primary"
                style={{ top: "41px" }}
              />

              {/* House icon — aligned with start of last step, centered on line */}
              <div
                className="absolute top-0 rounded-full border flex items-center overflow-hidden"
                style={{
                  left: `${iconLeft}px`,
                  width: "83px",
                  height: "83px",
                  backgroundColor: "#f1edcf",
                  borderColor: "#5f5134",
                  padding: "9px 10px 9px 8px",
                }}
              >
                <Image
                  src="/las-viviendas.svg"
                  alt="Tu casa"
                  width={65}
                  height={65}
                  className="object-contain"
                />
              </div>

              {/* Steps — start 83px (icon height) + 32px (gap) below container top */}
              <div
                className="flex gap-[16px]"
                style={{ paddingTop: "115px" }}
              >
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col gap-[14px] text-black"
                    style={{ flexBasis: `${stepW}px`, flexShrink: 0, flexGrow: 0, minWidth: 0 }}
                  >
                    {/* Tick mark: centered on the line (line at 41px, step starts at 115px → offset = -(115-27) = -88px) */}
                    {i < 6 && (
                      <div
                        className="absolute bg-text-primary"
                        style={{ top: "-88px", left: 0, width: "1px", height: "28px" }}
                      />
                    )}

                    {/* Title */}
                    <p className="font-serif italic text-[22px] leading-[1.3]">
                      {step.title}
                    </p>

                    {/* Body */}
                    <p className="font-sans text-[16px] leading-[1.6] text-text-primary">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow button — right side, navigates forward */}
          <button
            onClick={scrollNext}
            aria-label="Siguiente paso"
            className="group hidden lg:flex items-center justify-center rounded-full border border-text-primary hover:bg-text-primary transition-colors duration-200"
            style={{ width: "29px", height: "29px", flexShrink: 0 }}
          >
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              className="text-text-primary group-hover:text-white transition-colors duration-200"
            >
              <path
                d="M0 4.5h11M7.5 1l3.5 3.5L7.5 8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* CTAs */}
        <div className="flex flex-row gap-2 sm:gap-3 lg:gap-[16px] items-center">
          <Link
            href="/pre-registro"
            className="inline-flex items-center justify-center rounded-full h-[45px] font-sans text-[14px] sm:text-[16px] leading-[1.6] text-text-primary flex-1 sm:flex-none sm:w-[245px]"
            style={{ backgroundColor: "#dbc56c", border: "1.5px solid #dbc56c" }}
          >
            Hacer pre-registro
          </Link>
          <Link
            href="/contacta"
            className="inline-flex items-center justify-center rounded-full h-[45px] font-sans text-[14px] sm:text-[16px] leading-[1.6] flex-1 sm:flex-none sm:w-[245px]"
            style={{ backgroundColor: "#f1efe4", border: "1px solid #847132", color: "#847132" }}
          >
            Hablar con el equipo
          </Link>
        </div>
      </div>
    </section>
  );
}
