"use client";

import Image from "next/image";
import { useState } from "react";

const pillars = [
  {
    label: "LAS VIVIENDAS",
    heading: "Arquitectura\nde alta eficiencia",
    body: [
      "Casas con bajo impacto, pensadas para perdurar en un entorno que se regenera.",
      "Trabajamos con la Fundación para la Investigación del Clima y proyectamos cada Vibio pensando en las condiciones que habrá en el futuro. Casas pasivas, eficientes, preparadas para gastar poco y resistir los desafíos del clima y el paso del tiempo.",
    ],
    icon: "/las-viviendas.svg",
  },
  {
    label: "LA COMUNIDAD",
    heading: "Comunidad\ncon intención",
    body: [
      "Espacios compartidos, y respeto a la intimidad. Vivir en comunidad y cuidando tu privacidad",
      "Antes de convivir ya hay acuerdos sobre cómo se toman decisiones, cómo se resuelven los conflictos, qué se hace en común y qué no. Con reglas claras, un código ético y un modelo de gobernanza colaborativa. Vivir en una comunidad real, con tu propio espacio y en armonía con la naturaleza, es posible.",
    ],
    icon: "/la-comunidad.svg",
  },
  {
    label: "EL TERRITORIO",
    heading: "Arraigo\nterritorial",
    body: [
      "Vínculos que van más allá de tu vivienda: formar parte de un lugar que se transforma contigo.",
      "Vivir en Vibio es integrarse en el pueblo, en su día a día, en su futuro. Por eso, todo lo que hacemos beneficia a ambas comunidades: la que ya existía y la que llega para quedarse. Gran parte de la inversión se queda en economía local: empleo, formación en oficios, transporte o infraestructuras.",
    ],
    icon: "/el-territorio.svg",
  },
];

function AccordionCard({
  label,
  heading,
  body,
  icon,
  open,
  onToggle,
}: {
  label: string;
  heading: string;
  body: string[];
  icon: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="relative w-[94px] h-[88px] mb-8">
        <Image src={icon} alt={label} fill className="object-contain object-bottom" />
      </div>

      <button
        onClick={onToggle}
        className="flex items-start gap-3 w-full text-left"
        aria-expanded={open}
      >
        <div
          className="shrink-0 w-[29px] h-[29px] rounded-full border border-text-primary flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1V10M1 5.5H10" stroke="#242018" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-sans text-[14px] text-brand-gold leading-relaxed">{label}</p>
          <div className="font-serif text-[30px] text-text-primary leading-[1.3] whitespace-pre-line">
            {heading}
          </div>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="flex flex-col gap-4 mt-6 pl-[calc(29px+12px)]">
          {body.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-[18px] font-semibold leading-[24px] text-text-primary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-bg-default py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-serif text-[48px] leading-[1.1] tracking-[-0.96px] text-text-primary max-w-[700px] mb-[155px]">
          <em>Diseñamos comunidades</em>
          {" en entornos rurales para quienes buscan echar raíces"}
        </p>

        <div className="flex items-start gap-16 flex-wrap lg:flex-nowrap">
          {pillars.map((p, i) => (
            <AccordionCard
              key={p.label}
              {...p}
              open={activeIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
