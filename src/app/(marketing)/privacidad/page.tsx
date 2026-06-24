import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — Vibioland",
};

export default function PrivacidadPage() {
  return (
    <section className="bg-bg-default pt-24 pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-text-primary mb-10">
          Política de privacidad
        </h1>
        <div className="font-sans text-sm text-text-secondary leading-relaxed space-y-6">
          <p className="text-text-muted uppercase tracking-widest text-xs">
            Pendiente de redacción por el equipo legal. Última actualización: 2025.
          </p>
        </div>
      </div>
    </section>
  );
}
