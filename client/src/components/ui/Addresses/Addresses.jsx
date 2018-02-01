import React from "react";
import "./Addresses.css";

import AddressPreview from "../AddressPreview/AddressPreview";

const Addresses = ({ auth }) => {
  return (
    <div>
      <div>
        <h4>Address Book</h4>
        <a className="btn-floating btn-large waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      {renderAddresses(auth)}
    </div>
  );
};

function renderAddresses(auth) {
  console.log(auth);
  if (auth && auth.address) {
    console.log(auth.address);
    return auth.address.map((address, k) => (
      <AddressPreview address={address} key={k} />
    ));
  } else {
    return "";
  }
}

export default Addresses;
