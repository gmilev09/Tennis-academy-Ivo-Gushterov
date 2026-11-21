import Link from "next/link";
import { Camera, ExternalLink } from "lucide-react";
import PageHero from "@/components/page-hero";
import GalleryGrid from "@/components/gallery-grid";
import { Reveal, RevealObserver } from "@/components/reveal";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { CLUB, GALLERY } from "@/lib/content";

export const metadata = {
  title: "Галерия",
  description:
    "Снимки от тренировки, турнири и събития на Тенис клуб „Иво Гущеров“ в Петрич – деца, възрастни и шампиони на корта.",
};

export default function GalleryPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Галерия"
        title="Животът на"
        accent="корта"
        text="Тренировки, турнири, купони и шампиони – истински моменти от ежедневието на клуба, заснети на нашите кортове в Петрич."
        image="/media/gallery-halloween-fun.jpg"
        imageAlt="Хелоуин забавление на корта"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <GalleryGrid images={GALLERY} />
        </Reveal>

        <Reveal delay={150}>
          <div className="bg-ink-2 border-line mt-16 flex flex-col items-start gap-6 rounded-2xl border p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="bg-ball/15 text-ball flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                <Camera className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold uppercase">
                  Още снимки и клипове всеки ден
                </h2>
                <p className="text-muted mt-1.5 max-w-xl text-sm leading-relaxed">
                  Следвайте официалната Facebook страница на клуба и Instagram
                  профила на Иво за най-свежи кадри от тренировки и турнири.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={CLUB.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-ball hover:text-ball flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-bold transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
              <a
                href={CLUB.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-ball hover:text-ball flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-bold transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
