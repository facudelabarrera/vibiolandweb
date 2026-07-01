"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const isMobileView = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;

// Distance between two adjacent slides (card width + gap), measured live
function measureStep(el: HTMLDivElement): number {
  const kids = el.children;
  if (kids.length < 2) return 0;
  return (kids[1] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft;
}

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

export type AccordionVariant = "default" | "higuera";

// ── Toggle icon ────────────────────────────────────────────────────────────────

function ToggleIcon({
  open,
  variant,
}: {
  open: boolean;
  variant: AccordionVariant;
}) {
  const size =
    variant === "higuera" ? "w-6 h-6 lg:w-[29px] lg:h-[29px]" : "w-[36px] h-[36px]";
  const border =
    variant === "higuera" ? "border-[#3f3926]/50" : "border-tierra-600";
  const color =
    variant === "higuera" ? "text-[#3f3926]" : "text-tierra-400";

  return (
    <span
      className={`shrink-0 ${size} rounded-full border ${border} flex items-center justify-center ${color} transition-transform duration-300 ease-in-out`}
      style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path
          d="M5.5 1v9M1 5.5h9"
          stroke="currentColor"
          strokeWidth="1.2"
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
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_480px] lg:gap-[48px] pb-[48px]">
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
      <div className="order-first lg:order-none relative h-[240px] lg:min-h-[400px] rounded-[16px] overflow-hidden">
        <Image src={photo} alt={photoAlt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
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
          <path
            d="M7 1L3 5l4 4"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M3 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );

  // ── Mobile: infinite centered carousel ───────────────────────────────────────
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = [...photos, ...photos, ...photos]; // 3 sets for seamless looping
  const startIndex = photos.length + Math.floor(photos.length / 2); // center of middle set

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el || !isMobileView()) return;
    const step = measureStep(el);
    if (step) el.scrollLeft = startIndex * step;
  }, [startIndex]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      if (!isMobileView()) return;
      clearTimeout(timer);
      // After the scroll settles, jump back into the middle set (invisible — same images)
      timer = setTimeout(() => {
        const step = measureStep(el);
        if (!step) return;
        const idx = Math.round(el.scrollLeft / step);
        const set = photos.length;
        if (idx < set) el.scrollLeft += set * step;
        else if (idx >= set * 2) el.scrollLeft -= set * step;
      }, 120);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [photos.length]);

  return (
    <div className="pb-[48px]">
      <div className="max-w-[600px] mb-[32px]">
        <p className="font-sans text-[16px] leading-[1.7] text-tierra-700">
          {paragraph}
        </p>
      </div>

      {/* Mobile: infinite horizontal carousel — one centered, neighbors peeking */}
      <div
        ref={trackRef}
        className="lg:hidden flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory]"
        style={{ scrollbarWidth: "none", paddingLeft: "12%", paddingRight: "12%" }}
      >
        {slides.map((photo, i) => (
          <div
            key={i}
            className="shrink-0 relative h-[220px] rounded-[16px] overflow-hidden [scroll-snap-align:center]"
            style={{ width: "76%" }}
          >
            <Image src={photo} alt="Interior Vibio" fill sizes="76vw" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Desktop: grid + nav (unchanged) */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-[16px]">
          {visible.map((photo, i) => (
            <div key={start + i} className="relative h-[280px] rounded-[16px] overflow-hidden">
              <Image src={photo} alt="Interior Vibio" fill sizes="389px" className="object-cover" />
            </div>
          ))}
        </div>

        {photos.length > PER_PAGE && (
          <div className="flex items-center justify-between mt-[24px]">
            <NavBtn
              dir="prev"
              disabled={start === 0}
              onClick={() => setStart(Math.max(0, start - 1))}
            />
            <NavBtn
              dir="next"
              disabled={start >= maxStart}
              onClick={() => setStart(Math.min(maxStart, start + 1))}
            />
          </div>
        )}
      </div>
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
  variant = "default",
}: ContentBulletsPhoto & { variant?: AccordionVariant }) {
  const bulletDot =
    variant === "higuera" ? "bg-[#847132]" : "bg-tierra-500";
  const textColor =
    variant === "higuera" ? "text-[#3f3926]" : "text-tierra-700";

  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_480px] lg:gap-[48px] pb-[48px]">
      <div className="flex flex-col gap-[12px]">
        <h3 className={`font-serif italic text-[22px] leading-[1.3] mb-[4px] ${textColor}`}>
          {subheading}
        </h3>
        <p className={`font-sans text-[16px] mb-[4px] ${textColor}`}>{lead}</p>
        <ul className="flex flex-col gap-[8px]">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-[10px]">
              <span className={`w-[8px] h-[8px] rounded-full ${bulletDot} mt-[6px] shrink-0`} />
              <span className={`font-sans text-[16px] ${textColor}`}>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-first lg:order-none relative h-[240px] lg:h-auto lg:min-h-[400px] rounded-[16px] overflow-hidden">
        <Image src={photo} alt={photoAlt} fill sizes="480px" className="object-cover" />
      </div>
    </div>
  );
}

// ── Accordion row ─────────────────────────────────────────────────────────────

function InfoRow({
  icon,
  label,
  content,
  variant,
  isLast,
  open,
  onToggle,
}: InfoItem & {
  variant: AccordionVariant;
  isLast: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const borderClass =
    variant === "higuera" ? "border-[#242018]" : "border-tierra-300";

  return (
    <div
      className={`border-t ${borderClass}${
        isLast ? ` border-b ${borderClass}` : ""
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between text-left group ${
          variant === "higuera" ? "py-3 px-2 lg:p-[24px]" : "gap-4 py-[20px]"
        }`}
        aria-expanded={open}
      >
        {variant === "higuera" ? (
          <div className="flex items-center gap-4 lg:gap-[48px]">
            <span className="shrink-0 w-9 lg:w-[48px] flex items-center justify-center">
              {icon}
            </span>
            <span className="font-serif text-[22px] lg:text-[48px] leading-[1.1] tracking-normal lg:tracking-[-0.96px] text-[#3f3926] group-hover:opacity-80 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </div>
        ) : (
          <>
            <span className="shrink-0 text-tierra-500 w-[40px] h-[40px] flex items-center justify-center">
              {icon}
            </span>
            <span className="flex-1 font-serif text-[36px] leading-none text-text-primary group-hover:opacity-80 transition-opacity">
              {label}
            </span>
          </>
        )}
        <ToggleIcon open={open} variant={variant} />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            style={{
              opacity: open ? 1 : 0,
              transitionDelay: open ? "80ms" : "0ms",
            }}
            className={`transition-opacity duration-200${variant === "higuera" ? " px-4 lg:px-[24px]" : ""}`}
          >
            {content.type === "text-photo" && <TextPhotoContent {...content} />}
            {content.type === "carousel" && <CarouselContent {...content} />}
            {content.type === "bullets-photo" && (
              <BulletsPhotoContent {...content} variant={variant} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function ProjectInfoAccordion({
  items,
  variant = "default",
}: {
  items: InfoItem[];
  variant?: AccordionVariant;
}) {
  // Single-open accordion: opening one closes the others
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <InfoRow
          key={item.label}
          {...item}
          variant={variant}
          isLast={i === items.length - 1}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
      {variant === "default" && <div className="border-t border-tierra-300" />}
    </div>
  );
}
