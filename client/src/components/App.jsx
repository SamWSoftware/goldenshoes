import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./ui/Header/Header";
import Landing from "./pages/Landing/Landing";
import Catalogue from "./pages/Catalogue/Catalogue";
import Product from "./pages/Product/Product";
import Account from "./pages/Account/Account";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/products/:gender" component={Catalogue} />
            <Route exact path="/products" component={Catalogue} />
            <Route exact path="/product/:name" component={Product} />
            <Route path="/my-account/:info" component={Account} />
            <Route exact path="/my-account" component={Account} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
