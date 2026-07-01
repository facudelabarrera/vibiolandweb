import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className="relative bg-bg-dark overflow-hidden flex items-center justify-center px-4 lg:px-[80px] h-dvh min-h-[600px]">
      {/* Background: video con fallback a imagen */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/cta-poster.jpg"
      >
        <source src="/images/lasta-cta-video.mp4" type="video/mp4" />
      </video>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-[54px] w-full max-w-[386px] text-center">
        <h2 className="font-serif text-[36px] lg:text-[48px] font-normal leading-[1.1] text-bg-default whitespace-pre-wrap">
          {`¿Estás pensando \nen cambiar de vida?`}
        </h2>
        <Link
          href="/contacta"
          className="inline-flex items-center justify-center px-8 lg:w-full lg:max-w-[305px] py-1.5 lg:py-4 rounded-full border-[1.5px] border-bg-default text-bg-default font-sans text-[14px] lg:text-[18px] font-normal leading-[1.6] hover:bg-bg-default/20 transition-colors"
          style={{ backgroundColor: "rgba(241,239,228,0.2)" }}
        >
          Hablemos
        </Link>
      </div>
    </section>
  );
}
