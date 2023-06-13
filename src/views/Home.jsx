import React, { useRef } from "react";
import "../views/Home.scss";
import Topbar from "../components/topbar/Topbar";
import Eclipse from "../components/Eclipse/Eclipse";
import BackgroundVideo from "../components/backgroundvideo/BackgroundVideo";
import AboutMeIntro from "../components/AboutMeIntro/AboutMeIntro";
import BtnMoreAbout from "../components/BtnMoreAbout/BtnMoreAbout";
import Availability from "../components/Availability/Availability";
import SkillsRoundText from "../components/SkillsRoundText/SkillsRoundText";
import IconSideStar from "../components/IconSideStar/IconSideStar";
import SectionLines from "../components/SectionLines/SectionLines";
import FrontEnd from "../components/OneCard/FrontEnd";
import Design from "../components/OneCard/Design";
import SoftSkills from "../components/OneCard/SoftSkills";
import BtnMoreAboutLight from "../components/BtnMoreAboutLight/BtnMoreAboutLight";
import IconSideMoon from "../components/IconSideMoon/IconSideMoon";
import BoxWork from "../components/BoxWork/BoxWork";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

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
        <IconSideStar />
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
      <div className="grid--100">
        <IconSideMoon />
      </div>
      <div className="section__division">
        <SectionLines />
      </div>
      <section className="section__container--AM">
        <div className="section__title">_recent work_</div>
      </section>
      <div className="stars__container">
        <img src="./star-3.svg" alt="star svg" className="img__star--left" />{" "}
      </div>
      <div className="padding__container">
        <BoxWork
          data={[
            {
              description: "Case Study",
              title: "visual designer & frontend developer",
              date: "2023",
              url: " slikgazette.com",
            },
            {
              description: "Case Study",
              title: "visual designer & frontend developer",
              date: "2023",
              url: "thebwroom.com",
            },
            {
              description: "Live Site",
              title: "visual designer & frontend developer",
              date: "2023",
              url: "jygclubjuvenildemontana.com",
            },
            {
              description: "Live Site",
              title: "visual designer",
              date: "2023",
              url: "morangestudio.tumblr.com",
            },
          ]}
        />
      </div>
      <div className="grid--100">
        <IconSideMoon />
      </div>
      <div className="section__division">
        <SectionLines />
      </div>
      <section className="section__container--AM">
        <div className="section__title">_contact _</div>
      </section>

      <ContactForm />

      <Footer />
    </body>
  );
}
