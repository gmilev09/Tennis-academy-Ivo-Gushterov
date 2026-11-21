"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const PROGRAMS = [
  "Програма за деца (4–17 г.)",
  "Индивидуална тренировка",
  "Група за възрастни",
  "Кардио тенис",
  "Наем на корт (клей или хард)",
  "Споделен урок",
  "Друго / въпрос",
];

const inputCls =
  "w-full rounded-xl border border-line bg-ink px-4 py-3.5 text-[15px] text-paper placeholder:text-muted/70 outline-none transition-colors focus:border-ball";

export default function BookingForm({ compact = false }) {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="border-ball/40 bg-ball/5 rounded-2xl border p-8 text-center">
        <CheckCircle2 className="text-ball mx-auto h-12 w-12" />
        <h3 className="font-display mt-4 text-2xl font-semibold uppercase">
          Заявката е приета
        </h3>
        <p className="text-muted mt-2 text-sm leading-relaxed">
          Благодарим ви! Ще се свържем с вас възможно най-скоро. За спешни
          въпроси:{" "}
          <a href="tel:+359877306043" className="text-ball font-semibold">
            +359 87 7306043
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-ball mt-5 text-xs font-bold tracking-[0.25em] uppercase underline underline-offset-4"
        >
          Изпрати нова заявка
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`name-${compact}`} className="mb-1.5 block text-xs font-bold tracking-[0.2em] uppercase">
            Име и фамилия *
          </label>
          <input
            id={`name-${compact}`}
            name="name"
            required
            maxLength={120}
            placeholder="Вашето име"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor={`phone-${compact}`} className="mb-1.5 block text-xs font-bold tracking-[0.2em] uppercase">
            Телефон *
          </label>
          <input
            id={`phone-${compact}`}
            name="phone"
            type="tel"
            required
            maxLength={40}
            placeholder="08x xxx xxxx"
            className={inputCls}
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`email-${compact}`} className="mb-1.5 block text-xs font-bold tracking-[0.2em] uppercase">
            Имейл
          </label>
          <input
            id={`email-${compact}`}
            name="email"
            type="email"
            maxLength={160}
            placeholder="you@example.com"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor={`program-${compact}`} className="mb-1.5 block text-xs font-bold tracking-[0.2em] uppercase">
            Програма *
          </label>
          <select id={`program-${compact}`} name="program" required className={inputCls} defaultValue="">
            <option value="" disabled>
              Изберете програма
            </option>
            {PROGRAMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`date-${compact}`} className="mb-1.5 block text-xs font-bold tracking-[0.2em] uppercase">
          Предпочитана дата
        </label>
        <input
          id={`date-${compact}`}
          name="preferredDate"
          type="date"
          className={`${inputCls} [color-scheme:dark]`}
        />
      </div>

      <div>
        <label htmlFor={`msg-${compact}`} className="mb-1.5 block text-xs font-bold tracking-[0.2em] uppercase">
          Съобщение
        </label>
        <textarea
          id={`msg-${compact}`}
          name="message"
          rows={compact ? 3 : 4}
          maxLength={1000}
          placeholder="Кажете ни повече – възраст, ниво, удобни часове…"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="bg-ball text-ink font-display flex w-full items-center justify-center gap-2 rounded-full py-4 text-lg font-semibold tracking-wide uppercase transition-all hover:brightness-110"
      >
        <Send className="h-4 w-4" /> Изпрати заявка
      </button>
      <p className="text-muted text-center text-xs">
        Изпращайки формата, се съгласявате да се свържем с вас относно
        заявката.
      </p>
    </form>
  );
}
