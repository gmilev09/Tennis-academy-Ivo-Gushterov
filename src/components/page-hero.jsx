import Image from "@/lib/Image";
import { Reveal, RevealObserver } from "@/components/reveal";

export default function PageHero({ kicker, title, accent, text, image, imageAlt }) {
  return (
    <section className="relative overflow-hidden">
      <RevealObserver />
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-44 pb-20 lg:px-8 lg:pt-56 lg:pb-28">
        <Reveal>
          <p className="text-ball mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.35em] uppercase">
            <span className="bg-ball inline-block h-px w-10" aria-hidden />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={110}>
          <h1 className="font-display max-w-4xl text-5xl leading-[0.98] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            {title}
            {accent && (
              <>
                {" "}
                <span className="text-ball">{accent}</span>
              </>
            )}
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-paper/80 mt-6 max-w-2xl text-lg leading-relaxed">
            {text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
