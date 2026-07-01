import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: "◎",
    label: "Email",
    value: import.meta.env.VITE_EMAIL || "contact@example.com",
    sub: "Response within 24h",
    href: `mailto:${import.meta.env.VITE_EMAIL || "contact@example.com"}`,
    color: "#00d2ff",
    code: "01",
  },
  {
    icon: "◈",
    label: "Location",
    value: "Rajasthan, India",
    sub: "IST (UTC+5:30)",
    href: null,
    color: "#00ffe0",
    code: "02",
  },
  {
    icon: "⬡",
    label: "Availability",
    value: "Open to Work",
    sub: "Internships · Freelance · Full-time",
    href: null,
    color: "#ffd43b",
    code: "03",
    highlight: true,
  },
];

const socials = [
  { icon: <FaGithub />,   href: "https://github.com/vaibhavmishram3",           label: "GitHub"   },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vaibhavmishram3/", label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: `https://wa.me/${(import.meta.env.VITE_WHATSAPP || "+918302979123").replace(/\D/g, "")}`,                  label: "WhatsApp" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mnqekeqg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

        .ct-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          padding-top: 80px;
          position: relative;
          overflow-x: hidden;
        }
        .ct-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        @keyframes ctFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ctBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes ctScan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(500%); }
        }
        @keyframes ctGlow {
          0%,100% { box-shadow: 0 0 12px rgba(0,210,255,0.2); }
          50%      { box-shadow: 0 0 28px rgba(0,210,255,0.5), 0 0 60px rgba(0,210,255,0.1); }
        }
        @keyframes ctSpin {
          to { transform: rotate(360deg); }
        }

        .ct-fu { animation: ctFadeUp 0.7s ease forwards; opacity: 0; }
        .ct-d1 { animation-delay: 0.1s; }
        .ct-d2 { animation-delay: 0.22s; }
        .ct-d3 { animation-delay: 0.34s; }
        .ct-d4 { animation-delay: 0.46s; }
        .ct-d5 { animation-delay: 0.58s; }

        /* ── Header ── */
        .ct-header {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 48px 0;
          text-align: center;
        }
        @media (max-width:600px) { .ct-header { padding: 56px 24px 0; } }

        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(0,210,255,0.4);
          margin-bottom: 20px;
        }
        .ct-eyebrow::before { content: '//'; color: rgba(0,210,255,0.2); }

        .ct-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(28px, 5vw, 62px);
          font-weight: 900; letter-spacing: 0.02em;
          color: #fff;
          text-shadow: 0 0 40px rgba(0,210,255,0.35);
          margin-bottom: 16px;
        }
        .ct-title .cx { color: var(--cyan); }

        .ct-subtitle {
          font-size: 12px; line-height: 1.9;
          color: var(--muted); max-width: 480px;
          margin: 0 auto;
        }

        .ct-scan-line {
          position: relative; height: 1px;
          margin: 40px auto 0; max-width: 400px;
          background: rgba(0,210,255,0.08); overflow: hidden;
        }
        .ct-scan-line::after {
          content: '';
          position: absolute; top:0; left:0;
          width: 35%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: ctScan 3s ease-in-out infinite;
        }

        /* ── Main grid ── */
        .ct-main {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 64px 48px 100px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width:900px) {
          .ct-main { grid-template-columns: 1fr; padding: 48px 24px 80px; }
        }

        /* ── Left col ── */
        .ct-left { display: flex; flex-direction: column; gap: 12px; }

        /* Info cards */
        .ct-info-card {
          padding: 22px 24px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: rgba(0,18,32,0.6);
          backdrop-filter: blur(8px);
          position: relative; overflow: hidden;
          transition: all 0.28s ease;
          text-decoration: none;
          display: block;
        }
        .ct-info-card::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.4), transparent);
          opacity: 0; transition: opacity 0.28s;
        }
        .ct-info-card:hover::before { opacity: 1; }
        .ct-info-card:hover {
          border-color: rgba(0,210,255,0.3);
          background: rgba(0,24,42,0.85);
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .ct-info-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 8px;
        }
        .ct-info-icon-label {
          display: flex; align-items: center; gap: 8px;
        }
        .ct-info-icon {
          font-size: 16px;
          filter: drop-shadow(0 0 5px rgba(0,210,255,0.5));
        }
        .ct-info-label {
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; font-weight: 500;
        }
        .ct-info-code {
          font-size: 9px; color: rgba(0,210,255,0.2);
          letter-spacing: 0.1em;
        }
        .ct-info-value {
          font-family: 'Orbitron', monospace;
          font-size: 13px; font-weight: 700;
          color: #fff; margin-bottom: 3px;
          letter-spacing: 0.02em;
        }
        .ct-info-sub {
          font-size: 10px; letter-spacing: 0.06em;
          color: var(--muted);
        }
        .ct-info-sub.hl {
          color: var(--teal);
          animation: ctBlink 2.5s ease-in-out infinite;
        }

        /* Social strip */
        .ct-social-strip {
          display: flex; gap: 8px; margin-top: 4px;
        }
        .ct-social-btn {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px;
          border: 1px solid rgba(0,210,255,0.12);
          border-radius: 4px;
          background: rgba(0,210,255,0.03);
          color: var(--muted);
          text-decoration: none;
          font-size: 11px; letter-spacing: 0.06em;
          transition: all 0.22s;
        }
        .ct-social-btn:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: rgba(0,210,255,0.08);
          box-shadow: 0 0 12px rgba(0,210,255,0.15);
          transform: translateY(-2px);
        }
        .ct-social-btn svg { font-size: 14px; }

        /* ── Form col ── */
        .ct-form-wrap {
          padding: 36px 32px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: rgba(0,18,32,0.65);
          backdrop-filter: blur(10px);
          position: relative; overflow: hidden;
        }
        /* top scan */
        .ct-form-wrap::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.5), transparent);
          animation: ctScan 5s ease-in-out infinite;
        }

        .ct-form-head {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 28px;
        }
        .ct-form-title {
          font-family: 'Orbitron', monospace;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.1em; color: #fff;
          text-shadow: 0 0 12px rgba(0,210,255,0.3);
        }
        .ct-form-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 6px var(--teal);
          animation: ctBlink 1.8s ease-in-out infinite;
          margin-left: auto;
        }

        /* field */
        .ct-field { margin-bottom: 20px; }
        .ct-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(0,210,255,0.35);
          margin-bottom: 8px;
        }
        .ct-label::before { content: '_'; color: rgba(0,210,255,0.2); }

        .ct-input,
        .ct-textarea {
          width: 100%;
          background: rgba(0,10,20,0.8);
          border: 1px solid rgba(0,210,255,0.12);
          border-radius: 4px;
          padding: 12px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.04em;
          color: var(--text);
          outline: none;
          transition: all 0.25s;
          resize: none;
          display: block;
        }
        .ct-input::placeholder,
        .ct-textarea::placeholder {
          color: rgba(0,210,255,0.15);
          font-size: 11px;
        }
        .ct-input:focus,
        .ct-textarea:focus {
          border-color: rgba(0,210,255,0.45);
          background: rgba(0,15,28,0.9);
          box-shadow: 0 0 0 2px rgba(0,210,255,0.08),
                      inset 0 0 16px rgba(0,210,255,0.03);
        }

        /* submit */
        .ct-submit {
          width: 100%;
          padding: 14px;
          font-family: 'Orbitron', monospace;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid var(--cyan);
          border-radius: 4px;
          background: rgba(0,210,255,0.08);
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.28s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          animation: ctGlow 3s ease-in-out infinite;
          margin-top: 8px;
        }
        .ct-submit:hover:not(:disabled) {
          background: rgba(0,210,255,0.18);
          box-shadow: 0 0 32px rgba(0,210,255,0.4);
          transform: translateY(-2px);
        }
        .ct-submit:disabled {
          opacity: 0.6; cursor: not-allowed; animation: none;
        }
        .ct-spinner {
          width: 14px; height: 14px;
          border: 1.5px solid rgba(0,210,255,0.3);
          border-top-color: var(--cyan);
          border-radius: 50%;
          animation: ctSpin 0.7s linear infinite;
        }

        /* success / error */
        .ct-feedback {
          margin-top: 16px; padding: 12px 16px;
          border-radius: 4px;
          font-size: 11px; letter-spacing: 0.1em;
          display: flex; align-items: center; gap: 8px;
        }
        .ct-feedback.success {
          border: 1px solid rgba(0,255,224,0.25);
          background: rgba(0,255,224,0.05);
          color: var(--teal);
        }
        .ct-feedback.error {
          border: 1px solid rgba(255,100,100,0.25);
          background: rgba(255,100,100,0.05);
          color: rgba(255,160,160,0.8);
        }
      `}</style>

      <div className="ct-root">

        {/* ── Header ── */}
        <section className="ct-header">
          <div className="ct-eyebrow ct-fu ct-d1">connection.init() → handshake.start()</div>
          <h1 className="ct-title ct-fu ct-d2">
            GET IN <span className="cx">TOUCH</span>
          </h1>
          <p className="ct-subtitle ct-fu ct-d3">
            Have a project in mind or want to collaborate?
            Transmit a message and I'll respond within 24h.
          </p>
          <div className="ct-scan-line" />
        </section>

        {/* ── Main ── */}
        <section className="ct-main">

          {/* ── Left: info + socials ── */}
          <div className="ct-left ct-fu ct-d3">
            {contactInfo.map((info) => {
              const Wrapper = info.href ? "a" : "div";
              return (
                <Wrapper
                  key={info.code}
                  className="ct-info-card"
                  {...(info.href ? { href: info.href } : {})}
                >
                  <div className="ct-info-top">
                    <div className="ct-info-icon-label">
                      <span
                        className="ct-info-icon"
                        style={{ color: info.color, filter: `drop-shadow(0 0 5px ${info.color}88)` }}
                      >
                        {info.icon}
                      </span>
                      <span className="ct-info-label" style={{ color: info.color }}>
                        {info.label}
                      </span>
                    </div>
                    <span className="ct-info-code">_{info.code}</span>
                  </div>
                  <div className="ct-info-value">{info.value}</div>
                  <div className={`ct-info-sub${info.highlight ? " hl" : ""}`}>
                    {info.sub}
                  </div>
                </Wrapper>
              );
            })}

            {/* Social strip */}
            <div className="ct-social-strip">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-btn"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="ct-form-wrap ct-fu ct-d4">
            <div className="ct-form-head">
              <span className="ct-form-title">// TRANSMIT_MESSAGE</span>
              <span className="ct-form-status-dot" />
            </div>

            <form
              name="contactForm"
              action="https://formspree.io/f/mnqekeqg"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" />

              <div className="ct-field">
                <label className="ct-label">Sender_Name</label>
                <input
                  className="ct-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className="ct-field">
                <label className="ct-label">Sender_Email</label>
                <input
                  className="ct-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className="ct-field">
                <label className="ct-label">Message_Payload</label>
                <textarea
                  className="ct-textarea"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project or inquiry..."
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                className="ct-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <><span className="ct-spinner" /> TRANSMITTING...</>
                ) : status === "sent" ? (
                  "✓ MESSAGE_SENT"
                ) : (
                  "SEND_MESSAGE( ) →"
                )}
              </button>

              {status === "sent" && (
                <div className="ct-feedback success">
                  <span>✓</span>
                  TRANSMISSION_COMPLETE · I'll respond within 24h.
                </div>
              )}
              {status === "error" && (
                <div className="ct-feedback error">
                  <span>✗</span>
                  TRANSMISSION_FAILED · Please try again or email directly.
                </div>
              )}
            </form>
          </div>

        </section>
      </div>
    </>
  );
};

export default Contact;