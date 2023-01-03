import React from "react";
import ProductItem from "../components/ProductItem";
import Categories from "./Categories";
import "../styles/ProductsList.scss";

export default function ProductsList() {
  return (
    <section className="main-container">
      <Categories />
      <div className="ProductList">
        <ProductItem />
      </div>
    </section>
  );
}
