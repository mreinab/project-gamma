import React, { useRef } from "react";
import "./Eclipse.scss";

function Eclipse() {
  return (
    <div className="main--circle">
      <div className="bg__img--container--lines--left">
        <img src="./main-lines.svg" className="bg__img--lines" />
      </div>

      <img src="./main-eclipse2.svg" alt="Eclipse" className="img--eclipse" />
      <div className="cardContainer">
        <video autoPlay loop muted className="card3d">
          <source src="./card3D.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="bg__img--container--lines--right">
        <img src="./main-lines.svg" className="bg__img--lines" />
      </div>
    </div>
  );
}

export default Eclipse;
