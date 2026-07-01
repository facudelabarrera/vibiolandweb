"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const footerLinks = {
  COMUNIDADES: [
    { href: "/higuera", label: "vibio.higuera" },
    { href: "/berlanga", label: "vibio.berlanga" },
  ],
  CONÓCENOS: [
    { href: "/equipo", label: "Equipo & Red" },
    { href: "/faq", label: "FAQs" },
  ],
  CONTACTO: [
    { href: "mailto:hola@vibio.land", label: "hola@vibio.land" },
    { href: "tel:+34655920839", label: "+34 655 920 839" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    setSent(true);
  };

  return (
    <div>
      <p className="font-sans text-base text-text-primary leading-relaxed mb-2">NEWSLETTER</p>
      <p className="font-sans text-base text-text-primary leading-relaxed mb-4">
        Actualizaciones de los proyectos, una vez al mes, escritas por el equipo.
      </p>
      {sent ? (
        <p className="font-sans text-sm text-text-secondary">¡Suscrito! Gracias.</p>
      ) : (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tunombre@tucorreo.com"
              className="flex-1 min-w-0 rounded-[37px] border border-text-primary bg-transparent px-4 py-2.5 font-sans text-base text-text-primary placeholder:text-text-primary/50 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="shrink-0 bg-brand-gold text-text-primary font-sans text-sm font-medium rounded-[37px] px-5 py-2.5 hover:bg-text-secondary hover:text-text-on-dark transition-colors"
            >
              Suscribirme
            </button>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-4 h-4 rounded-sm border border-text-primary flex-shrink-0 flex items-center justify-center"
              onClick={() => setAccepted(!accepted)}
              style={{ backgroundColor: accepted ? "#242018" : "transparent" }}
            >
              {accepted && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <span className="font-sans text-xs text-bg-dark leading-relaxed">
              Acepto las condiciones de la{" "}
              <Link href="/privacidad" className="underline">
                política de privacidad
              </Link>
            </span>
          </label>
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-cta text-text-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 lg:pt-16 pb-10">

        {/* ── Mobile (Figma layout): logo+tagline → newsletter → 3-col nav + social ── */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Logo (SVG already includes the tagline) */}
          <Link href="/" className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-footer.svg"
              alt="vibio.land — Reencuentra. Rediseña. Regenera."
              className="h-16 w-auto object-contain object-left"
            />
          </Link>

          {/* Newsletter */}
          <NewsletterForm />

          {/* 3-column nav + social under CONTACTO */}
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-tight text-text-primary mb-3 whitespace-nowrap">
                  {group}
                </p>
                <ul className="space-y-1.5">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`font-sans text-[13px] text-text-primary hover:opacity-70 transition-opacity ${
                          group === "CONTACTO" ? "underline" : ""
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {group === "CONTACTO" && (
                  <div className="flex gap-2 mt-4">
                    {socialLinks.map(({ label, href, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 rounded-[8px] bg-text-primary text-cta flex items-center justify-center hover:opacity-90 transition-opacity"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop (unchanged) ── */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 mb-12">
          {/* Left: logo + links */}
          <div className="flex flex-col gap-12">
            {/* Logo */}
            <Link href="/" className="block">
              <Image
                src="/images/logo-satt.png"
                alt="vibio.land"
                width={200}
                height={50}
                className="object-contain object-left h-[50px] w-auto"
              />
            </Link>

            {/* Social icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-primary hover:text-text-secondary transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: nav + newsletter */}
          <div className="grid grid-cols-2 lg:grid-cols-[auto_auto_auto_1fr] gap-10">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="font-sans text-base font-normal text-text-primary mb-3">{group}</p>
                <ul className="space-y-2">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="font-sans text-sm text-text-primary/80 hover:text-text-primary transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2 lg:col-span-1">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
