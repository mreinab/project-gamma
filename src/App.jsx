import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import Contact from "./views/Contact";

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
