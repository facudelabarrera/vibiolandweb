import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacta — Vibioland",
  description:
    "Hablemos. Si tenés dudas, querés conocer el proyecto o simplemente querés saber si Vibio es para ti, escribinos.",
};

const contactInfo = [
  { label: "Email", value: "hola@vibio.land", href: "mailto:hola@vibio.land" },
  { label: "Teléfono", value: "+34 655 920 839", href: "tel:+34655920839" },
];

export default function ContactaPage() {
  return (
    <>
      <section id="proponer-un-territorio" className="bg-bg-default pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <h1 className="font-serif text-5xl text-text-primary leading-tight mb-6">
                Hablemos
              </h1>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-12 max-w-sm">
                Si tenés dudas, querés conocer el proyecto o simplemente querés
                saber si Vibio es para vos, escribinos. Respondemos en menos de 48h.
              </p>

              <div className="space-y-6">
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
                      {label}
                    </p>
                    <a
                      href={href}
                      className="font-sans text-base text-text-primary hover:text-text-secondary transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
