"use client";

import Image from "@/lib/Image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CLUB, NAV } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative block h-11 w-11 overflow-hidden rounded-full bg-white/95 p-1 ring-1 ring-white/10">
              <Image
                src="/media/logo-new.jpg"
                alt="Лого на Тенис клуб Иво Гущеров"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <span className="font-display text-sm leading-tight font-semibold tracking-wide uppercase sm:text-lg">
              Тенис клуб
              <span className="text-ball block text-[10px] tracking-[0.18em] sm:text-[13px] sm:tracking-[0.22em]">
                „Иво Гущеров“
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link-sweep text-[13px] font-semibold tracking-wide uppercase ${
                  pathname === item.href
                    ? "active text-ball"
                    : "text-paper/80 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CLUB.phoneHref}
              className="group hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-bold tracking-wider transition-colors hover:border-ball sm:flex"
            >
              <Phone className="text-ball h-3.5 w-3.5" />
              {CLUB.phone}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Отвори менюто"
              className="border-line flex h-11 w-11 items-center justify-center rounded-full border xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`bg-ink-2 absolute top-0 right-0 flex h-full w-[84%] max-w-sm flex-col border-l border-line transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[76px] items-center justify-between border-b border-line px-6">
            <span className="font-display text-ball text-sm font-semibold tracking-[0.25em] uppercase">
              Меню
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Затвори менюто"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-6">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`font-display border-b border-line py-4 text-2xl font-semibold uppercase transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                } ${pathname === item.href ? "text-ball" : "text-paper"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-line p-6">
            <a
              href={CLUB.phoneHref}
              className="bg-ball text-ink font-display flex items-center justify-center gap-2 rounded-full py-3.5 text-lg font-semibold tracking-wide uppercase"
            >
              <Phone className="h-4 w-4" /> Обади се
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
