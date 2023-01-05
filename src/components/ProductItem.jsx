import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import BtAddToCart from "../images/bt_add_to_cart.svg";

export default function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext)

  const handlerClick = item => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={ () => handlerClick(product)}>
          <img src={BtAddToCart} alt={product.title}  />
        </figure>
      </div>
    </div>
  );
}
