"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const steps = [
  {
    number: "01",
    title: "Selección del territorio",
    body: "Buscamos territorios rurales con arraigo, accesibilidad, servicios y comunidad local activa. Pueblos donde el ayuntamiento quiere colaborar y donde todavía hay vida que proteger. El territorio manda: si no encaja, no hay Vibio.",
    side: "left" as const,
  },
  {
    number: "02",
    title: "Formación de la comunidad",
    body: "La comunidad se forma, se conoce y participa en el diseño del proyecto desde el primer día. Antes de convivir ya hay acuerdos sobre cómo se van a tomar decisiones, cómo se resuelven los conflictos, qué se hace en común y qué no. Se construye la comunidad antes que las casas.",
    side: "right" as const,
  },
  {
    number: "03",
    title: "Gobernanza y código ético",
    body: "Sociocracia para decidir, código ético contra la especulación, beneficio limitado al 15% para los promotores. Tres comisiones permanentes (gobernanza, biodiversidad y energía) trabajando desde antes de la obra.",
    side: "left" as const,
  },
  {
    number: "04",
    title: "Arquitectura y paisajismo",
    body: "Organizamos el terreno para fomentar la biodiversidad y la resiliencia del paisaje. Diseñamos viviendas para consumir menos y vivir mejor. Detrás de cada comunidad Vibio está sAtt, estudio fundador especializado en arquitectura pasiva y empresa B Corp, con 25 años de trayectoria y 450 obras construidas.",
    side: "right" as const,
  },
  {
    number: "05",
    title: "Arraigo e integración territorial",
    body: "Llegamos a convivir, a integrarnos y a aportar, no a sustituir. Primera residencia, no segunda: gente que se empadrona, compra en la tienda y está en el bar. Porque son los vecinos de verdad los que mantienen el médico, la escuela o la fibra óptica. Y eso es lo que queremos ser.",
    side: "left" as const,
  },
];

export function DisenoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Move circle to a row's center (relative to container)
  const moveCircleTo = (row: HTMLDivElement) => {
    if (!circleRef.current) return;
    // offsetTop is relative to offsetParent; row's parent is the containerRef div
    const target = row.offsetTop + row.offsetHeight / 2;
    gsap.to(circleRef.current, {
      top: target,
      duration: 0.55,
      ease: "power2.inOut",
    });
  };

  // Set initial circle position after mount
  useEffect(() => {
    const first = rowRefs.current[0];
    if (first && circleRef.current) {
      gsap.set(circleRef.current, { top: first.offsetTop + first.offsetHeight / 2 });
    }
  }, []);

  // IntersectionObserver: trigger when row is >40% in a shrunk viewport (root margin)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(i);
              moveCircleTo(row);
            }
          });
        },
        {
          threshold: 0.4,
          // Shrink the effective viewport so the trigger fires closer to center screen
          rootMargin: "-15% 0px -15% 0px",
        }
      );
      obs.observe(row);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="como-se-disena" className="bg-cta py-[100px] px-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">
        <h2 className="font-serif text-[48px] leading-[1.1] text-black">
          Así abordamos el proceso de diseño:
        </h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative flex flex-col gap-[36px]">

          {/* Vertical center line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
            style={{ top: "30px", width: "1px", backgroundColor: "#3f3926" }}
          />

          {/* Moving circle — follows active step */}
          <div
            ref={circleRef}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border z-10"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#dbc56c",
              borderColor: "#3f3926",
              top: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { rowRefs.current[i] = el; }}
              className="flex gap-[48px] items-start"
              style={{
                opacity: i === active ? 1 : 0.3,
                transition: "opacity 0.5s ease",
              }}
            >
              {/* Left column — odd steps (0, 2, 4) show here, right-aligned */}
              <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[10px] items-end text-right">
                {step.side === "left" && (
                  <>
                    <p className="font-serif text-[72px] leading-[1.05] text-text-primary">
                      {step.number}
                    </p>
                    <p className="font-serif text-[30px] leading-[1.3] text-text-primary">
                      {step.title}
                    </p>
                    <p className="font-sans text-[18px] leading-[1.6] text-text-primary">
                      {step.body}
                    </p>
                  </>
                )}
              </div>

              {/* Right column — even steps (1, 3) show here, left-aligned */}
              <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[10px] items-start">
                {step.side === "right" && (
                  <>
                    <p className="font-serif text-[72px] leading-[1.05] text-bg-dark">
                      {step.number}
                    </p>
                    <p className="font-serif text-[30px] leading-[1.3] text-bg-dark">
                      {step.title}
                    </p>
                    <p className="font-sans text-[18px] leading-[1.6] text-bg-dark">
                      {step.body}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
