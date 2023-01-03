import React from "react";
import Image from "../components/Image";
import Flechita from "../images/flechita.svg";
import "../styles/MyOrders.scss";

export default function MyOrders() {
  return (
    <div className="my-orders">
      <div className="my-orders-container">
        <h1 className="title">My orders</h1>
        <div className="my-orders-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={Flechita} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={Flechita} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={Flechita} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={Flechita} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
