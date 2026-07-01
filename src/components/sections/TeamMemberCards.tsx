"use client";

import React, { useRef, useEffect } from "react";

const CARD_W = 305;
const CARD_H = 307;
const GAP = 23;
const SPEED = 0.5;
const SINGLE_W = 9 * (CARD_W + GAP); // 9 × 328 = 2952px

type Member = {
  src: string;
  imgStyle: React.CSSProperties;
  name: string;
  role: string;
  description: string;
};

const MEMBERS: Member[] = [
  {
    src: "/images/member1.png",
    imgStyle: { height: "145.6%", left: "-31.8%", top: "-8.14%", width: "146.56%" },
    name: "Iñaki Alonso",
    role: "Arquitecto y socio fundador",
    description: "Convierte ideas audaces en proyectos reales. Optimista por naturaleza, no acepta un «eso es imposible» sin comprobarlo antes.",
  },
  {
    src: "/images/member2.png",
    imgStyle: { height: "162.54%", left: "-15.25%", top: "-40.48%", width: "122.7%" },
    name: "Miguel Rico",
    role: "Socio fundador y visionario",
    description: "Sembró la semilla de la regeneración cuando no había nada y hoy ya está germinando. Su entusiasmo es contagioso.",
  },
  {
    src: "/images/member3.png",
    imgStyle: { height: "138.44%", left: "-4.38%", top: "-25.99%", width: "104.51%" },
    name: "Elisa Larrain",
    role: "Directora de Comunidades",
    description: "Ayuda a transformar grupos de gente en comunidades. Para ella no existen los extraños, solo personas con las que aún no ha charlado.",
  },
  {
    src: "/images/member4.png",
    imgStyle: { height: "161.34%", left: "0%", top: "-49.26%", width: "108.28%" },
    name: "Eduardo Ocaña",
    role: "Director de Comunicación",
    description: "Se encarga de contarle al mundo lo que aquí se construye. Cree que comunicar bien puede unir a personas que aún no se conocen.",
  },
  {
    src: "/images/member5.png",
    imgStyle: { height: "137.14%", left: "-22.7%", top: "-3.39%", width: "138.04%" },
    name: "Sergio González",
    role: "Director financiero",
    description: "Domina los números, pero lo que le apasiona son las personas. Siempre es el primero cuando hace falta echar una mano.",
  },
  {
    src: "/images/member6.png",
    imgStyle: { width: "100%", height: "136.2%", left: "0%", top: "-18%" },
    name: "Carmen Gil",
    role: "Directora de Diseño",
    description: "Cuida de que todo sea coherente y bello, desde la visión de conjunto hasta el último detalle. Perfeccionista confesa. Y se nota, para bien.",
  },
  {
    src: "/images/member7.png",
    imgStyle: { height: "150.62%", left: "-28.2%", top: "-9.43%", width: "152.57%" },
    name: "Ana Mallol",
    role: "Directora de Arquitectura",
    description: "Diseña los hogares y el urbanismo que los rodea. Tiene un ojo clínico para saber exactamente cuándo algo no está en su sitio.",
  },
  {
    src: "/images/member8.png",
    imgStyle: { height: "148.78%", left: "-24.57%", top: "-6.84%", width: "149.75%" },
    name: "Manuel Canal",
    role: "Bienvenida y atención a las personas",
    description: "Es la primera voz que te recibe y la que resuelve casi cualquier duda. Se le da bien algo que parece sencillo y no lo es: escuchar.",
  },
  {
    src: "/images/member9.png",
    imgStyle: { height: "124.36%", left: "-15.01%", top: "-12.06%", width: "125.18%" },
    name: "Víctor Díaz",
    role: "Arquitecto",
    description: "Diseña desde el terreno y desde las personas: cada detalle parte de entender cómo se va a vivir. Como buen músico, escucha antes de tocar.",
  },
];

export function TeamMemberCards() {
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current && innerRef.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -SINGLE_W) posRef.current += SINGLE_W;
        innerRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const inner = innerRef.current;
    if (!inner) return;
    pausedRef.current = true;
    posRef.current += dir === "right" ? -(CARD_W + GAP) : (CARD_W + GAP);
    if (posRef.current <= -SINGLE_W) posRef.current += SINGLE_W;
    if (posRef.current > 0) posRef.current -= SINGLE_W;
    inner.style.transition = "transform 0.4s ease";
    inner.style.transform = `translateX(${posRef.current}px)`;
    setTimeout(() => {
      if (inner) inner.style.transition = "none";
      pausedRef.current = false;
    }, 450);
  };

  const doubled = [...MEMBERS, ...MEMBERS];

  return (
    <div
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Track */}
      <div className="overflow-hidden pl-4 lg:pl-[80px]">
        <div ref={innerRef} className="flex" style={{ gap: `${GAP}px` }}>
          {doubled.map((member, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-[24px] overflow-hidden group cursor-default"
              style={{ width: `${CARD_W}px`, height: `${CARD_H}px` }}
            >
              {/* Photo — default state */}
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                <img
                  src={member.src}
                  alt={member.name}
                  className="absolute max-w-none pointer-events-none"
                  style={member.imgStyle}
                />
              </div>

              {/* Info overlay — visible on hover (desktop) or always (touch) */}
              <div
                className="absolute inset-0 p-[24px] flex flex-col opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity duration-300 text-bg-default"
                style={{ backgroundColor: "#847132" }}
              >
                <div className="flex flex-col gap-px">
                  <p className="font-serif text-[30px] leading-[1.2] tracking-[-0.3px]">
                    {member.name}
                  </p>
                  <p className="font-serif italic text-[18px] leading-normal">
                    {member.role}
                  </p>
                </div>
                <div style={{ flex: "0 0 114px" }} />
                <p className="font-sans text-[14px] leading-[18px]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-6 px-4 lg:px-[80px]">
        <button
          onClick={() => scroll("left")}
          aria-label="Anterior"
          className="w-[29px] h-[29px] rounded-full border border-text-primary flex items-center justify-center text-text-primary hover:opacity-60 transition-opacity"
        >
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
            <path d="M12 4.5H1M5.5 1L1 4.5L5.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Siguiente"
          className="w-[29px] h-[29px] rounded-full border border-text-primary flex items-center justify-center text-text-primary hover:opacity-60 transition-opacity"
        >
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
            <path d="M1 4.5h11M7.5 1L12 4.5L7.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
