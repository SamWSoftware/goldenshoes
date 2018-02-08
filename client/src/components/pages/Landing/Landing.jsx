import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import FBChatWidget from "../../ui/FBChatWidget/FBChatWidget";

const Landing = () => {
  return (
    <div className="center background-img">
      <div className="center-box">
        <div className="white-box hpTitle">
          <h1 id="hpTitle">Where will your shoes take you?</h1>
        </div>
        <div className="row">
          <div className="col l3 offset-l2 m5 offset-m1 s10 offset-s1">
            <Link to="./products/womens">
              <h4 className="white-box">
                <strong>SHOP WOMEN</strong>
              </h4>
            </Link>
          </div>
          <div className="col l3 offset-l2 m5 offset-m0.5 s10 offset-s1">
            <Link to="./products/mens">
              <h4 className="white-box">
                <strong>SHOP MEN</strong>
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <FBChatWidget pageName="Golden-Shoes-1889978104666329" />
    </div>
  );
};

export default Landing;
