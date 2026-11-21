import Image from "@/lib/Image";
import Link from "next/link";
import { ArrowRight, CalendarClock, Crosshair, TrendingUp, User } from "lucide-react";
import PageHero from "@/components/page-hero";
import PricingCard from "@/components/pricing-card";
import SectionHead from "@/components/section-head";
import VideoTeaser from "@/components/video-teaser";
import { Reveal, RevealObserver } from "@/components/reveal";
import { INDIVIDUAL_PRICING } from "@/lib/content";

export const metadata = {
  title: "Индивидуални тренировки",
  description:
    "Персонални тенис уроци в Петрич с треньор Ивайло Гущеров – техника, тактика и бърз напредък за деца и възрастни. Пакети от 5 и 10 урока с отстъпка.",
};

const BENEFITS = [
  {
    icon: User,
    title: "Лично внимание",
    text: "Треньорът се фокусира изцяло върху вас.",
  },
  {
    icon: TrendingUp,
    title: "По-бърз напредък",
    text: "Насочено обучение към вашето ниво.",
  },
  {
    icon: CalendarClock,
    title: "Гъвкави часове",
    text: "Изберете удобно време за тренировки.",
  },
  {
    icon: Crosshair,
    title: "Техника и тактика",
    text: "Подобряване на удари, позициониране и стратегия.",
  },
];

export default function IndividualPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Тенис програми"
        title="Индивидуални"
        accent="тренировки"
        text="Персонализирани уроци с треньор, които ще ви помогнат да усъвършенствате техниката си — подходящи за всички възрасти и нива."
        image="/media/teo-action.jpg"
        imageAlt="Индивидуална тенис тренировка в Петрич"
      />

      {/* Персонално обучение */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Услуги"
              title="Персонално тенис обучение"
              text="Индивидуалните или малките групови уроци са най-бързият начин да напреднете в тениса. Работете 1:1 с професионален треньор, който ще анализира играта ви и ще ви помогне да усъвършенствате техниката, физическата издръжливост и стратегиите си."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 100}>
                  <div className="bg-ink-2 border-line h-full rounded-2xl border p-6">
                    <span className="bg-ball/15 text-ball flex h-11 w-11 items-center justify-center rounded-full">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-4 text-lg font-semibold uppercase">
                      {b.title}
                    </h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <Reveal delay={160}>
              <div className="img-zoom overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/media/court-52.jpg"
                  alt="Играч тренира на корта в клуба"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="bg-ink-3 border-line rounded-2xl border p-7">
                <h3 className="font-display text-ball text-2xl font-semibold uppercase">
                  Вдигни нивото на играта си
                </h3>
                <p className="text-paper/80 mt-3 text-sm leading-relaxed">
                  Тренирай като шампион! Персоналните тренировки с Иво са
                  най-бързият начин да подобриш своя сервис, бекхенд и движение
                  на корта. Гарантиран напредък — започни още днес!
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Видео */}
      <section className="bg-ink-2 border-line border-y">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
          <SectionHead
            kicker="От корта"
            title="Виж тренировка на живо"
            align="center"
          />
          <Reveal delay={180}>
            <div className="mt-12">
              <VideoTeaser />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Цени */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHead
          kicker="Избери програма"
          title="Пакети и цени"
          text="Изберете най-подходящия пакет за вашата индивидуална тенис подготовка. Пакетите с 5 или 10 индивидуални урока са перфектният подарък за вас или за любим човек — еднократни и със специална отстъпка."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {INDIVIDUAL_PRICING.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="h-full">
              <PricingCard plan={p} featured={i === 2} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <p className="text-muted mt-8 text-center text-sm">
            За деца и възрастни · кортът е включен в цената
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="absolute inset-0">
          <Image
            src="/media/courts-50.jpg"
            alt="Кортовете на клуба отвисоко"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/85" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-bold uppercase sm:text-5xl">
              Тренирай като <span className="text-ball">шампион</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/kontakti"
              className="group bg-ball text-ink font-display mt-9 inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_60px_rgba(216,255,62,0.4)]"
            >
              Запази индивидуален час
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
