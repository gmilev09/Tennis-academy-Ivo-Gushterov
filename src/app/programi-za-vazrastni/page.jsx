import Image from "@/lib/Image";
import Link from "next/link";
import { ArrowRight, HeartPulse, Medal, Sprout, Users } from "lucide-react";
import PageHero from "@/components/page-hero";
import PricingCard from "@/components/pricing-card";
import SectionHead from "@/components/section-head";
import { Reveal, RevealObserver } from "@/components/reveal";
import { ADULT_PRICING, COURT_RENTAL, SHARED_LESSON } from "@/lib/content";

export const metadata = {
  title: "Програми за възрастни",
  description:
    "Групови тренировки и кардио тенис за възрастни в Петрич – за начинаещи и напреднали. Споделени уроци с приятели и наем на корт.",
};

const GROUPS = [
  {
    icon: Sprout,
    title: "Възрастни начинаещи",
    text: "Никога не е късно да вземете ракетата за първи път. Основи на играта, координация и много забавление в група от хора като вас.",
  },
  {
    icon: Medal,
    title: "Възрастни напреднали",
    text: "За играчи с опит — усъвършенстване на техниката, тактическа подготовка и динамични мачови ситуации.",
  },
];

export default function AdultsPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Тенис програми"
        title="Програми за"
        accent="възрастни"
        text="Тенис за всички нива – от любители до напреднали. Развийте уменията си в групова обстановка."
        image="/media/gallery-trainings.jpg"
        imageAlt="Групова тренировка за възрастни в клуба"
      />

      {/* Групови тренировки */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Услуги"
              title="Групови тренировки за възрастни"
              text="Няма значение дали играете редовно или сте напълно начинаещи – нашите тренировки ще ви помогнат да се усъвършенствате, да се забавлявате и да останете във форма."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {GROUPS.map((g, i) => (
                <Reveal key={g.title} delay={i * 110}>
                  <div className="bg-ink-2 border-line h-full rounded-2xl border p-6">
                    <span className="bg-ball/15 text-ball flex h-11 w-11 items-center justify-center rounded-full">
                      <g.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-4 text-lg font-semibold uppercase">
                      {g.title}
                    </h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      {g.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260}>
              <div className="bg-ink-3 border-line mt-8 rounded-2xl border p-7">
                <h3 className="font-display text-ball text-2xl font-semibold uppercase">
                  Подобри играта си заедно
                </h3>
                <p className="text-paper/80 mt-3 text-sm leading-relaxed">
                  Груповите тренировки са забавен и ефективен начин да подобриш
                  техниката, тактиката и движението си на корта. Играй с
                  амбициозни партньори и напредвай заедно!
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:sticky lg:top-28">
            <div className="img-zoom overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src="/media/cardio-women.png"
                alt="Кардио тенис за жени – Тенис клуб „Иво Гущеров“"
                width={758}
                height={448}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="img-zoom mt-4 overflow-hidden rounded-2xl border border-line">
              <Image
                src="/media/gallery-mixed-doubles.jpg"
                alt="Турнир смесени двойки в клуба"
                width={900}
                height={620}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Кардио тенис акцент */}
      <section className="bg-ink-2 border-line border-y">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="bg-ball text-ink flex h-14 w-14 items-center justify-center rounded-full">
                <HeartPulse className="h-7 w-7" />
              </span>
              <p className="text-ball text-xs font-bold tracking-[0.35em] uppercase">
                Кардио тенис
              </p>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.02] font-bold uppercase sm:text-5xl">
              Тенис, който те държи <span className="text-ball">във форма</span>
            </h2>
            <p className="text-muted mt-5 max-w-xl leading-relaxed">
              Динамични упражнения и тенис в една групова тренировка седмично —
              подходящо за всички нива. Енергия, ритъм и много изпотени победи
              над собствените граници.
            </p>
            <Link
              href="/kontakti"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.25em] text-ball uppercase"
            >
              Запиши се за кардио тенис
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={160}>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/media/gallery-women-tournament.jpg"
                  alt="Женски турнир сингъл в клуба"
                  width={512}
                  height={640}
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <div className="img-zoom mt-8 overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/media/gallery-court-play.jpg"
                  alt="Игра на корта в Петрич"
                  width={512}
                  height={640}
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Цени */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHead
          kicker="Изберете програма"
          title="Групови абонаменти"
          text="Изберете най-подходящата групова програма и подобрете играта си на корта."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ADULT_PRICING.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="h-full">
              <PricingCard plan={p} featured={i === 1} />
            </Reveal>
          ))}
        </div>

        {/* Споделен урок + наем */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="border-clay/50 bg-ink-2 relative h-full overflow-hidden rounded-2xl border p-8">
              <span className="bg-clay text-ink absolute top-0 right-0 rounded-bl-2xl px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase">
                Топ оферта
              </span>
              <Users className="text-clay h-9 w-9" />
              <h3 className="font-display mt-5 text-3xl font-semibold uppercase">
                Играй с приятел — <span className="text-clay">споделете</span>{" "}
                емоцията и цената
              </h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                Доведи приятели и грабнете топ оферта! {SHARED_LESSON.title} —{" "}
                <span className="text-paper font-bold">
                  {SHARED_LESSON.price} {SHARED_LESSON.per}
                </span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {SHARED_LESSON.features.map((f) => (
                  <li key={f} className="text-paper/85 flex items-center gap-2.5 text-sm">
                    <span className="bg-clay h-1.5 w-1.5 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakti"
                className="bg-clay text-ink font-display mt-7 inline-block rounded-full px-7 py-3 font-semibold tracking-wide uppercase transition-transform hover:scale-[1.02]"
              >
                Запази споделен урок
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-line bg-ink-2 relative h-full overflow-hidden rounded-2xl border p-8">
              <span className="bg-ball text-ink absolute top-0 right-0 rounded-bl-2xl px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase">
                Клей &amp; Хард
              </span>
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
                Наем на тенис корт
              </h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                Идеалното място за вашата игра —{" "}
                <span className="text-paper font-bold">
                  {COURT_RENTAL.price} {COURT_RENTAL.per}
                </span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {COURT_RENTAL.features.map((f) => (
                  <li key={f} className="text-paper/85 flex items-center gap-2.5 text-sm">
                    <span className="bg-ball h-1.5 w-1.5 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakti"
                className="bg-ball text-ink font-display mt-7 inline-block rounded-full px-7 py-3 font-semibold tracking-wide uppercase transition-transform hover:scale-[1.02]"
              >
                Резервирай корт
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
