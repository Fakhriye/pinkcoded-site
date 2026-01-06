// src/App.jsx
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";

/* --- Scroll to top on route change --- */

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* --- Soft pink cursor glow --- */

function PinkCursorGlow() {
  const [pos, setPos] = React.useState({ x: -200, y: -200 });

  React.useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

/* --- Header --- */

function Header() {
  return (
    <header className="header">
      <div className="shell header-inner">
        <Link to="/" className="logo">
          <img
            src="/pinkcoded-logo.png"
            alt="Pink Coded logo"
            className="logo-image"
          />
          <div className="logo-text">
            <span className="logo-title">Pink Coded</span>
            <span className="logo-subtitle">by girls for girls</span>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Programs</Link>
          <a href="#programs">Events</a>
          <a href="#join">Join community</a>
        </nav>
      </div>
    </header>
  );
}

/* --- Footer --- */

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-left">
          <div className="footer-main">
            © 2026 Pink Coded — by girls for girls. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="mailto:info@pinkcoded.org">info@pinkcoded.org</a>
            <span>·</span>
            <a
              href="https://t.me/pinkcodeeed"
              target="_blank"
              rel="noreferrer"
            >
              Telegram channel
            </a>
          </div>
        </div>
        <div className="footer-right">Almaty, Kazakhstan</div>
      </div>
    </footer>
  );
}

/* --- Root component --- */

export default function App() {
  return (
    <div className="app">
      <PinkCursorGlow />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
