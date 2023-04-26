import { Link, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/contact/Contact";
import Styleguide from "./styleguide/views-sg/Styleguide";
import "./App.css";
import "./scss/style.scss";

function App() {
  return (
    <>
      <header>
        <h1> Proyecto Gamma</h1>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contacto</Link>
        <Link to="/Styleguide">Style Guide</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Styleguide" element={<Styleguide />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
