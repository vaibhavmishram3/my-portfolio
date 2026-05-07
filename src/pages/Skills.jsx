import Tilt from "react-parallax-tilt";

const skillData = [
  {
    category: "Programming Languages",
    code: "01",
    icon: "⌨",
    items: [
      { name: "Python",  level: 90, color: "#ffd43b" },
      { name: "C",       level: 72, color: "#a8b9cc" },
      { name: "C++",     level: 78, color: "#f08080" },
      { name: "Java",    level: 65, color: "#f89820" },
    ],
  },
  {
    category: "Frontend",
    code: "02",
    icon: "◈",
    items: [
      { name: "HTML",       level: 92, color: "#e44d26" },
      { name: "CSS",        level: 88, color: "#264de4" },
      { name: "JavaScript", level: 85, color: "#f7df1e" },
      { name: "React.js",   level: 87, color: "#61dafb" },
    ],
  },
  {
    category: "Data Analysis & ML",
    code: "03",
    icon: "🧠",
    items: [
      { name: "Pandas",      level: 83, color: "#150458" },
      { name: "NumPy",       level: 80, color: "#4dabcf" },
      { name: "Matplotlib",  level: 75, color: "#11557c" },
      { name: "Seaborn",     level: 72, color: "#4c72b0" },
      { name: "Scikit-learn",level: 78, color: "#f89939" },
    ],
  },
  {
    category: "Databases",
    code: "04",
    icon: "◉",
    items: [
      { name: "MySQL",   level: 80, color: "#4479a1" },
      { name: "MongoDB", level: 76, color: "#47a248" },
    ],
  },
  {
    category: "Core Concepts",
    code: "05",
    icon: "⬡",
    items: [
      { name: "OOP",   level: 88, color: "#00d2ff" },
      { name: "DSA",   level: 80, color: "#00ffe0" },
      { name: "DBMS",  level: 75, color: "#a78bfa" },
    ],
  },
  {
    category: "Tools & Env",
    code: "06",
    icon: "⚙",
    items: [
      { name: "VS Code",          level: 95, color: "#007acc" },
      { name: "Git",              level: 85, color: "#f05032" },
      { name: "GitHub",           level: 88, color: "#e0e0e0" },
      { name: "Jupyter Notebook", level: 82, color: "#f37726" },
    ],
  },
];

const SkillCard = ({ name, level, color }) => (
  <Tilt
    glareEnable
    glareMaxOpacity={0.06}
    scale={1.03}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={1200}
  >
    <div className="sk-card">
      <div className="sk-card-top">
        <span className="sk-card-dot" style={{ background: color, boxShadow: `0 0 8px ${color}60` }} />
        <span className="sk-card-name">{name}</span>
        <span className="sk-card-pct">{level}%</span>
      </div>
      <div className="sk-bar-bg">
        <div
          className="sk-bar-fill"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}55`,
          }}
        />
      </div>
    </div>
  </Tilt>
);

const Skills = () => (
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

      .sk-root {
        background: var(--bg);
        min-height: 100vh;
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        padding-top: 80px;
        position: relative;
        overflow-x: hidden;
      }
      .sk-root::before {
        content: '';
        position: fixed; inset: 0;
        background-image:
          linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none; z-index: 0;
      }

      @keyframes skFadeUp {
        from { opacity:0; transform:translateY(20px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes skScan {
        from { transform: translateX(-100%); }
        to   { transform: translateX(500%); }
      }
      @keyframes skBlink {
        0%,100% { opacity:1; } 50% { opacity:0; }
      }
      @keyframes skBarIn {
        from { width: 0 !important; }
      }

      /* ── Header ── */
      .sk-header {
        position: relative; z-index: 1;
        max-width: 1280px; margin: 0 auto;
        padding: 72px 48px 0;
        text-align: center;
      }
      @media (max-width:600px) { .sk-header { padding: 56px 24px 0; } }

      .sk-eyebrow {
        display: inline-flex; align-items: center; gap: 8px;
        font-size: 10px; letter-spacing: 0.2em;
        text-transform: uppercase; color: rgba(0,210,255,0.4);
        margin-bottom: 20px;
        animation: skFadeUp 0.6s ease forwards;
      }
      .sk-eyebrow::before { content: '//'; color: rgba(0,210,255,0.2); }

      .sk-title {
        font-family: 'Orbitron', monospace;
        font-size: clamp(30px, 5vw, 62px);
        font-weight: 900; letter-spacing: 0.02em;
        color: #fff;
        text-shadow: 0 0 40px rgba(0,210,255,0.35);
        margin-bottom: 16px;
        animation: skFadeUp 0.6s 0.1s ease forwards; opacity: 0;
      }
      .sk-title .cx { color: var(--cyan); }

      .sk-subtitle {
        font-size: 12px; line-height: 1.9;
        color: var(--muted); max-width: 520px;
        margin: 0 auto 12px;
        animation: skFadeUp 0.6s 0.2s ease forwards; opacity: 0;
      }

      /* stats row */
      .sk-meta {
        display: inline-flex; align-items: center; gap: 24px;
        font-size: 10px; letter-spacing: 0.12em;
        color: rgba(0,210,255,0.3);
        margin-top: 8px;
        animation: skFadeUp 0.6s 0.25s ease forwards; opacity: 0;
      }
      .sk-meta span { color: var(--cyan); }
      .sk-meta-sep { color: rgba(0,210,255,0.15); }

      /* scan line */
      .sk-scan-line {
        position: relative; height: 1px;
        margin: 40px auto 0; max-width: 400px;
        background: rgba(0,210,255,0.08); overflow: hidden;
      }
      .sk-scan-line::after {
        content: '';
        position: absolute; top:0; left:0;
        width: 35%; height: 100%;
        background: linear-gradient(90deg, transparent, var(--cyan), transparent);
        animation: skScan 3s ease-in-out infinite;
      }

      /* ── Section block ── */
      .sk-section {
        position: relative; z-index: 1;
        max-width: 1280px; margin: 0 auto;
        padding: 60px 48px 0;
        animation: skFadeUp 0.6s ease forwards; opacity: 0;
      }
      @media (max-width:600px) { .sk-section { padding: 48px 24px 0; } }

      .sk-section-head {
        display: flex; align-items: center; gap: 16px;
        margin-bottom: 28px;
      }
      .sk-section-icon {
        font-size: 18px;
        filter: drop-shadow(0 0 6px rgba(0,210,255,0.5));
      }
      .sk-section-title {
        font-family: 'Orbitron', monospace;
        font-size: 14px; font-weight: 700;
        letter-spacing: 0.1em; text-transform: uppercase;
        color: #fff; text-shadow: 0 0 16px rgba(0,210,255,0.3);
      }
      .sk-section-code {
        font-size: 9px; letter-spacing: 0.15em;
        color: rgba(0,210,255,0.25);
        border: 1px solid rgba(0,210,255,0.1);
        padding: 3px 8px; border-radius: 3px;
        margin-left: auto;
      }
      .sk-section-line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, rgba(0,210,255,0.2), transparent);
      }

      .sk-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      @media (max-width:1024px) { .sk-grid { grid-template-columns: repeat(3,1fr); } }
      @media (max-width:768px)  { .sk-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width:480px)  { .sk-grid { grid-template-columns: 1fr; } }

      /* ── Skill card ── */
      .sk-card {
        padding: 18px 18px 16px;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: rgba(0,18,32,0.65);
        backdrop-filter: blur(8px);
        transition: all 0.28s ease;
        cursor: default;
        position: relative; overflow: hidden;
      }
      .sk-card::before {
        content: '';
        position: absolute; top:0; left:0; right:0; height:1px;
        background: linear-gradient(90deg, transparent, rgba(0,210,255,0.35), transparent);
        opacity: 0; transition: opacity 0.28s;
      }
      .sk-card:hover::before { opacity: 1; }
      .sk-card:hover {
        border-color: rgba(0,210,255,0.32);
        background: rgba(0,24,42,0.85);
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(0,0,0,0.45), 0 0 18px rgba(0,210,255,0.06);
      }

      .sk-card-top {
        display: flex; align-items: center; gap: 8px;
        margin-bottom: 12px;
      }
      .sk-card-dot {
        width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
      }
      .sk-card-name {
        font-size: 11px; letter-spacing: 0.08em;
        font-weight: 500; color: rgba(200,240,255,0.85);
        flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .sk-card-pct {
        font-family: 'Orbitron', monospace;
        font-size: 10px; font-weight: 700;
        color: var(--cyan);
        flex-shrink: 0;
      }

      /* progress bar */
      .sk-bar-bg {
        height: 3px; border-radius: 2px;
        background: rgba(0,210,255,0.08);
        overflow: hidden;
      }
      .sk-bar-fill {
        height: 100%; border-radius: 2px;
        animation: skBarIn 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
      }

      /* ── Bottom spacer ── */
      .sk-bottom { height: 100px; }

      /* ── Aggregate stats bar ── */
      .sk-stats-bar {
        position: relative; z-index: 1;
        max-width: 1280px; margin: 72px auto 0;
        padding: 0 48px;
        display: grid; grid-template-columns: repeat(4,1fr);
        border: 1px solid var(--border);
        border-radius: 6px;
        background: rgba(0,18,32,0.5);
        backdrop-filter: blur(8px);
        animation: skFadeUp 0.6s 0.4s ease forwards; opacity: 0;
      }
      @media (max-width:768px) {
        .sk-stats-bar { grid-template-columns: repeat(2,1fr); padding: 0 24px; }
      }
      .sk-stat {
        padding: 28px 20px;
        border-right: 1px solid var(--border);
        transition: background 0.25s;
      }
      .sk-stat:last-child { border-right: none; }
      .sk-stat:hover { background: rgba(0,210,255,0.03); }
      .sk-stat-val {
        font-family: 'Orbitron', monospace;
        font-size: 28px; font-weight: 900;
        color: #fff; line-height: 1;
        text-shadow: 0 0 16px rgba(0,210,255,0.4);
        margin-bottom: 4px;
      }
      .sk-stat-val .ac { color: var(--cyan); }
      .sk-stat-lbl {
        font-size: 9px; letter-spacing: 0.15em;
        text-transform: uppercase; color: var(--muted);
      }
    `}</style>

    <div className="sk-root">

      {/* ── Header ── */}
      <section className="sk-header">
        <div className="sk-eyebrow">skill_matrix.render()</div>
        <h1 className="sk-title">MY <span className="cx">SKILLS</span></h1>
        <p className="sk-subtitle">
          Technologies, frameworks, and tools I use to engineer
          intelligent systems and scalable applications.
        </p>
        <div className="sk-meta">
          <span>CATEGORIES: <span>{skillData.length}</span></span>
          <span className="sk-meta-sep">·</span>
          <span>TOTAL_SKILLS: <span>{skillData.reduce((a, c) => a + c.items.length, 0)}</span></span>
          <span className="sk-meta-sep">·</span>
          <span>AVG_PROFICIENCY: <span>
            {Math.round(
              skillData.flatMap(c => c.items).reduce((a, s) => a + s.level, 0) /
              skillData.flatMap(c => c.items).length
            )}%
          </span></span>
        </div>
        <div className="sk-scan-line" />
      </section>

      {/* ── Aggregate stats ── */}
      <div className="sk-stats-bar">
        {[
          { val: "6+",  lbl: "Skill Categories" },
          { val: "25+", lbl: "Technologies" },
          { val: "83%", lbl: "Avg Proficiency" },
          { val: "2+",  lbl: "Years Experience" },
        ].map((s, i) => (
          <div key={i} className="sk-stat">
            <div className="sk-stat-val">
              {s.val.replace(/\D/g,"")}
              <span className="ac">{s.val.replace(/\d/g,"")}</span>
            </div>
            <div className="sk-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── Skill sections ── */}
      {skillData.map((section, si) => (
        <section
          key={section.category}
          className="sk-section"
          style={{ animationDelay: `${0.1 + si * 0.08}s` }}
        >
          <div className="sk-section-head">
            <span className="sk-section-icon">{section.icon}</span>
            <span className="sk-section-title">{section.category}</span>
            <div className="sk-section-line" />
            <span className="sk-section-code">_{section.code}</span>
          </div>

          <div className="sk-grid">
            {section.items.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>
      ))}

      <div className="sk-bottom" />
    </div>
  </>
);

export default Skills;