import Link from "next/link";
import { ArrowRight, BadgePercent, Gift, Users } from "lucide-react";
import PageHero from "@/components/page-hero";
import PricingCard from "@/components/pricing-card";
import SectionHead from "@/components/section-head";
import { Reveal, RevealObserver } from "@/components/reveal";
import {
  ADULT_PRICING,
  COURT_RENTAL,
  INDIVIDUAL_PRICING,
  KIDS_PRICING,
  SHARED_LESSON,
} from "@/lib/content";

export const metadata = {
  title: "Абонаменти и цени",
  description:
    "Цени и тренировъчни пакети на Тенис клуб „Иво Гущеров“ Петрич – групови абонаменти за деца и възрастни, индивидуални уроци, пакети и наем на корт.",
};

export default function PricingPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Членство"
        title="Присъедини се към"
        accent="клуба"
        text="Станете част от нашето тенис семейство и започнете своето приключение на корта още днес."
        image="/media/balls-51.jpg"
        imageAlt="Тенис топки на корта"
      />

      {/* Предимства на членството */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="bg-ball text-ink flex h-full items-center gap-6 rounded-2xl p-8">
              <Gift className="h-10 w-10 shrink-0" />
              <div>
                <h2 className="font-display text-2xl leading-tight font-bold uppercase">
                  Безплатен първи урок за нови членове
                </h2>
                <p className="mt-2 text-sm font-medium opacity-80">
                  Опитайте тениса без ангажимент — забавление и нови умения за
                  всички.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={130}>
            <div className="bg-ink-2 border-line flex h-full items-center gap-6 rounded-2xl border p-8">
              <BadgePercent className="text-ball h-10 w-10 shrink-0" />
              <div>
                <h2 className="font-display text-2xl leading-tight font-bold uppercase">
                  -10% за второ дете + ракета
                </h2>
                <p className="text-muted mt-2 text-sm">
                  Отстъпка за второ дете в семейството и персонализирана ракета
                  за тренировките на всеки член.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Деца */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <SectionHead
          kicker="Изберете програма"
          title="Програми за деца"
          text="Запазете място в една от нашите групи и осигурете на детето си качествена тренировка и забавление на корта!"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {KIDS_PRICING.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <PricingCard plan={p} featured={i === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Индивидуални */}
      <section className="bg-ink-2 border-line border-y">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHead
            kicker="Индивидуални и групови уроци"
            title="Персонални пакети"
            text="Изберете най-подходящия план за вашите тенис тренировки – индивидуални уроци за деца и възрасти или еднократни пакети с преференциална цена."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {INDIVIDUAL_PRICING.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="h-full">
                <PricingCard plan={p} featured={i === 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Възрастни */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHead
          kicker="Програми за възрастни"
          title="Групови абонаменти"
          text="Изберете най-подходящата групова програма и подобрете играта си на корта."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ADULT_PRICING.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <PricingCard plan={p} featured={i === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="border-clay/50 bg-ink-2 relative h-full rounded-2xl border p-8">
              <Users className="text-clay h-9 w-9" />
              <h3 className="font-display mt-5 text-3xl font-semibold uppercase">
                {SHARED_LESSON.title}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-clay text-5xl font-bold">
                  {SHARED_LESSON.price}
                </span>
                <span className="text-muted text-sm font-semibold">
                  {SHARED_LESSON.per}
                </span>
              </div>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {SHARED_LESSON.features.map((f) => (
                  <li key={f} className="text-paper/85 flex items-center gap-2.5 text-sm">
                    <span className="bg-clay h-1.5 w-1.5 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={130}>
            <div className="border-line bg-ink-2 relative h-full rounded-2xl border p-8">
              <svg
                viewBox="0 0 24 24"
                className="text-ball h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15 15 0 0 1 0 20" />
                <path d="M12 2a15 15 0 0 0 0 20" />
              </svg>
              <h3 className="font-display mt-5 text-3xl font-semibold uppercase">
                {COURT_RENTAL.title}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-ball text-5xl font-bold">
                  {COURT_RENTAL.price}
                </span>
                <span className="text-muted text-sm font-semibold">
                  {COURT_RENTAL.per}
                </span>
              </div>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {COURT_RENTAL.features.map((f) => (
                  <li key={f} className="text-paper/85 flex items-center gap-2.5 text-sm">
                    <span className="bg-ball h-1.5 w-1.5 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <Link
              href="/kontakti"
              className="group bg-ball text-ink font-display inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_60px_rgba(216,255,62,0.4)]"
            >
              Изпрати заявка за записване
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
