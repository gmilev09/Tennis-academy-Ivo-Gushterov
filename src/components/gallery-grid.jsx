"use client";

import Image from "@/lib/Image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) =>
      setActive((cur) =>
        cur === null ? null : (cur + dir + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const spans = [
    "row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1",
    "row-span-1", "row-span-2", "row-span-1", "row-span-1", "row-span-1",
  ];

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-xl border border-line ${
              spans[i % spans.length]
            }`}
            aria-label={`Отвори снимката: ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-left text-xs font-semibold tracking-wide">
                {img.caption}
              </span>
              <Expand className="text-ball h-4 w-4 shrink-0" />
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Преглед на снимка"
        >
          <div className="flex items-center justify-between p-5">
            <p className="font-display text-ball text-sm font-semibold tracking-[0.3em] uppercase">
              Галерия · {active + 1} / {images.length}
            </p>
            <button
              onClick={close}
              aria-label="Затвори"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-ball"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-20">
            <div className="relative h-full max-h-[72vh] w-full max-w-5xl">
              <Image
                src={images[active].src}
                alt={images[active].caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={() => step(-1)}
              aria-label="Предишна снимка"
              className="absolute top-1/2 left-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 transition-colors hover:border-ball sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Следваща снимка"
              className="absolute top-1/2 right-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 transition-colors hover:border-ball sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <p className="pb-8 text-center text-sm font-medium tracking-wide text-paper/80">
            {images[active].caption}
          </p>
        </div>
      )}
    </>
  );
}
