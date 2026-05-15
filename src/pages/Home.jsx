import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import PImg from "../assets/ProfileImg.webp";
import { useEffect, useRef, useState } from "react";

/* ── Neural Network Canvas ── */
const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 60;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.025;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.25;
            const pulse = (Math.sin(nodes[i].pulse) + 1) / 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 210, 255, ${alpha * (0.5 + pulse * 0.5)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const rad = n.r + glow * 1.5;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rad * 4);
        grad.addColorStop(0, `rgba(0, 230, 255, ${0.8 + glow * 0.2})`);
        grad.addColorStop(0.4, `rgba(0, 150, 220, 0.4)`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, rad * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 240, 255, ${0.7 + glow * 0.3})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        opacity: 0.35,
        pointerEvents: "none",
      }}
    />
  );
};

<<<<<<< HEAD
/* ── Data stream ticker ── */
const DataTicker = () => {
  const items = [
    "MODEL ACCURACY: 97.4%", "EPOCH 128/128", "LOSS: 0.0031",
    "GRADIENT DESCENT ▼", "TRAINING COMPLETE", "NEURAL WEIGHTS LOADED",
    "BATCH SIZE: 64", "LEARNING RATE: 0.001", "F1 SCORE: 0.96",
  ];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid rgba(0,210,255,0.15)",
      borderBottom: "1px solid rgba(0,210,255,0.15)",
      padding: "10px 0",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{
        display: "flex",
        gap: "64px",
        animation: "ticker 22s linear infinite",
        whiteSpace: "nowrap",
        width: "max-content",
      }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "rgba(0,210,255,0.5)",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 500,
          }}>
            <span style={{ color: "rgba(0,210,255,0.25)", marginRight: "12px" }}>◆</span>
            {item}
          </span>
        ))}
      </div>
=======
          <h2 className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
            MCA (AI & ML) Student | Web Developer | Python & C++ Programmer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
            I build responsive websites, develop intelligent systems using
            Machine Learning, and create scalable applications with clean,
            efficient code.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["React", "Node.js", "Python", "MongoDB", "AI/ML"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm rounded-full bg-blue-100 dark:bg-white/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-white/10 backdrop-blur-md"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-white/20 backdrop-blur-md hover:border-blue-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={1000}
            className="relative w-72 h-72 rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-800 shadow-xl"
          >
            <img
              src={PImg}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </Tilt>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Projects" },
            { value: "2+", label: "Years Learning" },
            { value: "8+", label: "Technologies" },
            { value: "100%", label: "Dedication" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-blue-500">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>
>>>>>>> a43265f467ca25e984fbad71475b8b5be153d06a
    </div>
  );
};

const Home = () => {
  const [typed, setTyped] = useState("");
  const fullText = "MCA (AI & ML) · Web Developer · Python & C++";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  const projects = [
    {
      title: "AI-Based Student Performance Prediction",
      description: "ML model predicting academic outcomes using behavioral and academic datasets with 94% accuracy.",
      tag: "Machine Learning",
      icon: "🧠",
      metric: "94% Accuracy",
      num: "01",
    },
    {
      title: "Weather Forecast Website",
      description: "Real-time forecasting with live API integration, predictive modeling and dynamic visualizations.",
      tag: "Web Dev",
      icon: "🌐",
      metric: "Live API",
      num: "02",
    },
    {
      title: "Expense Tracker",
      description: "Full-stack app with secure auth, analytics dashboard, and intelligent spending pattern detection.",
      tag: "Full Stack",
      icon: "⚡",
      metric: "Full Stack",
      num: "03",
    },
  ];

  const stats = [
    { value: "10+", label: "Projects", sub: "Completed" },
    { value: "2+", label: "Years", sub: "Learning" },
    { value: "8+", label: "Tech Stack", sub: "Mastered" },
    { value: "100%", label: "Dedication", sub: "Always" },
  ];

  const techs = [
    { name: "React", color: "#61dafb" },
    { name: "Node.js", color: "#68d391" },
    { name: "Python", color: "#ffd43b" },
    { name: "MongoDB", color: "#47a248" },
    { name: "AI / ML", color: "#00d2ff" },
    { name: "C++", color: "#f08080" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg: #020c14;
          --bg2: #041320;
          --cyan: #00d2ff;
          --cyan-dim: rgba(0,210,255,0.12);
          --cyan-mid: rgba(0,210,255,0.35);
          --teal: #00ffe0;
          --muted: rgba(150,220,240,0.45);
          --text: rgba(200,240,255,0.9);
          --border: rgba(0,210,255,0.15);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ai-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'IBM Plex Mono', monospace;
          overflow-x: hidden;
          padding-top: 80px;
          position: relative;
        }

        .ai-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0,210,255,0.2); }
          50%       { box-shadow: 0 0 40px rgba(0,210,255,0.5), 0 0 80px rgba(0,210,255,0.15); }
        }

        .fu { animation: fadeUp 0.8s ease forwards; opacity: 0; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .d5 { animation-delay: 0.7s; }

        /* ── Hero ── */
        .ai-hero {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 48px 100px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .ai-hero { grid-template-columns: 1fr; padding: 48px 24px 72px; gap: 48px; }
          .ai-img-col { display: flex; justify-content: center; }
        }

        .terminal-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--cyan);
          margin-bottom: 20px;
          letter-spacing: 0.1em;
        }
        .terminal-label::before {
          content: '▶';
          font-size: 9px;
          color: var(--teal);
        }

        .ai-name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.01em;
          color: #fff;
          text-shadow: 0 0 40px rgba(0,210,255,0.4);
          margin-bottom: 8px;
        }
        .ai-name .last {
          display: block;
          background: linear-gradient(90deg, var(--cyan) 0%, var(--teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(0,210,255,0.5));
        }

        .ai-typewriter {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 32px;
          min-height: 20px;
        }
        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: var(--cyan);
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        .ai-bio {
          font-size: 13px;
          line-height: 1.9;
          color: rgba(160,220,240,0.6);
          max-width: 480px;
          margin-bottom: 36px;
          font-weight: 300;
          border-left: 2px solid var(--border);
          padding-left: 20px;
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.06em;
          border-radius: 4px;
          border: 1px solid rgba(0,210,255,0.2);
          background: rgba(0,210,255,0.05);
          color: var(--text);
          transition: all 0.2s;
          cursor: default;
        }
        .tech-pill:hover {
          border-color: var(--cyan);
          background: rgba(0,210,255,0.1);
          box-shadow: 0 0 12px rgba(0,210,255,0.2);
        }
        .tech-dot { width: 6px; height: 6px; border-radius: 50%; }

        .ai-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-glow {
          padding: 14px 32px;
          font-family: 'Orbitron', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-glow.primary {
          background: linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,255,220,0.1));
          border: 1px solid var(--cyan);
          color: var(--cyan);
          animation: glowPulse 3s ease-in-out infinite;
        }
        .btn-glow.primary:hover {
          background: linear-gradient(135deg, rgba(0,210,255,0.3), rgba(0,255,220,0.2));
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0,210,255,0.5);
        }
        .btn-glow.secondary {
          background: transparent;
          border: 1px solid rgba(0,210,255,0.2);
          color: var(--muted);
        }
        .btn-glow.secondary:hover {
          border-color: rgba(0,210,255,0.5);
          color: var(--text);
          transform: translateY(-2px);
        }

        /* ── Profile card ── */
        .profile-wrap {
          position: relative;
          width: 300px;
          animation: floatY 5s ease-in-out infinite;
        }
        .corner {
          position: absolute;
          width: 20px; height: 20px;
          z-index: 3;
        }
        .corner-tl { top: -6px; left: -6px; border-top: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
        .corner-tr { top: -6px; right: -6px; border-top: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }
        .corner-bl { bottom: -6px; left: -6px; border-bottom: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
        .corner-br { bottom: -6px; right: -6px; border-bottom: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }

        .profile-img-box {
          width: 300px; height: 360px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          position: relative;
          background: var(--bg2);
        }
        .profile-img-box img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          display: block;
          filter: saturate(0.7) brightness(0.85);
          mix-blend-mode: luminosity;
        }
        .profile-img-box::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,30,50,0.8) 100%);
        }
        .profile-img-box::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,210,255,0.03) 2px, rgba(0,210,255,0.03) 4px
          );
          z-index: 1;
          pointer-events: none;
        }
        .profile-status {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 16px;
          z-index: 2;
          display: flex; flex-direction: column; gap: 4px;
        }
        .status-row {
          display: flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: var(--cyan); letter-spacing: 0.08em;
        }
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal);
          animation: blink 1.5s ease-in-out infinite;
        }

        /* ── Stats ── */
        .ai-stats {
          position: relative; z-index: 1;
          background: linear-gradient(90deg, rgba(0,210,255,0.04), rgba(0,255,220,0.02), rgba(0,210,255,0.04));
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .ai-stats-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        @media (max-width: 768px) {
          .ai-stats-inner { grid-template-columns: repeat(2,1fr); padding: 0 24px; }
        }
        .stat-cell {
          padding: 36px 24px;
          border-right: 1px solid var(--border);
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .stat-cell:last-child { border-right: none; }
        .stat-cell::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan-mid), transparent);
          transform: scaleX(0); transition: transform 0.4s;
        }
        .stat-cell:hover::after { transform: scaleX(1); }
        .stat-cell:hover { background: rgba(0,210,255,0.04); }
        .stat-val {
          font-family: 'Orbitron', monospace;
          font-size: 36px; font-weight: 900;
          color: #fff;
          text-shadow: 0 0 20px rgba(0,210,255,0.5);
          line-height: 1; letter-spacing: -0.01em;
        }
        .stat-val .ac { color: var(--cyan); }
        .stat-lbl {
          font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--muted); margin-top: 6px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── Projects ── */
        .ai-projects {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 100px 48px;
        }
        @media (max-width: 768px) { .ai-projects { padding: 72px 24px; } }

        .sec-head {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px; flex-wrap: wrap; gap: 16px;
        }
        .sec-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(22px, 3.5vw, 38px);
          font-weight: 900; color: #fff;
          text-shadow: 0 0 30px rgba(0,210,255,0.3);
          letter-spacing: 0.02em;
        }
        .sec-title .dim {
          color: rgba(0,210,255,0.4); font-size: 0.6em;
          display: block; margin-bottom: 4px; letter-spacing: 0.15em;
          font-weight: 400;
        }
        .sec-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--cyan);
          text-decoration: none;
          display: flex; align-items: center; gap: 6px;
          transition: gap 0.2s;
          border-bottom: 1px solid transparent; padding-bottom: 2px;
        }
        .sec-link:hover { gap: 12px; border-bottom-color: var(--cyan); }

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .proj-grid { grid-template-columns: 1fr; } }

        .proj-card {
          border: 1px solid var(--border);
          border-radius: 6px; padding: 32px 28px;
          background: rgba(0,20,35,0.6);
          backdrop-filter: blur(8px);
          position: relative; overflow: hidden;
          transition: all 0.35s ease;
        }
        .proj-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan-mid), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .proj-card:hover::before { opacity: 1; }
        .proj-card:hover {
          border-color: rgba(0,210,255,0.4);
          transform: translateY(-6px);
          background: rgba(0,25,45,0.8);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,210,255,0.08);
        }

        .proj-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 20px;
        }
        .proj-icon { font-size: 28px; filter: drop-shadow(0 0 8px rgba(0,210,255,0.4)); }
        .proj-metric {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: var(--teal);
          border: 1px solid rgba(0,255,220,0.25);
          padding: 3px 10px; border-radius: 100px;
        }
        .proj-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; text-transform: uppercase;
          letter-spacing: 0.18em; color: var(--cyan);
          margin-bottom: 10px;
        }
        .proj-title {
          font-family: 'Orbitron', monospace;
          font-size: 14px; font-weight: 700; color: #fff;
          margin-bottom: 12px; letter-spacing: 0.01em; line-height: 1.4;
        }
        .proj-desc {
          font-size: 12px; line-height: 1.8;
          color: var(--muted); font-weight: 300;
        }
        .proj-num-bg {
          position: absolute; bottom: -10px; right: -5px;
          font-family: 'Orbitron', monospace;
          font-size: 80px; font-weight: 900;
          color: rgba(0,210,255,0.04); line-height: 1;
          pointer-events: none; letter-spacing: -0.04em;
          transition: color 0.3s;
        }
        .proj-card:hover .proj-num-bg { color: rgba(0,210,255,0.07); }

        .cta-row {
          margin-top: 48px; display: flex;
          align-items: center; gap: 20px;
        }
        .cta-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }
      `}</style>

      <div className="ai-root">
        <NeuralCanvas />

        {/* ── HERO ── */}
        <section className="ai-hero">
          <div>
            <div className="terminal-label fu d1">
              sys.init() → portfolio_v2.execute()
            </div>

            <h1 className="ai-name fu d2">
              VAIBHAV
              <span className="last">MISHRA</span>
            </h1>

            <div className="ai-typewriter fu d3">
              <span>{typed}</span>
              <span className="cursor-blink" />
            </div>

            <p className="ai-bio fu d3">
              Building intelligent systems at the intersection of data, algorithms,
              and real-world engineering. Specializing in machine learning pipelines,
              responsive web architectures, and scalable backend systems.
            </p>

            <div className="tech-row fu d4">
              {techs.map((t, i) => (
                <span key={i} className="tech-pill">
                  <span className="tech-dot" style={{ background: t.color }} />
                  {t.name}
                </span>
              ))}
            </div>

            <div className="ai-btns fu d5">
              <Link to="/projects" className="btn-glow primary">View Projects</Link>
              <Link to="/contact" className="btn-glow secondary">Contact Me</Link>
            </div>
          </div>

          <div className="ai-img-col fu d3">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.08}
              scale={1.03}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              transitionSpeed={1500}
            >
              <div className="profile-wrap">
                <div className="corner corner-tl" />
                <div className="corner corner-tr" />
                <div className="corner corner-bl" />
                <div className="corner corner-br" />
                <div className="profile-img-box">
                  <img src={PImg} alt="Vaibhav Mishra" />
                  <div className="profile-status">
                    <div className="status-row">
                      <span className="status-dot" />
                      SYSTEM: ONLINE
                    </div>
                    <div className="status-row" style={{ color: "rgba(0,255,220,0.6)" }}>
                      STATUS: OPEN TO WORK
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </section>

        {/* ── DATA TICKER ── */}
        <DataTicker />

        {/* ── STATS ── */}
        <section className="ai-stats">
          <div className="ai-stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="stat-cell">
                <div className="stat-val">
                  {s.value.replace(/\D/g, "")}
                  <span className="ac">{s.value.replace(/\d/g, "")}</span>
                </div>
                <div className="stat-lbl">{s.label} · {s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="ai-projects">
          <div className="sec-head">
            <h2 className="sec-title">
              <span className="dim">// FEATURED_WORK</span>
              PROJECTS
            </h2>
            <Link to="/projects" className="sec-link">ALL_PROJECTS →</Link>
          </div>

          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={i} className="proj-card">
                <div className="proj-top">
                  <span className="proj-icon">{p.icon}</span>
                  <span className="proj-metric">{p.metric}</span>
                </div>
                <div className="proj-tag">[ {p.tag} ]</div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-num-bg">{p.num}</div>
              </div>
            ))}
          </div>

          <div className="cta-row">
            <div className="cta-line" />
            <Link to="/projects" className="btn-glow primary">EXPLORE_ALL( )</Link>
            <div className="cta-line" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;