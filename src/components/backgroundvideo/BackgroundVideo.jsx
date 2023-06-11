import React from "react";
import "./backgroundvideo.scss";

const BackgroundVideo = () => {
  return (
    <div className="main__video--container">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src="../../src/assets/06_1596083776.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
