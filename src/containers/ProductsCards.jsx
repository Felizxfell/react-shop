import React from "react";
import "../styles/ProductsCards.scss";
import BtAddToCart from "../images/bt_add_to_cart.svg";
import Categories from "./Categories";
import Image from "../components/Image";

export default function ProductsCards() {
  return (
    <section className="main-container">
      <Categories />
      <div className="cards-container">
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
        <div className="product-card">
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <Image src={BtAddToCart} alt="bt add to cart" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
