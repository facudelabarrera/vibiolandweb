"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitContact,
    null
  );

  if (state?.success) {
    return (
      <div className="bg-bg-alt rounded-2xl p-10 text-center">
        <p className="font-serif text-3xl text-text-primary mb-3">
          Mensaje recibido
        </p>
        <p className="font-sans text-sm text-text-secondary">
          Nos ponemos en contacto contigo en menos de 48h. Mientras tanto, si tenés alguna duda urgente: hola@vibio.land
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted">
            Nombre *
          </span>
          <input
            name="firstname"
            type="text"
            required
            placeholder="Tu nombre"
            className="bg-bg-default border border-gris-claro rounded-xl px-4 py-3 font-sans text-base text-text-primary placeholder:text-gris-calido focus:outline-none focus:border-brand-gold transition-colors"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted">
            Email *
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="bg-bg-default border border-gris-claro rounded-xl px-4 py-3 font-sans text-base text-text-primary placeholder:text-gris-calido focus:outline-none focus:border-brand-gold transition-colors"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted">
          Teléfono
        </span>
        <input
          name="phone"
          type="tel"
          placeholder="+34 600 000 000"
          className="bg-bg-default border border-gris-claro rounded-xl px-4 py-3 font-sans text-base text-text-primary placeholder:text-gris-calido focus:outline-none focus:border-brand-gold transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted">
          Mensaje
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="¿Qué te gustaría saber sobre Vibio?"
          className="bg-bg-default border border-gris-claro rounded-xl px-4 py-3 font-sans text-base text-text-primary placeholder:text-gris-calido focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </label>

      {state?.error && (
        <p className="font-sans text-sm text-red-600">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start inline-flex items-center justify-center rounded-full px-8 py-3 font-sans font-semibold text-sm bg-cta text-bg-dark hover:bg-brand-gold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p className="font-sans text-xs text-gris-calido leading-relaxed">
        Al enviar aceptas nuestra{" "}
        <a href="/privacidad" className="underline hover:text-text-muted transition-colors">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
