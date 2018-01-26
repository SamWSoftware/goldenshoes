import React from "react";
import { Link } from "react-router-dom";

const SubHeader = ({ gender, categories }) => (
  <nav>
    <div className="nav-wrapper">
      <ul className="left">
        {categories[gender].map(({ name, link }, k) => (
          <li>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default SubHeader;
