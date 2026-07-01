import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComoFuncionaContactForm } from "@/components/sections/ComoFuncionaContactForm";
import { EscalasSection } from "@/components/sections/EscalasSection";
import { FormasDeVivirSection } from "@/components/sections/FormasDeVivirSection";
import { PasosSection } from "@/components/sections/PasosSection";
import { DisenoSection } from "@/components/sections/DisenoSection";
import { ProfilesCarousel } from "@/components/sections/ProfilesCarousel";

export const metadata: Metadata = {
  title: "Cómo funciona — Vibioland",
  description:
    "Del territorio a la vivienda: así se diseña cada comunidad Vibio. Entiende cómo se organiza y diseña cada Vibio.",
};

const convictionCards = [
  {
    category: "EL SUEÑO",
    title: "Lo bueno de vivir\nen el campo",
    body: "Cada vez somos más las personas que buscamos salir de las grandes ciudades. Soñamos con una casa más grande, una vida más tranquila, tomates que sepan a tomate, vecinas con las que compartir, parques donde no quemen los columpios, un cielo con más estrellas y fibra que aguante una videollamada.",
  },
  {
    category: "LA REALIDAD",
    title: "Lo duro de vivir\nen el campo",
    body: "Pero la vida en el campo tiene desafíos que no aparecen en las fotografías: averías un martes a las ocho, tuberías centenarias que no soportan las heladas, facturas de luz estratosféricas, tres autobuses al día, el cole a quince kilómetros, inviernos sin nadie con quien tomar un café. Son los motivos por los que mucha gente vuelve a la ciudad.",
  },
  {
    category: "NUESTRA PROPUESTA",
    title: "Hacer posible que vivas en el campo",
    body: "Vibio nace para que vivir mejor no se quede en el cajón de los sueños. Diseñamos la infraestructura que falta para que quedarse sea posible: comunidades energéticas, casas que apenas consumen, servicios compartidos, espacios comunes que generan comunidad, espacios que mejoran la biodiversidad y cuidan de nuestra salud.",
  },
];


const escalas = [
  { label: "El territorio", image: "/images/elterritorio.jpg" },
  { label: "La comunidad", image: "/images/lacomunidad.jpg" },
  { label: "La vivienda", image: "/images/tucasa.jpg" },
];

const timelineSteps = [
  {
    titleStyle: "mulish-semibold",
    title: "Primero, nos cuentas",
    body: "Quién eres, cuál es tu momento, qué tipo de vivienda necesitas y qué comunidad estás buscando.",
  },
  {
    titleStyle: "mulish-semibold",
    title: "Después, te orientamos",
    body: "Te ayudamos a encontrar el territorio, la comunidad y la casa que más sentido tienen para ti ahora.",
  },
  {
    titleStyle: "stix-italic",
    title: "Sin compromiso, pre-registro",
    body: "Te sumas a la comunidad de personas interesadas, recibes actualizaciones y participas en encuentros abiertos.",
  },
  {
    titleStyle: "stix",
    title: "Cuando estés listo, reserva",
    body: "Eliges tipología de vivienda y parcela. Se firma contrato de reserva y encuentras tu lugar en la comunidad.",
  },
  {
    titleStyle: "stix",
    title: "Mientras, se construye",
    body: "Pago el 20% al iniciar la obra. Subrogación hipotecaria con Triodos Bank. Seguimiento del proyecto.",
  },
  {
    titleStyle: "stix",
    title: "A continuación, mudanza",
    body: "Entrega de llaves tras 18-20 meses de construcción. Entras a una comunidad que ya es tuya. ¡Empieza tu nueva vida!",
  },
  {
    titleStyle: "stix",
    title: "Al final, ¡vivir!",
    body: "En una comunidad activa y resiliente, integrada en la naturaleza, con una casa que genera su propia energía, capta su propia agua y donde cultivar tu propio alimento.",
  },
];

const disenoSteps = [
  {
    number: "01",
    title: "Selección del territorio",
    body: "Buscamos territorios rurales con arraigo, accesibilidad, servicios y comunidad local activa. Pueblos donde el ayuntamiento quiere colaborar y donde todavía hay vida que proteger. El territorio manda: si no encaja, no hay Vibio.",
  },
  {
    number: "02",
    title: "Formación de la comunidad",
    body: "La comunidad se forma, se conoce y participa en el diseño del proyecto desde el primer día. Antes de convivir ya hay acuerdos sobre cómo se van a tomar decisiones, cómo se resuelven los conflictos, qué se hace en común y qué no. Se construye la comunidad antes que las casas.",
  },
  {
    number: "03",
    title: "Gobernanza y código ético",
    body: "Sociocracia para decidir, código ético contra la especulación, beneficio limitado al 15% para los promotores. Tres comisiones permanentes (gobernanza, biodiversidad y energía) trabajando desde antes de la obra.",
  },
  {
    number: "04",
    title: "Arquitectura y paisajismo",
    body: "Organizamos el terreno para fomentar la biodiversidad y la resiliencia del paisaje. Diseñamos viviendas para consumir menos y vivir mejor. Detrás de cada comunidad Vibio está sAtt, estudio fundador especializado en arquitectura pasiva y empresa B Corp, con 25 años de trayectoria y 450 obras construidas.",
  },
  {
    number: "05",
    title: "Arraigo e integración territorial",
    body: "Llegamos a convivir, a integrarnos y a aportar, no a sustituir. Primera residencia, no segunda: gente que se empadrona, compra en la tienda y está en el bar. Porque son los vecinos de verdad los que mantienen el médico, la escuela o la fibra óptica. Y eso es lo que queremos ser.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-[calc(100dvh-46px)] lg:h-dvh min-h-[600px] overflow-hidden">
        <Image
          src="/images/hero-comofunciona.png"
          alt="Comunidad Vibio en entorno natural"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-between px-4 pt-10 pb-10 lg:p-[80px]">
          <h1
            className="font-serif text-[48px] lg:text-[75px] leading-[1.15] lg:leading-[1.05] text-bg-default max-w-7xl mx-auto w-full"
            style={{ letterSpacing: "-0.5px" }}
          >
            <em>Del territorio a</em>
            <br className="lg:hidden" />
            <em> la vivienda: </em>
            <br className="hidden lg:block" />
            {"así"}
            <br className="lg:hidden" />
            {" se diseña cada"}
            <br className="lg:hidden" />
            {" comunidad"}
          </h1>
          <div className="flex flex-wrap gap-3 lg:gap-6 max-w-7xl mx-auto w-full">
            <Link
              href="#como-se-organiza"
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-bg-default bg-black/40 text-bg-default px-4 lg:px-6 py-1.5 lg:py-3 font-sans text-[14px] lg:text-[16px] font-medium"
            >
              Cómo se organiza
            </Link>
            <Link
              href="#como-se-disena"
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-bg-default bg-black/40 text-bg-default px-4 lg:px-6 py-1.5 lg:py-3 font-sans text-[14px] lg:text-[16px] font-medium"
            >
              Cómo se diseña
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Al campo se llega */}
      <section className="bg-white py-16 lg:py-[160px] px-4 lg:px-[80px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[32px] leading-[1.1] max-w-[800px] lg:hidden">
            Al campo se llega
            <br />
            por convicción.
            <br />
            Se abandona por
            <br />
            falta de condiciones.
            <br />
            Por eso existe vibio.
            <br />
            Para que quedarse
            <br />
            sea <em>siempre posible</em>.
          </h2>
          <h2 className="font-serif text-[48px] leading-[1.1] max-w-[800px] hidden lg:block">
            Al campo se llega por convicción.
            <br />
            Se abandona por falta de condiciones.
            <br />
            Por eso existe vibio.
            <br />
            Para que quedarse sea <em>siempre posible</em>.
          </h2>

          {/* Mobile: carrusel full-bleed alineado con el título. Desktop: flex-row normal */}
          <div className="-mx-4 lg:mx-0 mt-8 lg:mt-12">
            <div
              className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory] lg:[scroll-snap-type:none] [scroll-padding-left:16px] lg:[scroll-padding-left:0]"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex gap-4 lg:gap-[17px] pl-4 pr-20 lg:pl-0 lg:pr-0">
                {convictionCards.map(({ category, title, body }) => (
                  <div
                    key={category}
                    className="shrink-0 w-[75vw] lg:w-auto lg:flex-1 rounded-[24px] border border-bg-dark p-6 lg:p-[32px] flex flex-col gap-3 lg:gap-[17px] items-center text-center [scroll-snap-align:start] lg:[scroll-snap-align:none]"
                  >
                    <p className="font-sans text-[13px] lg:text-[16px] text-text-muted uppercase">
                      {category}
                    </p>
                    <p className="font-serif text-[20px] lg:text-[30px] leading-[1.3] text-text-primary whitespace-pre-line">
                      {title}
                    </p>
                    <p className="font-sans text-[14px] lg:text-[16px] leading-[1.6] text-text-secondary text-left lg:text-center">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Algunos rasgos */}
      <section className="bg-white py-12 lg:py-[100px] px-4 lg:px-[80px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[32px] lg:text-[48px] leading-[1.2] lg:leading-[1.1]">
            {"Estos son algunos rasgos"}
            <br className="lg:hidden" />
            {" que comparten"}
            <br className="hidden lg:block" />
            {" quienes"}
            <br className="lg:hidden" />
            {" ya forman parte de Vibio"}
          </h2>
          <ProfilesCarousel />
        </div>
      </section>

      {/* 4. Tres escalas */}
      <section id="como-se-organiza" className="bg-bg-alt py-12 lg:py-[100px] px-4 lg:px-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[72px] lg:items-start">
            <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1] lg:whitespace-nowrap shrink-0">
              Tres escalas y un modelo
              <br />
              común en cada vibio
            </h2>
            <p className="font-sans text-[18px] lg:text-[22px] font-normal lg:font-semibold leading-[1.4] tracking-[-0.044px] text-text-primary">
              Cada Vibio funciona en tres escalas al mismo tiempo: casa, comunidad y territorio. En cada una sabes siempre qué es tuyo, qué compartes y con quién.
            </p>
          </div>

          <EscalasSection />
        </div>
      </section>

      {/* 5. Formas de vivir en común */}
      <FormasDeVivirSection />

      {/* 6. Primero entendemos — horizontal scroll timeline */}
      <PasosSection />

      {/* 7. Proceso de diseño — vertical zigzag + animated circle */}
      <DisenoSection />

      {/* 8. Formulario de contacto */}
      <section className="bg-bg-default py-12 lg:py-[100px] px-4 lg:px-[80px]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">
          <div className="lg:flex-1 flex flex-col gap-6">
            <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1] text-black">
              Si sientes que Vibio puede ser para ti, escríbenos.
            </h2>
            <p className="font-sans text-[18px] lg:text-[22px] font-semibold leading-[1.4] text-text-primary">
              Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás, qué buscas y qué comunidad o territorio podrían encajar contigo.
            </p>
            <p className="font-sans text-[16px] lg:text-[18px] text-text-primary leading-[1.6]">
              También puedes comunicarte por teléfono al{" "}
              <a
                href="tel:+34655920839"
                className="font-semibold underline text-brand-gold"
              >
                +34 655 920 839
              </a>
            </p>
          </div>

          <div className="w-full lg:w-[592px]">
            <ComoFuncionaContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
