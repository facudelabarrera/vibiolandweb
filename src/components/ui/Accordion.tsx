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
    <div className="border-b border-bg-default/20" style={{ borderBottomWidth: "0.5px" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-[10px] py-[16px] text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-[18px] leading-[1.6] text-bg-default group-hover:opacity-75 transition-opacity duration-200">
          {question}
        </span>
        <span
          className="shrink-0 w-[29px] h-[29px] rounded-full border border-bg-default/50 flex items-center justify-center text-bg-default/70 transition-transform duration-300 ease-in-out"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {/* Animated answer */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className="pb-[20px] pr-[40px] transition-opacity duration-200"
            style={{ opacity: open ? 1 : 0, transitionDelay: open ? "80ms" : "0ms" }}
          >
            <p className="font-sans text-[16px] leading-[1.7] text-bg-default/70 whitespace-pre-line">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccordionGroup({ category, items }: AccordionGroupProps) {
  return (
    <div className="flex flex-col items-end w-full">
      {/* Category label — full width with solid border */}
      <div className="w-full border-b border-bg-default pb-[8px]">
        <span className="font-sans font-medium text-[16px] leading-[1.4] tracking-[0.08px] text-bg-default uppercase">
          {category}
        </span>
      </div>

      {/* Questions — right-aligned, max 750px */}
      <div className="w-full max-w-[750px]">
        {items.map((item) => (
          <AccordionRow key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
}
