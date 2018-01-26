import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Landing Page</h1>
      <div>
        <Link to="./women">Women</Link>
        <Link to="./men">Men</Link>
      </div>
    </div>
  );
};

export default Landing;
