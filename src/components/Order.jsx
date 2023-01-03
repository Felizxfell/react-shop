import React from "react";
import Flechita from "../images/flechita.svg";

export default function Order() {
  return (
    <div className="order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={Flechita} alt="arrow" />
    </div>
  );
}
