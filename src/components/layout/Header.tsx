"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/equipo", label: "Equipo & Red" },
  { href: "/vivirenvibio", label: "Vivir en Vibio" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-default/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-[80px] flex py-3 md:py-6 items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="vibio.land"
              width={151}
              height={30}
              priority
              className="h-[22px] md:h-[30px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-[34px]">
            <nav className="flex items-center gap-[34px]">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-[18px] font-medium leading-[140%] tracking-[0.09px] text-bg-dark text-right hover:opacity-70 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Button href="/contacta" variant="amarillo" size="lg">
              Contacta
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-3 -mr-3"
            aria-label="Abrir menú"
          >
            <span className="block w-6 h-[1.5px] bg-brand-gold" />
            <span className="block w-6 h-[1.5px] bg-brand-gold" />
            <span className="block w-6 h-[1.5px] bg-brand-gold" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu — conditionally rendered so it never blocks the header */}
      {open && <div className="fixed inset-0 z-[60] bg-bg-default flex flex-col md:hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
            <Image
              src="/logo.svg"
              alt="vibio.land"
              width={151}
              height={30}
              priority
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="text-bg-dark p-1 -mr-1"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="17" y2="17" />
              <line x1="17" y1="1" x2="1" y2="17" />
            </svg>
          </button>
        </div>

        {/* Nav — pushed to bottom */}
        <nav className="flex-1 flex flex-col justify-end px-6 pb-12">
          <div className="border-t border-brand-gold" />

          <Link
            href="/como-funciona"
            onClick={() => setOpen(false)}
            className="py-5 font-sans text-[24px] font-normal text-bg-dark leading-none"
          >
            Cómo funciona
          </Link>
          <div className="border-t border-brand-gold" />

          <div className="py-5">
            <span className="font-sans text-[24px] font-normal text-bg-dark leading-none">
              Comunidades
            </span>
            <div className="flex flex-col mt-3 gap-2">
              <Link
                href="/higuera"
                onClick={() => setOpen(false)}
                className="font-sans text-[20px] text-brand-gold leading-none"
              >
                vibio.higuera
              </Link>
              <Link
                href="/berlanga"
                onClick={() => setOpen(false)}
                className="font-sans text-[20px] text-brand-gold leading-none"
              >
                vibio.berlanga
              </Link>
            </div>
          </div>
          <div className="border-t border-brand-gold" />

          <Link
            href="/vivirenvibio"
            onClick={() => setOpen(false)}
            className="py-5 font-sans text-[24px] font-normal text-bg-dark leading-none"
          >
            Vivir en Vibio
          </Link>
          <div className="border-t border-brand-gold" />

          <div className="pt-8">
            <Button href="/contacta" variant="amarillo" size="lg" onClick={() => setOpen(false)}>
              Contacta
            </Button>
          </div>
        </nav>
      </div>}
    </>
  );
}
