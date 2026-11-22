
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const copy = {
  en: {
    hero: "Birth belongs to all of us.",
    tag: "A space for knowledge, choice and community",
    welcome: "Come as you are.",
    welcomeText:
      "Whether you are expecting a baby, already a parent, supporting families, working in birth care, or simply curious — you are welcome.",
    about: "How it began",
    story:
      "It began with encounters. GeburtsFest didn't begin with a business plan. It grew from personal experiences of pregnancy, birth and motherhood. From conversations, questions and the desire to bring together people who had something meaningful to contribute. One encounter led to another. And somewhere along the way, GeburtsFest was born.",
    founders: "Julie Franceschini & Laura Ospelt · Co-founders",
    values: "We believe in choice.",
    valuesText:
      "Home birth. Birth centre. Hospital. With a midwife. With a doula. With a partner. With medical support when wanted or needed. There is no single right way to give birth.",
    manifesto: "Our Manifesto",
    manifestoText:
      "Birth is more than a moment. A child is born. A mother is born. A family takes a new shape. We believe women deserve to understand their bodies, ask questions, be listened to, know their options, and make informed choices. We believe mothers were never meant to do this alone. GeburtsFest is our invitation to gather again — to question, listen and learn from one another.",
    program: "GeburtsFest 2026",
    programText:
      "Discover the talks, workshops and inspiring encounters from our 2026 gathering.",
    programButton: "View the 2026 Program",
    faq: "Frequently asked questions",
    contact: "Connect with us",
    send: "Write us an email",
    closing:
      "A place to gather. A place to question. A place to begin.",
    questions: [
      [
        "Who is it for?",
        "Expecting parents, mothers, fathers, birth professionals, people supporting families and anyone who is curious.",
      ],
      [
        "Can I come with my kids?",
        "Yes. Families and children are welcome. For our 2026 gathering, there was a garden and a dedicated play area. Please check the arrangements for each future event.",
      ],
      [
        "Will tickets be available at the door?",
        "For our 2026 event, tickets were available at the door, with TWINT or cash. Details for future events will be announced separately.",
      ],
      [
        "Will food and drinks be available?",
        "At the 2026 event, k0 Sourdough provided food and drinks, and water was available on site. Food options for future events will be announced separately.",
      ],
    ],
  },
  de: {
    hero: "Geburt geht uns alle an.",
    tag: "Ein Raum für Wissen, Selbstbestimmung und Gemeinschaft",
    welcome: "Komm, wie du bist.",
    welcomeText:
      "Ob du ein Kind erwartest, bereits Mutter oder Vater bist, Familien begleitest, in der Geburtshilfe arbeitest oder einfach neugierig bist – du bist willkommen.",
    about: "Wie alles begann",
    story:
      "Alles begann mit Begegnungen. GeburtsFest entstand nicht aus einem Businessplan, sondern aus persönlichen Erfahrungen mit Schwangerschaft, Geburt und Mutterschaft. Aus Gesprächen, Fragen und dem Wunsch, Menschen mit wertvollen Perspektiven zusammenzubringen. Eine Begegnung führte zur nächsten. Und irgendwann wurde GeburtsFest geboren.",
    founders: "Julie Franceschini & Laura Ospelt · Gründerinnen",
    values: "Wir glauben an Wahlfreiheit.",
    valuesText:
      "Hausgeburt. Geburtshaus. Krankenhaus. Mit Hebamme. Mit Doula. Mit Partner oder Partnerin. Mit medizinischer Unterstützung, wenn sie gewünscht oder notwendig ist. Es gibt nicht den einen richtigen Weg zu gebären.",
    manifesto: "Unser Manifest",
    manifestoText:
      "Geburt ist mehr als ein Moment. Ein Kind wird geboren. Eine Mutter wird geboren. Eine Familie verändert sich. Wir glauben, dass Frauen ihren Körper verstehen, Fragen stellen, gehört werden, ihre Möglichkeiten kennen und selbstbestimmte Entscheidungen treffen dürfen. Mütter sollten diesen Weg nicht allein gehen müssen. GeburtsFest lädt uns ein, wieder zusammenzukommen – Fragen zu stellen, zuzuhören und voneinander zu lernen.",
    program: "GeburtsFest 2026",
    programText:
      "Entdecke die Vorträge, Workshops und Begegnungen unseres GeburtsFestes 2026.",
    programButton: "Programm 2026 ansehen",
    faq: "Häufige Fragen",
    contact: "Kontakt",
    send: "E-Mail schreiben",
    closing:
      "Ein Ort zum Zusammenkommen. Ein Ort für Fragen. Ein Ort für neue Anfänge.",
    questions: [
      [
        "Für wen ist GeburtsFest?",
        "Für werdende Eltern, Mütter, Väter, Geburtsbegleiter:innen, Fachpersonen und alle Neugierigen.",
      ],
      [
        "Kann ich meine Kinder mitbringen?",
        "Ja, Familien und Kinder sind willkommen. Beim Fest 2026 gab es einen Garten und einen Spielbereich. Bitte beachte die Informationen zur jeweiligen Veranstaltung.",
      ],
      [
        "Gibt es Tickets an der Tageskasse?",
        "Für die Veranstaltung 2026 waren Tickets an der Tageskasse mit TWINT oder Bargeld erhältlich. Informationen zu zukünftigen Veranstaltungen folgen.",
      ],
      [
        "Gibt es Essen und Getränke?",
        "Beim Fest 2026 gab es Essen und Getränke von k0 Sourdough sowie Wasser vor Ort. Über künftige Angebote informieren wir separat.",
      ],
    ],
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "de") {
    notFound();
  }

  const t = copy[locale];

  return (
    <main>
      <section id="home" className="hero">
        <span className="eyebrow">GEBURTSFEST</span>

        <img
          src="/julyjoly_spiritual_birth_and_natural_birth_of_a_baby_blue_ton_5efce4ce-ce6a-434b-901c-02fb65de76e8_2 (1).png"
          alt="GeburtsFest natural birth illustration"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "850px",
            height: "auto",
            margin: "32px auto",
          }}
        />

        <h1>{t.hero}</h1>
        <p>{t.tag}</p>

        <Link className="button" href={`/${locale}/about`}>
          {locale === "en"
            ? "Discover our story"
            : "Unsere Geschichte"}
        </Link>
      </section>

      <section className="section centered">
        <h2>{t.welcome}</h2>
        <p className="lead">{t.welcomeText}</p>
      </section>

      <section id="about" className="section split">
        <div>
          <h2>{t.about}</h2>
          <p>{t.story}</p>
          <p className="signature">{t.founders}</p>

          <Link className="button" href={`/${locale}/about`}>
            {locale === "en"
              ? "Read our story"
              : "Unsere Geschichte lesen"}
          </Link>
        </div>

        <Image
          className="founders"
          src="/founders.jpg"
          width={850}
          height={1050}
          alt="The GeburtsFest co-founders with their children in the garden"
        />
      </section>

      <section className="blue centered section">
        <h2>{t.values}</h2>
        <p className="lead">{t.valuesText}</p>

        <p className="lead">
          {locale === "en"
            ? "Being informed, being heard, and being part of the decisions concerning your body and your baby."
            : "Informiert sein, gehört werden und bei Entscheidungen über den eigenen Körper und das eigene Kind mitbestimmen."}
        </p>
      </section>

      <section className="section centered manifesto">
        <h2>{t.manifesto}</h2>
        <p>{t.manifestoText}</p>
        <p className="closing-line">{t.closing}</p>
      </section>

      <section
        id="program"
        className="section centered blue"
      >
        <h2>{t.program}</h2>
        <p className="lead">{t.programText}</p>

        <p className="note">
          GeburtsFest 2026 · 29 August ·
          Küefer-Martis-Huus, Ruggell, Liechtenstein
        </p>

        <Link
          className="button"
          href={`/${locale}/geburtsfest-2026`}
        >
          {t.programButton}
        </Link>
      </section>

      <section id="faq" className="section faq">
        <h2>{t.faq}</h2>

        {t.questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>

      <section
        id="contact"
        className="section contact"
      >
        <div>
          <h2>{t.contact}</h2>
          <p>geburtsfest@gmail.com</p>
        </div>

        <div className="contact-panel">
          <p>
            {locale === "en"
              ? "Questions, ideas or collaboration? We would love to hear from you."
              : "Fragen, Ideen oder Interesse an einer Zusammenarbeit? Wir freuen uns über deine Nachricht."}
          </p>

          <a
            className="button"
            href="mailto:geburtsfest@gmail.com"
          >
            {t.send}
          </a>
        </div>
      </section>
    </main>
  );
}
