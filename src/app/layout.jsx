import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://tennispetrich.com"),
  title: {
    default: "Тенис клуб „Иво Гущеров“ – Петрич | Твоят клуб, твоята игра",
    template: "%s | Тенис клуб „Иво Гущеров“ – Петрич",
  },
  description:
    "Тенис клуб „Иво Гущеров“ в Петрич – индивидуални и групови тренировки за деца и възрастни, детска тенис академия, наем на кортове с клей и хард настилка, турнири и специални събития.",
  keywords: [
    "тенис",
    "Петрич",
    "тенис клуб",
    "тенис академия",
    "тенис за деца",
    "Иво Гущеров",
    "тенис уроци",
  ],
  openGraph: {
    title: "Тенис клуб „Иво Гущеров“ – Петрич",
    description:
      "Индивидуални и групови тренировки за деца и възрастни – забавление и напредък за всички!",
    locale: "bg_BG",
    type: "website",
    images: ["/media/hero-smile.jpg"],
  },
  icons: {
    icon: "/media/logo-new.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className={`${oswald.variable} ${manrope.variable}`}>
      <body className="grain bg-ink text-paper antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
