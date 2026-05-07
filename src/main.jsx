import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Loader from "./components/Loader";
import "./index.css";

const Root = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        <HashRouter>
          <App />
        </HashRouter>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);