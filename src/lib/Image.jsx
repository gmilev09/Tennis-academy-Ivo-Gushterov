"use client";

// Заместител на next/image, съвместим с неговия API.
//
// Работи с data URL-и от src/lib/images-data.js (оптимизирани снимки,
// вградени в кода) — така изображенията се показват на всеки хостинг
// (Netlify, Cloudflare Pages, локално) без зависимост от качването на
// отделни файлове в public/.
//
// Ако data URL липсва (напр. видеото), падаме обратно на подадения път.
// При неуспешно зареждане показваме рисуван placeholder вместо счупена снимка.
import { MEDIA } from "./images-data";

const FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
       <rect width="100%" height="100%" fill="#10231b"/>
       <circle cx="400" cy="300" r="46" fill="none" stroke="#d8ff3e" stroke-width="4"/>
       <text x="400" y="380" text-anchor="middle" fill="#8fa599"
             font-family="Arial, sans-serif" font-size="22" letter-spacing="4">
         ТЕНИС КЛУБ ИВО ГУЩЕРОВ
       </text>
     </svg>`
  );

function resolve(src) {
  if (typeof src !== "string") return src;
  if (src.startsWith("data:") || src.startsWith("http")) return src;
  return MEDIA[src] || src;
}

function handleError(e) {
  const img = e.currentTarget;
  if (img.dataset.fallback === "1") return;
  img.dataset.fallback = "1";
  img.src = FALLBACK;
}

export default function Image({
  src,
  alt = "",
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className = "",
  style,
  ...rest
}) {
  const common = {
    src: resolve(src),
    alt,
    className: fill
      ? `absolute inset-0 h-full w-full object-cover ${className}`
      : className,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
    decoding: "async",
    sizes,
    onError: handleError,
    ...rest,
  };

  if (fill) {
    return <img {...common} style={{ color: "transparent", ...style }} />;
  }

  return <img width={width} height={height} {...common} style={style} />;
}
