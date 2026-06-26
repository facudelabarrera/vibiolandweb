import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComoFuncionaContactForm } from "@/components/sections/ComoFuncionaContactForm";
import { EscalasSection } from "@/components/sections/EscalasSection";
import { FormasDeVivirSection } from "@/components/sections/FormasDeVivirSection";
import { PasosSection } from "@/components/sections/PasosSection";
import { DisenoSection } from "@/components/sections/DisenoSection";

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

const galleryImages = [
  "/images/card1.jpg",
  "/images/card2.jpg",
  "/images/card3.jpg",
  "/images/card4.jpg",
  "/images/card5.jpg",
  "/images/card6.jpg",
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
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-end">
        <Image
          src="/images/hero-comofunciona.png"
          alt="Comunidad Vibio en entorno natural"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-between p-[80px] pt-40 max-w-7xl mx-auto w-full">
          <div />
          <div className="flex flex-col gap-8">
            <h1
              className="font-serif text-[75px] leading-[1.05] tracking-[-1.5px] text-bg-default"
              style={{ letterSpacing: "-1.5px" }}
            >
              <em>Del territorio a la vivienda: </em>
              <br />
              así se diseña cada comunidad
            </h1>
            <div className="flex gap-6">
              <Link
                href="#como-se-organiza"
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-bg-default bg-black text-bg-default px-8 py-3 font-sans text-[16px] font-medium"
              >
                Cómo se organiza
              </Link>
              <Link
                href="#como-se-disena"
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-bg-default bg-black text-bg-default px-8 py-3 font-sans text-[16px] font-medium"
              >
                Cómo se diseña
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Al campo se llega */}
      <section className="bg-white py-[160px] px-[80px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[48px] leading-[1.1] max-w-[800px]">
            Al campo se llega por convicción.
            <br />
            Se abandona por falta de condiciones.
            <br />
            Por eso existe vibio.
            <br />
            Para que quedarse sea <em>siempre posible</em>.
          </h2>

          <div className="flex gap-[17px] mt-12">
            {convictionCards.map(({ category, title, body }) => (
              <div
                key={category}
                className="flex-1 rounded-[24px] border border-bg-dark p-[32px] flex flex-col gap-[17px] items-center text-center"
              >
                <p className="font-sans text-[16px] text-text-muted uppercase">
                  {category}
                </p>
                <p className="font-serif text-[30px] leading-[1.3] text-text-primary whitespace-pre-line">
                  {title}
                </p>
                <p className="font-sans text-[16px] leading-[1.6] text-text-secondary">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Algunos rasgos */}
      <section className="bg-white py-[100px] px-[80px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[48px] leading-[1.1] max-w-[800px]">
            Estos son algunos rasgos que comparten quienes ya forman parte de Vibio
          </h2>

          <div className="grid grid-cols-3 gap-[8px] mt-12">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative rounded-[20px] overflow-hidden"
                style={{ aspectRatio: "410/468" }}
              >
                <Image
                  src={src}
                  alt={`Rasgo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
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
      </section>

      {/* 4. Tres escalas */}
      <section id="como-se-organiza" className="bg-bg-alt py-[100px] px-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-[72px] items-start">
            <h2 className="font-serif text-[48px] leading-[1.1] whitespace-nowrap">
              Tres escalas y un modelo
              <br />
              común en cada vibio
            </h2>
            <p className="font-sans text-[22px] font-semibold leading-[1.4] tracking-[-0.044px] text-text-primary">
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
      <section className="bg-bg-default py-[100px] px-[80px]">
        <div className="max-w-7xl mx-auto flex gap-[48px] items-start">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="font-serif text-[48px] leading-[1.1] text-black">
              Si sientes que Vibio puede ser para ti, escríbenos.
            </h2>
            <p className="font-sans text-[22px] font-semibold leading-[1.4] text-text-primary">
              Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás, qué buscas y qué comunidad o territorio podrían encajar contigo.
            </p>
            <p className="font-sans text-[18px] text-text-primary leading-[1.6]">
              También puedes comunicarte por teléfono al{" "}
              <a
                href="tel:+34655920839"
                className="font-semibold underline text-brand-gold"
              >
                +34 655 920 839
              </a>
            </p>
          </div>

          <div className="w-[592px]">
            <ComoFuncionaContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
