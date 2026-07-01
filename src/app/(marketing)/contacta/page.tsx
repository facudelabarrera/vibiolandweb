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
      {/* Section 1 — dark amber: title + main contact form */}
      <section style={{ backgroundColor: "#A36A3A" }} className="px-4 py-12 lg:px-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">
          {/* Left col */}
          <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
            <h1 className="font-serif text-[30px] lg:text-[48px] leading-[1.1] text-white">
              Si sientes que Vibio puede ser para ti, escríbenos.
            </h1>
            <p className="font-sans font-semibold text-[18px] lg:text-[22px] leading-[1.4] tracking-[-0.044px] text-white">
              Este formulario nos ayuda a entender tu contexto: quién eres,
              dónde estás, qué buscas y qué comunidad o territorio podrían
              encajar contigo.
            </p>
            <p className="font-sans text-[23px] leading-normal text-white">
              También puedes comunicarte por teléfono al{" "}
              <a
                href="tel:+34655920839"
                className="font-semibold underline hover:opacity-80 transition-opacity"
                style={{ color: "#dbc56c" }}
              >
                +34 655 920 839
              </a>
            </p>
          </div>

          {/* Right col — form */}
          <div className="flex-1 min-w-0 max-w-[600px]">
            <ContactaMainForm />
          </div>
        </div>
      </section>

      {/* Section 2 — white: proponer territorio + prensa */}
      <section className="bg-white px-4 py-12 lg:px-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">

          {/* Proponer Territorio — border-b separates from Prensa */}
          <div
            className="flex flex-col gap-6 lg:flex-row lg:gap-[48px] lg:items-start pb-10 lg:pb-[100px]"
            style={{ borderBottom: "1px solid #3f3926" }}
          >
            <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
              <p className="font-sans font-semibold text-[16px] leading-normal uppercase" style={{ color: "#847132" }}>
                PROPONER TERRITORIO
              </p>
              <h2
                className="font-serif text-[30px] leading-[1.2]"
                style={{ color: "#5f5134", letterSpacing: "-0.3px" }}
              >
                ¿Conoces un pueblo o tienes un terreno que podría ser el próximo
                Vibio? Nos encanta recibir estas propuestas.
              </h2>
            </div>

            <div className="flex-1 min-w-0 max-w-[600px]">
              <ProponerTerritorioForm />
            </div>
          </div>

          {/* Prensa */}
          <div className="flex flex-row gap-4 lg:gap-6 items-start justify-between">
            <p
              className="font-sans font-semibold text-[16px] leading-normal uppercase shrink-0"
              style={{ color: "#847132" }}
            >
              PRENSA
            </p>
            <div className="flex flex-col gap-8 lg:gap-[46px] flex-1 min-w-0 lg:flex-initial lg:max-w-[700px]">
              <p className="font-sans text-[18px] lg:text-[23px] leading-normal" style={{ color: "#5f5134" }}>
                Si eres periodista o trabajas en medios y quieres saber más
                sobre Vibio, escríbenos directamente. Tenemos historia que contar.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-[99px]">
                <a
                  href="mailto:prensa@vibio.land"
                  className="font-sans text-[16px] lg:text-[18px] underline hover:opacity-80 transition-opacity"
                  style={{ color: "#a79854" }}
                >
                  prensa@vibio.land
                </a>
                <a
                  href="tel:+34655920839"
                  className="font-sans text-[16px] lg:text-[18px] underline hover:opacity-80 transition-opacity"
                  style={{ color: "#a79854" }}
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
