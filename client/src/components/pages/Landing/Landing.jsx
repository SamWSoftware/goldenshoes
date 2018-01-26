import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="center background-img">
      <div className="center-box">
        <div style={{ backgroundColor: "antiquewhite" }}>
          <h1>Where will your shoes take you?</h1>
        </div>
        <div className="flexCenter">
          <Link className="white-box" to="./women">
            <h4>
              <strong>SHOP WOMEN</strong>
            </h4>
          </Link>
          <Link className="white-box" to="./men">
            <h4>
              <strong>SHOP MEN</strong>
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
