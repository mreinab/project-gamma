import React, { useRef } from "react";
import "./FrontEnd.scss";

function FrontEnd() {
  return (
    <>
      <div className="maincontainer">
        <div className="thecard">
          <img src="./card-frontend.svg" className="thefront"></img>
          <img src="./card-frontend-back.svg" className="theback"></img>
        </div>
      </div>
    </>
  );
}

export default FrontEnd;
