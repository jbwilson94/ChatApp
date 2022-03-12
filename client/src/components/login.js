import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

export default function login() {
  function changeLightMode() {
    let lightColor = "#e3e3e3";
    let darkColor = "e3e3e3"; 
    document.getElementById("form-page").style.backgroundColor = "#121212";
    document.getElementById("light-dark-icon-button").style.backgroundColor = "#121212";
    document.getElementById("form-h1").style.color = "#e3e3e3";
    document.getElementById("light-dark-icon").style.color = "#e3e3e3";
  }

  return (
    <div id="form-page" className="form-page center">
      <button id="light-dark-icon-button" onClick={changeLightMode}>
        <FontAwesomeIcon id="light-dark-icon" icon={faCircleHalfStroke} />
      </button>
      <div className="form-container center">
      <h1 id="form-h1">Sign In</h1>
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
