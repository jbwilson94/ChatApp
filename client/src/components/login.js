import React from "react";

export default function login() {
  return (
    <div className="form-page center">
      <div className="form-container center">
      <h1>Sign In</h1>
        <form className="form">
          <input id="inputEmail" type="email" placeholder="Email Address" required autoFocus></input>
          <input id="inputPassword" type="password" placeholder="Password" required></input>
          <button id="login-button">Login</button>
          <button id="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
