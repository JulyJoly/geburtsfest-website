
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const translations = {
  en: {
    home: "Home",
    program: "Program",
    speakers: "Speakers",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
  },
  de: {
    home: "Startseite",
    program: "Programm",
    speakers: "Referent:innen",
    about: "Über uns",
    faq: "FAQ",
    contact: "Kontakt",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const language = locale === "de" ? "de" : "en";
  const t = translations[language];

  const menu = [
    { label: t.home, href: `/${language}` },
    {
      label: t.program,
      href: `/${language}/geburtsfest-2026`,
    },
    {
      label: t.speakers,
      href: `/${language}/geburtsfest-2026-speakers`,
    },
    { label: t.about, href: `/${language}/about` },
    { label: t.faq, href: `/${language}/faq` },
    { label: t.contact, href: `/${language}/contact` },
  ];

  return (
    <>
      <header className="site-header">
        <Link
          href={`/${language}`}
          className="site-logo"
          aria-label="GeburtsFest Home"
        >
          <Image
            src="/logo.webp"
            alt="GeburtsFest"
            width={82}
            height={82}
            style={{ objectFit: "contain" }}
          />
        </Link>

        <nav className="site-nav" aria-label="Main menu">
          {menu.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-language">
          <Link
            href={language === "en" ? "/de" : "/en"}
            aria-label="Change language"
          >
            {language === "en" ? "DE" : "EN"}
          </Link>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <Link href={`/${language}`}>
          <Image
            src="/logo.webp"
            alt="GeburtsFest"
            width={80}
            height={80}
          />
        </Link>

        <div className="footer-center">
          <p>© GeburtsFest</p>
          <p>Julie Franceschini & Laura Ospelt</p>
          <a href="mailto:geburtsfest@gmail.com">
            geburtsfest@gmail.com
          </a>
        </div>

        <div className="footer-social">
          <a href="mailto:geburtsfest@gmail.com">
            Email
          </a>
        </div>
      </footer>

      <style>{`
        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 12px 3%;
          background: #f8fafc;
          border-bottom: 1px solid #e6eef5;
          position: relative;
          z-index: 20;
        }

        .site-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .site-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(18px, 3.5vw, 65px);
          flex: 1;
        }

        .site-nav a,
        .site-language a {
          color: #303b4d;
          text-decoration: none;
          font-size: 17px;
          white-space: nowrap;
        }

        .site-nav a:hover,
        .site-language a:hover {
          text-decoration: underline;
          text-underline-offset: 6px;
        }

        .site-language {
          min-width: 45px;
          text-align: right;
        }

        .site-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 25px 5%;
          background: #f8fafc;
          border-top: 1px solid #d7e8f5;
          color: #303b4d;
        }

        .footer-center {
          text-align: center;
          font-size: 14px;
          line-height: 1.7;
        }

        .footer-center p {
          margin: 0;
        }

        .footer-center a,
        .footer-social a {
          color: #3389d3;
          text-decoration: none;
        }

        .footer-center a:hover,
        .footer-social a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .site-header {
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .site-nav {
            order: 3;
            flex-basis: 100%;
            flex-wrap: wrap;
            gap: 14px 22px;
            padding: 12px 0;
          }

          .site-nav a {
            font-size: 15px;
          }
        }

        @media (max-width: 600px) {
          .site-footer {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }
      `}</style>
    </>
  );
}
