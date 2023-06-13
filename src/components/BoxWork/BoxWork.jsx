import React from "react";
import "./BoxWork.scss";
const BoxWork = ({ data }) => {
  const {
    description: description1,
    title: title1,
    date: date1,
    url: url1,
  } = data[0];
  const {
    description: description2,
    title: title2,
    date: date2,
    url: url2,
  } = data[1];
  const {
    description: description3,
    title: title3,
    date: date3,
    url: url3,
  } = data[2];
  const {
    description: description4,
    title: title4,
    date: date4,
    url: url4,
  } = data[3];

  return (
    <>
      <div className="work__container--main">
        <div className="work__container--left">
          <div className="work__container work__container--l1">
            <div className="work--left">
              <p className="work--type">{description1}</p>
              <h3 className="work--title">{title1}</h3>
            </div>
            <div className="work--right">
              <p className="work--date">{date1}</p>
              <a href={url1} className="work--link">
                {url1}{" "}
                <img
                  className="arrow-outside"
                  src="./arrow-outside.svg"
                  alt="Arrow Outside"
                />
              </a>
            </div>
            <video autoPlay loop muted className="hidden">
              <source src="./slikgazzete.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="work__container work__container--r1">
            <div className="work--left">
              <p className="work--type">{description2}</p>
              <h3 className="work--title">{title2}</h3>
            </div>
            <div className="work--right">
              <p className="work--date">{date2}</p>
              <a href={url2} className="work--link">
                {url2}{" "}
                <img
                  className="arrow-outside"
                  src="./arrow-outside.svg"
                  alt="Arrow Outside"
                />
              </a>
            </div>
            <video autoPlay loop muted className="hidden">
              <source src="./thebwroom.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="work__container--right">
          <div className="work__container work__container--l2">
            <div className="work--left">
              <p className="work--type">{description3}</p>
              <h3 className="work--title">{title3}</h3>
            </div>
            <div className="work--right">
              <p className="work--date">{date3}</p>
              <a href={url3} className="work--link">
                {url3}{" "}
                <img
                  className="arrow-outside"
                  src="./arrow-outside.svg"
                  alt="Arrow Outside"
                />
              </a>
            </div>
            <video autoPlay loop muted className="hidden">
              <source src="./jygclub.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="work__container work__container--r2">
            <div className="work--left">
              <p className="work--type">{description4}</p>
              <h3 className="work--title">{title4}</h3>
            </div>
            <div className="work--right">
              <p className="work--date">{date4}</p>
              <a href={url4} className="work--link">
                {url4}{" "}
                <img
                  className="arrow-outside"
                  src="./arrow-outside.svg"
                  alt="Arrow Outside"
                />
              </a>
            </div>
            <video autoPlay loop muted className="hidden">
              <source src="./morangestudio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxWork;
