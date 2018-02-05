import React, { Component } from "react";

import "./AccountHome.css";

class AccountHome extends Component {
  render() {
    return (
      <div className="accountHomeContainer">
        <img
          className="ActHompageImage"
          src="https://images.unsplash.com/photo-1503697144782-03fda6d4b941?ixlib=rb-0.3.5&s=390bb2d0794b63ae77afaf9b7fdb47e0&auto=format&fit=crop&w=634&q=80"
          alt={"Account Home Page"}
        />
      </div>
    );
  }
}

export default AccountHome;
