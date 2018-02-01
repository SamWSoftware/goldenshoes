import React from "react";
import { connect } from "react-redux";

const Orders = ({ auth }) => {
  let myAuth = ifAuth(auth);
  return (
    <div>
      <h4>My Orders</h4>
      Displaying {myAuth.orders.length} Orders
      {renderOrders(myAuth.orders)}
    </div>
  );
};

function renderOrders(orders) {
  console.log(orders);
}

function ifAuth(auth) {
  if (auth && auth.orders) {
    return auth;
  }
  return { orders: [] };
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Orders);
