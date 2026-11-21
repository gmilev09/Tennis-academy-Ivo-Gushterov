"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-line divide-y border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-5">
                <span className="font-display text-ball/60 text-sm font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-display text-lg font-semibold tracking-wide uppercase transition-colors sm:text-xl ${
                    isOpen ? "text-ball" : "group-hover:text-ball"
                  }`}
                >
                  {item.q}
                </span>
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-ball bg-ball text-ink rotate-45"
                    : "border-line group-hover:border-ball"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div className={`acc-panel ${isOpen ? "open" : ""}`}>
              <div>
                <p className="text-muted max-w-3xl pb-7 pl-0 leading-relaxed sm:pl-12">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
