import { Link, Route, Routes } from "react-router-dom";

import Home from "../../views/Home";
import About from "../../views/about/About";
import Skills from "../../views/skills/Skills";
import RecentDesigns from "../../views/recentdesigns/RecentDesings";
import Contact from "../../views/contact/Contact";

import "./Topbar.scss";

function Topbar() {
  return (
    <>
      <header className="topbar__nav">
        <Link to="/Home">Home</Link>
        <Link to="/About">about</Link>
        <Link to="/Skills">skills</Link>
        <Link to="/RecentDesigns">recent designs</Link>
        <Link to="/Contact">contact</Link>
      </header>
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/RecentDesigns" element={<RecentDesigns />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default Topbar;
