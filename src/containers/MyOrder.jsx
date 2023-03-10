import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import Flechita from "../images/flechita.svg";
import "../styles/MyOrder.scss";

export default function MyOrder() {
  const { state, removeFromCart } = useContext(AppContext);

  const total = state.cart.reduce((accum, curre) => {
    return accum + curre.price;
  }, 0);

  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={Flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item, index) => (
          <OrderItem
            product={item}
            removeFromCart={removeFromCart}
            key={`orderitem-${index}`}
            index={index}
          />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${total}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
}
