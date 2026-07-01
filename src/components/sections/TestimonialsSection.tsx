"use client";

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";

const MOBILE_QUERY = "(max-width: 1023px)";
function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getMobileSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

const testimonials = [
  {
    name: "Rosa María Zaragoza",
    role: "",
    quote:
      "El proyecto Vibio me enamoró nada más conocerlo. Nos une la visión de habitar este lugar con el uso de materiales respetuosos, criterios medioambientales de regeneración del entorno y la integración en el pueblo y entorno rural.",
    color: "#dbc56c",
  },
  {
    name: "Gustavo, 52 años",
    role: "Ser humano (y social)",
    quote:
      "Como animal racional, comparto una pulsión de pertenencia, pero no a una comunidad de vecinos gris en una ciudad contaminada. En Vibio están construyendo una comunidad a la que sí quiero pertenecer, alimentada desde la reconexión con la naturaleza.",
    color: "#a79854",
  },
  {
    name: "David, 59 años",
    role: "Cantautor",
    quote:
      "Me encanta su ubicación: una preciosa dehesa con algunos árboles de gran porte. El proyecto de urbanización y el tipo de construcción también me gustan. Por no hablar de la filosofía de construcción de comunidad.",
    color: "#ecc39c",
  },
  {
    name: "Ramón, 59 años",
    role: "A muy poco de jubilarme",
    quote:
      "Madrid me mata: prisas y hostilidad, así que me quiero ir. Vibio es el lugar adecuado: comunidad, respeto hacia las personas y respeto hacia nuestro querido y único planeta Tierra.",
    color: "#abc2d9",
  },
  {
    name: "Begoña",
    role: "Profesora, activa y jubilada",
    quote:
      "Yo era consciente de que vivir en el campo y en comunidad era lo mejor para mi salud, pero mi trabajo lo impedía. Ahora, es mi momento para crear un futuro mejor. La longevidad se sostiene en conceptos sencillos: contacto con la naturaleza, relaciones sanas, ejercicio cotidiano, buena alimentación, sueño reparador y ausencia de tóxicos.",
    color: "#dbc56c",
  },
  {
    name: "Miguel Rico",
    role: "",
    quote:
      "Para mi vivir en Vibio es vivir en la Naturaleza, el terreno en Higuera es impactantemente bello. También vivir en una comunidad de cuidado y apoyo. Hay un grupo grande que llevamos más de tres años haciendo actividades juntos. Tenemos muchas afinidades comunes y hemos ido construyendo una familia.",
    color: "#a79854",
  },
  {
    name: "Ana, 55 años",
    role: "Eterna aprendiz",
    quote:
      "Reconectarme a lo natural y rodearme de personas con las que crear vínculos bonitos y de calidad fueron los motivos por los que decidí unirme a Vibio.",
    color: "#ecc39c",
  },
];

const CARD_W = 408;
const SCROLL_STEP = CARD_W + 16;

// Mobile carousel geometry (card width + gap-3)
const MOBILE_CARD_W = 300;
const MOBILE_GAP = 12;

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, () => false);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? SCROLL_STEP : -SCROLL_STEP, behavior: "smooth" });
  };

  // On mobile, start centered on the 2nd card so cards peek on BOTH sides (no empty left margin).
  // Depends on isMobile so it runs AFTER the mobile inline sizes are applied (correct layout).
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    el.scrollLeft = MOBILE_CARD_W + MOBILE_GAP;
  }, [isMobile]);

  return (
    <section className="bg-bg-default py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-serif text-[32px] lg:text-[48px] leading-[1.15] lg:leading-[55px] tracking-[-0.96px] text-text-secondary mb-10 lg:mb-20">
          <em>Lo que dicen</em>
          {" quienes ya"}
          <br />
          forman parte de Vibio
        </h2>
      </div>

      {/* Scroll full-bleed sin scrollbar */}
      <div
        ref={scrollRef}
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory] lg:[scroll-snap-type:none]"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="flex gap-3 lg:gap-4 lg:[padding-left:max(24px,calc((100vw-1280px)/2+32px))] lg:pr-20"
          style={
            isMobile
              ? { paddingLeft: "calc(50vw - 150px)", paddingRight: "calc(50vw - 150px)" }
              : undefined
          }
        >
          {testimonials.map(({ name, role, quote, color }) => (
            <div
              key={name}
              className="shrink-0 rounded-[32px] p-6 lg:p-8 flex flex-col justify-between text-black [word-break:break-word] [scroll-snap-align:center] lg:[scroll-snap-align:none] lg:w-[408px] lg:h-[420px]"
              style={{
                backgroundColor: color,
                ...(isMobile ? { width: MOBILE_CARD_W, minHeight: 360 } : {}),
              }}
            >
              {/* Nombre y rol arriba */}
              <div className="flex flex-col gap-[2px]">
                <p className="font-sans text-[14px] font-normal leading-[1.6]">{name}</p>
                {role && <p className="font-sans text-[14px] font-normal leading-[1.6]">{role}</p>}
              </div>

              {/* Quote abajo */}
              <p style={{ fontFamily: "STIX Two Text", fontSize: "22px", fontStyle: "italic", fontWeight: 400, lineHeight: "27px" }}>
                «{quote}»
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — desktop only */}
      <div className="hidden lg:block mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="w-[42px] h-[42px] rounded-full border border-text-primary flex items-center justify-center text-text-primary hover:opacity-60 transition-opacity"
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
