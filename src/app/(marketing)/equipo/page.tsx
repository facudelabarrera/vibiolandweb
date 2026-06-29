import type { Metadata } from "next";
import Image from "next/image";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { AwardsCarousel } from "@/components/sections/AwardsCarousel";

export const metadata: Metadata = {
  title: "Equipo y Red — Vibioland",
  description:
    "Detrás de Vibio hay un equipo diverso: un estudio de arquitectura, una promotora ecológica y una red de más de veinte especialistas.",
};

const awards = [
  {
    year: "2025",
    prize: "PRIMER PREMIO",
    name: "Saint-Gobain Sostenibilidad",
    note: "«Estudio de Arquitectura» a sAtt por Edificio Pirita",
  },
  {
    year: "2023",
    prize: "PRIMER PREMIO",
    name: "Premio Especial Triodos",
    note: "a sAtt",
  },
  {
    year: "2021",
    prize: "PRIMER PREMIO",
    name: "Premios Latinoamérica Verde",
    note: "«Ciudades sostenibles:\nComunidad urbana» a sAtt por Entrepatios Las Carolinas",
  },
  {
    year: "2019",
    prize: "PRIMER PREMIO",
    name: "Green Solutions Awards",
    note: "«Rehabilitación sostenible» por la oficina Greenpeace",
  },
  {
    year: "2019",
    prize: "PRIMER PREMIO",
    name: "International Social Housing Festival",
    note: "«Collaborative Housing» a sAtt por Entrepatios Las Carolinas",
  },
  {
    year: "2015",
    prize: "SEGUNDO PREMIO",
    name: "Climate Champion Awards",
    note: "«Adaptación»",
  },
];

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-[100px] pb-[72px] px-[80px]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-[80px] items-start">
          <h1 className="font-serif text-[56px] leading-[1.1] tracking-[-1.12px] text-text-primary">
            Uniendo fuerzas para construir{" "}
            <em>algo diferente</em>
          </h1>
          <div className="flex flex-col gap-5 font-sans text-[18px] leading-[1.6] text-text-secondary pt-2">
            <p>
              Detrás de Vibio hay un equipo diverso de personas: un equipo
              fundador, una red de colaboradores y una comunidad de personas que
              han elegido formar parte.
            </p>
            <p>
              El proyecto lo impulsan sAtt, estudio de arquitectura sostenible
              con 25 años de experiencia, y Distrito Natural, promotora
              especializada en vivienda colaborativa y ecológica. A ellos se
              suma una red de más de veinte especialistas en ingeniería,
              paisajismo, agua, energía y gobernanza.
            </p>
            <p>
              Cada uno desde su lugar, todos convergiendo en la misma
              convicción: que las personas y los territorios rurales pueden
              prosperar juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Cards — full-bleed with hover reveal */}
      <section className="bg-white pb-[100px]">
        <TeamMemberCards />
      </section>

      {/* Divider */}
      <div className="w-full border-t border-text-primary/20" />

      {/* Partners */}
      <section className="bg-white py-[160px] px-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[155px]">
          {/* sAtt */}
          <div>
            <div className="relative mb-[24px] w-[120px] h-[63px]">
              <Image
                src="/images/logo-satt.png"
                alt="sAtt"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-sans text-[18px] leading-[1.6] text-text-secondary mb-[40px]">
              sAtt es la primera empresa de arquitectura y construcción B Corp
              de España. Nació en 2001 con una convicción que no ha cambiado:
              la arquitectura puede regenerar la relación entre personas y
              naturaleza. Más de 400 proyectos construidos y una trayectoria de
              premios nacionales e internacionales avalan un oficio que en Vibio
              encuentra su proyecto más transformador.
            </p>
            <div className="relative w-[37px] h-[73px]">
              <Image
                src="/images/logo-B-corporation.png"
                alt="Certified B Corporation"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Distrito Natural */}
          <div>
            <div className="relative mb-[24px] w-[259px] h-[72px]">
              <Image
                src="/images/logo-distritonatural.png"
                alt="Distrito Natural"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-sans text-[18px] leading-[1.6] text-text-secondary">
              Distrito Natural nació con una idea clara: los edificios pueden
              ser ecosistemas vivos que cuidan de las personas y de su entorno.
              Pioneros en cohousing ecológico en España y promotores del primer
              cohousing ecológico de Madrid, llevan la visión de Vibio al
              territorio: el paisaje, la biodiversidad, la relación entre lo
              construido y lo vivo. Porque Vibio no termina en las paredes de
              las casas, empieza donde la naturaleza y las personas se
              encuentran.
            </p>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="bg-bg-alt py-[100px]">
        <div style={{ paddingLeft: "max(80px, calc((100vw - 1200px) / 2))", paddingRight: "max(80px, calc((100vw - 1200px) / 2))" }}>
          <h2 className="font-serif text-[30px] leading-[1.3] text-text-primary mb-[87px]">
            Reconocimientos
          </h2>
        </div>
        <AwardsCarousel awards={awards} />
      </section>
    </>
  );
}
