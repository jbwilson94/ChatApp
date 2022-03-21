import { useState } from "react";

export default function Login({ changeView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUpClick() {
    changeView(false);
  }

  return (
    <div id="form-page" className="form-page center">
      <div className="form-container center">
        <h1 id="form-h1">Sign In</h1>
        <form className="form">
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          ></input>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          ></input>
          <button id="login-button">Login</button>
        </form>
        <button id="signup-button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
