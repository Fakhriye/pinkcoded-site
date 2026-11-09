// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { programs, pillars, stats, TELEGRAM_URL } from "../data.js";

export default function HomePage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <ul className="tags" aria-label="Who it is for">
              <li>For girls 13–22</li>
              <li>Kazakhstan &amp; CIS</li>
            </ul>
            <h1 className="hero-title">
              A community for girls who turn ideas into code and real projects
            </h1>
            <p className="hero-lead">
              Pink Coded brings together girls from Kazakhstan and across the
              CIS who are curious about computer science, math, research and
              studying abroad. We learn to code, improve our English and try
              ourselves in Olympiads, hackathons and startup competitions —
              together.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                <Icon name="telegram" size={20} />
                Join on Telegram
              </a>
              <Link className="btn btn-ghost" to="/about">
                Meet the team
              </Link>
            </div>
            <dl className="hero-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="tickets" aria-label="Programs we have run">
            <p className="tickets-caption">Programs we have already run</p>
            {programs.map((p, i) => (
              <a key={p.id} href="#past-programs" className={`ticket ticket-${i + 1}`}>
                <span className="ticket-main">
                  <span className="ticket-title">{p.title}</span>
                  <span className="ticket-format">{p.format}</span>
                </span>
                <span className="ticket-stub">
                  <Icon name="check" size={16} />
                  {p.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <h2 className="section-title">What we do together</h2>
            <p className="section-lead">
              Four directions, one community. Join the parts you need now and
              come back for the rest when you are ready.
            </p>
          </div>
          <ul className="pillars">
            {pillars.map((p) => (
              <li key={p.title} className="pillar">
                <span className="pillar-icon">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAST PROGRAMS */}
      <section id="past-programs" className="section section-blush">
        <div className="shell">
          <div className="section-head">
            <h2 className="section-title">Programs we have launched</h2>
            <p className="section-lead">
              Marathons, clinics and bootcamps run by our team. New cohorts are
              announced on our Telegram channel first.
            </p>
          </div>
          <div className="programs">
            {programs.map((p) => (
              <article key={p.id} className="program">
                <div className="program-photo">
                  <img src={p.image} alt="" loading="lazy" />
                </div>
                <div className="program-body">
                  <p className="program-format">{p.format}</p>
                  <h3 className="program-title">{p.title}</h3>
                  <p className="program-text">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="shell">
          <figure className="manifesto">
            <blockquote>
              When girls learn to code, it changes more than their own future —
              it changes the future of their country.
            </blockquote>
            <figcaption>
              Pink Coded is more than lessons: mentorship, honest feedback and
              real opportunities — competitions, internships, research projects
              and international programs.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="section section-join">
        <div className="shell join-grid">
          <div>
            <h2 className="section-title">Everything starts in our Telegram channel</h2>
            <p className="section-lead">
              It is the entry point to the community. We announce new marathons
              and clubs there first, share checklists and templates, and post
              real stories from girls in Pink Coded.
            </p>
            <ul className="checklist">
              <li><Icon name="check" size={20} />Announcements of upcoming marathons, bootcamps and clubs</li>
              <li><Icon name="check" size={20} />Curated resources on coding, English and applications</li>
              <li><Icon name="check" size={20} />Q&amp;A sessions with mentors and community posts</li>
            </ul>
            <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              <Icon name="telegram" size={20} />
              Join on Telegram
            </a>
          </div>
          <div className="join-note">
            <h3>By girls, for girls</h3>
            <p>
              Pink Coded is organised entirely by high-school students. We know
              what it is like to combine school, Olympiads and applications —
              so we build the programs we needed ourselves.
            </p>
            <div className="join-photos">
              <img src="/images/join/join-1.jpg" alt="" loading="lazy" />
              <img src="/images/join/join-2.jpg" alt="" loading="lazy" />
              <img src="/images/join/join-3.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
