import React, { useRef } from "react";
import "../views/Home.scss";
import Topbar from "../components/topbar/Topbar";

export default function Home() {
  return (
    <body>
      <span>
        <video className="main__video" muted autoPlay loop>
          <source src="./src/assets/06_1596083776.mp4" type="video/mp4" />
        </video>
      </span>

      <div className="section__topbar__nav">
        <img
          src="./src/assets/logo.svg"
          alt="Site logo, Miriam Reina digital portfolio"
          className="main__logo"
        />

        <div className="topbar__nav">
          <Topbar />
        </div>
      </div>

      {/* <section className="section__container">
        <div className="section__title">_about me_</div>
      </section> */}

      <div className="main--eclipse">
        <img
          src="./src/assets/main-eclipse.svg"
          alt="Eclipse"
          className="eclipse"
        />
      </div>
    </body>
  );
}
