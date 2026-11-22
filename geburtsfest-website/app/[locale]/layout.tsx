
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const navigation = {
  en: [
    { label: "Home", path: "" },
    { label: "Program", path: "/geburtsfest-2026" },
    { label: "Speakers", path: "/geburtsfest-2026-speakers" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/geburtsfest-2026-faq" },
    { label: "Contact", path: "/contact" },
  ],
  de: [
    { label: "Startseite", path: "" },
    { label: "Programm", path: "/geburtsfest-2026" },
    { label: "Referent:innen", path: "/geburtsfest-2026-speakers" },
    { label: "Über uns", path: "/about" },
    { label: "FAQ", path: "/geburtsfest-2026-faq" },
    { label: "Kontakt", path: "/contact" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "de") {
    notFound();
  }

  const menu = navigation[locale];

  return (
    <>
      <header className="site-header">
        <Link href={`/${locale}`} className="site-brand">
          <Image
            src="/logo.webp"
            width={76}
            height={76}
            alt="GeburtsFest"
            style={{ objectFit: "contain" }}
          />
        </Link>

        <nav
          className="site-navigation"
          aria-label="Main navigation"
        >
          {menu.map((item) => (
            <Link
              key={item.label}
              href={`/${locale}${item.path}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="site-language"
          href={locale === "en" ? "/de" : "/en"}
        >
          {locale === "en" ? "DE" : "EN"}
        </Link>
      </header>

      {children}

      <footer className="site-footer">
        <Link href={`/${locale}`}>
          <Image
            src="/logo.webp"
            width={70}
            height={70}
            alt="GeburtsFest"
          />
        </Link>

        <p>
          © GeburtsFest · Julie Franceschini & Laura Ospelt
        </p>

        <a href="mailto:geburtsfest@gmail.com">
          geburtsfest@gmail.com
        </a>
      </footer>

      <style>{`
        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 15px 4%;
          background: #f8f9fc;
          border-bottom: 1px solid #e4eaf0;
        }

        .site-brand {
          flex-shrink: 0;
        }

        .site-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: clamp(14px, 3vw, 50px);
        }

        .site-navigation a,
        .site-language {
          color: #303b4d;
          text-decoration: none;
          font-size: 17px;
        }

        .site-navigation a:hover,
        .site-language:hover {
          color: #3389d3;
          text-decoration: underline;
        }

        .site-language {
          font-weight: 600;
          flex-shrink: 0;
        }

        .site-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 30px 5%;
          background: #f8f9fc;
          border-top: 1px solid #c7e3f0;
          color: #303b4d;
          font-size: 14px;
        }

        .site-footer p {
          margin: 0;
        }

        .site-footer a {
          color: inherit;
        }

        @media (max-width: 800px) {
          .site-header {
            flex-wrap: wrap;
          }

          .site-navigation {
            order: 3;
            width: 100%;
            gap: 14px 22px;
            padding: 12px 0;
          }

          .site-navigation a {
            font-size: 15px;
          }

          .site-footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
