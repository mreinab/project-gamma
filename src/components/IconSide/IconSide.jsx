import React, { useEffect, useState } from "react";
import "../IconSide/IconSide.scss";

const IconSide = () => {
  return (
    <div className="iconSide">
      <video autoPlay loop muted className="iconSide">
        <source src="./star1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IconSide;
