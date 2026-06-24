import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Equipo y Red — Vibioland",
  description:
    "Detrás de Vibio hay un equipo diverso: un estudio de arquitectura, una promotora ecológica y una red de más de veinte especialistas.",
};

const members = [
  { file: "/images/member1.png" },
  { file: "/images/member2.png" },
  { file: "/images/member3.png" },
  { file: "/images/member4.png" },
  { file: "/images/member5.png" },
  { file: "/images/member6.png" },
  { file: "/images/member7.png" },
  { file: "/images/member8.png" },
  { file: "/images/member9.png" },
];

const awards = [
  {
    year: "2025",
    prize: "Primer Premio",
    name: "Saint-Gobain Sostenibilidad",
    note: "«Estudio de Arquitectura» a sAtt por Edificio Pirita",
  },
  {
    year: "2023",
    prize: "Primer Premio",
    name: "Premio Especial Triodos",
    note: "«Ciudades sostenibles: Comunidad urbana» a sAtt por Entrepatios Las Carolinas",
  },
  {
    year: "2021",
    prize: "Primer Premio",
    name: "Premios Latinoamérica Verde",
    note: "«Rehabilitación sostenible» por la oficina Greenpeace",
  },
  {
    year: "2019",
    prize: "Primer Premio",
    name: "Green Solutions Awards",
    note: "«Adaptación»",
  },
  {
    year: "2019",
    prize: "Primer Premio",
    name: "International Social Housing Festival",
    note: "«Collaborative Housing» a sAtt por Entrepatios Las Carolinas",
  },
  {
    year: "2015",
    prize: "Segundo Premio",
    name: "Climate Champion Awards",
    note: "",
  },
];

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-default pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h1 className="font-serif text-5xl lg:text-6xl text-text-primary leading-tight">
              Uniendo fuerzas para construir algo diferente
            </h1>
            <div className="font-sans text-base text-text-secondary leading-relaxed space-y-5 pt-2">
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
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-bg-subtle py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {members.map(({ file }, i) => (
              <div key={i} className="aspect-square relative rounded-2xl overflow-hidden bg-bg-alt">
                <Image src={file} alt="Equipo Vibio" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company descriptions + logos */}
      <section className="bg-bg-default py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="h-12 relative mb-8 w-40">
                <Image src="/images/logo-satt.png" alt="sAtt" fill className="object-contain object-left" />
              </div>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                sAtt es la primera empresa de arquitectura y construcción B Corp
                de España. Nació en 2001 con una convicción que no ha cambiado:
                la arquitectura puede regenerar la relación entre personas y
                naturaleza. Más de 400 proyectos construidos y una trayectoria de
                premios nacionales e internacionales avalan un oficio que en Vibio
                encuentra su proyecto más transformador.
              </p>
            </div>
            <div>
              <div className="h-12 relative mb-8 w-52">
                <Image src="/images/logo-distritonatural.png" alt="Distrito Natural" fill className="object-contain object-left" />
              </div>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                Distrito Natural nació con una idea clara: los edificios pueden
                ser ecosistemas vivos que cuidan de las personas y de su entorno.
                Pioneros en cohousing ecológico en España y promotores del primer
                cohousing ecológico de Madrid, llevan la visión de Vibio al
                territorio: el paisaje, la biodiversidad, la relación entre lo
                construido y lo vivo.
              </p>
            </div>
          </div>
          <div className="mt-16 pt-12 border-t border-gris-claro/50 flex items-center gap-6">
            <div className="relative w-16 h-16">
              <Image src="/images/logo-B-corporation.png" alt="B Corporation" fill className="object-contain" />
            </div>
            <p className="font-sans text-sm text-text-muted max-w-sm leading-relaxed">
              sAtt es la primera empresa de arquitectura B Corp de España,
              certificada por su triple impacto: económico, social y medioambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-text-primary mb-16">
            Reconocimientos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map(({ year, prize, name, note }) => (
              <div
                key={name + year}
                className="bg-bg-default rounded-2xl p-8 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted">
                    {year}
                  </p>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-cta">
                    {prize}
                  </p>
                </div>
                <p className="font-serif text-xl text-text-primary">{name}</p>
                {note && (
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl lg:text-5xl text-text-on-dark mb-8 max-w-xl leading-tight">
            ¿Querés conocer al equipo en persona?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button href="/contacta" variant="amarillo">
              Hablemos
            </Button>
            <Button href="/como-funciona" variant="palido">
              Cómo funciona
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
