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

      <div className="section">
        <h3>Variable Colors</h3>
        <div className="section__colors">
          <div className="color__circle color__circle--mo-50">
            <p>
              <strong>50</strong>
            </p>
            <p>#FDEDE7</p>
          </div>
          <div className="color__circle color__circle--mo-100">
            <p>
              <strong>100</strong>
            </p>
            <p>#FCDCCF</p>
          </div>
          <div className="color__circle color__circle--mo-200">
            <p>
              <strong>200</strong>
            </p>
            <p>#F9B99F</p>
          </div>
          <div className="color__circle color__circle--mo-200">
            <p>
              <strong>300</strong>
            </p>
            <p>#F7A787</p>
          </div>
          <div className="color__circle color__circle--mo-400">
            <p>
              <strong>400</strong>
            </p>
            <p>#F7A787</p>
          </div>
          <div className="color__circle color__circle--mo-500">
            <p>
              <strong>500</strong>
            </p>
            <p>#F7A787</p>
          </div>
          <div className="color__circle color__circle--mo-600">
            <p>
              <strong>600</strong>
            </p>
            <p>#F7A787</p>
          </div>
          <div className="color__circle color__circle--mo-700">
            <p>
              <strong>700</strong>
            </p>
            <p>#F7A787</p>
          </div>
          <div className="color__circle color__circle--mo-800">
            <p>
              <strong>800</strong>
            </p>
            <p>#F7A787</p>
          </div>
          <div className="color__circle color__circle--mo-900">
            <p>
              <strong>900</strong>
            </p>
            <p>#F7A787</p>
          </div>
        </div>
      </div>
      <Nav />
      <Buttons />
    </>
  );
}
