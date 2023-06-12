import React, { useEffect, useState } from "react";
import "../IconSideStar/IconSideStar.scss";

const IconSideStar = () => {
  return (
    <div className="iconSide">
      <video autoPlay loop muted className="iconSideStar">
        <source src="./star1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IconSideStar;
