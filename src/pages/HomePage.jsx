// src/pages/HomePage.jsx
import React from "react";

const programs = [
  {
    id: "ielts-marathon",
    title: "Pink Coded IELTS Marathon",
    subtitle: "4-week online bootcamp",
    description:
      "Speaking clubs, essay workshops, and realistic mock tests for girls aiming at 7.0+.",
    status: "Completed",
    image: "/images/events/ielts-marathon.jpeg",
  },
  {
    id: "richmond-common-app",
    title: "Common App Review w/ Richmond University",
    subtitle: "Application & essay clinic",
    description:
      "Live feedback from admissions officers on activities, personal statements, and supplements.",
    status: "Completed",
    image: "/images/events/commonapp-review.jpg",
  },
  {
    id: "summer-programs",
    title: "Summer Programs Bootcamp",
    subtitle: "Finding & applying to summer schools",
    description:
      "Step-by-step support: where to apply, how to write motivation letters, and ask for recommendations.",
    status: "Completed",
    image: "/images/events/summer-bootcamp.jpg",
  },
  {
    id: "sat-marathon",
    title: "SAT Marathon",
    subtitle: "Math & English intensive",
    description:
      "Weekly diagnostics, strategy sessions, and small study groups led by mentors who have taken the SAT themselves.",
    status: "Completed",
    image: "/images/events/sat-marathon.jpg",
  },
];

export default function HomePage() {
  const [activeProgram, setActiveProgram] = React.useState(0);

  const nextProgram = () =>
    setActiveProgram((i) => (i + 1) % programs.length);
  const prevProgram = () =>
    setActiveProgram((i) => (i - 1 + programs.length) % programs.length);

  return (
    <main>
      {/* HERO */}
      <section className="section hero">
        <div className="shell hero-grid">
          <div className="hero-left">
            <div className="hero-pill-row">
              <span className="pill">for girls 13–22</span>
              <span className="pill">Kazakhstan & CIS region</span>
            </div>

            <h1 className="hero-title">
              A community for girls who turn ideas into code and real projects.
            </h1>

            <p className="hero-lead">
              Pink Coded is a community of high-school girls from Kazakhstan and
              across the CIS who are curious about CS, math, research, and
              studying abroad. Together we learn to code, improve our English,
              build real projects, and try ourselves in Olympiads, hackathons,
              research, and startup competitions.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">6000+</div>
                <div className="hero-stat-label">girls reached</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">10+ programs</div>
                <div className="hero-stat-label">bootcamps, clubs, marathons</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">10+ countries</div>
                <div className="hero-stat-label">across Central Asia & CIS</div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#join" className="btn-primary">
                Join the community
              </a>
              <a href="#programs" className="btn-secondary">
                Explore past programs ↗
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <p className="hero-card-label">for ambitious girls who support each other</p>
              <h2 className="hero-card-quote">
                “When girls learn to code, it changes more than their own
                future — it changes the future of their country.”
              </h2>
              <p className="hero-card-text">
                Pink Coded is more than lessons. It’s mentorship, honest
                feedback, and real opportunities: competitions, internships,
                research projects, and international programs.
              </p>

              <div className="hero-mini-grid">
                <div className="hero-mini">
                  <div className="hero-mini-title">Code & projects</div>
                  <div className="hero-mini-body">
                    From first lines of Python or JavaScript to apps and
                    startup-level ideas.
                  </div>
                </div>
                <div className="hero-mini">
                  <div className="hero-mini-title">Path abroad</div>
                  <div className="hero-mini-body">
                    Olympiads, research, and college applications with
                    examples, checklists, and peer mentors.
                  </div>
                </div>
              </div>

              <div className="hero-photos">
                <img
                  src="/images/hero/hero-main.jpg"
                  alt="Pink Coded girls at an event"
                />
                <img
                  src="/images/hero/hero-side.jpg"
                  alt="Workshop photo from Pink Coded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS CAROUSEL */}
      <section id="programs" className="section">
        <div className="shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">Programs & events</p>
              <h2 className="section-title">
                What Pink Coded has already launched.
              </h2>
              <p className="section-subtitle">
                Here we collect our marathons, clubs, and bootcamps. New
                cohorts open regularly — follow our Telegram channel to catch
                the next ones.
              </p>
            </div>
          </div>

          <div className="programs-carousel">
            <button
              type="button"
              className="carousel-arrow"
              onClick={prevProgram}
              aria-label="Previous program"
            >
              ‹
            </button>

            <div className="programs-viewport">
              <div
                className="programs-track"
                style={{
                  transform: `translateX(-${activeProgram * 100}%)`,
                }}
              >
                {programs.map((p) => (
                  <article key={p.id} className="program-card">
                    <div className="program-image-wrap">
                      <img src={p.image} alt={p.title} />
                      <span className="program-status">{p.status}</span>
                    </div>
                    <div className="program-body">
                      <h3 className="program-title">{p.title}</h3>
                      <p className="program-subtitle">{p.subtitle}</p>
                      <p className="program-description">{p.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="carousel-arrow"
              onClick={nextProgram}
              aria-label="Next program"
            >
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {programs.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={
                  "carousel-dot" + (i === activeProgram ? " active" : "")
                }
                onClick={() => setActiveProgram(i)}
                aria-label={`Show ${p.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* JOIN COMMUNITY / TELEGRAM CTA */}
      <section id="join" className="section join-section">
        <div className="shell join-grid">
          <div>
            <p className="eyebrow">Join Pink Coded</p>
            <h2 className="section-title">
              One channel with all programs and resources.
            </h2>
            <p className="section-subtitle">
              Our Telegram channel is the entry point into the community. We
              announce new marathons and clubs, share checklists and templates,
              and post real stories from girls in Pink Coded.
            </p>
            <ul className="join-list">
              <li>updates on upcoming marathons, bootcamps, and clubs;</li>
              <li>curated resources on coding, English, and applications;</li>
              <li>mentor Q&amp;A sessions and community posts.</li>
            </ul>

            <a
              href="https://t.me/pinkcodeeed"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Go to Telegram channel
            </a>
          </div>

          <div className="join-card">
            <h3 className="join-card-title">By girls for girls</h3>
            <p className="join-card-text">
              Pink Coded is fully organized by high-school students. 
              We know how it feels to combine school, Olympiads, and
              applications — and we design programs we needed ourselves.
            </p>
            <div className="join-photo-grid">
              <img
                src="/images/join/join-1.jpg"
                alt="Girls working on laptops"
              />
              <img
                src="/images/join/join-2.jpg"
                alt="Pink Coded event photo"
              />
              <img
                src="/images/join/join-3.jpg"
                alt="Girls presenting their project"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
