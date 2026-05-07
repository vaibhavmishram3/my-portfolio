import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "My Portfolio",
    description: "Modern responsive developer portfolio built using React, Tailwind CSS, and smooth animations.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/vaibhavmishram3/my-portfolio",
    live: "https://vaibhavmishram3.github.io/my-portfolio/",
    category: "Web Dev",
  },
  {
    title: "Camonk Blog App",
    description: "High-performance blog application built with React, TypeScript, and TanStack Query with a modern dual-pane UI.",
    tech: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
    github: "https://github.com/vaibhavmishram3/camonk-interview",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "C++ Programs Collection",
    description: "Collection of C++ programs covering data structures, algorithms, and problem-solving techniques.",
    tech: ["C++"],
    github: "https://github.com/vaibhavmishram3/C-Program",
    live: "#",
    category: "DSA",
  },
  {
    title: "GeoClimate AI",
    description: "AI-based climate analysis project using Python for environmental data processing and prediction.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/vaibhavmishram3/GeoClimateAI",
    live: "#",
    category: "AI / ML",
  },
  {
    title: "Python ChatBot",
    description: "AI chatbot built using Python capable of handling predefined queries and responses.",
    tech: ["Python"],
    github: "https://github.com/vaibhavmishram3/ChatBot",
    live: "#",
    category: "AI / ML",
  },
  {
    title: "Hackathon Project 2025",
    description: "Innovative hackathon project built with modern technologies focusing on performance and UI/UX.",
    tech: ["TypeScript", "React"],
    github: "https://github.com/vaibhavmishram3/Hackathon-Project-2025",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "GitHub Profile Repo",
    description: "Custom GitHub profile repository showcasing personal info, stats, and highlights.",
    tech: ["Markdown"],
    github: "https://github.com/vaibhavmishram3/vaibhavmishram3",
    live: "#",
    category: "Other",
  },
  {
    title: "mattOS",
    description: "JavaScript-based experimental OS-like interface simulating desktop experience in the browser.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/vaibhavmishram3/mattOS",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "ProGame",
    description: "Single-page gaming application built using React and React Router with smooth navigation.",
    tech: ["React", "React Router", "CSS"],
    github: "https://github.com/vaibhavmishram3/progame",
    live: "https://vaibhavmishram3.github.io/progame/",
    category: "Web Dev",
  },
  {
    title: "New Portfolio",
    description: "Updated personal portfolio showcasing projects, skills, and achievements.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vaibhavmishram3/NewPortfolio",
    live: "https://vaibhavmishram3.github.io/NewPortfolio/",
    category: "Web Dev",
  },
  {
    title: "YouTube Clone",
    description: "Frontend clone of YouTube UI built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vaibhavmishram3/youtube_clone",
    live: "https://vaibhavmishram3.github.io/youtube_clone/",
    category: "Web Dev",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive Tic-Tac-Toe game built with JavaScript featuring dynamic gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/vaibhavmishram3/TikTakToe",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "Weather App",
    description: "Weather forecasting app that displays real-time weather data using APIs.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/vaibhavmishram3/WeatherApp",
    live: "https://vaibhavmishram3.github.io/WeatherApp/",
    category: "Web Dev",
  },
  {
    title: "MonkeyType Clone",
    description: "Typing speed test application inspired by MonkeyType with customizable UI and performance tracking.",
    tech: ["TypeScript", "Web App"],
    github: "https://github.com/vaibhavmishram3/monkeytype",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "Portfolio (Old)",
    description: "Earlier version of personal portfolio showcasing basic frontend skills.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/vaibhavmishram3/Portfolio",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "CodSoft Projects",
    description: "Collection of projects completed during CodSoft internship.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vaibhavmishram3/CODSOFT",
    live: "#",
    category: "Other",
  },
  {
    title: "Coffee Website",
    description: "Responsive coffee shop landing page with modern UI design.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/vaibhavmishram3/CoffeeWebPage",
    live: "#",
    category: "Web Dev",
  },
  {
    title: "Bharat Intern Projects",
    description: "Projects developed during Bharat Intern program focusing on frontend development.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vaibhavmishram3/BharatIntern",
    live: "#",
    category: "Other",
  },
];

const FILTERS = ["All", "AI / ML", "Web Dev", "DSA", "Other"];

const techColors = {
  React: "#61dafb",
  TypeScript: "#3178c6",
  Python: "#ffd43b",
  "Machine Learning": "#00d2ff",
  "C++": "#f08080",
  JavaScript: "#f7df1e",
  "Tailwind CSS": "#38bdf8",
  HTML: "#e44d26",
  CSS: "#264de4",
  Vite: "#646cff",
  "React Router": "#ca4245",
  API: "#00ffe0",
  Markdown: "#aaa",
  "TanStack Query": "#ff4154",
  "Web App": "#a78bfa",
  default: "rgba(0,210,255,0.6)",
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --cyan: #00d2ff;
          --teal: #00ffe0;
          --bg: #020c14;
          --border: rgba(0,210,255,0.13);
          --muted: rgba(150,220,240,0.45);
          --text: rgba(200,240,255,0.88);
        }

        * { box-sizing: border-box; }

        .pj-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          padding-top: 80px;
          position: relative;
          overflow-x: hidden;
        }
        .pj-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        @keyframes pjFadeUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes pjBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes pjScan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(500%); }
        }
        @keyframes pjCardIn {
          from { opacity:0; transform: translateY(18px) scale(0.98); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }

        /* ── Header ── */
        .pj-header {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 48px 0;
          text-align: center;
        }
        @media (max-width: 600px) { .pj-header { padding: 56px 24px 0; } }

        .pj-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(0,210,255,0.4);
          margin-bottom: 20px;
          animation: pjFadeUp 0.6s ease forwards;
        }
        .pj-eyebrow::before { content: '//'; color: rgba(0,210,255,0.2); }

        .pj-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #fff;
          text-shadow: 0 0 40px rgba(0,210,255,0.35);
          line-height: 1.05;
          margin-bottom: 16px;
          animation: pjFadeUp 0.6s 0.1s ease forwards; opacity: 0;
        }
        .pj-title .cx { color: var(--cyan); }

        .pj-subtitle {
          font-size: 12px; line-height: 1.9;
          color: var(--muted); max-width: 560px;
          margin: 0 auto 12px;
          animation: pjFadeUp 0.6s 0.2s ease forwards; opacity: 0;
        }

        .pj-count {
          font-size: 10px; letter-spacing: 0.15em;
          color: rgba(0,210,255,0.3);
          animation: pjFadeUp 0.6s 0.25s ease forwards; opacity: 0;
        }
        .pj-count span { color: var(--cyan); }

        /* scan line under header */
        .pj-header-line {
          position: relative; height: 1px;
          margin: 40px auto 0; max-width: 400px;
          background: rgba(0,210,255,0.08); overflow: hidden;
        }
        .pj-header-line::after {
          content: '';
          position: absolute; top:0; left:0;
          width: 35%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: pjScan 3s ease-in-out infinite;
        }

        /* ── Filters ── */
        .pj-filters {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 40px 48px 0;
          display: flex; align-items: center;
          gap: 8px; flex-wrap: wrap;
          animation: pjFadeUp 0.6s 0.3s ease forwards; opacity: 0;
        }
        @media (max-width: 600px) { .pj-filters { padding: 32px 24px 0; } }

        .pj-filter-label {
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(0,210,255,0.25);
          margin-right: 8px;
        }
        .pj-filter-btn {
          padding: 7px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 3px;
          border: 1px solid rgba(0,210,255,0.15);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.22s;
        }
        .pj-filter-btn:hover {
          border-color: rgba(0,210,255,0.35);
          color: var(--cyan);
          background: rgba(0,210,255,0.06);
        }
        .pj-filter-btn.active {
          border-color: var(--cyan);
          color: var(--cyan);
          background: rgba(0,210,255,0.1);
          box-shadow: 0 0 12px rgba(0,210,255,0.2);
        }

        /* ── Grid ── */
        .pj-grid-wrap {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 40px 48px 100px;
        }
        @media (max-width: 600px) { .pj-grid-wrap { padding: 32px 24px 80px; } }

        .pj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 1024px) { .pj-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .pj-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .pj-card {
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 28px 24px 22px;
          background: rgba(0,18,32,0.6);
          backdrop-filter: blur(8px);
          position: relative; overflow: hidden;
          transition: all 0.3s ease;
          display: flex; flex-direction: column;
          animation: pjCardIn 0.5s ease forwards;
          opacity: 0;
        }
        .pj-card:hover {
          border-color: rgba(0,210,255,0.38);
          transform: translateY(-5px);
          background: rgba(0,24,42,0.85);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 24px rgba(0,210,255,0.07);
        }
        /* top glow edge */
        .pj-card::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.4), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .pj-card:hover::before { opacity: 1; }

        /* index watermark */
        .pj-card-index {
          position: absolute; top: 12px; right: 16px;
          font-family: 'Orbitron', monospace;
          font-size: 11px; font-weight: 700;
          color: rgba(0,210,255,0.08);
          letter-spacing: 0.1em;
          transition: color 0.3s;
        }
        .pj-card:hover .pj-card-index { color: rgba(0,210,255,0.18); }

        .pj-card-cat {
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--cyan);
          margin-bottom: 10px; font-weight: 500;
        }

        .pj-card-title {
          font-family: 'Orbitron', monospace;
          font-size: 13px; font-weight: 700;
          color: #fff; margin-bottom: 10px;
          line-height: 1.4; letter-spacing: 0.01em;
        }

        .pj-card-desc {
          font-size: 11px; line-height: 1.85;
          color: var(--muted); font-weight: 400;
          flex: 1; margin-bottom: 18px;
        }

        /* tech pills */
        .pj-tech-row {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 18px;
        }
        .pj-tech-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 9px;
          font-size: 9px; letter-spacing: 0.08em;
          border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          color: rgba(200,240,255,0.55);
          transition: all 0.2s;
        }
        .pj-card:hover .pj-tech-pill {
          border-color: rgba(0,210,255,0.15);
        }
        .pj-tech-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0;
        }

        /* divider */
        .pj-card-divider {
          height: 1px;
          background: rgba(0,210,255,0.07);
          margin-bottom: 16px;
        }

        /* action row */
        .pj-card-actions {
          display: flex; align-items: center; gap: 16px;
        }
        .pj-action-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none;
          color: var(--muted);
          padding: 6px 12px;
          border: 1px solid rgba(0,210,255,0.1);
          border-radius: 3px;
          transition: all 0.22s;
        }
        .pj-action-link:hover {
          color: var(--cyan);
          border-color: rgba(0,210,255,0.35);
          background: rgba(0,210,255,0.06);
          box-shadow: 0 0 10px rgba(0,210,255,0.15);
        }
        .pj-action-link.disabled {
          opacity: 0.25; pointer-events: none;
        }

        /* empty state */
        .pj-empty {
          grid-column: 1/-1;
          text-align: center; padding: 80px 0;
          color: rgba(0,210,255,0.2);
          font-size: 12px; letter-spacing: 0.15em;
        }
      `}</style>

      <div className="pj-root">

        {/* ── Header ── */}
        <section className="pj-header">
          <div className="pj-eyebrow">project_index.load()</div>
          <h1 className="pj-title">
            MY <span className="cx">PROJECTS</span>
          </h1>
          <p className="pj-subtitle">
            A collection of projects showcasing my development skills,
            AI/ML research, and problem-solving across diverse domains.
          </p>
          <div className="pj-count">
            TOTAL_REPOS: <span>{projects.length}</span> &nbsp;·&nbsp; FILTERED: <span>{filtered.length}</span>
          </div>
          <div className="pj-header-line" />
        </section>

        {/* ── Filters ── */}
        <div className="pj-filters">
          <span className="pj-filter-label">filter:</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pj-filter-btn${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <section className="pj-grid-wrap">
          <div className="pj-grid">
            {filtered.length === 0 && (
              <div className="pj-empty">// NO_RESULTS_FOUND</div>
            )}
            {filtered.map((p, i) => (
              <div
                key={p.title}
                className="pj-card"
                style={{ animationDelay: `${i * 0.045}s` }}
              >
                <span className="pj-card-index">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="pj-card-cat">[ {p.category} ]</div>

                <h3 className="pj-card-title">{p.title}</h3>

                <p className="pj-card-desc">{p.description}</p>

                <div className="pj-tech-row">
                  {p.tech.map((t, j) => (
                    <span key={j} className="pj-tech-pill">
                      <span
                        className="pj-tech-dot"
                        style={{ background: techColors[t] || techColors.default }}
                      />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pj-card-divider" />

                <div className="pj-card-actions">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pj-action-link"
                  >
                    <FaGithub style={{ fontSize: 11 }} />
                    Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`pj-action-link${p.live === "#" ? " disabled" : ""}`}
                  >
                    <FaExternalLinkAlt style={{ fontSize: 10 }} />
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Projects;