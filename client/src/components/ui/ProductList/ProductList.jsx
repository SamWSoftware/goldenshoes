import React from "react";
import "./ProductList.css";

import ProductPreview from "../ProductPreview/ProductPreview";

const ProductList = ({ products = [] }) => {
  console.log(products);
  return (
    <div className="row ListContainer">
      {products.map((product, key) => (
        <div className="col m3 s6">
          <ProductPreview key={"item" + key} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
