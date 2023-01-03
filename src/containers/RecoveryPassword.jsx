import React from "react";
import LogoYardSale from "../images/logo_yard_sale.svg";
import Email from "../images/email.svg";
import "../styles/RecoveryPassword.scss";
import Image from "../components/Image";
import Button from "../components/Button";

export default function RecoveryPassword() {
  return (
    <div className="login-rp">
      <div className="form-container-rp">
        <Image src={LogoYardSale} />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <Image src={Email} alt="email" className='logo-rp' />
        </div>
        <Button className="primary-button login-button" text="Login" />

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}
