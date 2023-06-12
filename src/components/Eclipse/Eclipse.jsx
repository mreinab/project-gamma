import React, { useRef } from "react";
import "./Eclipse.scss";

function Eclipse() {
  return (
    <div className="main--circle">
      <div className="bg__img--container--lines--left">
        <img src="./main-lines.svg" className="bg__img--lines" />
      </div>

      <img
        src="./src/assets/main-eclipse2.svg"
        alt="Eclipse"
        className="img--eclipse"
      />

      <div className="bg__img--container--lines--right">
        <img src="./main-lines.svg" className="bg__img--lines" />
      </div>
    </div>
  );
}

export default Eclipse;
