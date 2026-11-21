import Image from "@/lib/Image";
import { ExternalLink, Medal, Sparkles } from "lucide-react";
import SectionHead from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { FacebookIcon } from "@/components/social-icons";
import { CLUB, NEWS } from "@/lib/content";

export default function NewsSection() {
  return (
    <section className="bg-ink-2 border-line relative border-y">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="text-stroke font-display absolute right-0 -bottom-10 text-[20vw] leading-none font-bold whitespace-nowrap uppercase opacity-30 select-none">
          Шампиони
        </span>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            kicker="Актуално от Facebook"
            title="Събития и постижения"
            text="Турнири, отличия и каузи на клуба — реални новини от нашата официална Facebook страница."
          />
          <Reveal delay={200}>
            <a
              href={CLUB.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-line hover:border-ball inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-bold tracking-[0.2em] uppercase transition-colors"
            >
              <FacebookIcon className="text-ball h-4 w-4" />
              Всички публикации
              <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 110} className="h-full">
              <article className="group bg-ink border-line hover:border-ball/50 flex h-full flex-col overflow-hidden rounded-2xl border transition-colors sm:flex-row">
                {n.img ? (
                  <div className="img-zoom relative h-60 shrink-0 overflow-hidden sm:h-auto sm:w-52 lg:w-60">
                    <Image
                      src={n.img}
                      alt={n.imgAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover"
                    />
                    <span className="bg-ball text-ink absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase">
                      {n.tag}
                    </span>
                  </div>
                ) : (
                  <div className="bg-ink-3 ball-dots relative flex h-60 shrink-0 items-center justify-center sm:h-auto sm:w-52 lg:w-60">
                    <FacebookIcon className="text-ball/70 h-14 w-14" />
                    <span className="bg-ball text-ink absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase">
                      {n.tag}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <p className="text-muted flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase">
                    <Sparkles className="text-ball h-3.5 w-3.5" />
                    Тенис клуб „Иво Гущеров"
                  </p>
                  <h3 className="font-display group-hover:text-ball mt-2.5 text-2xl leading-tight font-semibold uppercase transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-paper/75 mt-3 text-sm leading-relaxed">
                    {n.text}
                  </p>
                  {n.results && (
                    <ul className="border-line mt-4 space-y-2 border-t pt-4">
                      {n.results.map((r) => (
                        <li
                          key={r}
                          className="text-ball/90 flex items-start gap-2.5 text-[13px] font-semibold"
                        >
                          <Medal className="mt-0.5 h-4 w-4 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ball mt-auto inline-flex items-center gap-2 pt-5 text-xs font-bold tracking-[0.25em] uppercase"
                  >
                    Виж публикацията
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="text-muted mt-8 text-center text-xs tracking-wide uppercase">
            Снимките и информацията са от официалната Facebook страница на
            клуба.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
