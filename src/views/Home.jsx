import React, { useRef } from "react";
import "../views/Home.scss";
import Topbar from "../components/topbar/Topbar";
import Eclipse from "../components/Eclipse/Eclipse";

export default function Home() {
  return (
    <body>
      <span>
        <video className="main__video" muted autoPlay loop>
          <source src="./src/assets/06_1596083776.mp4" type="video/mp4" />
        </video>
      </span>

      <Eclipse />

      {/* <section className="section__container">
        <div className="section__title">_about me_</div>
      </section> */}
    </body>
  );
}
