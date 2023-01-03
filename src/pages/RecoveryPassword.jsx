import React from "react";
import LogoYardSale from "../images/logo_yard_sale.svg";
import "../styles/RecoveryPassword.scss";

export default function RecoveryPassword() {
  return (
    <div className="RecoveryPassword">
      <div className="RecoveryPassword-container">
        <img src={LogoYardSale} className="RecoveryPassword-logo" />

        <h1 className="RecoveryPassword-title">Password recovery</h1>

        <p className="subtitle">
          Inform the email address used to create your account
        </p>

        <form action="/" className="RecoveryPassword-form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" className="input input-email" />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}
