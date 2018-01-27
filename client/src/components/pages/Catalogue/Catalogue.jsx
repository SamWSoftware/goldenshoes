import React, { Component } from "react";
import { connect } from "react-redux";

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bob McGuiness"
    };
  }

  render() {
    return;
    <div>
      <h3>{this.state.title}</h3>
      <FilterCriteria />
      <ProductList products={this.state.products} />
    </div>;
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Catalogue);
