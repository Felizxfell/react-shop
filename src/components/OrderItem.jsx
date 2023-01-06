import React from "react";
import IconClose from "../images/icon_close.png";

export default function OrderItem({ product, removeFromCart, index }) {
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={IconClose} alt="close" className="close" onClick={() => removeFromCart(index)} />
    </div>
  );
}
