"use client";

import { useRef, useEffect } from "react";

const CARD_W = 305;
const CARD_H = 307;
const GAP = 23;
const SPEED = 0.5;

// Correct single-set width: n × (CARD_W + GAP) — not scrollWidth/2 which ignores inter-set gap
const SINGLE_W = 9 * (CARD_W + GAP); // 9 × 328 = 2952px

type CardDef = {
  src: string;
  imgStyle: React.CSSProperties;
};

const CARDS: CardDef[] = [
  {
    src: "/images/member1.png",
    imgStyle: { height: "145.6%", left: "-31.8%", top: "-8.14%", width: "146.56%" },
  },
  {
    src: "/images/member2.png",
    imgStyle: { height: "162.54%", left: "-15.25%", top: "-40.48%", width: "122.7%" },
  },
  {
    src: "/images/member3.png",
    imgStyle: { height: "138.44%", left: "-4.38%", top: "-25.99%", width: "104.51%" },
  },
  {
    src: "/images/member4.png",
    imgStyle: { height: "161.34%", left: "0%", top: "-49.26%", width: "108.28%" },
  },
  {
    src: "/images/member5.png",
    imgStyle: { height: "137.14%", left: "-22.7%", top: "-3.39%", width: "138.04%" },
  },
  {
    src: "/images/member6.png",
    // portrait 748×1024 → scale by width to cover 305×307 card
    // scaled: 305×417.5 → center vertically: top = −110.5/2/307 ≈ −18%
    imgStyle: { width: "100%", height: "136.2%", left: "0%", top: "-18%" },
  },
  {
    src: "/images/member7.png",
    imgStyle: { height: "150.62%", left: "-28.2%", top: "-9.43%", width: "152.57%" },
  },
  {
    src: "/images/member8.png",
    imgStyle: { height: "148.78%", left: "-24.57%", top: "-6.84%", width: "149.75%" },
  },
  {
    src: "/images/member9.png",
    imgStyle: { height: "124.36%", left: "-15.01%", top: "-12.06%", width: "125.18%" },
  },
];

export function TeamCarousel() {
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current && innerRef.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -SINGLE_W) posRef.current += SINGLE_W;
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
    if (posRef.current <= -SINGLE_W) posRef.current += SINGLE_W;
    if (posRef.current > 0) posRef.current -= SINGLE_W;
    inner.style.transition = "transform 0.4s ease";
    inner.style.transform = `translateX(${posRef.current}px)`;
    setTimeout(() => {
      if (inner) inner.style.transition = "none";
      pausedRef.current = false;
    }, 450);
  };

  const doubled = [...CARDS, ...CARDS];

  return (
    <div
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className="overflow-hidden">
        <div ref={innerRef} className="flex" style={{ gap: `${GAP}px` }}>
          {doubled.map((card, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-[24px] overflow-hidden"
              style={{ width: `${CARD_W}px`, height: `${CARD_H}px` }}
            >
              <img
                src={card.src}
                alt=""
                className="absolute max-w-none pointer-events-none"
                style={card.imgStyle}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex items-center justify-between mt-6 px-4 lg:px-[80px]">
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
