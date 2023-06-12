import React, { useRef } from "react";
import "./SoftSkills.scss";

function SoftSkills() {
  return (
    <>
      <div className="maincontainer">
        <div className="thecard">
          <img src="./card-softskills.svg" className="thefront"></img>
          <img src="./card-frontend.svg" className="theback"></img>
        </div>
      </div>
    </>
  );
}

export default SoftSkills;
