import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import "../styles/Checkout.scss";

export default function Checkout() {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
