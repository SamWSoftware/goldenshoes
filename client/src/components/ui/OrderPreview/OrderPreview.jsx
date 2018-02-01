import React from "react";
import "./OrderPreview.css";

const OrderPreview = ({ order }) => {
  return (
    <div>
      <div classname="row">
        <div className="col l3 s6">
          <h5>{order.shippedDate ? "We've Sent It!" : "We're Preparing It"}</h5>
        </div>
        <div>
          <strong>ORDER NO:</strong>
          {order.orderNo}
        </div>
        <div>
          <strong>SHIPPED DATE:</strong>
          <span>
            {order.shippedDate
              ? `${new Date(order.shippedDate).toDateString()}`
              : "Being Prepared"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
