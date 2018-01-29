import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import { fetchProducts } from "../../../actions/index";

import FilterCriteria from "../../ui/FilterCriteria/FilterCriteria";
import ProductList from "../../ui/ProductList/ProductList";

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      search: ""
    };
  }

  componentDidUpdate() {
    let genderProp = this.props.match.params.gender;
    let search = queryString.parse(this.props.location.search);
    if (
      // if the gender or search has changed
      genderProp !== this.state.gender ||
      JSON.stringify(search) !== this.state.search
    ) {
      this.setState({
        gender: genderProp,
        search: JSON.stringify(search)
      });
      console.log("search for", { ...this.props.match.params, ...search });
      this.props.fetchProducts({ ...this.props.match.params, ...search });
    }
  }

  render() {
    return (
      <div className="Catalogue">
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
