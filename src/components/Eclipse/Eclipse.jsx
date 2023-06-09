import React, { useRef } from "react";
import "./Eclipse.scss";

function Eclipse() {
  const rotacionRef = useRef(0);

  const onClick = () => {
    rotacionRef.current += 90;
    document.getElementById(
      "img--eclipse"
    ).style.transform = `rotate(${rotacionRef.current}deg)`;
  };

  return (
    <div>
      <div id="img--eclipse" onClick={onClick}>
        <img
          src="./src/assets/main-eclipse.svg"
          alt="Eclipse"
          className="img--eclipse"
        />
      </div>
    </div>
  );
}

export default Eclipse;
