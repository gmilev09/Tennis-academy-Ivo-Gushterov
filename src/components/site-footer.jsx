import Image from "@/lib/Image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { CLUB } from "@/lib/content";

const PAGES = [
  { href: "/za-nas", label: "За нас" },
  { href: "/programi-za-deca", label: "Програми за деца" },
  { href: "/individualni-trenirovki", label: "Индивидуални тренировки" },
  { href: "/programi-za-vazrastni", label: "Програми за възрастни" },
];

export default function SiteFooter() {
  return (
    <footer className="border-line bg-ink-2 relative border-t">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/95">
                <Image
                  src="/media/logo-new.jpg"
                  alt="Лого на Тенис клуб Иво Гущеров"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span className="font-display text-lg leading-tight font-semibold tracking-wide uppercase sm:text-xl">
                Тенис клуб „Иво Гущеров“
              </span>
            </Link>
            <p className="text-muted mt-5 max-w-xs text-sm leading-relaxed">
              Твоят клуб, твоята игра. Тенис в Петрич за деца и възрастни –
              забавление и напредък за всички.
            </p>
          </div>

          <div>
            <h3 className="text-ball mb-5 text-xs font-bold tracking-[0.3em] uppercase">
              Адрес
            </h3>
            <ul className="text-paper/85 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-ball mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={CLUB.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ball transition-colors"
                >
                  {CLUB.address}
                </a>
              </li>
              <li>
                <a
                  href={CLUB.phoneHref}
                  className="hover:text-ball flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="text-ball h-4 w-4 shrink-0" />
                  {CLUB.phone}
                </a>
              </li>
              <li>
                <a
                  href={CLUB.emailHref}
                  className="hover:text-ball flex items-center gap-2.5 break-all transition-colors"
                >
                  <Mail className="text-ball h-4 w-4 shrink-0" />
                  {CLUB.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-ball mb-5 text-xs font-bold tracking-[0.3em] uppercase">
              Страници
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-paper/85 hover:text-ball transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ball mb-5 text-xs font-bold tracking-[0.3em] uppercase">
              Последвайте ни
            </h3>
            <div className="flex gap-3">
              <a
                href={CLUB.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook страница на клуба"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all hover:border-ball hover:bg-ball hover:text-ink"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={CLUB.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram профил на Иво Гущеров"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all hover:border-ball hover:bg-ball hover:text-ink"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted mt-4 text-xs leading-relaxed">
              Новини, турнири и тренировки – ежедневно в социалните ни мрежи.
            </p>
          </div>
        </div>

        <div className="text-muted mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} Тенис клуб „Иво Гущеров“, Петрич.
            Всички права запазени.
          </p>
          <p className="font-display tracking-[0.3em] uppercase">
            Твоят клуб · Твоята игра
          </p>
        </div>
      </div>
    </footer>
  );
}
