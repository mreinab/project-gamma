import React, { useEffect, useState } from "react";
import "../IconSideMoon/IconSideMoon.scss";

const IconSideMoon = () => {
  return (
    <div className="iconSide">
      <video autoPlay loop muted className="iconSideMoon">
        <source src="./cloud.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default IconSideMoon;
