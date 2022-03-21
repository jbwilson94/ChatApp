import { useState } from "react";

export default function SignUp({ changeView }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    changeView(true);
  }

  return (
    <div id="form-page" className="form-page center">
      <div className="form-container center">
        <h1 id="form-h1">Sign Up</h1>
        <form className="form">
          <input
            id="firstName"
            placeholder="First Name"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            required
            autoFocus
          ></input>
          <input
            id="LastName"
            placeholder="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            required
          ></input>
          <input
            id="inputEmail"
            type="email"
            placeholder="Email Address"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <input
            id="inputPassword"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required
          ></input>
          <button id="login-button">Sign Up</button>
        </form>
        <button id="signup-button" onClick={handleLoginClick}>
          Log In
        </button>
      </div>
    </div>
  );
}
