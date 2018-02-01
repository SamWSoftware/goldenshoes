import React, { Component } from "react";
import { connect } from "react-redux";

import "./Account.css";
import { fetchOrders } from "../../../actions/index";

import AccountHome from "../../ui/AccountHome/AccountHome";
import AccountNav from "../../ui/AccountNav/AccountNav";
import Orders from "../../ui/Orders/Orders";
import Details from "../../ui/UserDetails/UserDetails";
import Addresses from "../../ui/Addresses/Addresses";

class Account extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  displayInfo() {
    switch (this.props.match.params.info) {
      case "orders":
        return <Orders />;
      case "details":
        return <Details user={this.props.auth} />;
      case "addresses":
        return <Addresses auth={this.props.auth} />;
      default:
        return <AccountHome />;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="flex">
            <AccountNav />
            <div className="w75pc whiteBox">{this.displayInfo()}</div>
          </div>
        </div>
        <div className="lighten-2 grey fullPage" />
      </div>
    );
  }
}

function mapStateToProps({ auth, orders }) {
  return {
    auth,
    orders
  };
}

export default connect(mapStateToProps, { fetchOrders })(Account);
