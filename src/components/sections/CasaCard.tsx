"use client";

import { useState } from "react";
import Image from "next/image";

type CasaCardProps = {
  name: string;
  sqm: string;
  images: string[];
  description: string;
};

export function CasaCard({ name, sqm, images, description }: CasaCardProps) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="bg-white rounded-[22px] overflow-hidden flex flex-col">
      {/* Name + sqm */}
      <div className="px-[24px] pt-[44px] flex justify-between items-baseline shrink-0">
        <p className="font-serif text-[30px] leading-[1.2] tracking-[-0.3px] text-[#242018]">
          {name}
        </p>
        <p className="font-serif leading-[1.2] tracking-[-0.3px] text-[#242018] text-right">
          <span className="text-[30px]">{sqm} m</span>
          <sup className="text-[19px]">2</sup>
        </p>
      </div>

      {/* Image */}
      <div className="relative mx-[24px] mt-[13px] h-[200px] lg:h-[319px] overflow-hidden shrink-0">
        <Image
          src={images[idx]}
          alt={name}
          fill
          sizes="548px"
          className="object-cover"
        />
      </div>

      {/* Navigation arrows — below/outside the image, outlined circles (no fill) */}
      {images.length > 1 && (
        <div className="flex justify-between px-[24px] pt-4 shrink-0">
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="w-8 h-8 rounded-full border border-[#242018] flex items-center justify-center hover:bg-[#242018]/5 transition-colors"
          >
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
              <path
                d="M12 4.5H1M5.5 1L1 4.5L5.5 8"
                stroke="#242018"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Imagen siguiente"
            className="w-8 h-8 rounded-full border border-[#242018] flex items-center justify-center hover:bg-[#242018]/5 transition-colors"
          >
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
              <path
                d="M1 4.5h11M7.5 1L12 4.5L7.5 8"
                stroke="#242018"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Description */}
      <div className="px-[24px] pt-5 pb-[16px]">
        <p className="font-sans text-[16px] leading-[1.6] lg:text-[23px] lg:leading-[32px] text-[#242018]">{description}</p>
      </div>

      {/* CTAs */}
      <div className="px-[24px] pb-[24px] mt-auto flex gap-2 lg:gap-[12px]">
        <button className="flex-1 h-9 lg:h-[45px] rounded-full bg-[#dedaa9] font-sans font-medium text-[14px] lg:text-[16px] text-[#15130c] hover:opacity-90 transition-opacity">
          Ver tour virtual
        </button>
        <button className="flex-1 h-9 lg:h-[45px] rounded-full bg-[#f1edcf] font-sans font-medium text-[14px] lg:text-[16px] text-[#242018] hover:opacity-90 transition-opacity">
          Descargar PDF
        </button>
      </div>
    </div>
  );
}
