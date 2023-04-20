import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import "./App.css";
import "./scss/style.scss";

function App() {
  return (
    <>
      <header>
        <h1> Proyecto Gamma</h1>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contacto</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
