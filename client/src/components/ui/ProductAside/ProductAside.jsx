import React, { Component } from "react";
import Select from "../Select/Select";

import "./ProductAside.css";

class ProductAside extends Component {
  render() {
    let data = this.props.products[0];
    let sizes = [],
      values = [],
      enable = [];
    data.stock.forEach(size => {
      sizes.push(`UK ${size.size} ${size.stock ? "" : "- out of stock"}`);
      values.push(size.size);
      enable.push(!!size.stock);
    });
    return (
      <div className="asideBox">
        <h4>{data.title}</h4>
        <h4>
          <strong>£{data.price}</strong>
        </h4>
        {/* Need to add select if there are mutliple colours} */}
        <p>
          <strong>COLOUR:</strong> {data.colors[0].toUpperCase()}
        </p>
        <p>
          <strong>SIZE:</strong>
        </p>
        <div className="row">
          <div className="col s12" id="sizeSelectBox">
            <Select
              options={sizes}
              values={values}
              enable={enable}
              placeholder="SIZE"
            />
          </div>
          <a class="waves-effect waves-light btn">
            <i class="material-icons right">shopping_basket</i>Add to Basket
          </a>
        </div>
      </div>
    );
  }
}

export default ProductAside;
