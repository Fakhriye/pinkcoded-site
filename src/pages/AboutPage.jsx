// src/pages/AboutPage.jsx
import React from "react";

const founders = [
  {
    name: "Natalie Khan",
    role: "Co-founder · marketing & storytelling",
    blurb:
      "Leads branding, visual style, and communication. Makes sure every girl who might need Pink Coded can actually hear about it.",
    badge: "design · storytelling",
    photo: "/images/founders/natalie.jpg",
  },
  {
    name: "Fakhriye Kubysheva",
    role: "Co-founder · tech & programs",
    blurb:
      "Builds the website, curriculum for code and research tracks, and keeps experiments with new formats like hack nights and project labs.",
    badge: "code · research",
    photo: "/images/founders/fakhriye.jpeg",
  },
  {
    name: "Feride Akhmedova",
    role: "Co-founder · operations & partners",
    blurb:
      "Designs the community experience: offline meet-ups, online calls, and small traditions that make Pink Coded feel like a safe space.",
    badge: "operations · partners",
    photo: "/images/founders/feride.jpg",
  },
  {
    name: "Aisha Tortkara",
    role: "Co-founder · community & events",
    blurb:
      "Keeps registrations, schedules, and partnerships under control so that programs start on time and girls don’t get lost in logistics.",
    badge: "community · events",
    photo: "/images/founders/aisha.jpeg",
  },
];

const testimonials = [
  {
    name: "Salim",
    detail: "IELTS Marathon participant",
    text:
      "Before the marathon I treated IELTS as a random exam. Here I finally got a plan: weekly goals, feedback on essays, and speaking practice that felt safe, not scary.",
  },
  {
    name: "Melisa",
    detail: "Summer Programs Bootcamp",
    text:
      "I used to scroll closed deadlines and think “I’m already late”. After the bootcamp I actually submitted three applications — with essays that I’m not ashamed of.",
  },
  {
    name: "Tanya",
    detail: "Common App Review workshop",
    text:
      "Hearing comments from an admissions officer in real time was eye-opening. They didn’t just correct grammar — they helped me make my story clearer and more honest.",
  },
  {
    name: "Andrew",
    detail: "Robotics Course",
    text:
      "Thanks to Pink Coded I started my journey in robotics and found like-minded people!",
  },
  {
    name: "Vlad",
    detail: "SAT Marathon",
    text:
      "Men of quality are not afraid of equality. Went from 1400 to 1500 thanks to mentor Feride!",
  },
  {
    name: "Amiran",
    detail: "SAT Marathon",
    text:
      "I liked that mentors didn’t pretend everything is easy. They showed mistakes from their own practice tests and how they fixed them. It made 1400+ feel reachable.",
  },
];

export default function AboutPage() {
  const [active, setActive] = React.useState(0);

  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="section">
      <div className="shell about-shell">
        {/* TOP BLOCK */}
        <section className="about-hero">
          <div className="about-hero-left">
            <p className="eyebrow">About Pink Coded</p>
            <h1 className="section-title">
              A space where girls don’t have to apologise for big goals.
            </h1>
            <p className="section-subtitle">
              Pink Coded grew from a simple observation: at Olympiads and
              programming courses we kept seeing the same picture — a room full
              of guys, and maybe one or two girls. At the same time, many of our
              friends were curious about tech but didn’t believe it was “for
              them”.
            </p>
          </div>

          <aside className="about-story-card">
            <h2 className="about-story-title">How it started</h2>
            <p className="about-story-text">
              First there was a small group chat and a few calls to explain
              basic coding and essay structure. Then came the first marathon,
              the first summer program, and the first partnership with a
              university.
            </p>
            <p className="about-story-text">
              Step by step it turned into a community: real girls, real stories,
              and goals that sometimes sound “too much” — until you meet others
              who think the same way.
            </p>
          </aside>
        </section>

        {/* METRICS STRIP */}
        <section className="metrics-section">
          <div className="metrics-strip">
            <div className="metric-item">
              <div className="metric-number">6000+</div>
              <div className="metric-label">girls reached through programs</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">10+</div>
              <div className="metric-label">bootcamps, clubs, and marathons</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">10+</div>
              <div className="metric-label">
                countries in Central Asia & CIS
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDERS */}
        <section className="section">
          <h2 className="section-title">Founding team</h2>
          <p className="section-subtitle">
            Pink Coded is run by students who are going through the same exams,
            deadlines, and questions as our participants.
          </p>

          <div className="founders-grid">
            {founders.map((f) => (
              <article key={f.name} className="founder-card">
                <div className="founder-photo">
                  <img src={f.photo} alt={f.name} />
                </div>
                <div className="founder-body">
                  <div className="founder-name">{f.name}</div>
                  <div className="founder-role">{f.role}</div>
                  <p className="founder-text">{f.blurb}</p>
                  <div className="founder-badge">{f.badge}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <div className="testimonials-shell">
            <div className="testimonials-top">
              <div>
                <p className="eyebrow">What girls say</p>
                <h2 className="section-title">
                  Feedback from our participants.
                </h2>
              </div>
              <div className="testimonials-controls">
                <button
                  type="button"
                  className="carousel-arrow"
                  onClick={prev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="carousel-arrow"
                  onClick={next}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="testimonials-viewport">
              <div
                className="testimonials-track"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <article key={t.name} className="testimonial-card">
                    <p className="testimonial-text">“{t.text}”</p>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-detail">{t.detail}</div>
                  </article>
                ))}
              </div>
            </div>

            <div className="carousel-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  className={
                    "carousel-dot" + (i === active ? " active" : "")
                  }
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
