import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as $ from "jquery";

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
        return (
          <a href="/my-account">
            <i className="large material-icons">account_circle</i>
          </a>
        );
    }
  }

  renderRightMenu() {
    return [
      <li key="account">{this.loggedIn()}</li>,
      <li key="baset">
        <Link onClick={() => this.activeGender("")} to="/basket">
          <i className="large material-icons">shopping_basket</i>
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
          <span className="genderStyle">WOMEN</span>
        </Link>
      </li>,
      <li className="menTab" onClick={() => this.activeGender("mens")}>
        <Link to="" onClick={this.disableLink}>
          <span className="genderStyle">MEN</span>
        </Link>
      </li>
    ];
  }

  closeSideNav() {
    $(".sidenav-overlay").click();
  }

  render() {
    let navCont = $(".button-collapse").sideNav();

    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <ul className="hide-on-small-and-down">
              <li onClick={() => this.activeGender("")}>
                <Logo logo="GoldenShoes" to="/" />
              </li>
              {this.getLocations()}
            </ul>
            <div className="hide-on-med-and-up">
              <div data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">menu</i>
              </div>
              <div className="mobile-logo">
                <Link to="/">
                  <strong>GoldenShoes</strong>
                </Link>
              </div>
            </div>
            <ul className="side-nav" id="mobile-demo">
              <li onClick={() => this.closeSideNav(navCont)}>
                <Link to="/products/womens">WOMENS</Link>
              </li>
              <li>
                <Link to="/products/mens">MENS</Link>
              </li>
            </ul>
            <ul className="right">{this.renderRightMenu()}</ul>
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
