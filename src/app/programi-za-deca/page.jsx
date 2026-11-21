import Image from "@/lib/Image";
import Link from "next/link";
import { ArrowRight, Baby, BadgePercent, Sparkles } from "lucide-react";
import PageHero from "@/components/page-hero";
import PricingCard from "@/components/pricing-card";
import SectionHead from "@/components/section-head";
import { Reveal, RevealObserver } from "@/components/reveal";
import { KIDS_PRICING, KID_LEVELS } from "@/lib/content";

export const metadata = {
  title: "Програми за деца",
  description:
    "Детска тенис академия в Петрич – забавни и адаптирани програми за деца от 4 до 17 години: синьо, червено, оранжево, зелено и жълто ниво.",
};

export default function KidsPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Тенис програми"
        title="Програми за"
        accent="деца"
        text="Големите успехи започват от малки! Забавни и образователни тренировки за най-младите ни таланти — от 4 до 17 години."
        image="/media/kids-training.jpg"
        imageAlt="Детски тенис тренировки в клуб „Иво Гущеров“"
      />

      {/* Академия */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Услуги"
              title="Детска тенис академия"
              text="Забавни и адаптирани програми за деца на възраст от 4 до 17 години, насочени към изграждане на увереност, умения и спортен дух."
            />
            <div className="mt-9 space-y-4">
              <Reveal delay={160}>
                <div className="bg-ink-2 border-line flex items-center gap-4 rounded-xl border p-5">
                  <Sparkles className="text-ball h-6 w-6 shrink-0" />
                  <p className="text-sm leading-relaxed text-paper/85">
                    Родителите могат да участват в заниманията на въвеждащия
                    курс — тренировките стават още по-забавни.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="bg-ink-2 border-line flex items-center gap-4 rounded-xl border p-5">
                  <BadgePercent className="text-ball h-6 w-6 shrink-0" />
                  <p className="text-sm leading-relaxed text-paper/85">
                    Първият урок е безплатен, а за второ дете в семейството
                    получавате 10% отстъпка.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={180}>
            <div className="img-zoom overflow-hidden rounded-2xl border border-line">
              <Image
                src="/media/kids-serving.jpg"
                alt="Деца учат сервис на тенис корт в Петрич"
                width={960}
                height={635}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Нива */}
      <section className="bg-ink-2 border-line border-y">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHead
            kicker="Пътят на малкия шампион"
            title="Нива в академията"
            text="Международно призната система за развитие на детски тенис — от първите топки до пълноценни мачове на голям корт."
          />

          <div className="mt-16 space-y-5">
            {KID_LEVELS.map((lvl, i) => (
              <Reveal key={lvl.id} delay={Math.min(i * 80, 320)}>
                <article
                  className="group bg-ink border-line relative grid gap-6 overflow-hidden rounded-2xl border p-7 transition-colors sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center"
                  style={{ borderLeft: `4px solid ${lvl.color}` }}
                >
                  <div
                    className="font-display text-6xl leading-none font-bold sm:text-7xl"
                    style={{ color: lvl.color }}
                  >
                    {String(i).padStart(2, "0")}
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-[0.3em] uppercase"
                      style={{ color: lvl.color }}
                    >
                      {lvl.ages}
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-semibold tracking-wide uppercase sm:text-4xl">
                      {lvl.name}
                    </h3>
                    <p className="text-muted mt-1 text-sm font-semibold tracking-wide uppercase">
                      {lvl.sub}
                    </p>
                    <p className="text-paper/75 mt-4 max-w-3xl text-[15px] leading-relaxed">
                      {lvl.text}
                    </p>
                  </div>
                  <div
                    className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full lg:flex"
                    style={{ backgroundColor: `${lvl.color}1A` }}
                  >
                    <div
                      className="h-12 w-12 rounded-full shadow-lg"
                      style={{ backgroundColor: lvl.color }}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Цени за деца */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            kicker="Изберете програма"
            title="Абонаменти за деца"
            text="Запазете място в една от нашите групи и осигурете на детето си качествена тренировка и забавление на корта!"
          />
          <Reveal delay={180}>
            <p className="text-ball border-ball/40 rounded-full border px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase">
              <Baby className="mr-2 inline h-4 w-4" />
              Първи урок безплатно · -10% за второ дете
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {KIDS_PRICING.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <PricingCard plan={p} featured={i === 1} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="/kontakti"
              className="group bg-ball text-ink font-display inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_60px_rgba(216,255,62,0.4)]"
            >
              Запиши детето си
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
