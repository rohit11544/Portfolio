import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Skills" exact element={<Skills />} />
          <Route path="/Projects" exact element={<Projects />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
