import React, { useRef } from "react";
import "../BtnMoreAbout/BtnMoreAbout.scss";

function BtnMoreAbout() {
  return (
    <>
      <div className="btn--centered">
        <a href="/About" className="btn__moreabout--dark">
          {" "}
          more about
          <img src="./arrow--right.svg"></img>{" "}
        </a>
      </div>
    </>
  );
}

export default BtnMoreAbout;
