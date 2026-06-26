"use client";

export function ContactaMainForm() {
  const inputClass =
    "border border-brand-gold rounded-full px-4 py-2.5 w-full font-sans text-[14px] text-brand-gold placeholder:text-brand-gold placeholder:opacity-60 bg-transparent outline-none focus:ring-0 focus:border-brand-gold";
  const textareaClass =
    "border border-brand-gold rounded-[16px] px-4 py-2.5 w-full h-[120px] resize-none font-sans text-[14px] text-brand-gold placeholder:text-brand-gold placeholder:opacity-60 bg-transparent outline-none focus:ring-0 focus:border-brand-gold";
  const labelClass = "font-sans text-[14px] text-bg-dark";

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Form box — amber fill */}
      <div
        className="rounded-[32px] p-[24px] flex flex-col gap-[24px]"
        style={{ backgroundColor: "#A77245" }}
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Nombre</label>
            <input type="text" placeholder="Nombre" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Apellido</label>
            <input type="text" placeholder="Apellido" className={inputClass} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Telefono</label>
            <input type="tel" placeholder="+34 2302 392093" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Correo Electónico</label>
            <input type="email" placeholder="nombre@gmail.com" className={inputClass} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>Edad</label>
            <input type="text" placeholder="32" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>¿Con quién te imaginas dando el paso?</label>
            <input type="text" placeholder="nombre@gmail.com" className={inputClass} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>¿Qué tipo de casa te interesa?</label>
            <input type="text" placeholder="+34 2302 392093" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className={labelClass}>¿Dónde te gustaría encontrar un Vibio?</label>
            <input type="text" placeholder="nombre@gmail.com" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>¿Qué te gustaría encontrar en Vibio?</label>
          <textarea placeholder="Deja tu mensaje aquí..." className={textareaClass} />
        </div>
      </div>

      {/* Checkboxes — outside box */}
      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-brand-gold shrink-0" />
          <span className="font-sans text-[13px] text-bg-default">
            Acepto el envío de información comercial y mailings
          </span>
        </label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-brand-gold shrink-0" />
          <span className="font-sans text-[13px] text-bg-default">
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

export function ProponerTerritorioForm() {
  const inputClass =
    "border border-brand-gold rounded-full px-4 py-2.5 w-full font-sans text-[14px] text-brand-gold placeholder:text-brand-gold placeholder:opacity-60 bg-transparent outline-none focus:ring-0 focus:border-brand-gold";
  const textareaClass =
    "border border-brand-gold rounded-[16px] px-4 py-2.5 w-full h-[120px] resize-none font-sans text-[14px] text-brand-gold placeholder:text-brand-gold placeholder:opacity-60 bg-transparent outline-none focus:ring-0 focus:border-brand-gold";
  const labelClass = "font-sans text-[14px] text-tierra-700";

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label className={labelClass}>Nombre</label>
          <input type="text" placeholder="Nombre" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className={labelClass}>Apellido</label>
          <input type="text" placeholder="Apellido" className={inputClass} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label className={labelClass}>Telefono</label>
          <input type="tel" placeholder="+34 2302 392093" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className={labelClass}>Correo Electónico</label>
          <input type="email" placeholder="nombre@gmail.com" className={inputClass} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label className={labelClass}>¿Que propones?</label>
          <input type="text" placeholder="32" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className={labelClass}>¿Donde esta?</label>
          <input type="text" placeholder="nombre@gmail.com" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>
          ¿Podrías describirlo brevemente? ¿Cuál es su estado actual?
        </label>
        <textarea placeholder="Deja tu mensaje aquí..." className={textareaClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>¿Quieres añadir algo más?</label>
        <textarea placeholder="Deja tu mensaje aquí..." className={textareaClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-brand-gold shrink-0" />
          <span className="font-sans text-[13px] text-tierra-700">
            Acepto el envío de información comercial y mailings
          </span>
        </label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-brand-gold shrink-0" />
          <span className="font-sans text-[13px] text-tierra-700">
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
