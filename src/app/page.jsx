import Image from "@/lib/Image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Gift,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import Faq from "@/components/faq";
import Marquee from "@/components/marquee";
import NewsSection from "@/components/news-section";
import SectionHead from "@/components/section-head";
import SocialHub from "@/components/facebook-embed";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import VideoTeaser from "@/components/video-teaser";
import { Reveal, RevealObserver } from "@/components/reveal";
import { CLUB, FAQ, SERVICES } from "@/lib/content";

const PROGRAMS = [
  {
    n: "01",
    title: "Програми за деца",
    text: "Големите успехи започват от малки. Забавни и образователни тренировки за най-младите ни таланти — от 4 до 17 години.",
    href: "/programi-za-deca",
    img: "/media/kids-training.jpg",
  },
  {
    n: "02",
    title: "Индивидуални тренировки",
    text: "Персонализирани уроци 1:1 с треньор, които ще ви помогнат да усъвършенствате техниката си максимално бързо.",
    href: "/individualni-trenirovki",
    img: "/media/teo-action.jpg",
  },
  {
    n: "03",
    title: "Програми за възрастни",
    text: "Тенис за всички нива — от любители до напреднали. Развийте уменията си в групова обстановка.",
    href: "/programi-za-vazrastni",
    img: "/media/gallery-trainings.jpg",
  },
  {
    n: "04",
    title: "Наем на тенис кортове",
    text: "Идеалното място за вашата игра — изберете между клей и хард настилка и играйте вечер с осветление.",
    href: "/abonamenti-i-ceni",
    img: "/media/court-42.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <RevealObserver />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/media/hero-smile.jpg"
            alt="Деца тренират тенис в клуб „Иво Гущеров“ в Петрич"
            fill
            priority
            sizes="100vw"
            className="ken-burns object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-40 pb-16 lg:px-8">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-ball border-ball/40 rounded-full border px-4 py-1.5 text-[11px] font-bold tracking-[0.3em] uppercase">
                {CLUB.tagline}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display max-w-5xl text-[13.5vw] leading-[0.95] font-bold tracking-tight text-balance uppercase sm:text-7xl lg:text-[104px]">
              Тенис клуб
              <br />
              <span className="text-ball">„Иво Гущеров“</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="text-paper/85 mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              Индивидуални и групови тренировки за деца и възрастни –
              забавление и напредък за всички! Присъединете се към нашето
              тенис семейство.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakti"
                className="group bg-ball text-ink font-display inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_50px_rgba(216,255,62,0.35)]"
              >
                Запиши безплатен урок
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CLUB.phoneHref}
                className="border-line hover:border-ball inline-flex items-center gap-2.5 rounded-full border px-7 py-4 font-bold tracking-wider backdrop-blur-sm transition-colors"
              >
                <Phone className="text-ball h-4 w-4" />
                {CLUB.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="text-muted mt-14 flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase">
              <ChevronDown className="text-ball h-4 w-4 animate-bounce" />
              Разгледай надолу
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee
        items={[
          "Детска академия",
          "Индивидуални уроци",
          "Клей и хард кортове",
          "Турнири и събития",
          "Кардио тенис",
          "Безплатен първи урок",
        ]}
      />

      {/* ============ АКАДЕМИЯ ============ */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* фактическа лента */}
        <Reveal>
          <div className="border-line bg-ink-2 mb-16 grid grid-cols-2 divide-x divide-line overflow-hidden rounded-2xl border lg:grid-cols-4">
            {[
              ["4–17 г.", "деца в академията"],
              ["Клей & Хард", "две настилки"],
              ["Осветление", "вечерна игра"],
              ["Целогодишно", "турнири и събития"],
            ].map(([big, small]) => (
              <div key={small} className="px-5 py-6 text-center sm:px-8">
                <p className="font-display text-ball text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                  {big}
                </p>
                <p className="text-muted mt-1.5 text-[11px] font-bold tracking-[0.2em] uppercase sm:text-xs">
                  {small}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Услуги"
              title="Професионална тенис академия"
              text="Вдъхновяваме нови поколения тенисисти и предоставяме възможности за спорт, развитие и забавление. Създаваме среда, която мотивира децата и младежите да се усъвършенстват и да постигат успехи — и предлагаме тенис за любители от всички възрасти и нива."
            />
            <Reveal delay={220}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <div
                    key={s}
                    className="bg-ink-2 border-line hover:border-ball/50 flex items-center gap-3 rounded-xl border px-4 py-3.5 text-[14px] font-semibold transition-colors"
                  >
                    <span className="bg-ball text-ink flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/za-nas"
                className="group text-ball mt-9 inline-flex items-center gap-2 text-sm font-bold tracking-[0.25em] uppercase"
              >
                Познай клуба по-отблизо
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="relative pt-6">
            <div className="ball-dots absolute -top-2 -right-2 h-40 w-40 rounded-2xl" aria-hidden />
            <Reveal delay={150}>
              <div className="img-zoom relative -rotate-2 overflow-hidden rounded-2xl border border-line shadow-2xl transition-transform duration-700 hover:rotate-0">
                <Image
                  src="/media/kids-serving.jpg"
                  alt="Малки тенисисти тренират сервис"
                  width={960}
                  height={635}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              delay={320}
              className="absolute -bottom-10 -left-2 hidden w-60 sm:block lg:-left-12"
            >
              <div className="img-zoom rotate-2 overflow-hidden rounded-2xl border border-line shadow-2xl transition-transform duration-700 hover:rotate-0">
                <Image
                  src="/media/club-63.jpg"
                  alt="Тренировка на корта в клуба"
                  width={450}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              delay={420}
              className="bg-ball text-ink absolute -top-8 right-4 rotate-3 rounded-2xl px-6 py-5 shadow-[0_10px_50px_rgba(216,255,62,0.25)]"
            >
              <p className="font-display text-3xl leading-none font-bold">4–17</p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] uppercase">
                години в детската академия
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ПРОГРАМИ ============ */}
      <section className="bg-ink-2 border-line relative border-y">
        <div className="court-lines pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              kicker="Програми"
              title="Тренировъчни програми"
              text="Открийте удоволствието от играта или усъвършенствайте уменията си с нашите професионални програми."
            />
            <Reveal delay={200}>
              <Link
                href="/abonamenti-i-ceni"
                className="group border-line hover:border-ball inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-bold tracking-[0.2em] uppercase transition-colors"
              >
                Всички цени
                <ArrowRight className="text-ball h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.n} delay={i * 110}>
                <Link
                  href={p.href}
                  className="group bg-ink border-line hover:border-ball/60 relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors"
                >
                  <div className="img-zoom relative h-52 overflow-hidden sm:h-60">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <span className="text-stroke font-display absolute right-5 bottom-3 text-7xl font-bold">
                      {p.n}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display group-hover:text-ball flex items-center justify-between gap-4 text-2xl font-semibold tracking-wide uppercase transition-colors sm:text-[28px]">
                      {p.title}
                      <ArrowUpRight className="text-muted group-hover:text-ball h-6 w-6 shrink-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="text-muted mt-3 text-[15px] leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ТЕО ДАВИДОВ ============ */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[420px_1fr]">
          <Reveal>
            <div className="relative">
              <div className="img-zoom overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/media/gallery-teo.jpg"
                  alt="Тео Давидов на корта в Петрич — тенисист с двата форхенда"
                  width={600}
                  height={588}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="bg-ball text-ink absolute -right-4 -bottom-6 rounded-2xl px-6 py-4 shadow-xl">
                <Trophy className="mb-1 h-5 w-5" />
                <p className="font-display leading-none font-semibold uppercase">
                  Световен талант
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHead
              kicker="Нашата звезда"
              title="Тео Давидов: талант на световно ниво"
              text="Гордост за тениса и вдъхновение за нашия клуб! Тео Давидов — световно признат тенисист с уникален стил на игра и двата си форхенда — избира тенис клуб „Иво Гущеров“ за своята подготовка през лятото. Известен с иновативните си техники и впечатляващи резултати на международната сцена, Тео вдъхновява настоящи и бъдещи таланти."
            />
            <Reveal delay={260}>
              <div className="mt-9">
                <VideoTeaser />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ СЪБИТИЯ И ПОСТИЖЕНИЯ ============ */}
      <NewsSection />

      {/* ============ ОТЗИВИ ============ */}
      <section className="bg-ink-2 border-line relative border-y">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="text-stroke-ball font-display absolute -top-6 left-0 text-[22vw] leading-none font-bold whitespace-nowrap uppercase opacity-40 select-none">
            Петрич · Тенис
          </span>
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <SectionHead
            kicker="Отзиви"
            title="Забавни уроци за всички нива"
            text="Тренировки, които съчетават игра и развитие на тенис умения за всяка възраст и ниво — превъртете със стрелките или плъзнете."
            align="center"
          />

          <Reveal delay={140}>
            <div className="mt-12">
              <TestimonialsCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ЧЛЕНСТВО ============ */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Членство"
              title="Присъедини се към клуба"
              text="Станете част от нашето тенис семейство и започнете своето приключение на корта още днес."
            />
            <div className="mt-10 space-y-5">
              <Reveal delay={180}>
                <div className="border-line bg-ink-2 flex gap-5 rounded-2xl border p-6">
                  <span className="bg-ball text-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Gift className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase">
                      Безплатен първи урок за нови членове
                    </h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      Опитайте тениса с безплатен първи урок — забавление и нови
                      умения за всички. За второ дете в семейството — 10%
                      отстъпка.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="border-line bg-ink-2 flex gap-5 rounded-2xl border p-6">
                  <span className="bg-clay text-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase">
                      Персонализирана тенис екипировка
                    </h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      Всеки член получава ракета за тренировките.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={380}>
              <Link
                href="/kontakti"
                className="group bg-ball text-ink font-display mt-9 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_50px_rgba(216,255,62,0.35)]"
              >
                Запази мястото си
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="img-zoom overflow-hidden rounded-2xl border border-line">
              <Image
                src="/media/gallery-champions.jpg"
                alt="Награждаване на младите шампиони на клуба"
                width={1280}
                height={864}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-ink-2 border-line border-y">
        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHead
            kicker="Играй с нас"
            title="Често задавани въпроси"
            text="Отговори на най-често задаваните въпроси за нашите програми и услуги."
            align="center"
          />
          <Reveal delay={200}>
            <div className="mt-14">
              <Faq items={FAQ} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ СОЦИАЛНИ МРЕЖИ ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            kicker="На живо от корта"
            title="Следвай ни в социалните мрежи"
            text="Реални публикации, снимки и клипове от тренировките и турнирите на клуба — директно от нашата Facebook страница."
          />
        </div>
        <Reveal delay={200}>
          <div className="mt-14">
            <SocialHub />
          </div>
        </Reveal>
      </section>

      {/* ============ ФИНАЛНО CTA ============ */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="absolute inset-0">
          <Image
            src="/media/kids-training.jpg"
            alt="Деца по време на тенис тренировка в Петрич"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/85" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center lg:py-32">
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.98] font-bold uppercase sm:text-6xl lg:text-7xl">
              Твоето място е
              <br />
              <span className="text-ball">на корта</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-paper/80 mx-auto mt-6 max-w-xl text-lg">
              Първият урок е безплатен. Елате, играйте и усетете тениса в
              Петрич по нашия начин.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakti"
                className="bg-ball text-ink font-display inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_60px_rgba(216,255,62,0.4)]"
              >
                Запиши се сега
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={CLUB.phoneHref}
                className="border-paper/30 hover:border-ball inline-flex items-center gap-2.5 rounded-full border px-8 py-4 font-bold tracking-wider transition-colors"
              >
                <Phone className="text-ball h-4 w-4" />
                {CLUB.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
