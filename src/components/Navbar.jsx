import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  const links = [
    { name: "Home",     to: "/",        code: "00" },
    { name: "Projects", to: "/projects", code: "01" },
    { name: "Skills",   to: "/skills",   code: "02" },
    { name: "About",    to: "/about",    code: "03" },
    { name: "Contact",  to: "/contact",  code: "04" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --cyan: #00d2ff;
          --teal: #00ffe0;
          --bg-nav: rgba(2, 12, 20, 0.85);
          --border-nav: rgba(0, 210, 255, 0.15);
          --muted-nav: rgba(150, 220, 240, 0.45);
          --text-nav: rgba(200, 240, 255, 0.85);
        }

        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blinkNav {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes glowPulseNav {
          0%, 100% { box-shadow: 0 0 12px rgba(0,210,255,0.25), inset 0 0 12px rgba(0,210,255,0.05); }
          50%       { box-shadow: 0 0 24px rgba(0,210,255,0.5), inset 0 0 20px rgba(0,210,255,0.1); }
        }
        @keyframes scanNav {
          from { transform: translateX(-100%); }
          to   { transform: translateX(400%); }
        }
        @keyframes mobileSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Nav shell ── */
        .nav-shell {
          position: fixed;
          top: 0; width: 100%;
          z-index: 50;
          transition: all 0.4s ease;
          animation: navFadeIn 0.6s ease forwards;
          font-family: 'JetBrains Mono', monospace;
        }
        .nav-shell.scrolled {
          background: var(--bg-nav);
          backdrop-filter: blur(20px) saturate(1.4);
          border-bottom: 1px solid var(--border-nav);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(0,210,255,0.08);
        }
        .nav-shell:not(.scrolled) {
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        /* Scan line at bottom of nav */
        .nav-scanline {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          overflow: hidden;
          pointer-events: none;
        }
        .nav-scanline::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 25%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: scanNav 5s ease-in-out infinite;
          opacity: 0.4;
        }

        /* ── Inner layout ── */
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        @media (max-width: 768px) {
          .nav-inner { padding: 0 24px; }
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          position: relative;
        }
        .nav-logo-bracket {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: rgba(0,210,255,0.3);
          font-weight: 400;
          line-height: 1;
        }
        .nav-logo-text {
          font-family: 'Orbitron', monospace;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #fff;
          text-shadow: 0 0 20px rgba(0,210,255,0.5);
        }
        .nav-logo-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          margin-left: 2px;
          vertical-align: middle;
          animation: blinkNav 2s ease-in-out infinite;
          box-shadow: 0 0 8px var(--cyan);
        }
        .nav-logo-sub {
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,210,255,0.35);
          display: block;
          margin-top: -2px;
          font-weight: 400;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }
        @media (max-width: 768px) { .nav-links { display: none; } }

        .nav-item {
          position: relative;
        }
        .nav-link-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 14px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--muted-nav);
          text-decoration: none;
          border-radius: 4px;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .nav-link-btn .link-code {
          font-size: 9px;
          color: rgba(0,210,255,0.25);
          font-weight: 400;
          transition: color 0.25s;
        }
        .nav-link-btn:hover,
        .nav-link-btn.active {
          color: var(--cyan);
          border-color: rgba(0,210,255,0.2);
          background: rgba(0,210,255,0.06);
        }
        .nav-link-btn:hover .link-code,
        .nav-link-btn.active .link-code {
          color: rgba(0,210,255,0.5);
        }
        /* Shimmer on hover */
        .nav-link-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,210,255,0.08) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .nav-link-btn:hover::before { transform: translateX(100%); }

        /* Active indicator dot */
        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 6px var(--cyan);
        }

        /* ── CTA ── */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @media (max-width: 768px) { .nav-cta { display: none; } }

        .nav-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,255,220,0.5);
          font-weight: 500;
        }
        .nav-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 5px var(--teal);
          animation: blinkNav 1.5s ease-in-out infinite;
        }

        .nav-hire-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 22px;
          font-family: 'Orbitron', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cyan);
          border: 1px solid var(--cyan);
          border-radius: 4px;
          background: rgba(0,210,255,0.05);
          overflow: hidden;
          animation: glowPulseNav 3s ease-in-out infinite;
          transition: all 0.3s;
        }
        .nav-hire-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,210,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nav-hire-btn:hover::before { opacity: 1; }
        .nav-hire-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(0,210,255,0.4);
        }
        .hire-arrow {
          font-size: 14px;
          transition: transform 0.3s;
          display: inline-block;
        }
        .nav-hire-btn:hover .hire-arrow { transform: translateX(3px); }

        /* ── Mobile toggle ── */
        .nav-mobile-btn {
          display: none;
          background: rgba(0,210,255,0.05);
          border: 1px solid rgba(0,210,255,0.2);
          border-radius: 4px;
          padding: 8px;
          cursor: pointer;
          color: var(--cyan);
          transition: all 0.2s;
        }
        .nav-mobile-btn:hover {
          background: rgba(0,210,255,0.12);
          box-shadow: 0 0 12px rgba(0,210,255,0.2);
        }
        @media (max-width: 768px) { .nav-mobile-btn { display: flex; align-items: center; } }

        /* ── Mobile menu ── */
        .nav-mobile-panel {
          display: none;
          flex-direction: column;
          background: rgba(2, 10, 20, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0,210,255,0.12);
          border-bottom: 1px solid rgba(0,210,255,0.12);
          gap: 4px;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), padding 0.3s ease;
        }
        .nav-mobile-panel.open {
          display: flex;
          max-height: 500px;
          padding: 20px 24px 24px;
        }
        @media (max-width: 768px) {
          .nav-mobile-panel { display: flex; }
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 4px;
          border: 1px solid transparent;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted-nav);
          transition: all 0.2s;
          animation: mobileSlide 0.3s ease forwards;
          opacity: 0;
        }
        .mobile-link:nth-child(1) { animation-delay: 0.05s; }
        .mobile-link:nth-child(2) { animation-delay: 0.1s; }
        .mobile-link:nth-child(3) { animation-delay: 0.15s; }
        .mobile-link:nth-child(4) { animation-delay: 0.2s; }
        .mobile-link:nth-child(5) { animation-delay: 0.25s; }
        .mobile-link:hover,
        .mobile-link.active {
          color: var(--cyan);
          border-color: rgba(0,210,255,0.2);
          background: rgba(0,210,255,0.06);
        }
        .mobile-link-code {
          font-size: 9px;
          color: rgba(0,210,255,0.25);
        }
        .mobile-link.active .mobile-link-code {
          color: rgba(0,210,255,0.5);
        }

        .mobile-divider {
          height: 1px;
          background: rgba(0,210,255,0.08);
          margin: 10px 0;
        }

        .mobile-hire {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px;
          font-family: 'Orbitron', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cyan);
          border: 1px solid var(--cyan);
          border-radius: 4px;
          background: rgba(0,210,255,0.05);
          transition: all 0.3s;
          margin-top: 6px;
          animation: mobileSlide 0.3s 0.3s ease forwards;
          opacity: 0;
        }
        .mobile-hire:hover {
          background: rgba(0,210,255,0.12);
          box-shadow: 0 0 20px rgba(0,210,255,0.3);
        }

        .mobile-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px 0;
          font-size: 9px;
          letter-spacing: 0.12em;
          color: rgba(0,210,255,0.2);
          animation: mobileSlide 0.3s 0.35s ease forwards;
          opacity: 0;
        }
        .mobile-footer-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--teal);
          animation: blinkNav 1.5s ease-in-out infinite;
        }
      `}</style>

      <nav className={`nav-shell ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-scanline" />

        <div className="nav-inner">

          {/* ── Logo ── */}
          <NavLink to="/" className="nav-logo">
            <span className="nav-logo-bracket">[</span>
            <div>
              <span className="nav-logo-text">
                VM<span className="nav-logo-dot" />
              </span>
              <span className="nav-logo-sub">v2.0 · neural</span>
            </div>
            <span className="nav-logo-bracket">]</span>
          </NavLink>

          {/* ── Desktop Links ── */}
          <ul className="nav-links" ref={navRef}>
            {links.map((link, i) => (
              <li key={link.name} className="nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link-btn${isActive ? " active" : ""}`
                  }
                >
                  <span className="link-code">{link.code}</span>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── CTA ── */}
          <div className="nav-cta">
            <div className="nav-status">
              <span className="nav-status-dot" />
              Available
            </div>

            <NavLink to="/contact" className="nav-hire-btn">
              Hire Me
              <span className="hire-arrow">→</span>
            </NavLink>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile Panel ── */}
        <div className={`nav-mobile-panel${open ? " open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mobile-link${isActive ? " active" : ""}`
              }
            >
              <span>{link.name}</span>
              <span className="mobile-link-code">_{link.code}</span>
            </NavLink>
          ))}

          <div className="mobile-divider" />

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mobile-hire"
          >
            Hire Me →
          </NavLink>

          <div className="mobile-footer">
            <span className="mobile-footer-dot" />
            SYS_ONLINE · OPEN_TO_WORK
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;