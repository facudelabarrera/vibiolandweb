"use client";

import { useRef } from "react";

const CARD_W = 420;
const GAP = 14;

type Award = {
  year: string;
  prize: string;
  name: string;
  note: string;
};

export function AwardsCarousel({ awards }: { awards: Award[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: (CARD_W + GAP) * (dir === "right" ? 1 : -1),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex" style={{ gap: `${GAP}px` }}>
          {awards.map((award, i) => (
            <div
              key={i}
              className="shrink-0 rounded-[24px] bg-bg-subtle flex flex-col p-[32px]"
              style={{ width: `${CARD_W}px`, height: "268px" }}
            >
              <div className="flex justify-between items-center font-sans text-[18px] text-text-primary pb-[12px] border-b border-text-primary/30">
                <span>{award.year}</span>
                <span>{award.prize}</span>
              </div>
              <div className="flex-1 flex items-center justify-center py-[12px]">
                <p className="font-serif text-[30px] leading-[1.3] text-text-primary text-center">
                  {award.name}
                </p>
              </div>
              {award.note && (
                <p className="font-sans text-[18px] leading-[1.4] text-text-primary text-center whitespace-pre-line">
                  {award.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-[24px]">
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
