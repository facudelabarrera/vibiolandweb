import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-bg-dark h-screen min-h-[700px] overflow-hidden">
      <Image
        src="/images/hero-home.png"
        alt="Vista aérea de Vibioland"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Arrow fijo al bottom del viewport */}
      <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-10">
        <svg width="12" height="32" viewBox="0 0 12 32" fill="none" className="text-bg-default opacity-80">
          <line x1="6" y1="0" x2="6" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M1 20L6 27L11 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Centrado absoluto sin padding que reduzca el ancho del texto */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center w-full max-w-[1200px] gap-16">
          <div className="flex flex-col items-center gap-6 w-full -translate-y-[80px]">
            <p className="font-sans text-[22px] font-semibold tracking-[-0.044px] text-bg-default leading-[1.4]">
              Comunidades y viviendas para la biodiversidad
            </p>
            <h1 className="font-serif text-[clamp(48px,_6.82vw,_98px)] leading-none text-bg-default w-full">
              Una alternativa real
              <br />a la vida en la
              <br />ciudad
            </h1>
          </div>

          <Link
            href="/como-funciona"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-black/25 border-[1.5px] border-bg-default text-bg-default font-sans text-[18px] leading-relaxed hover:bg-black/40 transition-colors whitespace-nowrap"
          >
            Así funciona Vibio
          </Link>
        </div>
      </div>
    </section>
  );
}
