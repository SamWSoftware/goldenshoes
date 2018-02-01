import React from "react";
import "./AddressPreview.css";

const AddressPreview = ({ address, key }) => {
  console.log("preview adddress", address);
  return (
    <div style={{ margin: "20px 0 0 0" }}>
      <hr />
      <div>
        {address.house} {address.street[0]},
      </div>
      {address.street[1] ? <div>{address.street[1] + ","}</div> : ""}
      <div>{address.city},</div>
      <div>{address.postcode},</div>
      <div>{address.country}</div>
      <a className="btn-floating btn-small blue margin-btn">
        <i className="small material-icons">mode_edit</i>
      </a>
      <a class="btn-floating btn-small red margin-btn">
        <i class="small material-icons">delete</i>
      </a>
    </div>
  );
};

export default AddressPreview;
