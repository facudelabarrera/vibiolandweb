"use client";

import { useState } from "react";

// ── Info accordion (Comunidad / Territorio / Arquitectura / Impacto) ──────────

const PlusIcon = ({ open }: { open: boolean }) => (
  <span
    className="shrink-0 w-[29px] h-[29px] rounded-full border border-tierra-600 flex items-center justify-center text-tierra-400 transition-transform duration-200"
    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
  >
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </span>
);

const infoItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-tierra-500">
        <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Comunidad",
    content:
      "Vibio Higuera está diseñado para entre 18 y 22 familias. Antes de mudarte, participarás en jornadas de convivencia y talleres de diseño con los futuros vecinos. La comunidad se organiza con tres comisiones —energía, biodiversidad y gobernanza— activas desde antes de la obra. Las decisiones que afectan a todos se toman por consenso, con herramientas de sociocracia adaptada.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-tierra-500">
        <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 11h8M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Territorio",
    content:
      "Higuera de las Dueñas es un municipio del Valle del Tiétar, al sur de la Sierra de Gredos, a una hora de Madrid por la A-5. La finca tiene una pendiente suave con olivos, perales, higueros y almendros. En el centro, un afloramiento rocoso con robles centenarios marca el corazón natural donde se ubicarán los espacios comunes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-tierra-500">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Arquitectura",
    content:
      "Las viviendas son de arquitectura pasiva: orientadas al sur, con gran inercia térmica, aerotermia y fotovoltaica. Aislamiento con textiles reciclados. Gasto eléctrico estimado entre 20 y 50 euros al mes. Cuatro tipologías disponibles: Casa Berta (60 m²), Casa Sunita (70 m²), Casa Canon (90 m²) y Casa Mollison (115 m²).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-tierra-500">
        <path d="M12 22V12M12 12C12 7 8 3 8 3s4 2 4 9M12 12C12 7 16 3 16 3s-4 2-4 9M5 22h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Impacto",
    content:
      "Cada Vibio planta más de 400 árboles de 96 especies distintas. Vibio Higuera captura 22 toneladas de CO₂ por vivienda al año. La comunidad energética que se forma genera más de lo que consume, y el excedente se comparte con los vecinos del pueblo. El tejido local se refuerza: empleo, compra local y empadronamiento real.",
  },
];

function InfoRow({
  icon,
  label,
  content,
}: {
  icon: React.ReactNode;
  label: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-tierra-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 py-[20px] text-left group"
        aria-expanded={open}
      >
        <span className="shrink-0 text-tierra-500">{icon}</span>
        <span className="flex-1 font-sans text-[20px] font-semibold text-text-primary group-hover:opacity-80 transition-opacity">
          {label}
        </span>
        <PlusIcon open={open} />
      </button>
      {open && (
        <div className="pb-[24px] pl-[40px] pr-[48px]">
          <p className="font-sans text-[18px] leading-[1.7] text-tierra-700">{content}</p>
        </div>
      )}
    </div>
  );
}

export function InfoAccordion() {
  return (
    <div>
      {infoItems.map((item) => (
        <InfoRow key={item.label} {...item} />
      ))}
      <div className="border-t border-tierra-300" />
    </div>
  );
}

// ── Simple FAQ accordion for dark bg ─────────────────────────────────────────

const faqItems = [
  {
    question: "¿Qué distancia hay entre las casas? ¿Cuál es el tamaño de las parcelas?",
    answer:
      "Las casas tienen una parcela privada de entre 300 y 600 m² según la tipología. El diseño garantiza privacidad visual y acústica desde el exterior de cada vivienda.",
  },
  {
    question: "¿Hay colegios, farmacias, supermercados, centros de salud y hospitales cerca?",
    answer:
      "Higuera de las Dueñas cuenta con colegio rural, farmacia y consultorio médico. En Piedralaves (5 min) hay supermercado, y en El Escorial (25 min) tienes un centro urbano completo. Ávila queda a 35 minutos con hospital de referencia.",
  },
  {
    question: "¿Qué relación existe con los vecinos y vecinas de Higuera de las Dueñas y las asociaciones del territorio?",
    answer:
      "Vibio forma parte del tejido local desde el primer día: contrata en el territorio, compra a proveedores locales y empadrona vecinos reales. La comunidad energética también está abierta a los vecinos del pueblo. No somos una burbuja: somos parte del pueblo.",
  },
  {
    question: "¿Hasta qué punto tengo que implicarme en mi vida comunitaria?",
    answer:
      "La implicación mínima es participar en la asamblea mensual y formar parte de al menos una comisión. El resto es completamente voluntario. No hay obligación de comer juntos, participar en actividades colectivas ni ningún tipo de vida comunal forzada.",
  },
  {
    question: "¿Puedo vender o alquilar mi vivienda si cambio de planes?",
    answer:
      "Sí. Tu vivienda es tuya en propiedad y puedes venderla o alquilarla en cualquier momento. La comunidad tiene un derecho de tanteo para facilitar que el nuevo residente encaje bien con el proyecto.",
  },
  {
    question: "¿Es posible trabajar desde vibio.higuera?",
    answer:
      "Completamente. Todas las viviendas tienen fibra óptica de alta velocidad y en la zona comunitaria hay un espacio de coworking con todo lo necesario para trabajar con comodidad.",
  },
];

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-tierra-700/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-[18px] text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-[18px] leading-[1.6] text-bg-default group-hover:opacity-80 transition-opacity">
          {question}
        </span>
        <PlusIcon open={open} />
      </button>
      {open && (
        <div className="pb-[24px] pr-[48px]">
          <p className="font-sans text-[16px] leading-[1.7] text-tierra-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function HigueraFaqAccordion() {
  return (
    <div>
      {faqItems.map((item) => (
        <FaqRow key={item.question} {...item} />
      ))}
      <div className="border-t border-tierra-700/60" />
    </div>
  );
}

// ── Berlanga FAQ ──────────────────────────────────────────────────────────────

const berlangaFaqItems = [
  {
    question: "¿Qué diferencia a vibio.berlanga de otros proyectos rurales?",
    answer:
      "vibio.berlanga no es un barrio de nueva planta. Se implanta en un pueblo de 1.100 años de historia, con su casco urbano, su castillo y su tejido social vivo. Vivir aquí es vivir en Berlanga de verdad, no en un recinto aparte. La comunidad se integra en el municipio desde el primer día.",
  },
  {
    question: "¿Qué servicios ofrece el pueblo?",
    answer:
      "Berlanga de Duero tiene farmacia, consultorio médico, bar-restaurante y colegio de primaria. Almazán (20 min) ofrece supermercado e instituto. Soria queda a 45 minutos con hospital y servicios de ciudad completos.",
  },
  {
    question: "¿Qué esperáis que yo comparta con mis vecinos?",
    answer:
      "Lo mínimo es asistir a la asamblea mensual y formar parte de al menos una comisión. Más allá de eso, la participación es completamente voluntaria. Compartís la gestión de lo común; no las rutinas privadas ni el tiempo libre.",
  },
  {
    question: "¿Cuál es el grupo semilla de Berlanga y qué decisiones participa?",
    answer:
      "El grupo semilla son las familias que se incorporan durante la fase previa a la obra. Participan en los talleres de diseño, las jornadas de convivencia y las decisiones de gobernanza antes de que existan las viviendas. Si te incorporas ahora, formas parte del núcleo fundador.",
  },
];

export function BerlangaFaqAccordion() {
  return (
    <div>
      {berlangaFaqItems.map((item) => (
        <FaqRow key={item.question} {...item} />
      ))}
      <div className="border-t border-tierra-700/60" />
    </div>
  );
}
