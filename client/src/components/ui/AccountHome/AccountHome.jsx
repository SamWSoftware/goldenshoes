import React, { Component } from "react";
import shoesHanging from "../../../images/shoes-depend-leash-sky-67800.jpeg";

import "./AccountHome.css";

class AccountHome extends Component {
  render() {
    return (
      <div className="accountHomeContainer">
        <img
          className="ActHompageImage"
          src={shoesHanging}
          alt={"Account Home Page"}
        />
      </div>
    );
  }
}

export default AccountHome;
