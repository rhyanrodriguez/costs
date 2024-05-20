import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Company from "./components/pages/Company";
import Tomados from "./components/pages/Tomados";
import Prestados from "./components/pages/Prestados";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/tomados" element={<Tomados />} />
          <Route exact path="/prestados" element={<Prestados />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
