import { Reveal } from "@/components/reveal";

export default function SectionHead({ kicker, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="text-ball mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.35em] uppercase">
          <span className="bg-ball inline-block h-px w-8" aria-hidden />
          {kicker}
          {align === "center" && (
            <span className="bg-ball inline-block h-px w-8" aria-hidden />
          )}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="font-display text-4xl leading-[1.02] font-semibold text-balance uppercase sm:text-5xl lg:text-[56px]">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={180}>
          <p className="text-muted mt-5 text-base leading-relaxed sm:text-lg">
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
