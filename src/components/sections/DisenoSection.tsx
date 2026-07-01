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
  const mobileRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);
  const mobileCircleRef = useRef<HTMLDivElement>(null);
  // Vertical offset from a mobile row's top to the number's center (aligns the dot)
  const MOBILE_DOT_Y = 24;
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  // Absolute document-Y centers of each row, cached so scroll handler does zero reflows
  const rowPositionsRef = useRef<number[]>([]);

  const isMobileView = () => window.matchMedia("(max-width: 1023px)").matches;

  const cachePositions = () => {
    // Read whichever tree is actually visible (desktop rows are display:none on mobile)
    const rows = isMobileView() ? mobileRowRefs.current : rowRefs.current;
    rowPositionsRef.current = rows.map((row) => {
      if (!row) return 0;
      return window.scrollY + row.getBoundingClientRect().top + row.offsetHeight / 2;
    });
  };

  const moveCircleTo = (row: HTMLDivElement) => {
    if (!circleRef.current) return;
    gsap.to(circleRef.current, {
      top: row.offsetTop + row.offsetHeight / 2,
      duration: 0.25,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const moveMobileCircleTo = (row: HTMLDivElement) => {
    if (!mobileCircleRef.current) return;
    gsap.to(mobileCircleRef.current, {
      y: row.offsetTop + MOBILE_DOT_Y,
      duration: 0.35,
      ease: "power3.out",
      overwrite: true,
    });
  };

  useEffect(() => {
    cachePositions();
    const first = rowRefs.current[0];
    if (first && circleRef.current) {
      gsap.set(circleRef.current, { top: first.offsetTop + first.offsetHeight / 2 });
    }
    const mFirst = mobileRowRefs.current[0];
    if (mFirst && mobileCircleRef.current) {
      // Center via xPercent/yPercent, position via x/y transform (not top → robust with GSAP)
      gsap.set(mobileCircleRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: 6,
        y: mFirst.offsetTop + MOBILE_DOT_Y,
      });
    }
    window.addEventListener("resize", cachePositions);
    const mq = window.matchMedia("(max-width: 1023px)");
    mq.addEventListener("change", cachePositions);
    return () => {
      window.removeEventListener("resize", cachePositions);
      mq.removeEventListener("change", cachePositions);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      rowPositionsRef.current.forEach((pos, i) => {
        const dist = Math.abs(pos - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      if (closestIdx !== activeRef.current) {
        activeRef.current = closestIdx;
        setActive(closestIdx);
        // Move the active-step dot — desktop and mobile each have their own
        if (isMobileView()) {
          const row = mobileRowRefs.current[closestIdx];
          if (row) moveMobileCircleTo(row);
        } else {
          const row = rowRefs.current[closestIdx];
          if (row) moveCircleTo(row);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="como-se-disena" className="bg-cta py-12 lg:py-[100px] px-4 lg:px-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">
        <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1] text-black">
          Así abordamos el proceso de diseño:
        </h2>

        {/* Mobile: vertical timeline on the left, number above title, active dot */}
        <div className="lg:hidden relative flex flex-col gap-10 pl-9">
          {/* Vertical line — from the first dot down through the last row */}
          <div
            className="absolute w-px"
            style={{ left: "6px", top: "24px", bottom: "0", backgroundColor: "#3f3926" }}
          />

          {/* Single moving dot — GSAP animates its y-transform to the active step */}
          <div
            ref={mobileCircleRef}
            className="absolute rounded-full z-10"
            style={{
              left: 0,
              top: 0,
              width: "14px",
              height: "14px",
              backgroundColor: "#dbc56c",
              border: "2px solid #3f3926",
            }}
          />

          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                ref={(el) => { mobileRowRefs.current[i] = el; }}
                className="relative"
                style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.5s ease" }}
              >
                <p className="font-serif text-[48px] leading-[1] text-text-primary">
                  {step.number}
                </p>
                <p className="font-serif text-[20px] leading-[1.3] text-text-primary mt-3">
                  {step.title}
                </p>
                <p className="font-sans text-[15px] leading-[1.6] text-text-primary mt-2">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop: Timeline */}
        <div ref={containerRef} className="hidden lg:relative lg:flex flex-col gap-[36px]">

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
              width: "24px",
              height: "24px",
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
              <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[10px] items-end">
                {step.side === "left" && (
                  <>
                    <p className="w-full text-center font-serif text-[72px] leading-[1.05] text-text-primary">
                      {step.number}
                    </p>
                    <p className="text-right font-serif text-[30px] leading-[1.3] text-text-primary">
                      {step.title}
                    </p>
                    <p className="text-right font-sans text-[18px] leading-[1.6] text-text-primary">
                      {step.body}
                    </p>
                  </>
                )}
              </div>

              {/* Right column — even steps (1, 3) show here, left-aligned */}
              <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[10px] items-start">
                {step.side === "right" && (
                  <>
                    <p className="w-full text-center font-serif text-[72px] leading-[1.05] text-bg-dark">
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
