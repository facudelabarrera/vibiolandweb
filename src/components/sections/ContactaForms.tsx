"use client";

export function ContactaMainForm() {
  const inputClass =
    "border border-white rounded-full px-[16px] py-[10px] w-full font-sans text-base text-white placeholder:text-white placeholder:opacity-[0.54] bg-transparent outline-none focus:outline-none";
  const textareaClass =
    "border border-white rounded-[16px] px-[16px] py-[10px] w-full h-[120px] resize-none font-sans text-base text-white placeholder:text-white placeholder:opacity-[0.54] bg-transparent outline-none focus:outline-none";
  const labelClass = "font-sans text-sm leading-[1.6] text-white";

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Form box */}
      <div
        className="rounded-[32px] p-[24px] flex flex-col gap-[24px] border border-[#f1efe4]"
        style={{ backgroundColor: "#A77245" }}
      >
        <div className="flex flex-col gap-[16px] sm:flex-row">
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Nombre</label>
            <input type="text" placeholder="Nombre" className={inputClass} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Apellido</label>
            <input type="text" placeholder="Apellido" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-[16px] sm:flex-row">
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Telefono</label>
            <input type="tel" placeholder="+34 2302 392093" className={inputClass} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Correo Electónico</label>
            <input type="email" placeholder="nombre@gmail.com" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-[16px] sm:flex-row">
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Edad</label>
            <input type="text" placeholder="32" className={inputClass} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>¿Con quién te imaginas dando el paso?</label>
            <input type="text" placeholder="nombre@gmail.com" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-[16px] sm:flex-row">
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>¿Qué tipo de casa te interesa?</label>
            <input type="text" placeholder="+34 2302 392093" className={inputClass} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>¿Dónde te gustaría encontrar un Vibio?</label>
            <input type="text" placeholder="nombre@gmail.com" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className={labelClass}>¿Qué te gustaría encontrar en Vibio?</label>
          <textarea placeholder="Deja tu mensaje aquí..." className={textareaClass} />
        </div>
      </div>

      {/* Checkboxes — outside the box */}
      <div className="flex flex-col gap-[8px]">
        <label className="flex items-center gap-[8px] cursor-pointer">
          <input type="checkbox" className="shrink-0 w-[13px] h-[13px] rounded-[4px] border border-white bg-transparent cursor-pointer appearance-none" />
          <span className="font-sans text-[13px] leading-[1.6] text-white">
            Acepto el envío de información comercial y mailings
          </span>
        </label>
        <label className="flex items-center gap-[8px] cursor-pointer">
          <input type="checkbox" className="shrink-0 w-[13px] h-[13px] rounded-[4px] border border-white bg-transparent cursor-pointer appearance-none" />
          <span className="font-sans text-[13px] leading-[1.6] text-white">
            Acepto las condiciones de las políticas de privacidad
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-cta rounded-full px-[22px] h-[45px] font-sans text-[16px] leading-[1.6] text-text-primary w-[203px] flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        Enviar
      </button>
    </div>
  );
}

export function ProponerTerritorioForm() {
  const inputClass =
    "border border-[#a79854] rounded-full px-[16px] py-[10px] w-full font-sans text-base text-[#a79854] placeholder:text-[#a79854] placeholder:opacity-[0.54] bg-transparent outline-none focus:outline-none";
  const textareaClass =
    "border border-[#a79854] rounded-[16px] px-[16px] py-[10px] w-full h-[120px] resize-none font-sans text-base text-[#a79854] placeholder:text-[#a79854] placeholder:opacity-[0.54] bg-transparent outline-none focus:outline-none";
  const labelClass = "font-sans text-sm leading-[1.6] text-black";

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[16px] sm:flex-row">
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>Nombre</label>
          <input type="text" placeholder="Nombre" className={inputClass} />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>Apellido</label>
          <input type="text" placeholder="Apellido" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] sm:flex-row">
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>Telefono</label>
          <input type="tel" placeholder="+34 2302 392093" className={inputClass} />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>Correo Electónico</label>
          <input type="email" placeholder="nombre@gmail.com" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] sm:flex-row">
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>¿Que propones?</label>
          <input type="text" placeholder="32" className={inputClass} />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>¿Donde esta?</label>
          <input type="text" placeholder="nombre@gmail.com" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="font-sans text-[14px] leading-[1.6] text-[#15130c]">
          ¿Podrías describirlo brevemente? ¿Cuál es su estado actual?
        </label>
        <textarea placeholder="Deja tu mensaje aquí..." className={textareaClass} />
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="font-sans text-[14px] leading-[1.6] text-[#15130c]">¿Quieres añadir algo más?</label>
        <textarea placeholder="Deja tu mensaje aquí..." className={textareaClass} />
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="flex items-center gap-[8px] cursor-pointer">
          <input type="checkbox" className="shrink-0 w-[13px] h-[13px] rounded-[4px] border border-black bg-transparent cursor-pointer appearance-none" />
          <span className="font-sans text-[13px] leading-[1.6] text-bg-dark">
            Acepto el envío de información comercial y mailings
          </span>
        </label>
        <label className="flex items-center gap-[8px] cursor-pointer">
          <input type="checkbox" className="shrink-0 w-[13px] h-[13px] rounded-[4px] border border-black bg-transparent cursor-pointer appearance-none" />
          <span className="font-sans text-[13px] leading-[1.6] text-bg-dark">
            Acepto las condiciones de las políticas de privacidad
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-cta rounded-full px-[22px] h-[45px] font-sans text-[16px] leading-[1.6] text-text-primary w-[203px] flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        Enviar
      </button>
    </div>
  );
}
