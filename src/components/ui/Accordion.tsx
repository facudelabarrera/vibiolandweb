"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionGroupProps {
  category: string;
  items: AccordionItem[];
}

function AccordionRow({ question, answer }: AccordionItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gris-claro/50 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-base font-medium text-text-primary group-hover:text-text-secondary transition-colors">
          {question}
        </span>
        <span
          className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-gris-calido flex items-center justify-center text-text-muted transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="pb-6 pr-12">
          <p className="font-sans text-sm text-text-secondary leading-relaxed whitespace-pre-line">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function AccordionGroup({ category, items }: AccordionGroupProps) {
  return (
    <div className="mb-10">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2 pb-3 border-b border-gris-claro">
        {category}
      </p>
      {items.map((item) => (
        <AccordionRow key={item.question} {...item} />
      ))}
    </div>
  );
}
