import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import Input from "../components/Input";
import Label from "../components/Label";
import LogoYardSale from "../images/logo_yard_sale.svg";
import "../styles/Login.scss";

export default function Login() {
  return (
    <div className="login-lg">
      <div className="form-container-lg">
        <Image src={LogoYardSale} className="logo-login" /> 

        <form action="/" className="form">
          <Label htmlFor="email" text="Email address" />
          <Input
            type="email"
            id="email"
            placeholder="platzi@example.cm"
            className="input-email"
          />

          <Label htmlFor="password" text="Password" />
          <Input
            type="password"
            id="password"
            placeholder="*********"
            className="input-password"
          />

          <Button type="submit" text="Log in" className="primary-button login-button" />
          
          <a href="/">Forgot my password</a>
        </form>

        <Button text="Sign up" className="secondary-button signup-button" />
      </div>
    </div>
  );
}
