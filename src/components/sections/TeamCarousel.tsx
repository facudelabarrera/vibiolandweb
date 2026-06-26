"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const CARD_W = 305;
const CARD_H = 307;
const GAP = 23;
const SPEED = 0.5;

export function TeamCarousel({ photos }: { photos: string[] }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const singleWRef = useRef(0);

  useEffect(() => {
    if (innerRef.current) {
      singleWRef.current = innerRef.current.scrollWidth / 2;
      // Arranca a mitad del primer set para que haya fotos a ambos lados
      posRef.current = -(singleWRef.current / 2);
      innerRef.current.style.transform = `translateX(${posRef.current}px)`;
    }

    const tick = () => {
      if (!pausedRef.current && innerRef.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -singleWRef.current) {
          posRef.current += singleWRef.current;
        }
        innerRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const inner = innerRef.current;
    if (!inner) return;
    pausedRef.current = true;
    posRef.current += dir === "right" ? -(CARD_W + GAP) : (CARD_W + GAP);
    if (posRef.current <= -singleWRef.current) posRef.current += singleWRef.current;
    if (posRef.current > 0) posRef.current -= singleWRef.current;
    inner.style.transition = "transform 0.4s ease";
    inner.style.transform = `translateX(${posRef.current}px)`;
    setTimeout(() => {
      if (inner) inner.style.transition = "none";
      pausedRef.current = false;
    }, 450);
  };

  const all = [...photos, ...photos];

  return (
    <div
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Full-bleed track */}
      <div className="overflow-hidden">
        <div
          ref={innerRef}
          className="flex"
          style={{ gap: `${GAP}px` }}
        >
          {all.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-[20px] overflow-hidden"
              style={{ width: `${CARD_W}px`, height: `${CARD_H}px` }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — alineadas con el margen del contenido */}
      <div
        className="mx-auto flex items-center justify-between mt-6"
        style={{ maxWidth: "1280px", padding: "0 80px" }}
      >
        <button
          onClick={() => scroll("left")}
          aria-label="Anterior"
          className="w-[29px] h-[29px] rounded-full border border-text-primary flex items-center justify-center text-text-primary hover:opacity-60 transition-opacity"
        >
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
            <path d="M12 4.5H1M5.5 1L1 4.5L5.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Siguiente"
          className="w-[29px] h-[29px] rounded-full border border-text-primary flex items-center justify-center text-text-primary hover:opacity-60 transition-opacity"
        >
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
            <path d="M1 4.5h11M7.5 1L12 4.5L7.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
