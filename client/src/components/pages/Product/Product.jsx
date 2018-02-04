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
    var x = window.matchMedia("(max-width: 600px)");
    mediaWidth(x);
    x.addListener(mediaWidth);
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
      <div className="smallContainer">
        <div class="flex prodPage">
          <div className="ProdImgBox">
            <img
              className="ProdImg"
              src={prod[0].images[0]}
              alt={prod[0].title}
            />
          </div>
          <ProductAside products={prod} />
        </div>

        <ProductDescription product={prod[0]} />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products
  };
}

function mediaWidth(x) {
  if (x.matches) {
    let prodDesc = document.querySelector("#prodDesc");
    prodDesc.classList.remove("row");
    prodDesc.classList.add("mob");
  }
}

export default connect(mapStateToProps, { fetchProducts })(Product);
