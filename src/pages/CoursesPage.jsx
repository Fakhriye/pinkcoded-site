// src/pages/CoursesPage.jsx
import React from "react";

const tracks = [
  {
    title: "CS Foundations",
    tag: "code",
    description:
      "Intro to Python and C++, problem solving patterns, and small projects you can show in a portfolio.",
    status: "In development",
  },
  {
    title: "English for STEM & applications",
    tag: "language",
    description:
      "From essay structure to academic vocabulary for Olympiads, research, and college applications.",
    status: "In development",
  },
  {
    title: "Research & project labs",
    tag: "projects",
    description:
      "Support for research projects, science fairs, and hackathons — from idea to final presentation.",
    status: "In development",
  },
];

export default function CoursesPage() {
  return (
    <main className="section">
      <div className="shell courses-shell">
        <section className="section">
          <p className="eyebrow">Programs library</p>
          <h1 className="section-title">
            Courses built for girls who want to go deeper.
          </h1>
          <p className="section-subtitle">
            We are gradually turning our marathons and bootcamps into structured
            courses that girls can follow at their own pace. The first tracks
            will focus on programming, English for applications, and research
            projects.
          </p>
        </section>

        <section className="section">
          <div className="tracks-grid">
            {tracks.map((t) => (
              <article key={t.title} className="track-card">
                <div className="track-top">
                  <span className="track-tag">{t.tag}</span>
                  <span className="track-status">{t.status}</span>
                </div>
                <h2 className="track-title">{t.title}</h2>
                <p className="track-description">{t.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="courses-cta-card">
            <h2 className="courses-cta-title">
              Want to be first to hear when we open enrollment?
            </h2>
            <p className="courses-cta-text">
              For now, the best way is to follow our Telegram channel. We always
              announce new cohorts there first.
            </p>
            <a
              href="https://t.me/pinkcodeeed"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Go to Telegram channel
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
