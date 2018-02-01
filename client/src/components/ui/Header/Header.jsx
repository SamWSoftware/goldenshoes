import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";

import { categories } from "../../../config.js";

import SubHeader from "../SubHeader/SubHeader";
import Logo from "../Logo/Logo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: "" };
  }

  loggedIn() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Log In</a>;
      default:
        return <a href="/my-account">Account</a>;
    }
  }

  renderContent() {
    return [
      <li key="account" style={{ margin: "0 10px" }}>
        {this.loggedIn()}
      </li>,
      <li key="baset" style={{ margin: "0 10px" }}>
        <Link onClick={() => this.activeGender("")} to="/basket">
          BASKET
        </Link>
      </li>
    ];
  }

  activeGender(gender) {
    let men = document.querySelector(".menTab").classList;
    let women = document.querySelector(".womenTab").classList;
    gender = this.state.gender === gender ? "" : gender;
    this.setState({ gender });
    if (gender === "mens") {
      men.add("active");
      women.remove("active");
    } else if (gender === "womens") {
      women.add("active");
      men.remove("active");
    } else {
      men.remove("active");
      women.remove("active");
    }
  }

  disableLink(e) {
    e.preventDefault();
  }

  getLocations() {
    return [
      <li className="womenTab" onClick={() => this.activeGender("womens")}>
        <Link to="" onClick={this.disableLink}>
          WOMEN
        </Link>
      </li>,
      <li className="menTab" onClick={() => this.activeGender("mens")}>
        <Link to="" onClick={this.disableLink}>
          MEN
        </Link>
      </li>
    ];
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <ul>
              <li onClick={() => this.activeGender("")}>
                <Logo logo="GoldenShoes" to="/" />
              </li>
              {this.getLocations()}
            </ul>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
        {this.state.gender ? (
          <SubHeader gender={this.state.gender} categories={categories} />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
