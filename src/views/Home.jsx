import React, { useRef } from "react";
import "../views/Home.scss";
import Topbar from "../components/topbar/Topbar";
import Eclipse from "../components/Eclipse/Eclipse";
import BackgroundVideo from "../components/backgroundvideo/BackgroundVideo";
import AboutMeIntro from "../components/AboutMeIntro/AboutMeIntro";
import BtnMoreAbout from "../components/BtnMoreAbout/BtnMoreAbout";
import Availability from "../components/Availability/Availability";

export default function Home() {
  return (
    <body>
      <BackgroundVideo />

      <Eclipse />

      <div className="animation__container--star">
        <video autoPlay loop muted className="animation--star">
          <source src="../../src/assets/star1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text__main__container--vertical">
        <div className="h3 text--vertical"> 2023_ </div>
        <div className="h3 text"> (Based in Málaga and Valencia, Spain) </div>
      </div>
      <section className="section__container">
        <div className="section__title">_about me_</div>
      </section>

      <AboutMeIntro />
      <BtnMoreAbout />
      <Availability />
    </body>
  );
}
