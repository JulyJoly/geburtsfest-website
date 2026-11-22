
import Image from "next/image";
import { notFound } from "next/navigation";

const content = {
  en: {
    manifesto: "Our Manifesto",
    storyTitle: "How it began",
    choiceTitle: "We believe in choice.",
    story: [
      "It began with encounters.",
      "GeburtsFest didn't begin with a business plan.",
      "It grew from personal experiences of pregnancy, birth and motherhood.",
      "From conversations, questions and the desire to bring together people who had something meaningful to contribute.",
      "One encounter led to another.",
      "And somewhere along the way, GeburtsFest was born.",
    ],
    founders: "Julie Franceschini & Laura Ospelt",
    foundersRole: "Co-founders",
    manifestoLines: [
      "Birth belongs to all of us.",
      "Birth is more than a moment.",
      "More than a medical event.",
      "More than the arrival of a child.",
      "It is a beginning.",
      "A child is born.",
      "A mother is born.",
      "A family takes a new shape.",
      "And what happens around this beginning matters.",
      "We believe women deserve to understand their bodies.",
      "To ask questions.",
      "To be listened to.",
      "To know their options.",
      "To make informed choices.",
      "We believe mothers were never meant to do this alone.",
      "To learn from one another.",
      "To remember that pregnancy, birth and the time after deserve our attention, our curiosity and our care.",
      "Because the way we welcome a child into this world matters.",
      "The way we care for a mother matters.",
      "The way we support a family matters.",
      "And perhaps, by changing the way we speak about birth, we can begin to change the way we experience it.",
      "This is GeburtsFest.",
      "A place to gather.",
      "A place to question.",
      "A place to remember.",
      "A place to begin.",
      "Birth belongs to all of us.",
    ],
    choiceLines: [
      "Home birth. Birth centre. Hospital.",
      "With a midwife. With a doula. With a partner. With medical support when wanted or needed.",
      "There is no single right way to give birth.",
      "We want to make different perspectives visible, create space for questions and make information accessible.",
      "Because ultimately, it isn't about telling someone where or how to give birth.",
      "It is about being informed, being heard and being part of the decisions concerning your own body and your baby.",
    ],
  },
  de: {
    manifesto: "Unser Manifest",
    storyTitle: "Wie alles begann",
    choiceTitle: "Wir glauben an Wahlfreiheit.",
    story: [
      "Alles begann mit Begegnungen.",
      "GeburtsFest entstand nicht aus einem Businessplan.",
      "Es wuchs aus persönlichen Erfahrungen mit Schwangerschaft, Geburt und Mutterschaft.",
      "Aus Gesprächen, Fragen und dem Wunsch, Menschen mit wertvollen Perspektiven zusammenzubringen.",
      "Eine Begegnung führte zur nächsten.",
      "Und irgendwann wurde GeburtsFest geboren.",
    ],
    founders: "Julie Franceschini & Laura Ospelt",
    foundersRole: "Gründerinnen",
    manifestoLines: [
      "Geburt geht uns alle an.",
      "Geburt ist mehr als ein Moment.",
      "Mehr als ein medizinisches Ereignis.",
      "Mehr als die Ankunft eines Kindes.",
      "Sie ist ein Anfang.",
      "Ein Kind wird geboren.",
      "Eine Mutter wird geboren.",
      "Eine Familie verändert sich.",
      "Und was rund um diesen Anfang geschieht, ist wichtig.",
      "Wir glauben, dass Frauen ihren Körper verstehen dürfen.",
      "Fragen stellen dürfen.",
      "Gehört werden dürfen.",
      "Ihre Möglichkeiten kennen dürfen.",
      "Und selbstbestimmte Entscheidungen treffen dürfen.",
      "Wir glauben, dass Mütter diesen Weg nicht allein gehen sollten.",
      "Dass wir voneinander lernen können.",
      "Dass Schwangerschaft, Geburt und die Zeit danach unsere Aufmerksamkeit, Neugier und Fürsorge verdienen.",
      "Denn wie wir ein Kind auf dieser Welt willkommen heissen, ist wichtig.",
      "Wie wir für eine Mutter sorgen, ist wichtig.",
      "Wie wir eine Familie unterstützen, ist wichtig.",
      "Und vielleicht können wir durch eine Veränderung unserer Gespräche über Geburt auch verändern, wie wir Geburt erleben.",
      "Das ist GeburtsFest.",
      "Ein Ort der Begegnung.",
      "Ein Ort für Fragen.",
      "Ein Ort, um uns zu erinnern.",
      "Ein Ort für neue Anfänge.",
      "Geburt geht uns alle an.",
    ],
    choiceLines: [
      "Hausgeburt. Geburtshaus. Krankenhaus.",
      "Mit einer Hebamme. Mit einer Doula. Mit Partner oder Partnerin. Mit medizinischer Unterstützung, wenn sie gewünscht oder notwendig ist.",
      "Es gibt nicht den einen richtigen Weg zu gebären.",
      "Wir möchten unterschiedliche Perspektiven sichtbar machen, Raum für Fragen schaffen und Wissen zugänglich machen.",
      "Denn letztlich geht es nicht darum, jemandem vorzuschreiben, wo oder wie eine Geburt stattfinden soll.",
      "Es geht darum, informiert zu sein, gehört zu werden und bei Entscheidungen über den eigenen Körper und das eigene Kind mitzubestimmen.",
    ],
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "de") {
    notFound();
  }

  const t = content[locale];

  return (
    <main>
      <section className="section centered manifesto">
        <h1>{t.manifesto}</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "48px",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <div>
            {t.manifestoLines.map((line, index) => (
              <p key={index} style={{ margin: "8px 0" }}>
                {line}
              </p>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Image
              src="/logo.webp"
              alt="GeburtsFest logo"
              width={350}
              height={350}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                margin: "auto",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section split blue">
        <div>
          <h2>{t.storyTitle}</h2>

          {t.story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <p className="signature">
            <strong>{t.founders}</strong>
            <span style={{ display: "block" }}>
              {t.foundersRole}
            </span>
          </p>
        </div>

        <Image
          className="founders"
          src="/founders.jpg"
          alt="Julie Franceschini and Laura Ospelt with their children"
          width={850}
          height={1050}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </section>

      <section className="section centered">
        <h2>{t.choiceTitle}</h2>

        <div
          style={{
            maxWidth: "800px",
            margin: "40px auto 0",
          }}
        >
          {t.choiceLines.map((line, index) => (
            <p
              key={index}
              className="lead"
              style={{ marginBottom: "24px" }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
