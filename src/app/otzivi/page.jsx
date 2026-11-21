import Image from "@/lib/Image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHead from "@/components/section-head";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import { Reveal, RevealObserver } from "@/components/reveal";

export const metadata = {
  title: "Отзиви",
  description:
    "Горди членове на Тенис клуб „Иво Гущеров“ споделят защо клубът е повече от място за тренировки – умения, приятелства и любов към тениса.",
};

export default function TestimonialsPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Отзиви"
        title="Горди членове на"
        accent="клуба"
        text="Нашите играчи споделят защо Тенис клуб „Иво Гущеров“ е повече от място за тренировки – тук се изграждат умения, приятелства и истинска любов към тениса."
        image="/media/gallery-young-players.jpg"
        imageAlt="Малки тенисисти на корта в клуба"
      />

      {/* Слайдер с по едно ревю */}
      <section className="bg-ink-2 border-line border-b">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <SectionHead
            kicker="Забавни уроци за всички нива"
            title="Какво казват нашите играчи"
            text="Превъртете със стрелките или плъзнете наляво/надясно, за да разгледате отзивите."
            align="center"
          />
          <Reveal delay={140}>
            <div className="mt-12">
              <TestimonialsCarousel />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted mt-8 text-center text-xs tracking-wide uppercase">
              Отзивите са публикувани от членове на клуба в официалния сайт.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Галерия лента */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "/media/gallery-champions.jpg",
            "/media/gallery-family-tournament.jpg",
            "/media/gallery-kids-net.jpg",
          ].map((src, i) => (
            <Reveal key={src} delay={i * 110}>
              <div className="img-zoom overflow-hidden rounded-2xl border border-line">
                <Image
                  src={src}
                  alt="Моменти от тенис клуб „Иво Гущеров“"
                  width={600}
                  height={450}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-line border-t">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-bold uppercase sm:text-5xl">
              Станете следващата <span className="text-ball">история на клуба</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/kontakti"
              className="group bg-ball text-ink font-display mt-9 inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:shadow-[0_0_60px_rgba(216,255,62,0.4)]"
            >
              Запиши безплатен урок
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
