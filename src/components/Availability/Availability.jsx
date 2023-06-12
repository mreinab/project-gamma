import React, { useRef } from "react";
import "../Availability/Availability.scss";

function Availability() {
  return (
    <div className="availability__container">
      <div className="availability__container-above">
        <img
          className="img__star img__star--left"
          src="../../src/assets/star-1.svg"
        ></img>
        <p className="availability__text h3">
          currently <b>available </b> <br></br>for freelance worldwide.
        </p>
        <img
          className="img__star img__star--left"
          src="../../src/assets/star-1.svg"
        ></img>
      </div>

      <img
        src="../../src/assets/rounded-freelance.svg"
        className="img--rounded"
      ></img>
    </div>
  );
}

export default Availability;
