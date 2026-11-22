
const schedule = [
  {
    time: "10:00 - 12:00",
    title: "Workshop: Nurturing the mother",
    speaker: "Laura Ospelt, Lisa Allmayer, Natalie Frick",
    description:
      "A two-hour interactive workshop exploring how to nourish and support women through pregnancy, birth and postpartum — through doula care, nutrition, herbal wisdom, community and practical support.",
    image: "/workshop-2026.jpeg",
    imagePosition: "center 15%",
  },
  {
    time: "14:00 - 14:45",
    title: "Traditional Midwifery",
    speaker: "Natalie Schunko",
    description:
      "An exploration of traditional midwifery, weaving together ancestral knowledge, natural approaches and the wisdom of the female body to support women through pregnancy, birth and postpartum.",
    image: "/natalie-schunko.jpg",
    imagePosition: "center 25%",
  },
  {
    time: "15:00 - 15:45",
    title: "The First Room",
    speaker: "Monja Kroetz GeburtsKultur.com",
    description:
      "An exploration of how the spaces in which we give birth influence our experience, and how architecture, natural materials and thoughtful design can create healthier, more supportive environments for mothers, babies and future generations.",
    image: "/monja-kroetz.jpeg",
    imagePosition: "center 30%",
  },
  {
    time: "16:00 - 16:45",
    title: "The karmic connection between Parents and Child",
    speaker: "Christian Reuter",
    description:
      "An exploration of how unconscious fears, beliefs and karmic patterns can be passed through generations, and how greater awareness may help parents recognise and release these patterns to give their children greater freedom.",
    image: "/christian-reuter.webp",
    imagePosition: "center center",
  },
];

export default function GeburtsFest2026Page() {
  return (
    <main style={{ color: "#303b4d" }}>
      <section className="section">
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: "normal",
            fontSize: "clamp(42px, 6vw, 76px)",
            marginBottom: 65,
          }}
        >
          Full Schedule
        </h1>

        {schedule.map((item) => (
          <article
            key={item.time}
            className="program-entry"
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(120px, 0.7fr) minmax(0, 2fr) minmax(150px, 0.7fr)",
              gap: 32,
              alignItems: "center",
              padding: "45px 0",
              borderBottom: "1px solid #c7e3f0",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(20px, 2vw, 30px)",
                alignSelf: "start",
              }}
            >
              {item.time}
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: "normal",
                  fontSize: "clamp(28px, 3vw, 42px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                }}
              >
                {item.title}
              </h2>

              <p style={{ color: "#3389d3", margin: "0 0 8px" }}>
                {item.speaker}
              </p>

              <p style={{ margin: 0, lineHeight: 1.55 }}>
                {item.description}
              </p>
            </div>

            <img
              src={item.image}
              alt={item.speaker}
              className="program-photo"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: item.imagePosition,
                display: "block",
                marginLeft: "auto",
              }}
            />
          </article>
        ))}
      </section>

      <section
        className="section blue"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 70,
        }}
      >
        <div>
          <h2 style={{ fontSize: 34 }}>What to Expect</h2>
          <p>
            A workshop, presentations and inspiring talks each
            followed by an open Q&amp;A. Come curious. Leave with
            new perspectives.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 34 }}>How to Join</h2>
          <p>
            Buy your ticket on the link below to reserve your spot.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .program-entry {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .program-photo {
            margin: 10px auto 0 !important;
            width: 180px !important;
            height: 180px !important;
          }
        }
      `}</style>
    </main>
  );
}
