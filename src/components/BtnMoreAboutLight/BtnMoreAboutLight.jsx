import React, { useRef } from "react";
import "../BtnMoreAboutLight/BtnMoreAboutLight.scss";

function BtnMoreAboutLight() {
  return (
    <>
      <div className="btn--centered">
        <a href="/Skills" className="btn__moreabout--light">
          {" "}
          more about
          <img src="./arrow--right-dark.svg"></img>{" "}
        </a>
      </div>
    </>
  );
}

export default BtnMoreAboutLight;
