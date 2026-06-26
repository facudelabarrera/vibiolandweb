"use client";

import { useState } from "react";
import Image from "next/image";

const razones = [
  {
    number: "01.",
    title: "Viviendas ecológicas",
    paragraphs: [
      "Diseño pasivo, madera y otros materiales naturales, autoproducción de energía y ahorro de agua. Hogares de bajo impacto y facturas mínimas.",
    ],
    photo: "/images/viviendas-ecologicas.png",
    photoAlt: "Interior bioclimático Vibio",
  },
  {
    number: "02.",
    title: "Restauración de la biodiversidad",
    paragraphs: [
      "Plantando árboles autóctonos, creando huertos, recuperando humedales o instalando cajas nido devolvemos la vida en todos sus sentidos a los entornos rurales.",
    ],
    photo: "/images/restauracion-biodiversidad.jpg",
    photoAlt: "Restauración de la biodiversidad",
  },
  {
    number: "03.",
    title: "Nuevos vecinos y vecinas",
    paragraphs: [
      "Familias con primera residencia en el pueblo que se integran con los habitantes locales. Así se recuperan comercios, colegios, farmacias y servicios y se revierte la despoblación y el envejecimiento en los entornos rurales.",
    ],
    photo: "/images/nuevos-vecinos.png",
    photoAlt: "Nuevos vecinos y vecinas Vibio",
  },
  {
    number: "04.",
    title: "Cultura colaborativa",
    paragraphs: [
      "Cohousing, coliving y espacios comunes: coworking, huertos, plazas, cocinas, talleres. El cuidado compartido y el sentimiento de comunidad es la esencia de los pueblos y de Vibio.",
    ],
    photo: "/images/cultura-colaborativa.png",
    photoAlt: "Cultura colaborativa Vibio",
  },
  {
    number: "05.",
    title: "Comunidades energéticas",
    paragraphs: [
      "Aprovechando los tejados, la producción de energía reduce las facturas para toda la comunidad. Y además contribuye a una transición energética descentralizada y justa.",
      "Produciendo renovables de manera compartida los pueblos ganan en soberanía energética, calidad del aire y cohesión social.",
    ],
    photo: "/images/comunidades-energeticas.png",
    photoAlt: "Comunidades energéticas Vibio",
  },
  {
    number: "06.",
    title: "Gestión inteligente del agua",
    paragraphs: [
      "Máxima reducción del consumo, reutilización de aguas grises y pluviales, depuración natural, plantación de vegetación que no precise riego.",
    ],
    photo: "/images/agua-inteligente.jpg",
    photoAlt: "Gestión inteligente del agua",
  },
  {
    number: "07.",
    title: "Empleo y economía locales",
    paragraphs: [
      "Emprendimiento verde y empleo local para fijar población y reactivar la economía rural.",
      "Actuamos en colaboración con los Centros de Innovación Territorial del Ministerio para la Transición Ecológica y el Reto Demográfico.",
    ],
    photo: "/images/economia-local.jpg",
    photoAlt: "Empleo y economía locales",
  },
  {
    number: "08.",
    title: "Programas de vivienda asequibles",
    paragraphs: [
      "Hacemos efectivo el derecho de acceso a una vivienda, especialmente entre los jóvenes.",
      "Una forma de reequilibrar el mercado inmobiliario.",
    ],
    photo: "/images/viviendas-asequibles.jpg",
    photoAlt: "Programas de vivienda asequibles",
  },
  {
    number: "09.",
    title: "Acción frente al cambio climático",
    paragraphs: [
      "Viviendas adaptadas al clima futuro, con mínima demanda energética y gasto de agua, construidas con madera y materiales de bajo impacto.",
    ],
    photo: "/images/cmbio-climatico.png",
    photoAlt: "Acción frente al cambio climático",
  },
  {
    number: "10.",
    title: "Participación activa y gobernanza colaborativa",
    paragraphs: [
      "En Vibio aplicamos modelos de toma de decisiones colectiva para que los proyectos se construyan desde dentro: con autonomía local, procesos claros y espacio para la diversidad de voces.",
    ],
    photo: "/images/gobernanza-colaborativa.png",
    photoAlt: "Gobernanza colaborativa Vibio",
  },
];

function RazonRow({
  number,
  title,
  paragraphs,
  photo,
  photoAlt,
}: {
  number: string;
  title: string;
  paragraphs: string[];
  photo: string;
  photoAlt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-tierra-700/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-[20px] text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-[48px] leading-[1.1] text-bg-dark group-hover:opacity-80 transition-opacity">
          <em>{number}</em> {title}
        </span>
        <span
          className="shrink-0 w-[36px] h-[36px] rounded-full border border-tierra-600 flex items-center justify-center text-tierra-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div className="grid grid-cols-[1fr_400px] gap-[48px] pb-[48px]">
          <div className="flex flex-col gap-[16px]">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-[16px] leading-[1.7] text-tierra-700">
                {p}
              </p>
            ))}
          </div>
          <div className="relative h-[220px] rounded-[16px] overflow-hidden">
            <Image src={photo} alt={photoAlt} fill sizes="400px" className="object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}

export function RazonesAccordion() {
  return (
    <div>
      {razones.map((r) => (
        <RazonRow key={r.number} {...r} />
      ))}
      <div className="border-t border-tierra-700/20" />
    </div>
  );
}
