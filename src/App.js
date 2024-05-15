import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/newproject" element={<NewProject />} />
      </Routes>
    </Router>
  );
}

export default App;
