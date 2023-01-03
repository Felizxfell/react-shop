import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import "../styles/Registrer.scss";

export default function Registrer() {
  return (
    <div className="login-reg">
      <div className="form-container-rg">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <Label htmlFor="name" text="Name" />
            <Input
              type="text"
              id="name"
              placeholder="Teff"
              className="input-name"
            />

            <Label htmlFor="email" text="Email" />
            <Input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="input-email"
            />

            <Label htmlFor="password" text="Password" />
            <Input
              type="password"
              id="password"
              placeholder="*********"
              className="input-password"
            />
          </div>
          <Button text="Create" className="primary-button login-reg-button" />
        </form>
      </div>
    </div>
  );
}
