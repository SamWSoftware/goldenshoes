import React from "react";
import { Link } from "react-router-dom";

import "./AccountNav.css";

const AccountNav = () => {
  const items = [
    { title: "My Orders", to: "/my-account/orders" },
    { title: "My Details", to: "/my-account/details" },
    { title: "Address Book", to: "/my-account/addresses" }
  ];
  return (
    <div className="navSideBar">
      <div className="ActNavItem">
        <h4>Account</h4>
      </div>
      {items.map(({ to, title }, k) => (
        <Link to={to} key={k} className="ActNavItem">
          <span>{title}</span>
        </Link>
      ))}
    </div>
  );
};

export default AccountNav;
