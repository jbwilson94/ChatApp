import React from "react";

export default function login() {
  return (
    <div className="form-page center">
      <div className="form-container center">
      <h1>Login</h1>
        <form className="form">
          <label for="id" className="left-align">
            Email
          </label>
          <input type="text" id="id"></input>
          <label for="password" className="left-align">
            Password
          </label>
          <input type="text" id="password"></input>
          <button className="primary-blue">Login</button>
          <button className="secondary-grey">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
