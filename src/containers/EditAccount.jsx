import React from "react";
import Button from "../components/Button";
import Label from "../components/Label";
import '../styles/EditAccount.scss'

export default function EditAccount() {
  return (
    <div className="login-ea">
      <div className="form-container-ea">
        <h1 className="title-ea">My account</h1>
        <form action="/" className="form">
          <div>
            <Label htmlFor="name" text="Name" />
            <p className="value">Camila Yokoo</p>

            <Label htmlFor="email" text="Email" />
            <p className="value">camilayokoo@gmail.com</p>

            <Label htmlFor="password" text="Password" />
            <p className="value">*********</p>
          </div>
          <Button
            type="submit"
            text="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}
