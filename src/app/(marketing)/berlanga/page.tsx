import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "vibio.berlanga — Berlanga de Duero, Soria",
  description:
    "Entre encinas y viñedos, a los pies del Castillo de Berlanga, en uno de los conjuntos medievales mejor conservados de España.",
};

export default function BerlangaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/vibio-berlanga.png"
          alt="Paisaje de Berlanga de Duero"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tierra-900/85 via-tierra-900/25 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 pb-20 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="default">Abierto</Badge>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-text-on-dark leading-none mb-4">
            vibio.berlanga
          </h1>
          <p className="font-sans text-lg text-gris-calido">
            Berlanga de Duero · Soria
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="bg-bg-default py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-6">
                Entre encinas y viñedos, a los pies del Castillo de Berlanga, en
                uno de los conjuntos medievales mejor conservados de España. Un
                pueblo pequeño con identidad propia y tejido social activo.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-6">
                A 2 horas de Madrid y a 45 minutos de Soria. Un lugar donde lo
                natural y lo histórico conviven con la misma naturalidad.
              </p>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                El proyecto está en fase de pre-registro. Si te interesa ser parte
                de la comunidad fundadora de vibio.berlanga, contacta con nosotros.
              </p>
            </div>

            <div className="bg-bg-alt rounded-2xl p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-6">
                Estado del proyecto
              </p>
              <div className="space-y-4">
                {[
                  ["Fase", "Pre-registro abierto"],
                  ["Distancia a Madrid", "2 horas"],
                  ["Distancia a Soria", "45 minutos"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-baseline border-b border-gris-claro/30 pb-4 last:border-0 last:pb-0">
                    <p className="font-sans text-xs uppercase tracking-widest text-text-muted">{label}</p>
                    <p className="font-sans text-sm font-medium text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-text-on-dark mb-8 max-w-lg leading-tight">
            ¿Te interesa vibio.berlanga?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button href="/contacta" variant="amarillo">
              Solicitar información
            </Button>
            <Button href="/higuera" variant="palido">
              Ver vibio.higuera
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
