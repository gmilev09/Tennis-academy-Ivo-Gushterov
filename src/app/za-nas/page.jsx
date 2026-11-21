import Image from "@/lib/Image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, HeartHandshake, Target } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHead from "@/components/section-head";
import { Reveal, RevealObserver } from "@/components/reveal";
import { COACH } from "@/lib/content";

export const metadata = {
  title: "За нас",
  description:
    "Тенис клуб „Иво Гущеров“ в Петрич – водещ център за тенис услуги, където спортът се превръща в начин на живот. Запознайте се с главния треньор Ивайло Гущеров.",
};

const VALUES = [
  {
    icon: Target,
    title: "Мисия",
    text: "Да превръщаме тениса в начин на живот – да вдъхновяваме поколения играчи, да насърчаваме активния начин на живот и да развиваме любовта към тениса на всички нива.",
  },
  {
    icon: Award,
    title: "История",
    text: "Клуб, изграден върху състезателния опит и международното обучение на Ивайло Гущеров – носител на титли от България, Испания и Гърция, над 10 години на юношеската сцена.",
  },
  {
    icon: HeartHandshake,
    title: "Ценности",
    text: "Висококвалифициран екип, професионална инфраструктура и приятелска атмосфера, в която спортът вдъхновява, развива и обединява всички нас.",
  },
];

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Кои сме ние"
        title="Открийте свят, в който тенисът е"
        accent="начин на живот"
        text="Възможности за растеж и успех, вдъхновени от историята и ценностите на нашия клуб."
        image="/media/gallery-court-evening.jpg"
        imageAlt="Кортовете на тенис клуб „Иво Гущеров“ в Петрич"
      />

      {/* Представяне */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Нашата история"
              title="Тенис клуб „Иво Гущеров“"
              text="Тенис клуб „Иво Гущеров“ е водещ център за тенис услуги, където спортът се превръща в начин на живот. Вярваме, че тенисът е много повече от игра – той вдъхновява, развива и обединява всички нас."
            />
            <Reveal delay={200}>
              <p className="text-muted mt-5 leading-relaxed">
                С висококвалифициран екип и професионална инфраструктура нашият
                клуб вдъхновява поколения играчи, насърчава активния начин на
                живот и развива любовта към тениса на всички нива.
              </p>
            </Reveal>

            <div className="mt-12 space-y-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 120}>
                  <div className="bg-ink-2 border-line flex gap-5 rounded-2xl border p-6">
                    <span className="bg-ball/15 text-ball flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold uppercase">
                        {v.title}
                      </h3>
                      <p className="text-muted mt-1.5 text-sm leading-relaxed">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160} className="lg:sticky lg:top-28">
            <div className="img-zoom overflow-hidden rounded-2xl border border-line">
              <Image
                src="/media/club-training.jpg"
                alt="Тренировки в тенис клуб „Иво Гущеров“"
                width={1280}
                height={847}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="bg-ink-3 border-line mt-4 flex items-center gap-4 rounded-2xl border p-5">
              <Image
                src="/media/logo-new.jpg"
                alt="Лого на клуба"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full bg-white object-cover"
              />
              <p className="text-sm leading-relaxed text-paper/85">
                Клей и хард кортове, вечерно осветление и атмосфера, която
                кара децата и възрастните да идват отново.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Треньор */}
      <section className="bg-ink-2 border-line border-y">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-start gap-14 lg:grid-cols-[400px_1fr]">
            <Reveal>
              <div className="relative lg:sticky lg:top-28">
                <div className="img-zoom overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={COACH.photo}
                    alt="Ивайло Гущеров – главен тенис треньор"
                    width={600}
                    height={770}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="bg-ball text-ink absolute -right-3 -bottom-6 rounded-2xl px-6 py-4 shadow-xl sm:-right-6">
                  <p className="font-display text-xl leading-none font-semibold uppercase">
                    {COACH.name}
                  </p>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.18em] uppercase">
                    {COACH.role}
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHead
                kicker="Нашият екип"
                title={COACH.name}
                text={COACH.bio}
              />
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {COACH.credentials.map((c, i) => (
                  <Reveal key={c} delay={i * 60}>
                    <div className="bg-ink border-line flex h-full items-start gap-3 rounded-xl border p-4">
                      <BadgeCheck className="text-ball mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-sm leading-relaxed text-paper/85">{c}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight font-bold text-balance uppercase sm:text-5xl">
            Елате на корта и усетете <span className="text-ball">разликата</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-muted mx-auto mt-5 max-w-xl">
            Първият урок за нови членове е безплатен – запишете се днес.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <Link
            href="/kontakti"
            className="group bg-ball text-ink font-display mt-9 inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_60px_rgba(216,255,62,0.4)]"
          >
            Запиши безплатен урок
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
