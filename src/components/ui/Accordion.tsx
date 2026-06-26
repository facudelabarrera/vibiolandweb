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
    <div className="border-t border-tierra-700/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-[16px] text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-[18px] leading-[1.6] text-bg-default group-hover:opacity-80 transition-opacity">
          {question}
        </span>
        <span
          className="shrink-0 w-[29px] h-[29px] rounded-full border border-tierra-600 flex items-center justify-center text-tierra-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="pb-[24px] pr-[40px]">
          <p className="font-sans text-[16px] leading-[1.7] text-tierra-300 whitespace-pre-line">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function AccordionGroup({ category, items }: AccordionGroupProps) {
  return (
    <div className="grid grid-cols-[450px_1fr] border-t border-tierra-700/60 pt-[4px] pb-[24px]">
      <div>
        <span className="font-sans text-[13px] leading-[1.6] text-tierra-500 tracking-[0.04em]">
          {category}
        </span>
      </div>
      <div>
        {items.map((item) => (
          <AccordionRow key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
}
