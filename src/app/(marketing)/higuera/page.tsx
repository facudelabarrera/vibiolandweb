import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "vibio.higuera — Higuera de las Dueñas, Ávila",
  description:
    "Cinco hectáreas junto al casco urbano del pueblo, con la Sierra de Gredos al norte y frente a 400 hectáreas de dehesa pública.",
};

const specs = [
  { value: "70", label: "viviendas" },
  { value: "60/115 m²", label: "superficie" },
  { value: "5", label: "hectáreas" },
  { value: "26", label: "pre-registros" },
  { value: "1:15h", label: "de Madrid" },
];

export default function HigueraPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/vibio-higuera.png"
          alt="Paisaje de Higuera de las Dueñas"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tierra-900/85 via-tierra-900/25 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 pb-20 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="en-diseno">En Diseño</Badge>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-text-on-dark leading-none mb-4">
            vibio.higuera
          </h1>
          <p className="font-sans text-lg text-gris-calido">
            Higuera de las Dueñas · Ávila
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="bg-bg-default py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                Cinco hectáreas junto al casco urbano del pueblo, con la Sierra de
                Gredos al norte, la de San Vicente al sur y frente a 400 hectáreas
                de dehesa pública.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                Un grupo de 80 familias lleva más de tres años construyendo
                comunidad antes de que exista la primera piedra. Son co-autores del
                proyecto: han participado en talleres de diseño, jornadas de
                convivencia y decisiones de gobernanza. Cuando se muden, ya se
                conocen.
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {specs.map(({ value, label }) => (
                <div key={label} className="bg-bg-alt rounded-xl p-5">
                  <p className="font-serif text-3xl text-text-primary leading-none mb-1">
                    {value}
                  </p>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-text-on-dark mb-8 max-w-lg leading-tight">
            ¿Te interesa vibio.higuera?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button href="/contacta" variant="amarillo">
              Solicitar información
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
