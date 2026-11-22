const speakers = [
  {
    name: "Natalie Schunko",
    role: "MIDWIFE",
    image: "/natalie-schunko.jpg",
    paragraphs: [
      "I’m Natalie.",
      "A midwife by passion, with a deep connection to nature.",
      "My heart lies in providing holistic and continuous care throughout pregnancy, home birth and the postpartum period. Working alongside midwives in Latin America has deeply shaped me and allowed me to connect with the roots of midwifery.",
      "It is important to me that the families I support feel understood, safe and cared for. I combine the knowledge from my medical training with naturopathy and practical experience to offer the best possible support.",
      "Above all, I want to strengthen expectant mothers’ trust in themselves and in their own strength, and accompany them on their journey towards a self-determined and empowering birth experience."
    ]
  },
  {
    name: "Monja Kroetz",
    role: "ARCHITECT",
    image: "/monja-kroetz.jpeg",
    paragraphs: [
      "I am an architect with a passion for the salutogenic potential of ecological building. I am fascinated by the ways in which spaces can influence health and well-being.",
      "Through hands-on construction work and craftsmanship using remarkable natural materials such as wood, reed, lime, ceramics, and especially clay, I developed a deep appreciation for their unique qualities and their positive impact on people and places.",
      "Today, I am part of IG Geburtskultur, an initiative of professionals from diverse disciplines working in the field of childbirth. Together, we are committed to fostering a mindful, contemporary, and self-determined birth culture."
    ]
  },
  {
    name: "Christian Reuter",
    role: "GERMAN NEW MEDICINE & AURA SURGERY PRACTITIONER",
    image: "/christian-reuter.webp",
    paragraphs: [
      "Alongside my scientific education (M.Sc. in Food and Biotechnology), I have spent many years exploring a wide range of complementary and spiritual approaches.",
      "At the heart of my work is the question of how deeply unconscious patterns shape our lives. I am fascinated by the fears, beliefs and karmic patterns that we often unconsciously inherit from our own life experiences and those of previous generations.",
      "I believe that a deeper understanding of these connections can open new pathways to recognizing and releasing old patterns, allowing future generations to grow with greater freedom."
    ]
  },
  {
    name: "Laura Ospelt",
    role: "DOULA",
    image: "/lauraospelt.jpeg",
    paragraphs: [
      "For me, becoming a mother is not an event, but a transition — one of the greatest transitions we experience in life. You enter it as a woman. You emerge as a mother. And in between lie entire worlds.",
      "I hold space for you through these worlds: with knowledge, with trust in the physiological process of birth — and with the deep belief that every woman has the right to take responsibility for her own birth.",
      "It is especially important to me that women are able to make informed, self-determined choices — and that during this vulnerable yet powerful time, they are nourished: in body, heart and soul.",
      "Because a nourished mother carries her strength forward — into her family and into the world."
    ]
  },
  {
    name: "Lisa Allmayer",
    role: "BIRTH KEEPER",
    image: "/lisamayer.jpeg",
    paragraphs: [
      "A birthkeeper by conviction – with deep trust in the female body and in the wisdom of nature.",
      "I have given birth to two children in freebirth. These experiences showed me how wide the range of normal truly is – and what can unfold when a birth is left undisturbed and a woman trusts her body.",
      "Ever since, it has been my heart's work to accompany women on their own unique path through pregnancy, birth and the postpartum time – at home, in hospital, or entirely outside the system. Without an agenda, but with time, sensitivity and an open heart.",
      "You enter as a woman. You emerge as a mother. Between the two lie worlds.",
      "It matters deeply to me that women decide informed and self-determined – and that they are nourished during this vulnerable, powerful time: in body, heart and soul."
    ]
  },
  {
    name: "Natalie Frick",
    role: "MOTHER",
    image: "/nathaliefrickgood.png",
    paragraphs: [
      "I am a mother of three, and the topic of birth fascinated me long before I had children of my own. Once I began exploring it more deeply, I knew early on that if I ever had children, I wanted to follow a conscious and natural path.",
      "After three pregnancies, births and breastfeeding journeys — and through supporting other women — I have experienced how positively a natural and conscious approach can impact both mother and baby.",
      "The potential is immense.",
      "I love supporting expectant and new mothers and sharing the knowledge and experience I have gained along the way."
    ]
  }
];

export default function Speakers2026Page() {
  return (
    <main className="speakers-page">
      {speakers.map((speaker, index) => (
        <section
          key={speaker.name}
          className={`speaker-section ${index % 2 ? "reverse" : ""}`}
        >
          <div className="speaker-image">
            <img src={speaker.image} alt={speaker.name} />
          </div>

          <div className="speaker-content">
            <h1>{speaker.name}</h1>
            <h2>{speaker.role}</h2>
            {speaker.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <style>{`
        .speakers-page {
          color: #303b4d;
          background: #f8fafc;
        }

        .speaker-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 650px;
          background: #eaf6fc;
        }

        .speaker-section:nth-child(even) {
          background: #f8fafc;
        }

        .speaker-image {
          min-height: 650px;
          overflow: hidden;
        }

        .speaker-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
        }

        .speaker-content {
          padding: 85px 11%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .speaker-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 72px);
          font-weight: normal;
          line-height: 1.15;
          margin: 0 0 22px;
        }

        .speaker-content h2 {
          font-family: Georgia, serif;
          font-size: clamp(19px, 2vw, 29px);
          font-weight: normal;
          color: #3389d3;
          letter-spacing: 0.07em;
          line-height: 1.3;
          margin: 0 0 30px;
        }

        .speaker-content p {
          font-size: 18px;
          line-height: 1.55;
          margin: 0 0 22px;
        }

        .speaker-section.reverse .speaker-image {
          order: 2;
        }

        .speaker-section.reverse .speaker-content {
          order: 1;
        }

        @media (max-width: 800px) {
          .speaker-section {
            grid-template-columns: 1fr;
          }

          .speaker-image,
          .speaker-section.reverse .speaker-image {
            order: 1;
            min-height: 0;
            height: 460px;
          }

          .speaker-content,
          .speaker-section.reverse .speaker-content {
            order: 2;
            padding: 55px 7%;
          }

          .speaker-content h1 {
            font-size: 43px;
          }

          .speaker-content p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}
