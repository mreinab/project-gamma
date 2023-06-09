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
        <nav className="nav__container">
          <div className="nav__container--logo">
            <a href="/Home">
              <img
                src="./src/assets/logo.svg"
                alt="Site logo, Miriam Reina digital portfolio"
                className="main__logo"
              />
            </a>
          </div>

          <div className="nav__container--topbar">
            <Link to="/Home">home</Link>
            <Link to="/About">about</Link>
            <Link to="/Skills">skills</Link>
            <Link to="/RecentDesigns">recent designs</Link>
            <Link to="/Contact">contact</Link>
          </div>
        </nav>
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
