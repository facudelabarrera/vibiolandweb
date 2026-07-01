import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-bg-dark h-dvh min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero-home.png"
        alt="Vista aérea de Vibioland"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Down arrow — bottom anchor */}
      <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-10">
        <svg width="12" height="32" viewBox="0 0 12 32" fill="none" className="text-bg-default opacity-80">
          <line x1="6" y1="0" x2="6" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M1 20L6 27L11 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* CTA — mobile only: 24px above the arrow (arrow top = bottom-[152px], gap 24px → bottom-[176px]) */}
      <div className="absolute bottom-[176px] left-0 right-0 flex justify-center px-6 z-10 md:hidden">
        <Link
          href="/como-funciona"
          className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-black/25 border-[1.5px] border-bg-default text-bg-default font-sans text-[16px] leading-relaxed hover:bg-black/40 transition-colors whitespace-nowrap"
        >
          Así funciona Vibio
        </Link>
      </div>

      {/* Tagline — floats in the sky, independent of h1 */}
      <div className="absolute top-[90px] md:top-[120px] left-0 right-0 flex justify-center px-6 z-10">
        <p className="font-serif text-white text-center text-[18px] md:text-[20px] leading-[1.6] opacity-90">
          Comunidades y viviendas<br />
          para la biodiversidad
        </p>
      </div>

      {/* H1 + CTA desktop — vertically centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center w-full max-w-[1200px] gap-8 md:gap-16 -translate-y-[24px] md:-translate-y-[48px]">
          <h1 className="font-serif text-[40px] md:text-[clamp(48px,_6.82vw,_98px)] leading-[1.1] md:leading-none text-bg-default w-full">
            Una alternativa
            <span className="md:hidden">
              <br />real a la vida
              <br />en la ciudad
            </span>
            <span className="hidden md:inline">
              {" real"}
              <br />a la vida en la
              <br />ciudad
            </span>
          </h1>

          {/* Desktop CTA — stays in centered flow */}
          <Link
            href="/como-funciona"
            className="hidden md:inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-black/25 border-[1.5px] border-bg-default text-bg-default font-sans text-[18px] leading-relaxed hover:bg-black/40 transition-colors whitespace-nowrap"
          >
            Así funciona Vibio
          </Link>
        </div>
      </div>
    </section>
  );
}
