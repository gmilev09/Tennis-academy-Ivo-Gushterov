export const dynamic = "force-static";

const BASE = "https://tennispetrich.com";

const routes = [
  "/",
  "/za-nas/",
  "/programi-za-deca/",
  "/individualni-trenirovki/",
  "/programi-za-vazrastni/",
  "/abonamenti-i-ceni/",
  "/otzivi/",
  "/galeriq/",
  "/kontakti/",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
