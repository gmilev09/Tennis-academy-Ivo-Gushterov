// ГЕНЕРИРА src/lib/images-data.js — не редактирайте резултата на ръка.
//
// Оптимизира снимките от public/media/ с ImageMagick и ги записва като
// base64 data URL в src/lib/images-data.js. Така изображенията са
// вградени в кода и се показват на всеки хостинг (Netlify, Cloudflare
// Pages, локално) — без зависимост от качването на отделни файлове.
//
// Изпълнение:  node scripts/optimize-images.mjs
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync, statSync } from "node:fs";
import path from "node:path";

const SRC_DIR = "public/media";
const OUT_FILE = "src/lib/images-data.js";
const TMP_DIR = ".img-tmp";
const MAX_WIDTH = 1200;   // достатъчно за retina; `>` по-долу = само НАМАЛЯВА
const QUALITY = 80;

// 1) Кои снимки реално се използват в кода?
const used = new Set();
function scan(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) scan(p);
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      const text = readFileSync(p, "utf8");
      for (const m of text.matchAll(/["'(](\/media\/[a-z0-9._-]+\.(?:jpg|jpeg|png))["')]/gi)) {
        used.add(m[1]);
      }
    }
  }
}
scan("src");

// 2) Оптимизация с ImageMagick
if (!existsSync(TMP_DIR)) mkdirSync(TMP_DIR, { recursive: true });

const MEDIA = {};
let totalIn = 0;
let totalOut = 0;

for (const rel of [...used].sort()) {
  const base = path.basename(rel);
  const input = path.join(SRC_DIR, base);
  if (!existsSync(input)) {
    console.warn(`  пропускам (липсва): ${base}`);
    continue;
  }
  const isPng = /\.png$/i.test(base);
  const tmp = path.join(TMP_DIR, base.replace(/\.(png|jpe?g)$/i, ".jpg"));

  // PNG (вкл. прозрачност) → JPEG с бял фон; JPEG → директно
  // `1200x>` = намалява само ако снимката е по-широка (без upscale)
  const resize = `${MAX_WIDTH}x>`;
  const args = isPng
    ? [input, "-background", "white", "-alpha", "remove", "-auto-orient",
       "-resize", resize, "-quality", String(QUALITY), "-strip", tmp]
    : [input, "-auto-orient", "-resize", resize,
       "-quality", String(QUALITY), "-strip", tmp];

  try {
    execFileSync("convert", args, { stdio: "pipe" });
    const buf = readFileSync(tmp);
    const before = statSync(input).size;
    totalIn += before;
    totalOut += buf.length;
    MEDIA[rel] = `data:image/jpeg;base64,${buf.toString("base64")}`;
    console.log(
      `  ${base.padEnd(34)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(buf.length / 1024).toFixed(0).padStart(4)} KB`
    );
  } catch (err) {
    console.warn(`  грешка при ${base}: ${String(err).slice(0, 120)}`);
  }
}

// 3) Запис на резултата
const header = `// ГЕНЕРИРАНО ОТ scripts/optimize-images.mjs — не редактирайте на ръка.
// Оптимизирани изображения, вградени като data URL, за да се показват
// еднакво на всеки хостинг (Netlify, Cloudflare Pages, локално).
//
// Изпълнете \`node scripts/optimize-images.mjs\`, за да регенерирате файла.

export const MEDIA = ${JSON.stringify(MEDIA, null, 2)};
`;

writeFileSync(OUT_FILE, header);

console.log(`\nСнимки: ${Object.keys(MEDIA).length}`);
console.log(`Оригинално: ${(totalIn / 1048576).toFixed(1)} MB → Оптимизирано: ${(totalOut / 1048576).toFixed(1)} MB`);
console.log(`Data URL общо: ~${((totalOut * 4) / 3 / 1048576).toFixed(1)} MB`);
console.log(`Записано в ${OUT_FILE}`);
