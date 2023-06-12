import React from "react";
import "./backgroundvideo.scss";

const BackgroundVideo = () => {
  return (
    <div className="main__video--container">
      <video autoPlay loop muted>
        <source src="../../public/06_1596083776.mp4" type="video/mp4" />
      </video>
      <div className="bg__video--overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
