import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../../actions/index";

import FilterCriteria from "../../ui/FilterCriteria/FilterCriteria";
import ProductList from "../../ui/ProductList/ProductList";

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bob McGuiness"
    };
  }

  componentDidMount() {
    this.props.fetchProducts(this.props.match.params);
  }

  render() {
    return (
      <div className="Catalogue">
        <h3>{this.state.title}</h3>
        <FilterCriteria />
        <ProductList products={this.props.products.products} />
      </div>
    );
  }
}

function mapStateToProps({ auth, products }) {
  return {
    auth,
    products
  };
}

export default connect(mapStateToProps, { fetchProducts })(Catalogue);
