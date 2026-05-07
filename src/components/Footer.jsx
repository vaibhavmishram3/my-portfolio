import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home",     to: "/",        code: "00" },
    { name: "Projects", to: "/projects", code: "01" },
    { name: "Skills",   to: "/skills",   code: "02" },
    { name: "About",    to: "/about",    code: "03" },
    { name: "Contact",  to: "/contact",  code: "04" },
  ];

  const socials = [
    { icon: <FaGithub />,   href: "https://github.com/vaibhavmishram3",             label: "GitHub",   handle: "@vaibhavmishram3" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vaibhavmishram3/",   label: "LinkedIn", handle: "vaibhavmishram3" },
    { icon: <FaWhatsapp />, href: "https://wa.me/+918302979123",                    label: "WhatsApp", handle: "+91 83029 79123" },
  ];

  const specs = [
    { key: "SPECIALIZATION", val: "AI & ML" },
    { key: "STACK",          val: "Python · React · Node" },
    { key: "STATUS",         val: "OPEN_TO_WORK" },
    { key: "VERSION",        val: "v2.0.26" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        .ft-root {
          background: #020c14;
          border-top: 1px solid rgba(0,210,255,0.12);
          font-family: 'JetBrains Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        /* grid background */
        .ft-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* top scan line */
        .ft-scanline {
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          overflow: hidden;
        }
        .ft-scanline::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.5), transparent);
          animation: ftScan 6s ease-in-out infinite;
        }
        @keyframes ftScan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(430%); }
        }
        @keyframes ftBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes ftFadeUp {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes ftGlow {
          0%,100% { box-shadow: 0 0 10px rgba(0,210,255,0.15); }
          50%      { box-shadow: 0 0 24px rgba(0,210,255,0.4); }
        }

        /* ── Main grid ── */
        .ft-grid {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 48px 56px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1fr 1fr; padding: 56px 32px 48px; }
        }
        @media (max-width: 600px) {
          .ft-grid { grid-template-columns: 1fr; padding: 48px 24px 40px; }
        }

        /* ── Brand col ── */
        .ft-brand {}
        .ft-logo {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
          text-decoration: none;
        }
        .ft-logo-bracket {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px; color: rgba(0,210,255,0.25);
        }
        .ft-logo-name {
          font-family: 'Orbitron', monospace;
          font-size: 18px; font-weight: 900;
          letter-spacing: 0.1em; color: #fff;
          text-shadow: 0 0 20px rgba(0,210,255,0.4);
        }
        .ft-logo-dot {
          display: inline-block;
          width: 6px; height: 6px; border-radius: 50%;
          background: #00d2ff; margin-left: 1px;
          vertical-align: middle;
          animation: ftBlink 2s ease-in-out infinite;
          box-shadow: 0 0 8px #00d2ff;
        }

        .ft-bio {
          font-size: 12px; line-height: 1.9;
          color: rgba(150,220,240,0.45); font-weight: 400;
          border-left: 2px solid rgba(0,210,255,0.12);
          padding-left: 14px;
          margin-bottom: 24px;
        }

        /* spec table */
        .ft-specs {
          display: flex; flex-direction: column; gap: 6px;
        }
        .ft-spec-row {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.1em;
        }
        .ft-spec-key {
          color: rgba(0,210,255,0.3); font-weight: 400;
          min-width: 120px;
        }
        .ft-spec-sep { color: rgba(0,210,255,0.15); }
        .ft-spec-val { color: rgba(200,240,255,0.6); }
        .ft-spec-val.online { color: #00ffe0; }

        /* ── Col headers ── */
        .ft-col-head {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,210,255,0.35);
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-col-head::before {
          content: '//';
          color: rgba(0,210,255,0.18);
        }

        /* ── Nav links ── */
        .ft-nav-list {
          list-style: none; display: flex; flex-direction: column; gap: 4px;
        }
        .ft-nav-item a {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          font-size: 11px; letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(150,220,240,0.45);
          text-decoration: none;
          border: 1px solid transparent;
          border-radius: 3px;
          transition: all 0.22s;
        }
        .ft-nav-item a:hover {
          color: #00d2ff;
          border-color: rgba(0,210,255,0.18);
          background: rgba(0,210,255,0.05);
          padding-left: 16px;
        }
        .ft-nav-code {
          font-size: 9px; color: rgba(0,210,255,0.2);
          transition: color 0.22s;
        }
        .ft-nav-item a:hover .ft-nav-code { color: rgba(0,210,255,0.45); }

        /* ── Social cards ── */
        .ft-social-list {
          display: flex; flex-direction: column; gap: 8px;
        }
        .ft-social-card {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px;
          border: 1px solid rgba(0,210,255,0.1);
          border-radius: 4px;
          text-decoration: none;
          background: rgba(0,210,255,0.03);
          transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .ft-social-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.4), transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .ft-social-card:hover::before { opacity: 1; }
        .ft-social-card:hover {
          border-color: rgba(0,210,255,0.35);
          background: rgba(0,210,255,0.07);
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          animation: ftGlow 2s ease-in-out infinite;
        }
        .ft-social-icon {
          font-size: 15px; color: #00d2ff;
          filter: drop-shadow(0 0 4px rgba(0,210,255,0.4));
          flex-shrink: 0;
        }
        .ft-social-info { display: flex; flex-direction: column; gap: 1px; }
        .ft-social-label {
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(200,240,255,0.7);
          font-weight: 500;
        }
        .ft-social-handle {
          font-size: 9px; color: rgba(0,210,255,0.35);
          letter-spacing: 0.06em;
        }
        .ft-social-arrow {
          margin-left: auto; font-size: 12px;
          color: rgba(0,210,255,0.2);
          transition: all 0.25s;
        }
        .ft-social-card:hover .ft-social-arrow {
          color: #00d2ff; transform: translateX(3px);
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(0,210,255,0.08);
        }
        .ft-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 18px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        @media (max-width: 600px) {
          .ft-bottom-inner { padding: 16px 24px; flex-direction: column; text-align: center; }
        }

        .ft-copy {
          font-size: 10px; letter-spacing: 0.1em;
          color: rgba(0,210,255,0.2);
        }
        .ft-copy span { color: rgba(0,210,255,0.4); }

        .ft-status-row {
          display: flex; align-items: center; gap: 16px;
        }
        .ft-status-pill {
          display: flex; align-items: center; gap: 5px;
          font-size: 9px; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,255,220,0.45);
          border: 1px solid rgba(0,255,220,0.12);
          padding: 4px 10px; border-radius: 100px;
        }
        .ft-status-pill-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #00ffe0;
          animation: ftBlink 1.8s ease-in-out infinite;
          box-shadow: 0 0 4px #00ffe0;
        }
        .ft-build {
          font-size: 9px; letter-spacing: 0.1em;
          color: rgba(0,210,255,0.18);
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-scanline" />

        <div className="ft-grid">

          {/* ── Brand ── */}
          <div className="ft-brand">
            <Link to="/" className="ft-logo">
              <span className="ft-logo-bracket">[</span>
              <span className="ft-logo-name">VM<span className="ft-logo-dot" /></span>
              <span className="ft-logo-bracket">]</span>
            </Link>

            <p className="ft-bio">
              Passionate AI &amp; Machine Learning developer building intelligent,
              data-driven applications with scalable and efficient software architecture.
            </p>

            <div className="ft-specs">
              {specs.map((s) => (
                <div key={s.key} className="ft-spec-row">
                  <span className="ft-spec-key">{s.key}</span>
                  <span className="ft-spec-sep">:</span>
                  <span className={`ft-spec-val${s.val === "OPEN_TO_WORK" ? " online" : ""}`}>
                    {s.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <div className="ft-col-head">Navigation</div>
            <ul className="ft-nav-list">
              {links.map((l) => (
                <li key={l.name} className="ft-nav-item">
                  <Link to={l.to}>
                    {l.name}
                    <span className="ft-nav-code">_{l.code}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect ── */}
          <div>
            <div className="ft-col-head">Connect</div>
            <div className="ft-social-list">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ft-social-card"
                >
                  <span className="ft-social-icon">{s.icon}</span>
                  <div className="ft-social-info">
                    <span className="ft-social-label">{s.label}</span>
                    <span className="ft-social-handle">{s.handle}</span>
                  </div>
                  <span className="ft-social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <span className="ft-copy">
              © {year} <span>Vaibhav Mishra</span>. All rights reserved.
            </span>

            <div className="ft-status-row">
              <div className="ft-status-pill">
                <span className="ft-status-pill-dot" />
                Sys online
              </div>
              <span className="ft-build">BUILD_{year} · NEURAL_v2</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;