import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingCard({ plan, featured = false }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-colors ${
        featured
          ? "border-ball bg-ink-3 shadow-[0_0_60px_rgba(216,255,62,0.08)]"
          : "border-line bg-ink hover:border-ball/40"
      }`}
    >
      {featured && (
        <span className="bg-ball text-ink absolute -top-3 left-6 rounded-full px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
          Популярен избор
        </span>
      )}
      <h3 className="font-display text-lg font-semibold tracking-wide uppercase">
        {plan.title}
      </h3>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-ball text-5xl font-bold tracking-tight">
          {plan.price}
        </span>
        <span className="text-muted text-sm font-semibold">{plan.per}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-paper/85">
            <Check className="text-ball mt-0.5 h-4 w-4 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/kontakti"
        className={`font-display mt-7 block rounded-full py-3 text-center text-base font-semibold tracking-wide uppercase transition-all ${
          featured
            ? "bg-ball text-ink hover:shadow-[0_0_40px_rgba(216,255,62,0.3)]"
            : "border-line hover:border-ball border"
        }`}
      >
        Запиши се
      </Link>
    </div>
  );
}
