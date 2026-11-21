import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center px-5 pt-24">
      <div className="text-center">
        <p className="text-stroke-ball font-display text-[26vw] leading-none font-bold select-none sm:text-[180px]">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-semibold uppercase sm:text-4xl">
          Тази страница е <span className="text-ball">извън корта</span>
        </h1>
        <p className="text-muted mt-3">
          Изглежда топката отиде в аут. Върнете се в играта от началната
          страница.
        </p>
        <Link
          href="/"
          className="bg-ball text-ink font-display mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_50px_rgba(216,255,62,0.35)]"
        >
          <ArrowLeft className="h-5 w-5" />
          Към началото
        </Link>
      </div>
    </section>
  );
}
