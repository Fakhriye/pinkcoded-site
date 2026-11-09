// src/App.jsx
import React from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import { TELEGRAM_URL, EMAIL } from "./data.js";

/* --- Scroll to top on page change, or to #section when the link has a hash --- */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/* --- Title, description and canonical link for each page (used by Google) --- */
const SITE_URL = "https://pinkcoded.net";
const META = {
  "/": {
    title: "Pink Coded — by girls for girls",
    description:
      "Pink Coded is a student-run community that gives girls free STEM courses, olympiad preparation and mentorship — coding, English, research and studying abroad.",
  },
  "/about": {
    title: "About & founding team — Pink Coded",
    description:
      "Pink Coded was founded by Natalie Khan, Fakhriye Kubysheva, Feride Akhmedova and Aisha Tortkara — students who run free STEM courses and mentorship for girls.",
  },
  "/courses": {
    title: "Programs — Pink Coded",
    description:
      "Upcoming Pink Coded courses: CS foundations in Python and C++, English for STEM and applications, and research project labs.",
  },
};
function MetaManager() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const meta = META[pathname] || META["/"];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", SITE_URL + (META[pathname] ? pathname : "/"));
  }, [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = React.useState(false);

  const links = (
    <>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/courses">Programs</NavLink>
      <Link to="/#past-programs">Past events</Link>
    </>
  );

  return (
    <header className="header">
      <div className="shell header-inner">
        <Link to="/" className="brand" aria-label="Pink Coded — home">
          <img src="/pinkcoded-logo.png" alt="" width="44" height="44" />
          <span className="brand-text">
            <span className="brand-name">Pink Coded</span>
            <span className="brand-tag">by girls for girls</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {links}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-small" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Join on Telegram
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={"mobile-nav" + (open ? " is-open" : "")} aria-label="Mobile" onClick={() => setOpen(false)}>
        <div className="shell">
          {links}
          <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Join on Telegram
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link to="/" className="brand brand-footer" aria-label="Pink Coded — home">
            <img src="/pinkcoded-logo.png" alt="" width="44" height="44" />
            <span className="brand-name">Pink Coded</span>
          </Link>
          <p className="footer-about">
            A student-run community for girls in Kazakhstan and the CIS who
            want to grow in tech, research and studying abroad.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Pages</h2>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Programs</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-list">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram channel</a></li>
            <li>Almaty, Kazakhstan</li>
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        © {new Date().getFullYear()} Pink Coded. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <MetaManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
