import React, { useEffect, useReducer, useState } from "react";
import ProductItem from "../components/ProductItem";
import Categories from "./Categories";
import "../styles/ProductsList.scss";
import useGetProducts from "../hooks/useGetProducts";

const URL_API = "https://api.escuelajs.co/api/v1/products?limit=25&offset=1";

export default function ProductsList() {
  const { products } = useGetProducts(URL_API)
  return (
    <section className="main-container">
      <Categories />
      <div className="ProductList">
        {products.map(product => {
          return <ProductItem product={product} key={product.id} />
        })}
      </div>
    </section>
  );
}