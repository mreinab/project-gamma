import React from "react";
import "./Footer.scss";
import SkillsRoundText from "../../components/SkillsRoundText/SkillsRoundText";
import Topbar from "../topbar/Topbar";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="overlay1">
          <SkillsRoundText />{" "}
        </div>
        <div className="overlay overlay2">
          <img
            className="overlay__img"
            src="../../public/footer-svg.svg"
            alt="Imagen de superposición"
          />
        </div>
        <div className="main__video--container">
          <video autoPlay loop muted>
            <source src="./06_1596083776.mp4" type="video/mp4" />
          </video>
          <div className="bg__video--overlay"></div>
        </div>
        <div className="smaller-footer">
          <img
            className="footer-text"
            src="../../../public/footer-line.svg"
          ></img>
        </div>
      </footer>
    </>
  );
};

export default Footer;
