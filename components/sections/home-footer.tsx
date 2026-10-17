"use client";

import Link from "next/link";
import { Instagram, Mail, Music2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/mrsvenezuela_1/", icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@mrsvenezuela1", icon: Music2 },
];

export function HomeFooter() {
  const { dictionary } = useLanguage();
  const groups = [
    {
      title: dictionary.footer.discover,
      links: [
        { label: dictionary.nav.menu.home, href: "/" },
        { label: dictionary.nav.menu.states, href: "/estados" },
        { label: dictionary.nav.menu.beaches, href: "/playas" },
        { label: dictionary.nav.destinations, href: "/#destinos" },
      ],
    },
    {
      title: dictionary.footer.closer,
      links: [
        { label: dictionary.nav.articles, href: "/#articulos" },
        { label: dictionary.nav.menu.about, href: "/sobre-nosotros" },
        { label: dictionary.nav.menu.contact, href: "/contacto" },
      ],
    },
  ];

  return (
    <footer className="bg-[#f7f4ec] text-[#263b31]">
      <div className="container-page pb-7 pt-10 md:pt-12">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-12 lg:gap-20">
          <nav aria-label={dictionary.nav.menuLabel} className="grid grid-cols-2 gap-6 sm:gap-10">
            {groups.map((group) => (
              <div key={group.title} className="min-w-0">
                <p className="mb-3 text-[0.69rem] font-medium uppercase tracking-[0.16em] text-[#68726d]">
                  {group.title}
                </p>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center py-1 font-[family-name:var(--font-display)] text-xl font-medium leading-snug hover:underline hover:underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <section className="min-w-0">
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-medium leading-tight">
              {dictionary.footer.letsTalk}
            </h2>
            <a
              href="mailto:infomrsvenezuela@gmail.com"
              className="inline-flex min-h-11 max-w-full items-center gap-2 text-sm hover:underline hover:underline-offset-4"
            >
              <Mail size={16} strokeWidth={1.7} aria-hidden="true" className="shrink-0" />
              <span className="min-w-0 break-all">infomrsvenezuela@gmail.com</span>
            </a>
            <nav aria-label={dictionary.footer.follow} className="mt-3 flex flex-wrap items-center gap-x-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-xs hover:underline hover:underline-offset-4"
                >
                  <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  <span data-translated="true">{label}</span>
                </a>
              ))}
            </nav>
          </section>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#68726d]">
          <span>© 2026 Mrs Venezuela</span>
          <Link href="/aviso-legal" lang="es" data-translated="true" className="inline-flex min-h-11 items-center hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Aviso legal</Link>
          <Link href="/privacidad" className="inline-flex min-h-11 items-center hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{dictionary.footer.privacy}</Link>
          <Link href="/terminos" className="inline-flex min-h-11 items-center hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{dictionary.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
