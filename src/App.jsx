import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MouseGlow from "./components/MouseGlow";
import FloatingIcons from "./components/FloatingIcons"

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950">
      <FloatingIcons />

      <div className="relative z-10">
        <MouseGlow />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
