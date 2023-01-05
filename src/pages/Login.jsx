import React, { useRef } from "react";
import LogoYardSale from "../images/logo_yard_sale.svg";
import "../styles/Login.scss";

export default function Login() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
  };

  return (
    <div className="login-lg">
      <div className="form-container-lg">
        <img src={LogoYardSale} className="logo-login" />

        <form onSubmit={handleSubmit} className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
            autoFocus
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />

          <button type="submit" className="primary-button login-button">
            Log in
          </button>

          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}
