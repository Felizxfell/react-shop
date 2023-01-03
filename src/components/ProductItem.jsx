import React from "react";
import BtAddToCart from "../images/bt_add_to_cart.svg";

export default function ProductItem() {
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bicle"
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={BtAddToCart} alt="bt-add-to-cart" />
        </figure>
      </div>
    </div>
  );
}
