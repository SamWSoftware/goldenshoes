import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../../actions/index";

import "./Product.css";

import ProductAside from "../../ui/ProductAside/ProductAside";
import ProductDescription from "../../ui/ProductDescription/ProductDescription";

class Product extends Component {
  componentDidMount() {
    let title = this.props.match.params.name.replace(/-/gi, " ");
    this.props.fetchProducts({ title });
  }
  render() {
    let prod = this.props.products.retrieved
      ? this.props.products.products
      : [
          {
            images: [""],
            title: "",
            price: "",
            brand: "",
            category: "",
            gender: "",
            description: [""],
            productCode: "",
            colors: [""],
            stock: [{ size: "", stock: "" }]
          }
        ];
    return (
      <div className="container">
        <div class="flex">
          <div className="ProdImgBox">
            <img
              className="ProdImg"
              src={prod[0].images[0]}
              alt={prod[0].title}
            />
          </div>
          <ProductAside products={prod} />
        </div>

        <ProductDescription />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products
  };
}

export default connect(mapStateToProps, { fetchProducts })(Product);
