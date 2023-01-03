import React from "react";
import IconMenu from '../images/icon_menu.svg'
import LogoYardSale from '../images/logo_yard_sale.svg'
import IconShoppingCart from '../images/icon_shopping_cart.svg'
import '../styles/Header.scss'

export default function Header() {
  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu"/>      
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
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={IconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>      
    </nav>
  );
}
