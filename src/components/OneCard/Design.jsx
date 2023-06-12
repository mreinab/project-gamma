import React, { useRef } from "react";
import "./Design.scss";

function Design() {
  return (
    <>
      <div className="maincontainer">
        <div className="thecard">
          <img src="./card-design.svg" className="thefront"></img>
          <img src="./card-frontend.svg" className="theback"></img>
        </div>
      </div>
    </>
  );
}

export default Design;
