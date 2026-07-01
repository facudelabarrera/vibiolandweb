"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const profiles = [
  {
    image: "/images/card1.jpg",
    title: "Quien quiere salir de la ciudad sin perder comodidad",
    sienten: "Su carrera ya está afianzada. Han pasado décadas aguantando la ciudad por trabajo, por oportunidad, porque había que estar ahí. Ahora lo que les importa es otra cosa: tiempo, gente, un entorno que les siente bien.",
    buscan: "Vida saludable, silencio real, un paseo antes de cenar, un porche donde escuchar a los pájaros, vecinos con los que compartir una cena entre semana. Y también un médico cerca, una farmacia y un bar donde les conozcan.",
  },
  {
    image: "/images/card2.jpg",
    title: "Quien quiere criar a sus hijos cerca de la naturaleza",
    sienten: "Sienten que la ciudad no es el sitio que imaginaban para sus hijos. El ruido, el asfalto, la pantalla permanente. Quieren que los niños crezcan sabiendo plantar, conociendo a sus vecinos.",
    buscan: "Un colegio que no quede a hora y media. Otras familias con quienes compartir la crianza. Una casa con jardín. Un entorno donde los niños puedan moverse solos con seguridad.",
  },
  {
    image: "/images/card3.jpg",
    title: "Quien trabaja en remoto y quiere una base con sentido",
    sienten: "Llevan años trabajando desde casa. La pandemia les abrió la puerta y no la cerraron. Pero el piso de la ciudad ya no tiene sentido: pagan mucho por un espacio que no disfrutan.",
    buscan: "Conexión de fibra fiable. Un coworking cerca o en la propia comunidad. Silencio para concentrarse. Una comunidad activa con la que compartir la tarde, no solo el edificio.",
  },
  {
    image: "/images/card4.jpg",
    title: "Quien llega al final de un ciclo y reimagina su vida",
    sienten: "Los hijos ya son mayores, la hipoteca está pagada o casi. Han dedicado décadas a construir algo y ahora se preguntan: ¿para qué? Quieren que la siguiente etapa sea diferente.",
    buscan: "Una comunidad de personas parecidas a ellos, con las que tener conversaciones de verdad. Un proyecto de vida que les ilusione. Un territorio que tenga historia y futuro.",
  },
  {
    image: "/images/card5.jpg",
    title: "Quien quiere vivir de forma más coherente con sus valores",
    sienten: "La disonancia entre lo que piensan y cómo viven se ha vuelto insostenible. Reciclan, compran orgánico, leen sobre sostenibilidad, pero siguen viviendo en un bloque de 200 pisos.",
    buscan: "Una casa que genere su propia energía. Un huerto común. Un modelo que no dependa del coche. Vecinos con quienes compartir valores, no solo paredes.",
  },
  {
    image: "/images/card6.jpg",
    title: "Quien busca arraigarse en un lugar de verdad",
    sienten: "Han vivido en muchas ciudades, cambiado de casa más veces de las que recuerdan. Tienen todo en orden pero les falta algo fundamental: un lugar al que pertenecer.",
    buscan: "Un pueblo con historia y con futuro. Vecinos con quienes intercambiar, no solo convivir. Una casa que sea para siempre, o al menos para mucho tiempo.",
  },
];

export function ProfilesCarousel() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: carrusel horizontal full-bleed */}
      <div className="lg:hidden -mx-4 mt-8">
        <div
          className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory] [scroll-padding-left:16px]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-3 pl-4 pr-16">
            {profiles.map((profile, i) => (
              <div
                key={i}
                className="shrink-0 w-[75vw] rounded-[20px] overflow-hidden relative [scroll-snap-align:start]"
                style={{ aspectRatio: "410/468" }}
              >
                <Image
                  src={profile.image}
                  alt={profile.title}
                  fill
                  sizes="75vw"
                  className="object-cover"
                />

                {/* Plus button — visible when closed */}
                {openCard !== i && (
                  <button
                    type="button"
                    onClick={() => setOpenCard(i)}
                    aria-label="Ver más"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white/70 bg-black/20 flex items-center justify-center text-white"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                )}

                {/* Overlay — tap to close */}
                {openCard === i && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpenCard(null)}
                    onKeyDown={(e) => e.key === "Enter" && setOpenCard(null)}
                    className="absolute inset-0 p-5 flex flex-col gap-3 text-bg-default overflow-hidden cursor-pointer"
                    style={{ backgroundColor: "rgba(63,57,38,0.92)" }}
                  >
                    <p className="font-serif text-[17px] leading-[1.2]">{profile.title}</p>
                    <div className="flex flex-col gap-1">
                      <p className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-brand-gold">QUÉ SIENTEN</p>
                      <p className="font-sans text-[12px] leading-[1.5]">{profile.sienten}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-brand-gold">QUÉ BUSCAN</p>
                      <p className="font-sans text-[12px] leading-[1.5]">{profile.buscan}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA — mobile only, aligned left */}
        <div className="mt-5 px-4">
          <Link
            href="/vibios"
            className="inline-flex items-center justify-center bg-cta text-text-primary rounded-full px-5 py-1.5 font-sans text-[14px]"
          >
            Busca tu Vibio
          </Link>
        </div>
      </div>

      {/* Desktop: grid con overlay on hover */}
      <div className="hidden lg:block mt-12">
        <div className="grid grid-cols-3 gap-[8px]">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="group relative rounded-[20px] overflow-hidden cursor-default"
              style={{ aspectRatio: "410/468" }}
            >
              <div className="absolute inset-0">
                <Image
                  src={profile.image}
                  alt={profile.title}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0 p-[32px] flex flex-col gap-[24px] text-bg-default opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(63,57,38,0.92)" }}
              >
                <p className="font-serif text-[32px] leading-[1.15]">{profile.title}</p>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-brand-gold">QUÉ SIENTEN</p>
                  <p className="font-sans text-[15px] leading-[1.55]">{profile.sienten}</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-brand-gold">QUÉ BUSCAN</p>
                  <p className="font-sans text-[15px] leading-[1.55]">{profile.buscan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/vibios"
            className="inline-flex items-center justify-center bg-cta text-text-primary rounded-full px-[22px] py-[14px] h-[45px] font-sans text-[16px]"
          >
            Busca tu Vibio
          </Link>
        </div>
      </div>
    </>
  );
}
