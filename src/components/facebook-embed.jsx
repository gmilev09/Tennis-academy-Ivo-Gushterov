import { CLUB } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { ExternalLink } from "lucide-react";

export default function SocialHub() {
  const fbSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    CLUB.facebook
  )}&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <iframe
          src={fbSrc}
          title="Facebook страница на Тенис клуб „Иво Гущеров“"
          className="h-[640px] w-full"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={CLUB.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group border-line bg-ink-2 hover:border-ball flex-1 rounded-2xl border p-7 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2]/15 text-[#5ba1ff]">
              <FacebookIcon className="h-6 w-6" />
            </span>
            <ExternalLink className="text-muted group-hover:text-ball h-4 w-4 transition-colors" />
          </div>
          <h3 className="font-display mt-6 text-2xl font-semibold uppercase">
            Facebook
          </h3>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            Тенис Клуб „Иво Гущеров“ – всички турнири, събития и клипове от
            корта първо там.
          </p>
          <p className="text-ball mt-4 text-xs font-bold tracking-[0.25em] uppercase">
            Последвай страницата
          </p>
        </a>

        <a
          href={CLUB.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group border-line bg-ink-2 hover:border-ball flex-1 rounded-2xl border p-7 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E1306C]/15 text-[#ff6ba0]">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <ExternalLink className="text-muted group-hover:text-ball h-4 w-4 transition-colors" />
          </div>
          <h3 className="font-display mt-6 text-2xl font-semibold uppercase">
            Instagram
          </h3>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            @ivo_gushterov – моменти от тренировките и ежедневието на
            треньора ни.
          </p>
          <p className="text-ball mt-4 text-xs font-bold tracking-[0.25em] uppercase">
            Последвай профила
          </p>
        </a>
      </div>
    </div>
  );
}
