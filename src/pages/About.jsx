import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import PImg from "../assets/ProfileImg.jpg";

const timeline = [
  {
    year: "2021",
    title: "BCA — University of Rajasthan",
    sub: "Bachelor of Computer Applications",
    desc: "Built a strong foundation in programming, data structures, and software engineering fundamentals.",
    tag: "EDUCATION",
    color: "#00d2ff",
  },
  {
    year: "2023",
    title: "Internships & Certifications",
    sub: "CodSoft · Bharat Intern",
    desc: "Completed frontend development internships, building real-world projects and sharpening UI engineering skills.",
    tag: "EXPERIENCE",
    color: "#00ffe0",
  },
  {
    year: "2024",
    title: "Full Stack Projects",
    sub: "React · Node.js · MongoDB",
    desc: "Engineered AI-powered systems, REST APIs, dashboards, and responsive web platforms with scalable architecture.",
    tag: "DEVELOPMENT",
    color: "#a78bfa",
  },
  {
    year: "2025",
    title: "MCA — JECRC University",
    sub: "AI & Machine Learning",
    desc: "Specializing in Artificial Intelligence, ML pipelines, data science, and scalable software engineering.",
    tag: "CURRENT",
    color: "#ffd43b",
    active: true,
  },
  {
    year: "2027+",
    title: "AI-Driven Software Engineer",
    sub: "Future Vision",
    desc: "Aspiring to architect large-scale intelligent systems that solve real-world problems with measurable impact.",
    tag: "VISION",
    color: "#f08080",
  },
];

const traits = [
  { key: "DEGREE",     val: "MCA (AI & ML)" },
  { key: "UNIVERSITY", val: "JECRC University" },
  { key: "FOCUS",      val: "AI · ML · Full Stack" },
  { key: "LOCATION",   val: "Rajasthan, India" },
  { key: "EXPERIENCE", val: "2+ Years" },
  { key: "STATUS",     val: "OPEN_TO_WORK", highlight: true },
];

const About = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

      * { box-sizing: border-box; }

      .ab-root {
        background: var(--bg, #020c14);
        min-height: 100vh;
        color: var(--text, rgba(200,240,255,0.9));
        font-family: 'JetBrains Mono', monospace;
        padding-top: 80px;
        position: relative;
        overflow-x: hidden;
      }

      @keyframes abFadeUp {
        from { opacity:0; transform:translateY(22px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes abBlink  { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes abScan   { from{transform:translateX(-100%)} to{transform:translateX(500%)} }
      @keyframes abFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      @keyframes abPulse  {
        0%,100%{box-shadow:0 0 0 0 rgba(0,210,255,0)}
        50%    {box-shadow:0 0 0 6px rgba(0,210,255,0.08)}
      }

      .ab-fu { animation:abFadeUp .7s ease forwards; opacity:0; }
      .ab-d1 { animation-delay:.10s; }
      .ab-d2 { animation-delay:.22s; }
      .ab-d3 { animation-delay:.34s; }
      .ab-d4 { animation-delay:.46s; }
      .ab-d5 { animation-delay:.58s; }

      /* ── HEADER ── */
      .ab-header {
        position:relative; z-index:1;
        max-width:1280px; margin:0 auto;
        padding: clamp(40px,6vw,72px) clamp(20px,5vw,48px) 0;
        text-align:center;
      }

      .ab-eyebrow {
        display:inline-flex; align-items:center; gap:8px;
        font-size: clamp(9px,2vw,10px); letter-spacing:.2em;
        text-transform:uppercase;
        color: var(--text-faint, rgba(0,210,255,0.4));
        margin-bottom:20px;
      }
      .ab-eyebrow::before { content:'//'; color:var(--text-faint, rgba(0,210,255,0.2)); }

      .ab-title {
        font-family:'Orbitron',monospace;
        font-size: clamp(28px,7vw,62px);
        font-weight:900; letter-spacing:.02em;
        color: var(--heading, #fff);
        text-shadow:0 0 40px rgba(0,210,255,0.35);
        margin-bottom:16px;
        line-height:1.1;
      }
      .ab-title .cx { color:var(--cyan, #00d2ff); }

      .ab-subtitle {
        font-size: clamp(11px,2.5vw,12px); line-height:1.9;
        color: var(--text-dim, rgba(150,220,240,0.45));
        max-width:540px; margin:0 auto;
      }

      .ab-scan-line {
        position:relative; height:1px;
        margin:40px auto 0; max-width:400px;
        background:rgba(0,210,255,0.08); overflow:hidden;
      }
      .ab-scan-line::after {
        content:''; position:absolute; top:0; left:0;
        width:35%; height:100%;
        background:linear-gradient(90deg,transparent,var(--cyan,#00d2ff),transparent);
        animation:abScan 3s ease-in-out infinite;
      }

      /* ── BIO ── */
      .ab-bio {
        position:relative; z-index:1;
        max-width:1280px; margin:0 auto;
        padding: clamp(40px,6vw,72px) clamp(20px,5vw,48px);
        display:grid;
        grid-template-columns: auto 1fr;
        gap: clamp(32px,5vw,72px);
        align-items:center;
      }
      @media(max-width:860px) {
        .ab-bio {
          grid-template-columns:1fr;
          gap:40px;
        }
        .ab-img-col { display:flex; justify-content:center; }
      }

      /* Profile image */
      .ab-profile-wrap {
        position:relative;
        animation:abFloat 5s ease-in-out infinite;
        display:inline-block;
      }

      .ab-corner {
        position:absolute; z-index:3;
        width: clamp(14px,3vw,18px);
        height: clamp(14px,3vw,18px);
      }
      .ab-corner-tl { top:-5px; left:-5px; border-top:2px solid var(--cyan,#00d2ff); border-left:2px solid var(--cyan,#00d2ff); }
      .ab-corner-tr { top:-5px; right:-5px; border-top:2px solid var(--cyan,#00d2ff); border-right:2px solid var(--cyan,#00d2ff); }
      .ab-corner-bl { bottom:-5px; left:-5px; border-bottom:2px solid var(--cyan,#00d2ff); border-left:2px solid var(--cyan,#00d2ff); }
      .ab-corner-br { bottom:-5px; right:-5px; border-bottom:2px solid var(--cyan,#00d2ff); border-right:2px solid var(--cyan,#00d2ff); }

      .ab-img-box {
        width: clamp(220px, 40vw, 280px);
        height: clamp(270px, 48vw, 340px);
        border-radius:8px; overflow:hidden;
        border:1px solid var(--border, rgba(0,210,255,0.13));
        position:relative;
        background: var(--bg2, #041320);
      }
      .ab-img-box img {
        width:100%; height:100%;
        object-fit:cover; object-position:top;
        display:block;
        filter:saturate(0.7) brightness(0.85);
        mix-blend-mode:luminosity;
      }
      .ab-img-box::after {
        content:''; position:absolute; inset:0;
        background:linear-gradient(to bottom,transparent 50%,rgba(0,30,50,0.85) 100%);
      }
      .ab-img-box::before {
        content:''; position:absolute; inset:0;
        background:repeating-linear-gradient(
          0deg,transparent,transparent 2px,
          rgba(0,210,255,0.03) 2px,rgba(0,210,255,0.03) 4px
        );
        z-index:1; pointer-events:none;
      }
      .ab-img-status {
        position:absolute; bottom:0; left:0; right:0;
        padding:14px; z-index:2;
        display:flex; flex-direction:column; gap:3px;
      }
      .ab-status-row {
        display:flex; align-items:center; gap:6px;
        font-size: clamp(8px,2vw,9px); letter-spacing:.1em;
        color:var(--cyan,#00d2ff);
      }
      .ab-status-dot {
        width:5px; height:5px; border-radius:50%;
        background:var(--teal,#00ffe0);
        animation:abBlink 1.5s ease-in-out infinite;
        box-shadow:0 0 5px var(--teal,#00ffe0);
        flex-shrink:0;
      }

      /* Text col */
      .ab-name {
        font-family:'Orbitron',monospace;
        font-size: clamp(20px,4vw,36px);
        font-weight:900; letter-spacing:.04em;
        color: var(--heading,#fff);
        text-shadow:0 0 24px rgba(0,210,255,0.3);
        margin-bottom:6px;
        word-break:break-word;
      }
      .ab-name-sub {
        font-size: clamp(9px,2vw,10px); letter-spacing:.18em;
        text-transform:uppercase;
        color:var(--cyan,#00d2ff);
        margin-bottom:28px;
      }

      .ab-para {
        font-size: clamp(11px,2.5vw,12px); line-height:1.95;
        color: var(--text-dim,rgba(150,220,240,0.45));
        font-weight:400;
        border-left:2px solid var(--border,rgba(0,210,255,0.12));
        padding-left:16px;
        margin-bottom:16px;
      }

      /* Spec table */
      .ab-specs {
        display:grid;
        grid-template-columns: repeat(2,1fr);
        gap:6px 24px;
        margin:28px 0 32px;
        padding: clamp(14px,3vw,20px);
        border:1px solid var(--border,rgba(0,210,255,0.13));
        border-radius:6px;
        background:var(--card-bg,rgba(0,210,255,0.03));
      }
      @media(max-width:480px) {
        .ab-specs { grid-template-columns:1fr; }
      }

      .ab-spec-row {
        display:flex; align-items:flex-start; gap:6px;
        font-size: clamp(9px,2vw,10px); letter-spacing:.08em;
        flex-wrap:wrap;
      }
      .ab-spec-key {
        color:var(--text-faint,rgba(0,210,255,0.3));
        min-width:80px; flex-shrink:0;
      }
      .ab-spec-sep { color:var(--text-faint,rgba(0,210,255,0.15)); }
      .ab-spec-val { color:var(--text-dim,rgba(200,240,255,0.6)); word-break:break-word; }
      .ab-spec-val.hl { color:var(--teal,#00ffe0); }

      .ab-btns { display:flex; gap:10px; flex-wrap:wrap; }

      .ab-btn-primary {
        padding: clamp(10px,2vw,12px) clamp(18px,3vw,28px);
        font-family:'Orbitron',monospace;
        font-size: clamp(10px,2.2vw,11px); font-weight:700;
        letter-spacing:.1em; text-transform:uppercase;
        text-decoration:none; border-radius:4px;
        color:var(--btn-primary-text,#00d2ff);
        border:1px solid var(--btn-primary-border,#00d2ff);
        background:var(--btn-primary-bg,rgba(0,210,255,0.07));
        transition:all .25s;
        animation:abPulse 3s ease-in-out infinite;
        display:inline-block;
      }
      .ab-btn-primary:hover {
        background:rgba(0,210,255,0.16);
        box-shadow:0 0 24px rgba(0,210,255,0.35);
        transform:translateY(-2px);
      }
      .ab-btn-secondary {
        padding: clamp(10px,2vw,12px) clamp(18px,3vw,28px);
        font-family:'Orbitron',monospace;
        font-size: clamp(10px,2.2vw,11px); font-weight:700;
        letter-spacing:.1em; text-transform:uppercase;
        text-decoration:none; border-radius:4px;
        color:var(--btn-secondary-text,rgba(150,220,240,0.55));
        border:1px solid var(--btn-secondary-border,rgba(0,210,255,0.15));
        background:var(--btn-secondary-bg,transparent);
        transition:all .25s;
        display:inline-block;
      }
      .ab-btn-secondary:hover {
        border-color:rgba(0,210,255,0.4);
        color:var(--text,rgba(200,240,255,0.9));
        transform:translateY(-2px);
      }

      /* ── JOURNEY / TIMELINE ── */
      .ab-journey {
        position:relative; z-index:1;
        border-top:1px solid var(--border,rgba(0,210,255,0.08));
        padding: clamp(48px,7vw,80px) 0 clamp(60px,8vw,100px);
      }
      .ab-journey-inner {
        max-width:1280px; margin:0 auto;
        padding:0 clamp(20px,5vw,48px);
      }

      .ab-sec-head {
        display:flex; align-items:center; gap:14px;
        margin-bottom: clamp(32px,5vw,56px);
        flex-wrap:wrap;
      }
      .ab-sec-title {
        font-family:'Orbitron',monospace;
        font-size: clamp(20px,4vw,32px);
        font-weight:900;
        color:var(--heading,#fff);
        text-shadow:0 0 20px rgba(0,210,255,0.3);
        letter-spacing:.03em;
      }
      .ab-sec-title .cx { color:var(--cyan,#00d2ff); }
      .ab-sec-line {
        flex:1; min-width:30px; height:1px;
        background:linear-gradient(90deg,rgba(0,210,255,0.2),transparent);
      }
      .ab-sec-code {
        font-size: clamp(8px,2vw,9px); letter-spacing:.15em;
        color:var(--text-faint,rgba(0,210,255,0.2));
        border:1px solid var(--border,rgba(0,210,255,0.1));
        padding:3px 8px; border-radius:3px;
        white-space:nowrap;
      }

      /* Timeline wrapper — responsive padding */
      .ab-timeline {
        position:relative;
        padding-left: clamp(36px,8vw,64px);
      }
      .ab-timeline::before {
        content:'';
        position:absolute;
        left: clamp(11px,3.5vw,15px);
        top:8px; bottom:8px; width:1px;
        background:linear-gradient(to bottom,
          transparent,
          var(--timeline-line,rgba(0,210,255,0.25)) 10%,
          var(--timeline-line,rgba(0,210,255,0.25)) 90%,
          transparent
        );
      }

      .ab-tl-item {
        position:relative;
        padding:0 0 clamp(28px,5vw,48px) clamp(16px,4vw,24px);
        animation:abFadeUp .6s ease forwards; opacity:0;
      }
      .ab-tl-item:last-child { padding-bottom:0; }

      .ab-tl-dot {
        position:absolute;
        left: clamp(-28px,-6vw,-24px);
        top:4px;
        width: clamp(10px,2.5vw,12px);
        height: clamp(10px,2.5vw,12px);
        border-radius:50%;
        border:2px solid var(--bg,#020c14);
        z-index:2;
        transition:box-shadow .3s;
        flex-shrink:0;
      }
      .ab-tl-item:hover .ab-tl-dot {
        box-shadow:0 0 0 4px rgba(0,210,255,0.12);
      }
      .ab-tl-dot.active-dot { animation:abBlink 2s ease-in-out infinite; }

      /* Year marker — hide on very small screens */
      .ab-tl-year-marker {
        position:absolute;
        left: clamp(-68px,-14vw,-52px);
        top:2px;
        font-family:'Orbitron',monospace;
        font-size: clamp(7px,1.8vw,9px); font-weight:700;
        letter-spacing:.1em;
        color:var(--text-faint,rgba(0,210,255,0.25));
        text-align:right;
        width: clamp(36px,8vw,44px);
        white-space:nowrap;
      }
      @media(max-width:480px) { .ab-tl-year-marker { display:none; } }

      .ab-tl-card {
        padding: clamp(16px,3vw,24px) clamp(16px,3vw,28px);
        border:1px solid var(--border,rgba(0,210,255,0.13));
        border-radius:6px;
        background:var(--card-bg,rgba(0,18,32,0.6));
        backdrop-filter:blur(8px);
        position:relative; overflow:hidden;
        transition:all .28s ease;
      }
      .ab-tl-card::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,rgba(0,210,255,0.4),transparent);
        opacity:0; transition:opacity .28s;
      }
      .ab-tl-card:hover::before { opacity:1; }
      .ab-tl-card:hover {
        border-color:var(--border-hover,rgba(0,210,255,0.32));
        background:var(--card-hover,rgba(0,24,42,0.85));
        transform:translateX(4px);
        box-shadow:0 8px 32px rgba(0,0,0,0.4);
      }
      .ab-tl-card.active-card {
        border-color:rgba(0,210,255,0.25);
        background:rgba(0,25,42,0.7);
      }

      .ab-tl-top {
        display:flex; align-items:center;
        justify-content:space-between;
        margin-bottom:10px;
        flex-wrap:wrap; gap:8px;
      }
      .ab-tl-year {
        font-family:'Orbitron',monospace;
        font-size: clamp(10px,2.2vw,11px); font-weight:700;
        letter-spacing:.12em;
        color:var(--text-faint,rgba(200,240,255,0.4));
      }
      .ab-tl-tag {
        font-size: clamp(8px,2vw,9px); letter-spacing:.18em;
        text-transform:uppercase;
        padding:3px 10px; border-radius:100px;
        font-weight:500; white-space:nowrap;
      }
      .ab-tl-title {
        font-family:'Orbitron',monospace;
        font-size: clamp(12px,2.8vw,14px); font-weight:700;
        color:var(--heading,#fff);
        margin-bottom:4px; letter-spacing:.01em;
        line-height:1.35;
        word-break:break-word;
      }
      .ab-tl-sub {
        font-size: clamp(9px,2vw,10px); letter-spacing:.1em;
        color:var(--text-dim,rgba(150,220,240,0.45));
        margin-bottom:10px;
      }
      .ab-tl-desc {
        font-size: clamp(10px,2.2vw,11px); line-height:1.85;
        color:var(--text-dim,rgba(150,220,240,0.45)); font-weight:400;
      }
    `}</style>

    <div className="ab-root">

      {/* ── Header ── */}
      <section className="ab-header">
        <div className="ab-eyebrow ab-fu ab-d1">profile.load() → identity.render()</div>
        <h1 className="ab-title ab-fu ab-d2">ABOUT <span className="cx">ME</span></h1>
        <p className="ab-subtitle ab-fu ab-d3">
          Passionate AI &amp; Machine Learning developer engineering intelligent,
          data-driven systems with scalable and efficient software architecture.
        </p>
        <div className="ab-scan-line" />
      </section>

      {/* ── Bio ── */}
      <section className="ab-bio">

        {/* Image */}
        <div className="ab-img-col ab-fu ab-d2">
          <Tilt glareEnable glareMaxOpacity={0.07} scale={1.03}
            tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={1400}>
            <div className="ab-profile-wrap">
              <div className="ab-corner ab-corner-tl" />
              <div className="ab-corner ab-corner-tr" />
              <div className="ab-corner ab-corner-bl" />
              <div className="ab-corner ab-corner-br" />
              <div className="ab-img-box">
                <img src={PImg} alt="Vaibhav Mishra" />
                <div className="ab-img-status">
                  <div className="ab-status-row">
                    <span className="ab-status-dot" />
                    IDENTITY: VERIFIED
                  </div>
                  <div className="ab-status-row" style={{ color:"rgba(0,255,220,0.6)" }}>
                    MODE: BUILDER
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Text */}
        <div className="ab-text-col ab-fu ab-d3">
          <div className="ab-name">VAIBHAV MISHRA</div>
          <div className="ab-name-sub">AI &amp; ML Developer · Full Stack Engineer</div>

          <p className="ab-para">
            A dedicated Full Stack Developer with a strong passion for building
            responsive, scalable, and high-performance web applications. I solve
            real-world problems using modern technologies like React, Node.js, and MongoDB.
          </p>
          <p className="ab-para">
            My goal is to create meaningful digital experiences that are fast,
            accessible, and visually precise. I continuously learn and adapt to
            emerging technologies to stay at the cutting edge of the industry.
          </p>

          <div className="ab-specs ab-fu ab-d4">
            {traits.map((t) => (
              <div key={t.key} className="ab-spec-row">
                <span className="ab-spec-key">{t.key}</span>
                <span className="ab-spec-sep">:</span>
                <span className={`ab-spec-val${t.highlight ? " hl" : ""}`}>{t.val}</span>
              </div>
            ))}
          </div>

          <div className="ab-btns ab-fu ab-d5">
            <Link to="/projects" className="ab-btn-primary">View Projects</Link>
            <Link to="/contact" className="ab-btn-secondary">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* ── Journey / Timeline ── */}
      <section className="ab-journey">
        <div className="ab-journey-inner">

          <div className="ab-sec-head">
            <h2 className="ab-sec-title">MY <span className="cx">JOURNEY</span></h2>
            <div className="ab-sec-line" />
            <span className="ab-sec-code">// timeline</span>
          </div>

          <div className="ab-timeline">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="ab-tl-item"
                style={{ animationDelay:`${0.1 + i * 0.12}s` }}
              >
                <span className="ab-tl-year-marker">{item.year}</span>

                <div
                  className={`ab-tl-dot${item.active ? " active-dot" : ""}`}
                  style={{
                    background: item.color,
                    boxShadow: `0 0 10px ${item.color}88`,
                  }}
                />

                <div className={`ab-tl-card${item.active ? " active-card" : ""}`}>
                  <div className="ab-tl-top">
                    <span className="ab-tl-year">{item.year}</span>
                    <span
                      className="ab-tl-tag"
                      style={{
                        color: item.color,
                        border: `1px solid ${item.color}44`,
                        background: `${item.color}0f`,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="ab-tl-title">{item.title}</div>
                  <div className="ab-tl-sub">{item.sub}</div>
                  <div className="ab-tl-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  </>
);

export default About;