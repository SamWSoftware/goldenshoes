import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product, key) => (
        <ProductPreview key={"item" + key} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
