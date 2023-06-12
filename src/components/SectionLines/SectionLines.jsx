import React, { useRef } from "react";
import "./SectionLines.scss";

function SectionLines() {
  return (
    <>
      <div className="section__container">
        <img src="./lines-blue.svg" className="section--lines--right"></img>
        <img src="./lines-blue.svg" className="section--lines--right"></img>
      </div>
    </>
  );
}

export default SectionLines;
