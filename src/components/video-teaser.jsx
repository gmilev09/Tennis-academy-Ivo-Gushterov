"use client";

import Image from "@/lib/Image";
import { useRef, useState } from "react";
import { Pause, Play, X } from "lucide-react";
import { MEDIA } from "@/lib/images-data";

export default function VideoTeaser() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="img-zoom group relative block w-full overflow-hidden rounded-2xl border border-line text-left"
        aria-label="Пусни видео от тренировка на Тео Давидов"
      >
        <div className="relative aspect-video">
          <Image
            src="/media/teo-action.jpg"
            alt="Тео Давидов по време на тренировка в клуба"
            fill
            sizes="(max-width: 1024px) 100vw, 686px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-ball text-ink flex h-20 w-20 items-center justify-center rounded-full shadow-[0_0_60px_rgba(216,255,62,0.45)] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-ball text-[11px] font-bold tracking-[0.3em] uppercase">
              Видео от корта
            </p>
            <p className="font-display mt-1 text-2xl font-semibold uppercase">
              Тео Давидов тренира в Петрич
            </p>
          </div>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Затвори видеото"
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink/60 transition-colors hover:border-ball"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src="/media/video-teo.mp4"
              controls
              autoPlay
              playsInline
              className="w-full rounded-xl border border-line shadow-2xl"
              poster={MEDIA["/media/teo-action.jpg"] || "/media/teo-action.jpg"}
            />
            <p className="text-muted mt-3 text-center text-xs tracking-wide uppercase">
              Тренировка на Тео Давидов · Тенис клуб „Иво Гущеров“, Петрич
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function InlineVideo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line">
      <video
        ref={ref}
        src="/media/video-teo.mp4"
        preload="none"
        controls={playing}
        playsInline
        poster={MEDIA["/media/teo-action.jpg"] || "/media/teo-action.jpg"}
        className="aspect-video w-full object-cover"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          onClick={() => ref.current?.play()}
          aria-label="Пусни видеото"
          className="absolute inset-0 flex items-center justify-center bg-ink/30"
        >
          <span className="bg-ball text-ink flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_40px_rgba(216,255,62,0.4)]">
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </span>
        </button>
      )}
      {playing && (
        <button
          onClick={() => ref.current?.pause()}
          aria-label="Пауза"
          className="absolute right-4 bottom-4 hidden"
        >
          <Pause />
        </button>
      )}
    </div>
  );
}
