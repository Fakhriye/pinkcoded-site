// src/pages/CoursesPage.jsx
import Icon from "../components/Icon.jsx";
import { TELEGRAM_URL } from "../data.js";

const tracks = [
  {
    title: "CS Foundations",
    icon: "code",
    description:
      "Intro to Python and C++, problem-solving patterns and small projects you can show in a portfolio.",
    status: "In development",
  },
  {
    title: "English for STEM & applications",
    icon: "chat",
    description:
      "From essay structure to academic vocabulary for Olympiads, research and college applications.",
    status: "In development",
  },
  {
    title: "Research & project labs",
    icon: "spark",
    description:
      "Support for research projects, science fairs and hackathons — from the first idea to the final presentation.",
    status: "In development",
  },
];

export default function CoursesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1 className="page-title">Courses for girls who want to go deeper</h1>
          <p className="section-lead">
            We are turning our marathons and bootcamps into structured courses
            you can follow at your own pace. The first tracks focus on
            programming, English for applications and research projects.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell tracks">
          {tracks.map((t) => (
            <article key={t.title} className="track">
              <div className="track-top">
                <span className="pillar-icon">
                  <Icon name={t.icon} />
                </span>
                <span className="track-status">{t.status}</span>
              </div>
              <h2 className="track-title">{t.title}</h2>
              <p className="track-text">{t.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2 className="section-title">Be the first to hear when enrollment opens</h2>
              <p className="section-lead">
                We always announce new cohorts on our Telegram channel first.
              </p>
            </div>
            <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              <Icon name="telegram" size={20} />
              Join on Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
