import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout  from "./components/Layout";
import Home    from "./pages/Home";
import Projects from "./pages/Projects";
import Skills  from "./pages/Skills";
import About   from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
    <Routes>
      {/* Layout wraps every page — neural canvas runs once, persists on nav */}
      <Route element={<Layout />}>
        <Route path="/"         element={<Home />}     />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills"   element={<Skills />}   />
        <Route path="/about"    element={<About />}    />
        <Route path="/contact"  element={<Contact />}  />
      </Route>
    </Routes>
);

export default App;