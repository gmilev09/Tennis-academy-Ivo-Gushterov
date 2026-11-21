// Скриптът `build` пуска два билда:
//   1. `next build`            → създава .next със сървър (за превюто / `next start`)
//   2. `NEXT_STATIC_EXPORT=1 next build` → създава .next-static със статични HTML
//      файлове + всички снимки от public/ (за Cloudflare Pages и Netlify).
//
// Снимките живеят на едно общо място: public/media/  и Next.js ги копира
// автоматично в .next-static/media при статичния експорт.
//
// `trailingSlash: true` е задължително за статичните хостове (Netlify,
// Cloudflare Pages): страниците се записват като `kontakti/index.html`,
// вместо `kontakti.html` + празна директория, което иначе води до 404.
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig = {
  ...(isStaticExport ? { output: "export", distDir: ".next-static" } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
