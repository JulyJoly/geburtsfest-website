
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const content = {
  en: {
    nav: ['Home', 'Program', 'Speakers', 'About', 'FAQ', 'Contact'],
    manifesto: 'Our Manifesto',
    storyTitle: 'How it began',
    choiceTitle: 'We believe in choice.',
    story: [
      "It began with encounters.",
      "GeburtsFest didn't begin with a business plan.",
      "It grew from personal experiences of pregnancy, birth and motherhood.",
      "From conversations, questions and the desire to bring together people who had something meaningful to contribute.",
      "One encounter led to another.",
      "And somewhere along the way, GeburtsFest was born."
    ],
    founders: 'Julie Franceschini & Laura Ospelt',
    foundersRole: 'Co-founders',
    manifestoLines: [
      'Birth belongs to all of us.',
      'Birth is more than a moment.',
      'More than a medical event.',
      'More than the arrival of a child.',
      'It is a beginning.',
      'A child is born.',
      'A mother is born.',
      'A family takes a new shape.',
      'And what happens around this beginning matters.',
      'We believe women deserve to understand their bodies.',
      'To ask questions.',
      'To be listened to.',
      'To know their options.',
      'And to make their own informed choices.',
      'We believe there is no single way to give birth.',
      'At home.',
      'In a birth centre.',
      'In a hospital.',
      'With a midwife.',
      'With a doula.',
      'With medical support when it is wanted or needed.',
      'Every story is different.',
      'Every woman is different.',
      'Every birth is different.',
      'What matters is that women are part of the decisions being made about their bodies and their babies.',
      'We believe knowledge can replace fear with understanding.',
      'We believe intuition deserves to be heard.',
      'We believe birth professionals deserve spaces to share their knowledge and experience with one another.',
      'And we believe mothers were never meant to do this alone.',
      'For generations, women have gathered around women.',
      'They have cooked.',
      'Listened.',
      'Held babies.',
      'Shared stories.',
      'Passed down knowledge.',
      'Stayed close.',
      'Somewhere along the way, many of us lost that village.',
      'GeburtsFest is our invitation to gather again.',
      'Not to tell women how to give birth.',
      'Not to offer one truth.',
      'But to open the conversation.',
      'To bring different voices into the same room.',
      'To question.',
      'To listen.',
      'To learn from one another.',
      'To remember that pregnancy, birth and the time after deserve our attention, our curiosity and our care.',
      'Because the way we welcome a child into this world matters.',
      'The way we care for a mother matters.',
      'The way we support a family matters.',
      'And perhaps, by changing the way we speak about birth, we can begin to change the way we experience it.',
      'This is GeburtsFest.',
      'A place to gather.',
      'A place to question.',
      'A place to remember.',
      'A place to begin.',
      'Birth belongs to all of us.'
    ],
    choiceLines: [
      'Home birth. Birth centre. Hospital.',
      'With a midwife. With a doula. With a partner. With medical support when wanted or needed.',
      'There is no single right way to give birth.',
      'We want to make different perspectives visible, create space for questions and make information accessible.',
      "Because ultimately, it isn't about telling someone where or how to give birth.",
      'It is about being informed, being heard and being part of the decisions concerning your own body and your baby.'
    ]
  },
  de: {
    nav: ['Startseite', 'Programm', 'Referent:innen', 'Über uns', 'FAQ', 'Kontakt'],
    manifesto: 'Unser Manifest',
    storyTitle: 'Wie alles begann',
    choiceTitle: 'Wir glauben an Wahlfreiheit.',
    story: [
      'Alles begann mit Begegnungen.',
      'GeburtsFest entstand nicht aus einem Businessplan.',
      'Es wuchs aus persönlichen Erfahrungen mit Schwangerschaft, Geburt und Mutterschaft.',
      'Aus Gesprächen, Fragen und dem Wunsch, Menschen mit wertvollen Perspektiven zusammenzubringen.',
      'Eine Begegnung führte zur nächsten.',
      'Und irgendwann wurde GeburtsFest geboren.'
    ],
    founders: 'Julie Franceschini & Laura Ospelt',
    foundersRole: 'Gründerinnen',
    manifestoLines: [
      'Geburt geht uns alle an.',
      'Geburt ist mehr als ein Moment.',
      'Mehr als ein medizinisches Ereignis.',
      'Mehr als die Ankunft eines Kindes.',
      'Sie ist ein Anfang.',
      'Ein Kind wird geboren.',
      'Eine Mutter wird geboren.',
      'Eine Familie verändert sich.',
      'Und was rund um diesen Anfang geschieht, ist wichtig.',
      'Wir glauben, dass Frauen ihren Körper verstehen dürfen.',
      'Fragen stellen dürfen.',
      'Gehört werden dürfen.',
      'Ihre Möglichkeiten kennen dürfen.',
      'Und selbstbestimmte Entscheidungen treffen dürfen.',
      'Wir glauben, dass es nicht den einen richtigen Weg gibt, zu gebären.',
      'Zu Hause.',
      'Im Geburtshaus.',
      'Im Krankenhaus.',
      'Mit einer Hebamme.',
      'Mit einer Doula.',
      'Mit medizinischer Unterstützung, wenn sie gewünscht oder notwendig ist.',
      'Jede Geschichte ist anders.',
      'Jede Frau ist anders.',
      'Jede Geburt ist anders.',
      'Wichtig ist, dass Frauen bei Entscheidungen über ihren Körper und ihr Baby mitbestimmen.',
      'Wir glauben, dass Wissen Angst durch Verständnis ersetzen kann.',
      'Wir glauben, dass Intuition gehört werden sollte.',
      'Wir glauben, dass Fachpersonen Raum brauchen, um Wissen und Erfahrungen miteinander zu teilen.',
      'Und wir glauben, dass Mütter diesen Weg nie allein gehen sollten.',
      'Seit Generationen kommen Frauen zusammen.',
      'Sie kochen.',
      'Hören zu.',
      'Halten Babys.',
      'Teilen Geschichten.',
      'Geben Wissen weiter.',
      'Bleiben einander nahe.',
      'Irgendwann haben viele von uns dieses Dorf verloren.',
      'GeburtsFest ist unsere Einladung, wieder zusammenzukommen.',
      'Nicht um Frauen vorzuschreiben, wie sie gebären sollen.',
      'Nicht um eine einzige Wahrheit anzubieten.',
      'Sondern um Gespräche zu öffnen.',
      'Um verschiedene Stimmen zusammenzubringen.',
      'Um Fragen zu stellen.',
      'Zuzuhören.',
      'Voneinander zu lernen.',
      'Und Schwangerschaft, Geburt und der Zeit danach wieder Aufmerksamkeit, Neugier und Fürsorge zu schenken.',
      'Denn es ist wichtig, wie wir ein Kind auf dieser Welt willkommen heißen.',
      'Wie wir für eine Mutter sorgen.',
      'Wie wir eine Familie unterstützen.',
      'Vielleicht können wir verändern, wie wir Geburt erleben, indem wir verändern, wie wir darüber sprechen.',
      'Das ist GeburtsFest.',
      'Ein Ort zum Zusammenkommen.',
      'Ein Ort für Fragen.',
      'Ein Ort zum Erinnern.',
      'Ein Ort für neue Anfänge.',
      'Geburt geht uns alle an.'
    ],
    choiceLines: [
      'Hausgeburt. Geburtshaus. Krankenhaus.',
      'Mit Hebamme. Mit Doula. Mit Partner oder Partnerin. Mit medizinischer Unterstützung, wenn gewünscht oder notwendig.',
      'Es gibt nicht den einen richtigen Weg zu gebären.',
      'Wir möchten verschiedene Perspektiven sichtbar machen, Raum für Fragen schaffen und Informationen zugänglich machen.',
      'Letztlich geht es nicht darum, jemandem vorzuschreiben, wo oder wie eine Geburt stattfinden soll.',
      'Es geht darum, informiert zu sein, gehört zu werden und bei Entscheidungen über den eigenen Körper und das eigene Kind mitzubestimmen.'
    ]
  }
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  if (locale !== 'en' && locale !== 'de') {
    notFound();
  }

  const t = content[locale];

  const paths = ['/', '/program', '/speakers', '/about', '/faq', '/contact'];

  return (
    <main>
      <header className="header">
        <Link href={`/${locale}`} className="brand">
          <Image
            src="/logo.webp"
            width={74}
            height={74}
            alt="GeburtsFest logo"
          />
        </Link>

        <nav>
          {t.nav.map((name, index) => (
            <Link
              key={name}
              href={
                index === 0
                  ? `/${locale}`
                  : `/${locale}${paths[index]}`
              }
            >
              {name}
            </Link>
          ))}
        </nav>

        <Link className="lang" href={locale === 'en' ? '/de/about' : '/en/about'}>
          {locale === 'en' ? 'DE' : 'EN'}
        </Link>
      </header>

      <section className="about-manifesto">
        <h1>{t.manifesto}</h1>

        <div className="about-manifesto-layout">
          <div className="about-manifesto-text">
            {t.manifestoLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="about-manifesto-logo">
            <Image
              src="/logo.webp"
              width={280}
              height={280}
              alt="GeburtsFest"
            />
          </div>
        </div>
      </section>

      <section className="about-story">
        <h2>{t.storyTitle}</h2>

        <div className="about-story-layout">
          <div className="about-story-text">
            {t.story.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            <p className="about-signature">
              {t.founders}
              <br />
              {t.foundersRole}
            </p>
          </div>

          <Image
            className="about-story-image"
            src="/founders.jpg"
            width={850}
            height={1050}
            alt="Julie and Laura with their children"
          />
        </div>
      </section>

      <section className="about-choice">
        <h2>{t.choiceTitle}</h2>

        {t.choiceLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>

      <footer>
        <Image
          src="/logo.webp"
          width={66}
          height={66}
          alt="GeburtsFest"
        />
        <span>© GeburtsFest · Julie Franceschini & Laura Ospelt</span>
        <a href="mailto:geburtsfest@gmail.com">
          geburtsfest@gmail.com
        </a>
      </footer>
    </main>
  );
}
