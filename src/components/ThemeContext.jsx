import { useTheme } from "./ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <style>{`
        .tt-btn {
          position: relative;
          width: 46px; height: 24px;
          border-radius: 12px;
          border: 1px solid var(--cyan-border);
          background: var(--card-bg);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          backdrop-filter: blur(8px);
          overflow: hidden;
        }
        .tt-btn:hover {
          border-color: var(--cyan);
          box-shadow: 0 0 12px var(--cyan-dim);
        }

        /* track icons */
        .tt-icons {
          position: absolute; inset: 0;
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 0 5px;
          pointer-events: none;
        }
        .tt-icon {
          font-size: 11px; line-height: 1;
          transition: opacity 0.3s ease;
        }
        .tt-icon.sun  { opacity: ${isDark ? 0.25 : 1}; }
        .tt-icon.moon { opacity: ${isDark ? 1 : 0.25}; }

        /* thumb */
        .tt-thumb {
          position: absolute;
          top: 3px;
          width: 16px; height: 16px;
          border-radius: 50%;
          transition: all 0.32s cubic-bezier(.4,0,.2,1);
          left: ${isDark ? "calc(100% - 19px)" : "3px"};
        }

        /* dark thumb */
        .tt-thumb.dark-t {
          background: #00d2ff;
          box-shadow: 0 0 8px rgba(0,210,255,0.7);
        }
        /* light thumb */
        .tt-thumb.light-t {
          background: #0077bb;
          box-shadow: 0 0 8px rgba(0,119,187,0.6);
        }
      `}</style>

      <button
        className={`tt-btn ${className}`}
        onClick={toggle}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <div className="tt-icons">
          <span className="tt-icon sun">☀</span>
          <span className="tt-icon moon">◑</span>
        </div>
        <div className={`tt-thumb ${isDark ? "dark-t" : "light-t"}`} />
      </button>
    </>
  );
};

export default ThemeToggle;