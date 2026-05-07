import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* ─────────────────────────────────────────
   Neural Network Canvas — runs once, persists
   across all page navigations via Layout
───────────────────────────────────────── */
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

    const NODE_COUNT = 65;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 1.8 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.022;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 155) {
            const alpha = (1 - dist / 155) * 0.22;
            const pulse = (Math.sin(nodes[i].pulse) + 1) / 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,210,255,${alpha * (0.5 + pulse * 0.5)})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const rad  = n.r + glow * 1.4;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rad * 4);
        grad.addColorStop(0, `rgba(0,230,255,${0.75 + glow * 0.25})`);
        grad.addColorStop(0.4, "rgba(0,150,220,0.35)");
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(n.x, n.y, rad * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,240,255,${0.65 + glow * 0.35})`;
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
        opacity: 0.32,
        pointerEvents: "none",
      }}
    />
  );
};

/* ─────────────────────────────────────────
   Layout
───────────────────────────────────────── */
const Layout = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html, body {
        background: #020c14;
        min-height: 100%;
        overflow-x: hidden;
      }

      /* Dot-grid overlay — sits above canvas, below content */
      #layout-grid-overlay {
        position: fixed;
        inset: 0;
        background-image:
          linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none;
        z-index: 1;
      }

      /* Radial vignette — subtle depth at edges */
      #layout-vignette {
        position: fixed;
        inset: 0;
        background: radial-gradient(
          ellipse at 50% 50%,
          transparent 40%,
          rgba(2,12,20,0.55) 100%
        );
        pointer-events: none;
        z-index: 1;
      }

      /* All page content sits above overlays */
      #layout-content {
        position: relative;
        z-index: 2;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      #layout-main {
        flex: 1;
      }

      /* Strip any bg that individual pages might set
         (they all set background: #020c14 which is fine,
          but ::before grid overlays would double-up — 
          we neutralise them here) */
      .ai-root::before,
      .ab-root::before,
      .sk-root::before,
      .pj-root::before,
      .ct-root::before {
        display: none !important;
      }

      /* Also remove fixed bg from individual page roots
         since Layout now owns the background */
      .ai-root,
      .ab-root,
      .sk-root,
      .pj-root,
      .ct-root {
        background: transparent !important;
      }
    `}</style>

    {/* ── Persistent background layers ── */}
    <NeuralCanvas />
    <div id="layout-grid-overlay" />
    <div id="layout-vignette" />

    {/* ── App shell ── */}
    <div id="layout-content">
      <Navbar />
      <main id="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;