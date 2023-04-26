import Nav from "../Nav";
import "./styleguide.scss";
import Buttons from "../../components/button/Buttons";

export default function Styleguide() {
  return (
    <>
      <div className="section">
        <h1>soy un h1</h1>
        <h2>soy un h2</h2>
        <h3>soy un h3</h3>
        <h4>soy un h4</h4>
        <h5>soy un h5</h5>
        <h6>soy un h6</h6>
      </div>
      <Nav />
      <Buttons />
    </>
  );
}
