import React, { useRef } from "react";
import "../BtnMoreAbout/BtnMoreAbout.scss";

function BtnMoreAbout() {
  return (
    <>
      <button className="btn__moreabout--dark">
        {" "}
        More about
        <img src="../../src/assets/arrow--right.svg"></img>{" "}
      </button>
    </>
  );
}

export default BtnMoreAbout;
