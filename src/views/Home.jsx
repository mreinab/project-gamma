import React, { useRef } from "react";
import "../views/Home.scss";
import Topbar from "../components/topbar/Topbar";
import Eclipse from "../components/Eclipse/Eclipse";
import BackgroundVideo from "../components/backgroundvideo/BackgroundVideo";

export default function Home() {
  return (
    <body>
      <BackgroundVideo />
      <Eclipse />
      <div> hoal q pasa</div>

      <section className="section__container">
        <div className="section__title">_about me_</div>
      </section>
    </body>
  );
}
