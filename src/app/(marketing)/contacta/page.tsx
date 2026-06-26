import type { Metadata } from "next";
import { ContactaMainForm, ProponerTerritorioForm } from "@/components/sections/ContactaForms";

export const metadata: Metadata = {
  title: "Contacta — Vibioland",
  description:
    "Si sientes que Vibio puede ser para ti, escríbenos. También puedes proponer un territorio para el próximo proyecto.",
};

export default function ContactaPage() {
  return (
    <>
      {/* Section 1 — Hero: dark amber background + main contact form */}
      <section style={{ backgroundColor: "#A36A3A" }} className="px-[80px] py-[100px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[576px_576px] gap-[48px] items-start">
          {/* Left col */}
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-serif text-[48px] leading-[1.1] text-bg-dark">
              Si sientes que Vibio puede ser para ti, escríbenos.
            </h1>
            <p className="font-sans text-[23px] text-bg-dark">
              Este formulario nos ayuda a entender tu contexto: quién eres,
              dónde estás, qué buscas y qué comunidad o territorio podrían
              encajar contigo.
            </p>
            <p className="font-sans text-[18px] text-bg-dark">
              También puedes comunicarte por teléfono al{" "}
              <a
                href="tel:+34655920839"
                className="font-semibold underline text-brand-gold"
              >
                +34 655 920 839
              </a>
            </p>
          </div>

          {/* Right col — form */}
          <ContactaMainForm />
        </div>
      </section>

      {/* Section 2 — white background: Proponer territorio + Prensa */}
      <section className="bg-white px-[80px] pt-[100px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Two-column: tag+heading / form */}
          <div className="grid grid-cols-[576px_576px] gap-[48px] items-start">
            {/* Left col */}
            <div className="flex flex-col gap-[24px]">
              <p className="font-sans text-[16px] font-semibold text-tierra-600 tracking-[0.04em]">
                PROPONER TERRITORIO
              </p>
              <h2 className="font-serif text-[30px] leading-[1.2] text-tierra-700">
                ¿Conoces un pueblo o tienes un terreno que podría ser el próximo
                Vibio? Nos encanta recibir estas propuestas.
              </h2>
            </div>

            {/* Right col */}
            <ProponerTerritorioForm />
          </div>

          {/* Prensa section — separated by border-t, mt-[48px] */}
          <div className="mt-[48px] border-t border-tierra-700/20 pt-[24px] flex items-start">
            {/* Left: label */}
            <div className="w-[500px] shrink-0">
              <p className="font-sans text-[16px] font-semibold text-tierra-600">
                Prensa
              </p>
            </div>

            {/* Right: body + links */}
            <div className="flex flex-col gap-[46px]">
              <p className="font-sans text-[23px] text-tierra-700">
                Si eres periodista o trabajas en medios y quieres saber más
                sobre Vibio, escríbenos directamente.
              </p>
              <div className="flex items-center gap-[99px]">
                <a
                  href="mailto:prensa@vibio.land"
                  className="font-sans text-[18px] text-tierra-500 hover:opacity-80 transition-opacity"
                >
                  prensa@vibio.land
                </a>
                <a
                  href="tel:+34655920839"
                  className="font-sans text-[18px] text-tierra-500 hover:opacity-80 transition-opacity"
                >
                  +34 655 920 839
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
