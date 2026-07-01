"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { flushSync } from "react-dom";

const DISCLAIMER =
  "Cada territorio exigirá una tipología de viviendas, pero todas ellas estarán pensadas para la eficiencia, tendrán diferentes modelos y podrán personalizarse con toppings. Alrededor de cada casa habrá unos 100 m² semi-privados, delimitados por vegetación y no por un muro.";

const escalas = [
  {
    label: "El territorio",
    image: "/images/elterritorio.jpg",
    arrowColor: "#F38163",
    tagline: "El pueblo,\nla sierra,\nel arroyo",
    content: [
      {
        title: "ECOLOGÍA",
        body: "Las casas producen más energía de la que consumen y almacenan carbono en su estructura. El agua que entra sale más limpia: recogida de pluviales, reutilización de aguas grises, depuración in situ. La energía fotovoltaica se comparte en comunidad, abierta también a los vecinos del pueblo.",
      },
      {
        title: "BIODIVERSIDAD",
        body: "Cada Vibio planta cientos de árboles de especies autóctonas: encinas, alcornoques, fresnos, cerezos, higueras, almendros... Un paisajismo diseñado para retener la lluvia, atraer fauna autóctona y darle cobijo con cajas nido, charcas y hoteles de insectos.",
      },
      {
        title: "ECONOMÍA LOCAL",
        body: "Se priorizan proveedores y profesionales del territorio. La llegada de nuevos habitantes mantiene o activa servicios, comercio y emprendimiento local.",
      },
      {
        title: "RELACIÓN CON EL PUEBLO",
        body: "El territorio manda. Llegamos a escuchar antes que a proponer. Colaboramos con el ayuntamiento, las asociaciones y los vecinos desde el inicio, y los nuevos habitantes se integran en la vida del pueblo, no viven de espaldas a él.",
      },
    ],
  },
  {
    label: "La comunidad",
    image: "/images/lacomunidad.jpg",
    arrowColor: "#abc2d9",
    tagline: "Plazas,\njardines,\nhuerto,\ncoworking",
    content: [
      {
        title: "LAS PLAZAS",
        body: "Lugares de encuentro, juegos para los peques, actividades en grupo, comer al sol. Cada plaza tiene un espacio común, un taller de herramientas y mesas de picnic. En vez de una lavadora y una taladradora por casa, equipamientos compartidos y bien mantenidos.",
      },
      {
        title: "ESPACIOS COMUNES",
        body: "Un espacio social y multiusos con cocina, sala grande, coworking por las mañanas y bar comedor por las tardes. Huertos, anfiteatro para eventos, alberca para baño, un espacio para el bienestar y estacionamiento público. Cada Vibio define los suyos según el territorio y la comunidad que lo habita.",
      },
      {
        title: "CONSUMO Y ENERGÍA",
        body: "Cada vivienda produce entre 6 y 8 kWp de energía fotovoltaica, más de lo que consume. El excedente alimenta una comunidad energética compartida, abierta también a los vecinos del pueblo. Los huertos comunes y el bosque comestible de las plazas cubren parte del consumo de alimentos de la comunidad.",
      },
      {
        title: "GOBERNANZA",
        body: "Modelo de gobernanza colaborativa. Decisiones por consentimiento. Código ético contra la especulación firmado por todas las familias. Beneficio del promotor limitado al 15% por contrato. Financiación con Triodos Bank, sin subvenciones.",
      },
    ],
  },
  {
    label: "Tu casa",
    image: "/images/tucasa.jpg",
    arrowColor: "#a79854",
    tagline: "Tu casa,\ntu parcela,\ntu\nintimidad",
    content: [
      {
        title: "CONSTRUCCIÓN Y MATERIALES",
        body: "Aislamiento de textiles reciclados, madera FSC (pino radiata y alerce), acabados naturales. Cada material elegido por su eficiencia, su durabilidad y su honestidad con el entorno. Construcción pensada para durar.",
      },
      {
        title: "LAS CASAS",
        body: "Cuatro tipologías entre 60 y 115 m² (Berta, Sunita, Carson, Mollison). Casa pasiva con aerotermia y fotovoltaica propia. Carbono cero o casi cero — y facturas muy reducidas — consumo eléctrico mensual entre 20 y 40 euros.",
      },
      {
        title: "LA PARCELA",
        body: "Entre 200 y 400 m². Perímetro de 100 m² semiprivado delimitado por plantación, no por muro. Conexión con el paisaje y privacidad real sin vallas.",
      },
      {
        title: "LOS TOPPINGS",
        body: "Zaguán, invernadero, tarima, pérgola con alicantinas, veranda, estufa, parking de bicis. Tu casa se adapta a ti, no al revés.",
      },
    ],
  },
];

const CARD_OFFSETS = [0.05, 0.18, 0.33];
const CARD_X      = [50,   70,   90];

export function EscalasSection() {
  // Desktop state
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const closedRef    = useRef<HTMLDivElement>(null);
  const openRef      = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLButtonElement | null)[]>([]);
  const tlRef        = useRef<gsap.core.Timeline | null>(null);
  const displayed    = escalas[displayedIndex];

  // Mobile state
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  useLayoutEffect(() => {
    gsap.set(openRef.current, { display: "none", clipPath: "inset(0 100% 0 0 round 24px)" });
  }, []);

  /* ── Desktop Open ─────────────────────────────────────────── */
  const handleOpen = (index: number) => {
    tlRef.current?.kill();
    flushSync(() => setDisplayedIndex(index));

    const container = containerRef.current!;
    const closed    = closedRef.current!;
    const open      = openRef.current!;
    const cards     = cardRefs.current.filter(Boolean) as HTMLButtonElement[];

    const fromH = container.offsetHeight;

    gsap.set(open, { display: "flex", visibility: "hidden", clipPath: "inset(0 100% 0 0 round 24px)" });
    const toH = open.scrollHeight;
    gsap.set(open, { display: "none", visibility: "visible" });

    gsap.set(container, { height: fromH, overflow: "hidden" });
    gsap.set(closed, { position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 });
    gsap.set(open, { display: "flex", clipPath: "inset(0 100% 0 0 round 24px)", zIndex: 1 });

    tlRef.current = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { clearProps: "height,overflow" });
        gsap.set(closed, { display: "none", clearProps: "position,top,left,right,zIndex" });
        gsap.set(open, { clearProps: "zIndex", clipPath: "inset(0 0% 0 0 round 24px)" });
      },
    })
      .to(open, { clipPath: "inset(0 0% 0 0 round 24px)", duration: 0.65, ease: "power3.inOut" }, 0)
      .to(cards[0], { x: CARD_X[0], opacity: 0, duration: 0.3, ease: "power2.in" }, CARD_OFFSETS[0])
      .to(cards[1], { x: CARD_X[1], opacity: 0, duration: 0.3, ease: "power2.in" }, CARD_OFFSETS[1])
      .to(cards[2], { x: CARD_X[2], opacity: 0, duration: 0.3, ease: "power2.in" }, CARD_OFFSETS[2])
      .to(container, { height: toH, duration: 0.55, ease: "power2.inOut" }, 0.05);
  };

  /* ── Desktop Close ────────────────────────────────────────── */
  const handleClose = () => {
    tlRef.current?.kill();

    const container = containerRef.current!;
    const closed    = closedRef.current!;
    const open      = openRef.current!;
    const cards     = cardRefs.current.filter(Boolean) as HTMLButtonElement[];

    const fromH = container.offsetHeight;

    gsap.set(cards, { x: 0, opacity: 1 });
    gsap.set(closed, { display: "flex", visibility: "hidden" });
    const toH = closed.scrollHeight;
    gsap.set(closed, { display: "none", visibility: "visible" });

    gsap.set(container, { height: fromH, overflow: "hidden" });
    gsap.set(closed, { display: "flex", position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 });
    gsap.set(cards, { x: -40, opacity: 0 });

    tlRef.current = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { clearProps: "height,overflow" });
        gsap.set(closed, { clearProps: "position,top,left,right,zIndex" });
        gsap.set(open, { display: "none", clipPath: "inset(0 100% 0 0 round 24px)" });
      },
    })
      .to(open, { clipPath: "inset(0 100% 0 0 round 24px)", duration: 0.5, ease: "power3.in" }, 0)
      .to(container, { height: toH, duration: 0.45, ease: "power2.inOut" }, 0)
      .to(cards[0], { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.2)
      .to(cards[1], { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.28)
      .to(cards[2], { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, 0.36);
  };

  return (
    <>
      {/* ── MOBILE: acordeón FAQ ── */}
      <div className="lg:hidden mt-8 flex flex-col gap-4">
        {escalas.map((escala, i) => {
          const isOpen = openMobile === i;
          return (
            <div key={escala.label}>
              <button
                type="button"
                onClick={() => setOpenMobile(isOpen ? null : i)}
                className="w-full h-[260px] relative text-left overflow-hidden rounded-[24px]"
              >
                <Image
                  src={escala.image}
                  alt={escala.label}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-center justify-between">
                  <span className="font-serif text-[26px] leading-[1.3] text-bg-default">
                    {escala.label}
                  </span>
                  <span
                    className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M5 11l5 5 5-5" stroke="#242018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? "2000px" : "0px", opacity: isOpen ? 1 : 0 }}
              >
                <div className="bg-white rounded-[24px] mt-2 p-5 flex flex-col gap-4">
                  {escala.tagline && (
                    <p className="font-serif text-[20px] leading-[1.3] text-text-primary">
                      {escala.tagline.replace(/\n/g, " ")}
                    </p>
                  )}
                  <div className="flex flex-col gap-3">
                    {escala.content.map(({ title, body }) => (
                      <p key={title} className="font-sans text-[14px] leading-[1.6] text-text-primary">
                        <span className="font-semibold">{title}. </span>
                        {body}
                      </p>
                    ))}
                  </div>
                  <p
                    className="font-serif italic text-[13px] leading-[1.6]"
                    style={{ color: escala.arrowColor }}
                  >
                    {DISCLAIMER}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP: animación GSAP ── */}
      <div className="hidden lg:block mt-[72px] relative" ref={containerRef}>

        {/* Panel cerrado: 3 cards */}
        <div ref={closedRef} className="flex flex-row gap-[19px]">
          {escalas.map((escala, i) => (
            <button
              key={escala.label}
              ref={(el) => { cardRefs.current[i] = el; }}
              onClick={() => handleOpen(i)}
              className="flex-1 h-[480px] relative rounded-[24px] overflow-hidden text-left"
            >
              <Image
                src={escala.image}
                alt={escala.label}
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-[32px] flex items-center justify-between">
                <span className="font-serif text-[30px] leading-[1.3] text-bg-default">
                  {escala.label}
                </span>
                <span className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="#242018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Panel abierto */}
        <div ref={openRef} className="flex gap-[4px]">
          <div className="w-[400px] shrink-0 relative rounded-[24px] overflow-hidden min-h-[480px]">
            <Image
              src={displayed.image}
              alt={displayed.label}
              fill
              sizes="400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <p className="absolute bottom-8 left-8 font-serif text-[30px] leading-[1.3] text-bg-default">
              {displayed.label}
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[24px] p-[40px] flex flex-col justify-between">
            <div className="flex gap-[40px]">
              {displayed.tagline && (
                <p className="font-serif text-[22px] leading-[1.3] text-text-primary whitespace-pre-line shrink-0 w-[180px]">
                  {displayed.tagline}
                </p>
              )}
              {displayed.content.length > 0 && (
                <div className="flex flex-col gap-[14px]">
                  {displayed.content.map(({ title, body }) => (
                    <p key={title} className="font-sans text-[14px] leading-[1.6] text-text-primary">
                      <span className="font-semibold">{title}. </span>
                      {body}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-end gap-[40px] mt-8">
              <button
                onClick={handleClose}
                className="shrink-0 w-[42px] h-[42px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: displayed.arrowColor }}
                aria-label="Cerrar"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M16 10H4M9 5l-5 5 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p
                className="font-serif italic text-[14px] leading-[1.6]"
                style={{ color: displayed.arrowColor }}
              >
                {DISCLAIMER}
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
