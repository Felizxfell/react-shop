import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import Flechita from "../images/flechita.svg";
import IconClose from "../images/icon_close.png";
import "../styles/MyOrderDetail.scss";

export default function MyOrderDetail() {
  return (
    <aside className="product-detail">
      <div className="title-container">
        <Image src={Flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="shopping-cart">
          <figure>
            <Image
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <Image src={IconClose} alt="close" />
        </div>
        <div className="shopping-cart">
          <figure>
            <Image
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <Image src={IconClose} alt="close" />
        </div>
        <div className="shopping-cart">
          <figure>
            <Image
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <Image src={IconClose} alt="close" />
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <Button className="primary-button" text="Checkout" />        
      </div>
    </aside>
  );
}
