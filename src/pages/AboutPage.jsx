// src/pages/AboutPage.jsx
import { stats, TELEGRAM_URL } from "../data.js";

const founders = [
  {
    name: "Natalie Khan",
    role: "Co-founder, marketing & storytelling",
    blurb:
      "Leads branding, visual style and communication, so every girl who might need Pink Coded can actually hear about it.",
    photo: "/images/founders/natalie.jpeg",
  },
  {
    name: "Fakhriye Kubysheva",
    role: "Co-founder, tech & programs",
    blurb:
      "Builds the website and the curriculum for the code and research tracks, and experiments with new formats like hack nights and project labs.",
    photo: "/images/founders/fakhriye.jpeg",
  },
  {
    name: "Feride Akhmedova",
    role: "Co-founder, tech & finances",
    blurb:
      "Keeps Pink Coded running on time and on budget — from spreadsheets and payment links to partner agreements and the tech behind our programs.",
    photo: "/images/founders/feride.jpg",
  },
  {
    name: "Aisha Tortkara",
    role: "Co-founder, community & events",
    blurb:
      "Designs the community experience: offline meet-ups, online calls and the small traditions that make Pink Coded feel like a safe space.",
    photo: "/images/founders/aisha.jpeg",
  },
];

const testimonials = [
  {
    name: "Salim",
    detail: "IELTS Marathon",
    text:
      "Before the marathon I treated IELTS as a random exam. Here I finally got a plan: weekly goals, feedback on essays, and speaking practice that felt safe, not scary.",
  },
  {
    name: "Melisa",
    detail: "Summer Programs Bootcamp",
    text:
      "I used to scroll past closed deadlines and think “I’m already late”. After the bootcamp I actually submitted three applications — with essays I’m not ashamed of.",
  },
  {
    name: "Tanya",
    detail: "Common App Review",
    text:
      "Hearing comments from an admissions officer in real time was eye-opening. They didn’t just correct grammar — they helped me make my story clearer and more honest.",
  },
  {
    name: "Amiran",
    detail: "SAT Marathon",
    text:
      "I liked that mentors didn’t pretend everything is easy. They showed mistakes from their own practice tests and how they fixed them. It made 1400+ feel reachable.",
  },
  {
    name: "Vlad",
    detail: "SAT Marathon",
    text: "Men of quality are not afraid of equality. Went from 1400 to 1500 thanks to mentor Feride!",
  },
  {
    name: "Andrew",
    detail: "Robotics course",
    text:
      "Thanks to Pink Coded I started my journey in robotics and found like-minded people!",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <h1 className="page-title">
              A space where girls don’t have to apologise for big goals
            </h1>
            <p className="section-lead">
              Pink Coded grew from a simple observation. At Olympiads and
              programming courses we kept seeing the same picture: a room full
              of boys and maybe one or two girls. At the same time, many of our
              friends were curious about tech but didn’t believe it was “for
              them”.
            </p>
          </div>
          <aside className="story">
            <h2>How it started</h2>
            <p>
              First there was a small group chat and a few calls to explain
              basic coding and essay structure. Then came the first marathon,
              the first summer program and the first partnership with a
              university.
            </p>
            <p>
              Step by step it turned into a community: real girls, real
              stories, and goals that sometimes sound “too much” — until you
              meet others who think the same way.
            </p>
          </aside>
        </div>
      </section>

      <section className="stats-band" aria-label="Pink Coded in numbers">
        <dl className="shell stats-row">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <h2 className="section-title">Founding team</h2>
            <p className="section-lead">
              Pink Coded is run by students going through the same exams,
              deadlines and questions as our participants.
            </p>
          </div>
          <div className="founders">
            {founders.map((f) => (
              <article key={f.name} className="founder">
                <img src={f.photo} alt={f.name} loading="lazy" />
                <h3>{f.name}</h3>
                <p className="founder-role">{f.role}</p>
                <p className="founder-text">{f.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <div className="section-head">
            <h2 className="section-title">What participants say</h2>
          </div>
          <div className="quotes">
            {testimonials.map((t) => (
              <figure key={t.name} className="quote">
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="center-cta">
            <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Join the community
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
