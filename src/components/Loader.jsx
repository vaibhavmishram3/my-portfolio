import { useEffect, useRef, useState } from "react";

const LoaderCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const setSize = () => {
      const s = Math.min(window.innerWidth * 0.55, 300);
      canvas.width = s; canvas.height = s;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const draw = () => {
      const S = canvas.width;
      const cx = S / 2, cy = S / 2;
      ctx.clearRect(0, 0, S, S);

      // lazy-init nodes
      if (!canvas._nodes) {
        canvas._nodes = Array.from({ length: 26 }, (_, i) => {
          const angle = (i / 26) * Math.PI * 2;
          const r = S * 0.2 + Math.random() * S * 0.17;
          return {
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            r: Math.random() * 1.5 + 0.7,
            pulse: Math.random() * Math.PI * 2,
          };
        });
      }
      const nodes = canvas._nodes;
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.028;
        const dx = n.x - cx, dy = n.y - cy, d = Math.sqrt(dx*dx+dy*dy);
        if (d > S*0.41 || d < S*0.13) { n.vx *= -1; n.vy *= -1; }
      });

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y;
          const d=Math.sqrt(dx*dx+dy*dy), maxD=S*0.32;
          if (d < maxD) {
            const a=(1-d/maxD)*0.26, p=(Math.sin(nodes[i].pulse)+1)/2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x,nodes[i].y);
            ctx.lineTo(nodes[j].x,nodes[j].y);
            ctx.strokeStyle=`rgba(0,210,255,${a*(0.4+p*0.6)})`;
            ctx.lineWidth=0.5; ctx.stroke();
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        const g=(Math.sin(n.pulse)+1)/2, rad=n.r+g*1.3;
        const grad=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,rad*5);
        grad.addColorStop(0,`rgba(0,230,255,${0.8+g*0.2})`);
        grad.addColorStop(0.4,"rgba(0,150,220,0.28)");
        grad.addColorStop(1,"rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(n.x,n.y,rad*5,0,Math.PI*2);
        ctx.fillStyle=grad; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x,n.y,rad,0,Math.PI*2);
        ctx.fillStyle=`rgba(200,245,255,${0.65+g*0.35})`; ctx.fill();
      });

      // core
      const t=Date.now()*0.002, cg=(Math.sin(t)+1)/2;
      const coreR = S*0.09+cg*S*0.025;
      const cgrad=ctx.createRadialGradient(cx,cy,0,cx,cy,coreR);
      cgrad.addColorStop(0,`rgba(0,255,224,${0.55+cg*0.4})`);
      cgrad.addColorStop(0.45,`rgba(0,210,255,${0.18+cg*0.18})`);
      cgrad.addColorStop(1,"rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(cx,cy,coreR,0,Math.PI*2);
      ctx.fillStyle=cgrad; ctx.fill();
      // inner dot
      ctx.beginPath(); ctx.arc(cx,cy,S*0.013+cg*S*0.007,0,Math.PI*2);
      ctx.fillStyle=`rgba(0,255,224,${0.92+cg*0.08})`; ctx.fill();

      animId=requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize",setSize); };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ display:"block", width:"min(55vw,300px)", height:"min(55vw,300px)" }}
    />
  );
};

const BOOT = [
  { txt: "Initializing neural runtime",   pct: 0  },
  { txt: "Loading model weights",          pct: 18 },
  { txt: "Mounting component tree",        pct: 36 },
  { txt: "Calibrating UI renderer",        pct: 55 },
  { txt: "Syncing data pipelines",         pct: 74 },
  { txt: "System ready",                   pct: 92 },
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [lineIdx,  setLineIdx]  = useState(0);
  const [typed,    setTyped]    = useState("");
  const [history,  setHistory]  = useState([]);
  const [exiting,  setExiting]  = useState(false);
  const rotRef = useRef(0);
  const canvasRingRef = useRef(null);

  // Rotating ring canvas
  useEffect(() => {
    const canvas = canvasRingRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const SIZE = 340;
    canvas.width = SIZE; canvas.height = SIZE;
    const cx = SIZE/2, cy = SIZE/2;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0,0,SIZE,SIZE);
      angle += 0.008;

      // outer dashed ring
      ctx.save();
      ctx.translate(cx,cy); ctx.rotate(angle);
      ctx.beginPath();
      ctx.arc(0,0,155,0,Math.PI*2);
      ctx.setLineDash([4,12]);
      ctx.strokeStyle="rgba(0,210,255,0.12)";
      ctx.lineWidth=1; ctx.stroke();
      ctx.restore();

      // middle ring reverse
      ctx.save();
      ctx.translate(cx,cy); ctx.rotate(-angle*1.5);
      ctx.beginPath();
      ctx.arc(0,0,130,0,Math.PI*2);
      ctx.setLineDash([2,18]);
      ctx.strokeStyle="rgba(0,255,224,0.09)";
      ctx.lineWidth=1; ctx.stroke();
      ctx.restore();

      // spinning arc
      ctx.save();
      ctx.translate(cx,cy); ctx.rotate(angle*2.5);
      ctx.beginPath();
      ctx.arc(0,0,155, 0, Math.PI*0.6);
      ctx.setLineDash([]);
      ctx.strokeStyle="rgba(0,210,255,0.45)";
      ctx.lineWidth=1.5; ctx.stroke();
      ctx.restore();

      // counter arc
      ctx.save();
      ctx.translate(cx,cy); ctx.rotate(-angle*1.8);
      ctx.beginPath();
      ctx.arc(0,0,130, Math.PI*0.3, Math.PI*0.9);
      ctx.setLineDash([]);
      ctx.strokeStyle="rgba(0,255,224,0.3)";
      ctx.lineWidth=1; ctx.stroke();
      ctx.restore();

      // 4 tick marks on outer ring
      for (let i=0; i<4; i++) {
        const a = angle*2.5 + (i/4)*Math.PI*2;
        ctx.save();
        ctx.translate(cx + Math.cos(a)*155, cy + Math.sin(a)*155);
        ctx.rotate(a);
        ctx.fillRect(-1,-4,2,8);
        ctx.fillStyle="rgba(0,210,255,0.7)";
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Progress
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(id); return 100; }
        const step = p < 25 ? 0.5 : p < 70 ? 1.8 : p < 92 ? 0.75 : 0.2;
        return Math.min(p+step, 100);
      });
    }, 28);
    return () => clearInterval(id);
  }, []);

  // Boot lines
  useEffect(() => {
    const idx = BOOT.findLastIndex(b => progress >= b.pct);
    if (idx !== lineIdx && idx >= 0) {
      setHistory(h => [...h, BOOT[lineIdx].txt]);
      setLineIdx(idx);
      setTyped("");
    }
  }, [progress]);

  useEffect(() => {
    const line = BOOT[lineIdx]?.txt || "";
    let i = 0;
    const id = setInterval(() => {
      setTyped(line.slice(0, i)); i++;
      if (i > line.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [lineIdx]);

  // Exit
  useEffect(() => {
    if (progress >= 100) {
      const id = setTimeout(() => {
        setExiting(true);
        setTimeout(() => onComplete?.(), 800);
      }, 600);
      return () => clearTimeout(id);
    }
  }, [progress]);

  const pct = Math.floor(progress);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: #020c14;
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          overflow: hidden;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .ldr.out { opacity: 0; transform: scale(1.06); pointer-events: none; }

        /* grid */
        .ldr::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.028) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }
        /* vignette */
        .ldr::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(2,12,20,0.82) 100%);
          pointer-events: none;
        }

        @keyframes lFadeUp   { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lBlink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes lScan     { from{transform:translateX(-100%)} to{transform:translateX(500%)} }
        @keyframes lCorner   { 0%,100%{opacity:.35} 50%{opacity:1} }
        @keyframes lShimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes lPulse    { 0%,100%{box-shadow:0 0 16px rgba(0,210,255,.22)} 50%{box-shadow:0 0 40px rgba(0,210,255,.55),0 0 80px rgba(0,210,255,.12)} }
        @keyframes lFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }

        .ldr-inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center;
          gap: clamp(12px,2.5vw,24px);
          padding: clamp(20px,4vw,40px);
          animation: lFadeUp .6s ease forwards;
          width: 100%;
          max-width: 440px;
        }

        /* ── Visual core ── */
        .ldr-visual {
          position: relative;
          width: min(55vw,300px); height: min(55vw,300px);
          flex-shrink: 0;
          animation: lFloat 5s ease-in-out infinite;
        }

        /* ring canvas behind */
        .ldr-ring-canvas {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 340px; height: 340px;
          pointer-events: none;
          opacity: 0.9;
        }

        /* neural canvas */
        .ldr-canvas { position: relative; z-index: 2; display: block; }

        /* HUD corners */
        .ldr-corner {
          position: absolute; width: clamp(14px,3vw,22px); height: clamp(14px,3vw,22px);
          z-index: 3; animation: lCorner 2.2s ease-in-out infinite;
        }
        .ldr-corner.tl { top:-4px; left:-4px; border-top:2px solid #00d2ff; border-left:2px solid #00d2ff; }
        .ldr-corner.tr { top:-4px; right:-4px; border-top:2px solid #00d2ff; border-right:2px solid #00d2ff; }
        .ldr-corner.bl { bottom:-4px; left:-4px; border-bottom:2px solid #00d2ff; border-left:2px solid #00d2ff; }
        .ldr-corner.br { bottom:-4px; right:-4px; border-bottom:2px solid #00d2ff; border-right:2px solid #00d2ff; }

        /* scan across canvas */
        .ldr-canvas-scan {
          position: absolute; top:50%; left:0; right:0;
          height:1px; overflow:hidden; z-index:4; pointer-events:none;
        }
        .ldr-canvas-scan::after {
          content:''; position:absolute; top:0; left:0;
          width:40%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(0,210,255,.55),transparent);
          animation: lScan 2.8s ease-in-out infinite;
        }

        /* ── Logo ── */
        .ldr-logo-wrap {
          text-align: center;
          animation: lFadeUp .6s .12s ease forwards; opacity: 0;
        }
        .ldr-logo-name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(18px, 5vw, 26px);
          font-weight: 900; letter-spacing: .1em;
          color: #fff;
          text-shadow: 0 0 30px rgba(0,210,255,.5);
          line-height: 1;
        }
        .ldr-logo-dot {
          display: inline-block; width: clamp(6px,1.5vw,8px); height: clamp(6px,1.5vw,8px);
          border-radius: 50%; background: #00d2ff;
          margin-left: 2px; vertical-align: middle;
          box-shadow: 0 0 10px #00d2ff;
          animation: lBlink 1.6s ease-in-out infinite;
        }
        .ldr-logo-sub {
          font-size: clamp(8px,2vw,10px); letter-spacing: .22em;
          text-transform: uppercase; color: rgba(0,210,255,.28);
          margin-top: 5px;
        }

        /* ── Progress ── */
        .ldr-progress {
          width: 100%;
          animation: lFadeUp .6s .22s ease forwards; opacity: 0;
        }
        .ldr-prog-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 8px;
        }
        .ldr-prog-label {
          font-size: clamp(8px,2vw,9px); letter-spacing: .18em;
          text-transform: uppercase; color: rgba(0,210,255,.3);
        }
        .ldr-prog-row {
          display: flex; align-items: center; gap: 8px;
        }
        .ldr-prog-pct {
          font-family: 'Orbitron', monospace;
          font-size: clamp(11px,3vw,14px); font-weight: 700;
          color: #00d2ff;
          text-shadow: 0 0 12px rgba(0,210,255,.6);
          min-width: 3ch; text-align: right;
        }
        .ldr-prog-status {
          display: flex; align-items: center; gap: 4px;
          font-size: clamp(7px,1.8vw,9px); letter-spacing: .12em;
          color: rgba(0,255,224,.45);
        }
        .ldr-status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #00ffe0; box-shadow: 0 0 5px #00ffe0;
          animation: lBlink 1.3s ease-in-out infinite;
        }

        .ldr-bar-outer {
          width: 100%; height: 4px;
          background: rgba(0,210,255,.07);
          border-radius: 2px; overflow: hidden;
          position: relative;
          box-shadow: 0 0 0 1px rgba(0,210,255,.06);
        }
        .ldr-bar-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, rgba(0,150,220,.5), #00d2ff, #00ffe0, #00d2ff);
          background-size: 200% 100%;
          animation: lShimmer 1.6s linear infinite, lPulse 3s ease-in-out infinite;
          transition: width .1s ease;
          position: relative;
        }
        .ldr-bar-tip {
          position: absolute; top: 50%; right: 0;
          transform: translate(50%, -50%);
          width: clamp(7px,2vw,10px); height: clamp(7px,2vw,10px);
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 10px #00d2ff, 0 0 20px rgba(0,210,255,.7);
        }

        /* segment marks */
        .ldr-bar-marks {
          display: flex; justify-content: space-between;
          margin-top: 5px; padding: 0 1px;
        }
        .ldr-bar-mark {
          width: 1px; height: 4px;
          background: rgba(0,210,255,.15);
        }
        .ldr-bar-mark.lit { background: rgba(0,210,255,.5); }

        /* ── Terminal ── */
        .ldr-terminal {
          width: 100%;
          border: 1px solid rgba(0,210,255,.1);
          border-radius: 5px;
          background: rgba(0,10,22,.7);
          backdrop-filter: blur(8px);
          overflow: hidden;
          animation: lFadeUp .6s .32s ease forwards; opacity: 0;
        }
        .ldr-term-head {
          display: flex; align-items: center; gap: 6px;
          padding: clamp(6px,1.5vw,9px) clamp(10px,2.5vw,14px);
          border-bottom: 1px solid rgba(0,210,255,.08);
          background: rgba(0,210,255,.03);
          position: relative; overflow: hidden;
        }
        .ldr-term-head::after {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(0,210,255,.4),transparent);
          animation: lScan 4s ease-in-out infinite;
        }
        .ldr-term-dot { width:5px; height:5px; border-radius:50%; }
        .ldr-term-dot.r { background:#ff5f56; }
        .ldr-term-dot.y { background:#ffbd2e; }
        .ldr-term-dot.g { background:#27c93f; }
        .ldr-term-title {
          margin-left: auto;
          font-size: clamp(8px,2vw,9px); letter-spacing:.14em;
          color: rgba(0,210,255,.25); text-transform: uppercase;
        }

        .ldr-term-body {
          padding: clamp(8px,2vw,12px) clamp(10px,2.5vw,14px);
          min-height: clamp(60px,12vw,80px);
          display: flex; flex-direction: column; gap: 3px;
        }
        .ldr-log-done {
          font-size: clamp(9px,2.2vw,10px); letter-spacing:.05em;
          color: rgba(0,210,255,.22); line-height: 1.6;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .ldr-log-done::before { content:'✓  '; color: rgba(0,255,224,.3); }
        .ldr-log-active {
          font-size: clamp(9px,2.2vw,10px); letter-spacing:.05em;
          color: rgba(0,210,255,.75); line-height: 1.6;
          min-height: 18px;
        }
        .ldr-log-active::before { content:'›  '; color:#00d2ff; }
        .ldr-cursor {
          display:inline-block; width:clamp(5px,1.5vw,7px); height:clamp(10px,2.5vw,13px);
          background:#00d2ff; margin-left:1px; vertical-align:middle;
          animation: lBlink .75s step-end infinite;
        }

        /* ── Bottom meta ── */
        .ldr-meta {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%;
          animation: lFadeUp .6s .4s ease forwards; opacity: 0;
        }
        .ldr-meta-item {
          font-size: clamp(7px,1.8vw,9px); letter-spacing:.12em;
          text-transform: uppercase; color: rgba(0,210,255,.18);
        }
        .ldr-meta-item span { color: rgba(0,210,255,.38); }
      `}</style>

      <div className={`ldr${exiting ? " out" : ""}`}>
        <div className="ldr-inner">

          {/* ── Visual ── */}
          <div className="ldr-visual">
            <canvas className="ldr-ring-canvas" ref={canvasRingRef} />
            <div className="ldr-corner tl" /><div className="ldr-corner tr" />
            <div className="ldr-corner bl" /><div className="ldr-corner br" />
            <div className="ldr-canvas-scan" />
            <LoaderCanvas />
          </div>

          {/* ── Logo ── */}
          <div className="ldr-logo-wrap">
            <div className="ldr-logo-name">
              VAIBHAV<span className="ldr-logo-dot" />
            </div>
            <div className="ldr-logo-sub">Neural Portfolio · v2.0</div>
          </div>

          {/* ── Progress ── */}
          <div className="ldr-progress">
            <div className="ldr-prog-top">
              <span className="ldr-prog-label">SYSTEM_BOOT</span>
              <div className="ldr-prog-row">
                <div className="ldr-prog-status">
                  <span className="ldr-status-dot" />
                  {pct < 100 ? "LOADING" : "READY"}
                </div>
                <span className="ldr-prog-pct">{pct}%</span>
              </div>
            </div>

            <div className="ldr-bar-outer">
              <div className="ldr-bar-fill" style={{ width: `${pct}%` }}>
                <div className="ldr-bar-tip" />
              </div>
            </div>

            {/* 10 segment marks */}
            <div className="ldr-bar-marks">
              {Array.from({length:11},(_,i)=>(
                <div key={i} className={`ldr-bar-mark${pct >= i*10 ? " lit":""}`} />
              ))}
            </div>
          </div>

          {/* ── Terminal ── */}
          <div className="ldr-terminal">
            <div className="ldr-term-head">
              <span className="ldr-term-dot r"/><span className="ldr-term-dot y"/><span className="ldr-term-dot g"/>
              <span className="ldr-term-title">stdout · boot.log</span>
            </div>
            <div className="ldr-term-body">
              {history.slice(-2).map((l,i)=>(
                <div key={i} className="ldr-log-done">{l}</div>
              ))}
              <div className="ldr-log-active">
                {typed}<span className="ldr-cursor"/>
              </div>
            </div>
          </div>

          {/* ── Meta ── */}
          <div className="ldr-meta">
            <span className="ldr-meta-item">BUILD_<span>{new Date().getFullYear()}</span></span>
            <span className="ldr-meta-item">MCA_AI&amp;ML</span>
            <span className="ldr-meta-item">RAJASTHAN_<span>IN</span></span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Loader;