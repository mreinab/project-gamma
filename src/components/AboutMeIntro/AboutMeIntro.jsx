import React, { useRef } from "react";
import "../AboutMeIntro/AboutMeIntro.scss";

function AboutMeIntro() {
  return (
    <div className="aboutme__container">
      <div className="aboutme__container--text">
        <img className="img__star img__star--left" src="./star-1.svg"></img>
        <p className="h3__section">
          Hey!! My name is <b>Miriam</b>. I am a{" "}
          <b>
            <span className="bg__text--neon">multidisciplinar </span> designer.
            I create unconventional yet functional & visualy pleasing interfaces
          </b>{" "}
          for mobile and web.
        </p>
        <img className="img__star img__star--right" src="./star-2.svg"></img>
      </div>
    </div>
  );
}

export default AboutMeIntro;
