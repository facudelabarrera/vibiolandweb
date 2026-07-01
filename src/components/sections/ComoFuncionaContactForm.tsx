"use client";

export function ComoFuncionaContactForm() {
  const inputClass =
    "border border-brand-gold rounded-full px-4 py-2.5 w-full font-sans text-[14px] text-brand-gold placeholder:text-brand-gold placeholder:opacity-54 bg-transparent outline-none focus:ring-0 focus:border-brand-gold";

  const textareaClass =
    "border border-brand-gold rounded-[16px] px-4 py-2.5 w-full h-[120px] resize-none font-sans text-[14px] text-brand-gold placeholder:text-brand-gold placeholder:opacity-54 bg-transparent outline-none focus:ring-0 focus:border-brand-gold";

  const labelClass = "font-sans text-[14px] text-black";

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="bg-bg-default rounded-[32px] flex flex-col gap-[24px]">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Nombre</label>
            <input type="text" placeholder="Nombre" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Apellido</label>
            <input type="text" placeholder="Apellido" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Teléfono</label>
            <input type="tel" placeholder="Teléfono" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Correo Electrónico</label>
            <input type="email" placeholder="Correo Electrónico" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Edad</label>
            <input type="text" placeholder="Edad" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>¿Con quién te imaginas dando el paso?</label>
            <input type="text" placeholder="Solo/a, en pareja, familia..." className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>¿Qué tipo de casa te interesa?</label>
            <input type="text" placeholder="Cohousing, coliving, covivienda..." className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>¿Dónde te gustaría encontrar un Vibio?</label>
            <input type="text" placeholder="Región, provincia, pueblo..." className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>¿Qué te gustaría encontrar en Vibio?</label>
          <textarea
            placeholder="Cuéntanos qué buscas..."
            className={textareaClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-brand-gold shrink-0" />
          <span className="font-sans text-[13px] text-bg-dark">
            Acepto el envío de información comercial y mailings
          </span>
        </label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-brand-gold shrink-0" />
          <span className="font-sans text-[13px] text-bg-dark">
            Acepto las condiciones de las políticas de privacidad
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-cta rounded-full px-[22px] py-[14px] h-[45px] font-sans text-[16px] text-text-primary w-[203px] text-center"
      >
        Enviar
      </button>
    </div>
  );
}
