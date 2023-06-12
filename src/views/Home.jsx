import React, { useRef } from "react";
import "../views/Home.scss";
import Topbar from "../components/topbar/Topbar";
import Eclipse from "../components/Eclipse/Eclipse";
import BackgroundVideo from "../components/backgroundvideo/BackgroundVideo";
import AboutMeIntro from "../components/AboutMeIntro/AboutMeIntro";
import BtnMoreAbout from "../components/BtnMoreAbout/BtnMoreAbout";
import Availability from "../components/Availability/Availability";
import SkillsRoundText from "../components/SkillsRoundText/SkillsRoundText";
import IconSide from "../components/IconSide/IconSide";
import SectionLines from "../components/SectionLines/SectionLines";
import FrontEnd from "../components/OneCard/FrontEnd";
import Design from "../components/OneCard/Design";
import SoftSkills from "../components/OneCard/SoftSkills";
import BtnMoreAboutLight from "../components/BtnMoreAboutLight/BtnMoreAboutLight";

export default function Home() {
  return (
    <body>
      <BackgroundVideo />

      <Eclipse />

      <div className="animation__container--star">
        <video autoPlay loop muted className="animation--star">
          <source src="./star1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text__main__container--vertical">
        <div className="h3 text--vertical"> 2023_ </div>
        <div className="h3 text"> (Based in Málaga and Valencia, Spain) </div>
      </div>
      <section className="section__container--AM">
        <div className="section__title" id="rem">
          _about me_
        </div>
      </section>

      <AboutMeIntro />
      <BtnMoreAbout />
      <Availability />

      <div className="grid--30">
        <SkillsRoundText />
      </div>

      <div className="grid--100">
        <IconSide />
      </div>

      <div className="section__division">
        <SectionLines />
      </div>

      <section className="section__container--AM">
        <div className="section__title">_my skills_</div>
      </section>
      <div className="cards__container">
        <div className="cards">
          <div className="stars__container">
            <img
              src="./star-6.svg"
              alt="star svg"
              className="img__star--left"
            />
            <img
              src="./star-3.svg"
              alt="star svg"
              className="img__star--center"
            />
            <img
              src="./star-7.svg"
              alt="star svg"
              className="img__star--right"
            />
          </div>

          <div className="card__titles">
            <p className="titles--cards">_frontend_</p>
            <FrontEnd />
          </div>
          <div className="card__titles">
            <p className="titles--cards">_design_</p>
            <Design />
          </div>
          <div className="card__titles">
            <p className="titles--cards">_soft skills_</p>
            <SoftSkills />
          </div>
        </div>
        <BtnMoreAboutLight className="color--lighter" />
      </div>
    </body>
  );
}
