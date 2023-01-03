import React from "react";
import Email from "../images/email.svg";
import LogoYardSale from "../images/logo_yard_sale.svg";
import "../styles/SendEmail.scss";

export default function SendEmail() {
  return (
    <div className="SendEmail">
      <div className="SendEmail-container">
        <img src={LogoYardSale} className="SendEmail-logo" />

        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <img src={Email} alt="email" className="logo-rp" />
        </div>
        <button className="primary-button login-button">Login</button>

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}
