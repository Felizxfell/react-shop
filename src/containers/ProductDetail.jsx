import React from 'react'
import IconClose from "../images/icon_close.png";
import "../styles/ProductDetail.scss";

export default function ProductDetail() {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src={IconClose} alt="close" />
      </div>
          
    </aside>
  )
}
