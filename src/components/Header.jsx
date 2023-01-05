import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import IconMenu from "../images/icon_menu.svg";
import LogoYardSale from "../images/logo_yard_sale.svg";
import IconShoppingCart from "../images/icon_shopping_cart.svg";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";

export default function Header() {
  const { state } = useContext(AppContext)
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const handlerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={LogoYardSale} alt="logo" className="logo-header" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handlerToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={IconShoppingCart} alt="shopping cart" />
            
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}            
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
}
