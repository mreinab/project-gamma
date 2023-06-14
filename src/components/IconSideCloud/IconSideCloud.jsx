import React, { useEffect, useState } from "react";
import "../IconSideCloud/IconSideCloud.scss";

const IconSideCloud = () => {
  return (
    <div className="iconSide">
      <video autoPlay loop muted className="iconSideCloud">
        <source src="./cloud.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IconSideCloud;
