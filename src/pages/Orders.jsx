import React from "react";
import OrderItem from "../components/Order";
import "../styles/Orders.scss";

export default function Orders() {
  return (
    <div className="my-orders">
      <div className="my-orders-container">
        <h1 className="title">My orders</h1>
        <div className="my-orders-content">
          <OrderItem />         
        </div>
      </div>
    </div>
  );
}
