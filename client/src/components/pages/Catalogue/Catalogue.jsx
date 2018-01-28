import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../../actions/index";

import FilterCriteria from "../../ui/FilterCriteria/FilterCriteria";
import ProductList from "../../ui/ProductList/ProductList";

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bob McGuiness",
      gender: "",
      category: ""
    };
  }

  componentDidMount() {
    this.props.fetchProducts(this.props.match.params);
    if (this.props.match.params.category) {
      this.setState({
        gender: this.props.match.params.gender,
        category: this.props.match.params.category
      });
    } else {
      this.setState({
        gender: this.props.match.params.gender
      });
    }
  }

  componentDidUpdate() {
    let genderProp = this.props.match.params.gender,
      catProp = this.props.match.params.category;
    if (
      // if the gender or category has changed
      genderProp !== this.state.gender ||
      catProp !== this.state.category
    ) {
      this.setState({
        gender: genderProp,
        category: catProp
      });
      this.props.fetchProducts(this.props.match.params);
    }
  }

  render() {
    return (
      <div className="Catalogue">
        <h3>{this.state.title}</h3>
        <FilterCriteria gender={this.props.match.params.gender} />
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
