import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/page-hero";
import BookingForm from "@/components/booking-form";
import SectionHead from "@/components/section-head";
import { Reveal, RevealObserver } from "@/components/reveal";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { CLUB } from "@/lib/content";

export const metadata = {
  title: "Контакти",
  description:
    "Свържете се с Тенис клуб „Иво Гущеров“ в Петрич — телефон +359 87 7306043, имейл ivogushterov15@gmail.com. Запазете тренировка или корт.",
};

const CARDS = [
  {
    icon: Mail,
    title: "Изпратете ни имейл",
    text: "Споделете вашите въпроси или заявки на нашия имейл.",
    href: CLUB.emailHref,
    action: CLUB.email,
    external: false,
  },
  {
    icon: Phone,
    title: "Обадете ни се",
    text: "Свържете се с нас за повече информация или записване на тренировки.",
    href: CLUB.phoneHref,
    action: CLUB.phone,
    external: false,
  },
  {
    icon: CalendarCheck,
    title: "Запазете час",
    text: "Резервирайте тренировка или корт бързо и лесно чрез формата.",
    href: "#zapisvane",
    action: "Към формата",
    external: false,
  },
];

export default function ContactsPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    'Тенис кортове "Иво Гущеров", 108, 2850 Петрич'
  )}&output=embed&hl=bg`;

  return (
    <>
      <RevealObserver />
      <PageHero
        kicker="Контакти"
        title="Свържете се"
        accent="с нас"
        text="Имате въпрос или искате да запазите час? Свържете се с нас и ние ще ви помогнем с удоволствие!"
        image="/media/court-42.jpg"
        imageAlt="Тенис корт на клуба в Петрич"
      />

      {/* Карти */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 110} className="h-full">
              <a
                href={c.href}
                className="group bg-ink-2 border-line hover:border-ball/60 flex h-full flex-col rounded-2xl border p-7 transition-colors"
              >
                <span className="bg-ball text-ink flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="font-display mt-5 text-2xl font-semibold uppercase">
                  {c.title}
                </h2>
                <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                  {c.text}
                </p>
                <span className="text-ball mt-5 break-all text-sm font-bold tracking-wide">
                  {c.action} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Форма + инфо + карта */}
        <div id="zapisvane" className="mt-16 grid scroll-mt-24 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead
              kicker="Записване"
              title="Заявете тренировка или корт"
              text="Попълнете формата и ще се свържем с вас за потвърждение. Първият урок за нови членове е безплатен."
            />
            <Reveal delay={180}>
              <div className="mt-8 space-y-4">
                <div className="bg-ink-2 border-line flex items-center gap-4 rounded-xl border p-5">
                  <MapPin className="text-ball h-6 w-6 shrink-0" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.25em] text-muted uppercase">
                      Адрес
                    </p>
                    <a
                      href={CLUB.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ball mt-1 block text-sm font-semibold transition-colors"
                    >
                      {CLUB.address} ↗
                    </a>
                  </div>
                </div>
                <div className="bg-ink-2 border-line flex items-center gap-4 rounded-xl border p-5">
                  <Phone className="text-ball h-6 w-6 shrink-0" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.25em] text-muted uppercase">
                      Телефон
                    </p>
                    <a
                      href={CLUB.phoneHref}
                      className="hover:text-ball mt-1 block text-sm font-semibold transition-colors"
                    >
                      {CLUB.phone}
                    </a>
                  </div>
                </div>
                <div className="bg-ink-2 border-line flex items-center gap-4 rounded-xl border p-5">
                  <Mail className="text-ball h-6 w-6 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.25em] text-muted uppercase">
                      Имейл
                    </p>
                    <a
                      href={CLUB.emailHref}
                      className="hover:text-ball mt-1 block text-sm font-semibold break-all transition-colors"
                    >
                      {CLUB.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={CLUB.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-ball hover:text-ball flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-4 text-sm font-bold transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5" /> Facebook
                  </a>
                  <a
                    href={CLUB.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-ball hover:text-ball flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-4 text-sm font-bold transition-colors"
                  >
                    <InstagramIcon className="h-5 w-5" /> Instagram
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div className="bg-ink-2 border-line rounded-2xl border p-6 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>

        {/* Карта */}
        <Reveal delay={150}>
          <div className="border-line mt-14 overflow-hidden rounded-2xl border">
            <iframe
              src={mapSrc}
              title="Карта — Тенис клуб „Иво Гущеров“, Петрич"
              className="h-[420px] w-full grayscale-[35%] invert-[92%] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
