
export default function GeburtsFest2026FAQ() {
  return (
    <main className="festival-faq">
      <section className="faq-block">
        <h1>Who is it for?</h1>
        <div className="faq-answer">
          <p>
            <strong>Come as you are.</strong>
            <br />
            If you are expecting a baby.
            <br />
            If you are already a mother or father.
            <br />
            If you support families.
            <br />
            If you are a midwife, doula or birth professional.
            <br />
            If you have questions.
            <br />
            If you have experiences to share.
            <br />
            Or if you are simply curious.
            <br />
            You are welcome.
          </p>
        </div>
      </section>

      <section className="faq-block">
        <h2>Practical informations</h2>
        <div className="faq-answer">
          <p>GeburtsFest 2026</p>
          <p>Saturday, 29 August 2026</p>
          <p>
            Küefer-Martis-Huus
            <br />
            Giessenstrasse 14
            <br />
            9491 Ruggell, Liechtenstein
          </p>
          <p>Admission · from CHF 20</p>
          <p>Talks · Workshop · Encounters · Exchange</p>
          <p>Food and refreshments available.</p>
        </div>
      </section>

      <section className="faq-block">
        <h2>Where to park?</h2>
        <div className="faq-answer">
          <p>
            You can park your car by
            <br />
            the Skate Park of Ruggell.
          </p>
          <p>
            Industriestrasse 15
            <br />
            9491 Ruggell
          </p>
        </div>
      </section>

      <section className="faq-block">
        <h2>Will food and drinks be available on site?</h2>
        <div className="faq-answer">
          <p>
            We have food available from <strong>12:00!</strong>
          </p>
          <p>
            Our amazing partner <strong>k0 Sourdough</strong> will
            be on site to serve her speciality of Pizza Sandwich.
          </p>
          <p>Drinks will also be available.</p>
          <p>Water will be accessible on site.</p>
        </div>
      </section>

      <section className="faq-block">
        <h2>When can I arrive?</h2>
        <div className="faq-answer">
          <p>You can come as early as 9:50 am!</p>
          <p>The event will run with food until 6 pm.</p>
          <p>At about 7 pm we will close the location.</p>
        </div>
      </section>

      <section className="faq-block">
        <h2>Can I come with my kids?</h2>
        <div className="faq-answer faq-wide">
          <p>
            Yes. The venue has a large garden with plenty of space
            for children to play and spend time outdoors.
          </p>
          <p>
            The event itself will take place in the conference room.
            In case of rain, an additional room inside the historic
            building will be available as an indoor space for children.
          </p>
          <p>
            Babies under one year are, of course, very welcome to
            stay with their parents during the talks and presentations.
            Older or more active children will likely feel more
            comfortable enjoying the dedicated play area outside
            or indoors.
          </p>
          <p>
            To create a calm and welcoming atmosphere for everyone,
            we kindly ask that children attending the talks are able
            to remain relatively quiet during the presentations.
          </p>
          <p>Families and children are very welcome at GeburtsFest.</p>
        </div>
      </section>

      <section className="faq-block">
        <h2>Will tickets be sold at the door?</h2>
        <div className="faq-answer faq-wide">
          <p>
            Yes, tickets were also available at the door.
            Payment was possible by TWINT or cash.
          </p>
          <p>
            To help us plan and prepare the food, we encouraged
            visitors to book their tickets in advance whenever possible.
          </p>
        </div>
      </section>

      <style>{`
        .festival-faq {
          background: #f8fafc;
          color: #303b4d;
          padding: 50px 5% 100px;
        }

        .faq-block {
          padding: 55px 0 70px;
        }

        .faq-block h1,
        .faq-block h2 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5.8vw, 82px);
          font-weight: normal;
          line-height: 1.16;
          margin: 0 0 45px;
          letter-spacing: -0.02em;
        }

        .faq-answer {
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
        }

        .faq-wide {
          max-width: 780px;
        }

        .faq-answer p {
          font-size: clamp(17px, 1.5vw, 22px);
          line-height: 1.45;
          margin: 0 0 30px;
        }

        .faq-answer strong {
          font-weight: 700;
        }

        @media (max-width: 700px) {
          .festival-faq {
            padding: 20px 7% 60px;
          }

          .faq-block {
            padding: 35px 0 45px;
          }

          .faq-block h1,
          .faq-block h2 {
            font-size: clamp(36px, 9vw, 54px);
            margin-bottom: 35px;
          }

          .faq-answer p {
            font-size: 17px;
          }
        }
      `}</style>
    </main>
  );
}

