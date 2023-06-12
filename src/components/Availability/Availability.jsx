import React, { useRef } from "react";
import "../Availability/Availability.scss";

function Availability() {
  return (
    <a className="availability__container">
      <div className="availability__container-above">
        <img
          className="img__star img__star--left smaller"
          src="../../src/assets/star-2.svg"
        ></img>
        <p className="availability__text">
          currently <b>available </b> <br></br>for freelance worldwide.
        </p>
        <img
          className="img__star img__star--left smaller"
          src="../../src/assets/star-2.svg"
        ></img>
      </div>

      <img
        src="../../src/assets/rounded-freelance.svg"
        className="img--rounded"
      ></img>
    </a>
  );
}

export default Availability;
