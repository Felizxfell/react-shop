import React, { useState } from "react";
import BtAddToCart from "../images/bt_add_to_cart.svg";

export default function ProductItem({ product }) {
  const [cart, setCart] = useState([]);

  const handlerClick = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handlerClick}>
          <img src={BtAddToCart} alt="bt-add-to-cart" />
        </figure>
      </div>
    </div>
  );
}
