
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = [
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto =
      "mailto:geburtsfest@gmail.com" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailto;
  }

  return (
    <main className="contact-page">
      <div className="contact-layout">
        <div className="contact-info">
          <h1>Connect with Us</h1>

          <div className="email-section">
            <h2>EMAIL</h2>
            <a href="mailto:geburtsfest@gmail.com">
              geburtsfest@gmail.com
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="name-fields">
            <div className="field">
              <label htmlFor="firstName">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
                required
              />
            </div>

            <div className="field">
              <label htmlFor="lastName">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="field">
            <label htmlFor="subject">
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              required
            />
          </div>

          <button type="submit">
            Send Question
          </button>
        </form>
      </div>

      <style>{`
        .contact-page {
          background: #f8fafc;
          color: #303b4d;
          min-height: 80vh;
          padding: 70px 5% 130px;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1450px;
          margin: 0 auto;
          align-items: start;
        }

        .contact-info h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 76px);
          font-weight: normal;
          line-height: 1.15;
          margin: 0;
        }

        .email-section {
          margin-top: 100px;
        }

        .email-section h2 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: normal;
          color: #3389d3;
          margin: 0 0 8px;
        }

        .email-section a {
          color: #303b4d;
          font-size: 21px;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .email-section a:hover {
          text-decoration: underline;
        }

        .contact-form {
          background: #eaf7ff;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .name-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field label {
          font-size: 15px;
          color: #303b4d;
        }

        .field input,
        .field textarea {
          width: 100%;
          box-sizing: border-box;
          border: none;
          border-radius: 0;
          background: #f8fafc;
          padding: 12px;
          font-family: inherit;
          font-size: 16px;
          color: #303b4d;
        }

        .field input {
          height: 43px;
        }

        .field textarea {
          min-height: 100px;
          resize: vertical;
        }

        .field input:focus,
        .field textarea:focus {
          outline: 2px solid #3389d3;
        }

        .contact-form button {
          background: #3389d3;
          color: white;
          border: none;
          border-radius: 30px;
          padding: 13px 20px;
          font-size: 17px;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.2s;
        }

        .contact-form button:hover {
          background: #2673b5;
        }

        @media (max-width: 800px) {
          .contact-page {
            padding: 40px 6% 80px;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .email-section {
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .name-fields {
            grid-template-columns: 1fr;
          }

          .contact-info h1 {
            font-size: 44px;
          }
        }
      `}</style>
    </main>
  );
}

