import React from "react";
import { Link } from "react-router-dom";
import "./ProductPreview.css";

const ProductPreview = ({ key, product }) => {
  return (
    <Link to={"/product/" + product.title.split(" ").join("-")}>
      <img
        className="previewImg"
        src={product.images[0]}
        alt={product.title}
        sizes="(min-width: 1366px) 300px, (min-width: 768px) 220px, 142px"
      />
      <h6 className="twoLines">{product.title}</h6>
      <h5 style={{ color: "#555" }}>
        <strong>£{product.price}</strong>
      </h5>
    </Link>
  );
};

export default ProductPreview;
