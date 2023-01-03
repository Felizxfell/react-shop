import React from "react";
import LogoYardSale from "../images/logo_yard_sale.svg";
import "../styles/Login.scss";

export default function Login() {
  return (
    <div className="login-lg">
      <div className="form-container-lg">
        <img src={LogoYardSale} className="logo-login" />

        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />

          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}
