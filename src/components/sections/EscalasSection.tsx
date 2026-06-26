"use client";

import { useState } from "react";
import Image from "next/image";

const DISCLAIMER =
  "Cada territorio exigirá una tipología de viviendas, pero todas ellas estarán pensadas para la eficiencia, tendrán diferentes modelos y podrán personalizarse con toppings. Alrededor de cada casa habrá unos 100 m² semi-privados, delimitados por vegetación y no por un muro.";

const escalas = [
  {
    label: "El territorio",
    image: "/images/elterritorio.jpg",
    arrowColor: "#F38163",
    tagline: null,
    content: [] as { title: string; body: string }[],
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

export function EscalasSection() {
  const [active, setActive] = useState<number | null>(null);

  const current = active !== null ? escalas[active] : null;

  return (
    <div className="mt-[72px]">
      {/* ── Closed: 3 cards ── */}
      {current === null && (
        <div className="flex gap-[19px]">
          {escalas.map((escala, i) => (
            <button
              key={escala.label}
              onClick={() => setActive(i)}
              className="flex-1 h-[380px] relative rounded-[24px] overflow-hidden text-left"
            >
              <Image src={escala.image} alt={escala.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-[32px] flex items-center justify-between">
                <span className="font-serif text-[30px] leading-[1.3] text-bg-default">
                  {escala.label}
                </span>
                {/* White circle → */}
                <span className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="#242018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── Open: split layout ── */}
      {current !== null && (
        <div className="flex gap-[4px] min-h-[500px]">
          {/* Left: image card */}
          <div className="w-[400px] shrink-0 relative rounded-[24px] overflow-hidden">
            <Image src={current.image} alt={current.label} fill sizes="400px" className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <p className="absolute bottom-8 left-8 font-serif text-[30px] leading-[1.3] text-bg-default">
              {current.label}
            </p>
          </div>

          {/* Right: content panel */}
          <div className="flex-1 bg-white rounded-[24px] p-[40px] flex flex-col justify-between">
            {/* Main content */}
            <div className="flex gap-[40px]">
              {current.tagline && (
                <p className="font-sans text-[22px] font-semibold leading-[1.3] text-text-primary whitespace-pre-line shrink-0 w-[180px]">
                  {current.tagline}
                </p>
              )}
              {current.content.length > 0 && (
                <div className="flex flex-col gap-[14px]">
                  {current.content.map(({ title, body }) => (
                    <p key={title} className="font-sans text-[14px] leading-[1.6] text-text-primary">
                      <span className="font-semibold">{title}. </span>
                      {body}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom: back arrow + disclaimer */}
            <div className="flex items-end gap-[40px] mt-8">
              <button
                onClick={() => setActive(null)}
                className="shrink-0 w-[42px] h-[42px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: current.arrowColor }}
                aria-label="Cerrar"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M16 10H4M9 5l-5 5 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p
                className="font-sans text-[14px] leading-[1.6]"
                style={{ color: current.arrowColor }}
              >
                {DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
