import React, { useEffect, useState } from "react";
import "../IconSideMoon/IconSideMoon.scss";

const IconSideMoon = () => {
  return (
    <div className="iconSide">
      <video autoPlay loop muted className="iconSideMoon">
        <source src="./moon.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IconSideMoon;
