"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);
  const total = TESTIMONIALS.length;

  const prev = useCallback(() => {
    setIndex((cur) => (cur - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((cur) => (cur + 1) % total);
  }, [total]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const onMouseDown = (e) => {
    mouseStartX.current = e.clientX;
  };

  const onMouseUp = (e) => {
    if (mouseStartX.current === null) return;
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    mouseStartX.current = null;
  };

  return (
    <div className="mx-auto max-w-3xl select-none">
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className="overflow-hidden rounded-2xl border border-line bg-ink"
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex w-full shrink-0 flex-col justify-between p-7 sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote className="text-ball h-8 w-8" fill="currentColor" />
                  <span className="font-display text-muted text-xs tracking-[0.25em] uppercase">
                    Отзив от член на клуба
                  </span>
                </div>
                <blockquote className="text-paper/90 mt-6 text-base leading-relaxed sm:text-lg">
                  „{t.quote}“
                </blockquote>
              </div>

              <figcaption className="border-line mt-7 flex items-center justify-between border-t pt-5">
                <div>
                  <p className="font-display text-ball text-xl font-semibold tracking-wide uppercase">
                    {t.name}
                  </p>
                  <p className="text-muted mt-0.5 text-xs tracking-[0.2em] uppercase">
                    {t.role}
                  </p>
                </div>
                <span className="font-display text-muted text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Навигация със стрелки и точки */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Предишен отзив"
          className="border-line bg-ink hover:border-ball hover:text-ball flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Покажи отзив от ${t.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-ball w-8"
                  : "bg-paper/20 hover:bg-paper/40 w-2.5"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Следващ отзив"
          className="border-line bg-ink hover:border-ball hover:text-ball flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
