"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ContentTextPhoto {
  type: "text-photo";
  subheading: string;
  paragraphs: string[];
  button?: { label: string; href: string };
  photo: string;
  photoAlt: string;
}

export interface ContentCarousel {
  type: "carousel";
  paragraph: string;
  photos: string[];
}

export interface ContentBulletsPhoto {
  type: "bullets-photo";
  subheading: string;
  lead: string;
  bullets: string[];
  photo: string;
  photoAlt: string;
}

export type AccordionContent =
  | ContentTextPhoto
  | ContentCarousel
  | ContentBulletsPhoto;

export interface InfoItem {
  icon: React.ReactNode;
  label: string;
  content: AccordionContent;
}

// ── Toggle icon (⊕ → ⊗ via rotation) ────────────────────────────────────────

function ToggleIcon({ open }: { open: boolean }) {
  return (
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
  );
}

// ── Content: text left + photo right ─────────────────────────────────────────

function TextPhotoContent({
  subheading,
  paragraphs,
  button,
  photo,
  photoAlt,
}: ContentTextPhoto) {
  return (
    <div className="grid grid-cols-[1fr_480px] gap-[48px] pb-[48px]">
      <div className="flex flex-col gap-[16px]">
        <h3 className="font-serif italic text-[22px] leading-[1.3] text-text-primary mb-[4px]">
          {subheading}
        </h3>
        {paragraphs.map((p, i) => (
          <p key={i} className="font-sans text-[16px] leading-[1.7] text-tierra-700">
            {p}
          </p>
        ))}
        {button && (
          <div className="mt-[8px]">
            <Button href={button.href} variant="lima" size="md">
              {button.label}
            </Button>
          </div>
        )}
      </div>
      <div className="relative min-h-[400px] rounded-[16px] overflow-hidden">
        <Image src={photo} alt={photoAlt} fill sizes="480px" className="object-cover" />
      </div>
    </div>
  );
}

// ── Content: short text + 3-photo carousel ────────────────────────────────────

function CarouselContent({ paragraph, photos }: ContentCarousel) {
  const [start, setStart] = useState(0);
  const PER_PAGE = 3;
  const maxStart = Math.max(0, photos.length - PER_PAGE);
  const visible = photos.slice(start, start + PER_PAGE);

  const NavBtn = ({
    dir,
    disabled,
    onClick,
  }: {
    dir: "prev" | "next";
    disabled: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Foto anterior" : "Foto siguiente"}
      className="w-[36px] h-[36px] rounded-full border border-tierra-600 flex items-center justify-center text-tierra-400 disabled:opacity-30 hover:bg-tierra-100 transition-colors"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        {dir === "prev" ? (
          <path d="M7 1L3 5l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M3 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );

  return (
    <div className="pb-[48px]">
      <div className="max-w-[600px] mb-[32px]">
        <p className="font-sans text-[16px] leading-[1.7] text-tierra-700">{paragraph}</p>
      </div>

      <div className="grid grid-cols-3 gap-[16px]">
        {visible.map((photo, i) => (
          <div key={start + i} className="relative h-[280px] rounded-[16px] overflow-hidden">
            <Image src={photo} alt="Interior Vibio" fill sizes="389px" className="object-cover" />
          </div>
        ))}
      </div>

      {photos.length > PER_PAGE && (
        <div className="flex items-center justify-between mt-[24px]">
          <NavBtn dir="prev" disabled={start === 0} onClick={() => setStart(Math.max(0, start - 1))} />
          <NavBtn dir="next" disabled={start >= maxStart} onClick={() => setStart(Math.min(maxStart, start + 1))} />
        </div>
      )}
    </div>
  );
}

// ── Content: bullets left + photo right ──────────────────────────────────────

function BulletsPhotoContent({
  subheading,
  lead,
  bullets,
  photo,
  photoAlt,
}: ContentBulletsPhoto) {
  return (
    <div className="grid grid-cols-[1fr_480px] gap-[48px] pb-[48px]">
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-serif italic text-[22px] leading-[1.3] text-text-primary mb-[4px]">
          {subheading}
        </h3>
        <p className="font-sans text-[16px] text-tierra-700 mb-[4px]">{lead}</p>
        <ul className="flex flex-col gap-[8px]">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-[10px]">
              <span className="w-[8px] h-[8px] rounded-full bg-tierra-500 mt-[6px] shrink-0" />
              <span className="font-sans text-[16px] text-tierra-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative min-h-[400px] rounded-[16px] overflow-hidden">
        <Image src={photo} alt={photoAlt} fill sizes="480px" className="object-cover" />
      </div>
    </div>
  );
}

// ── Accordion row ─────────────────────────────────────────────────────────────

function InfoRow({ icon, label, content }: InfoItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-tierra-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 py-[20px] text-left group"
        aria-expanded={open}
      >
        <span className="shrink-0 text-tierra-500 w-[40px] h-[40px] flex items-center justify-center">
          {icon}
        </span>
        <span className="flex-1 font-serif text-[36px] leading-none text-text-primary group-hover:opacity-80 transition-opacity">
          {label}
        </span>
        <ToggleIcon open={open} />
      </button>

      {open && (
        <div>
          {content.type === "text-photo" && <TextPhotoContent {...content} />}
          {content.type === "carousel" && <CarouselContent {...content} />}
          {content.type === "bullets-photo" && <BulletsPhotoContent {...content} />}
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function ProjectInfoAccordion({ items }: { items: InfoItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <InfoRow key={item.label} {...item} />
      ))}
      <div className="border-t border-tierra-300" />
    </div>
  );
}
