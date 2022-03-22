import { useCallback, useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import SignUp from "./SignUp";
import Login from "./Login";
import Welcome from "./Welcome";
import "../styles/style.css";

function App() {
  const [renderLogin, setRenderLogin] = useState(true);
  const [userContext, setUserContext] = useContext(UserContext);

  const verifyUser = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",

      credentials: "include",

      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        setUserContext((oldValues) => {
          return { ...oldValues, token: data.token };
        });
      } else {
        setUserContext((oldValues) => {
          return { ...oldValues, token: null };
        });
      }

      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000);
    });
  }, [setUserContext]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return userContext.token === null ? (
    <div>
      {userContext.token +"gggggggggggggg"}
      {renderLogin ? (
        <Login changeView={setRenderLogin} />
      ) : (
        <SignUp changeView={setRenderLogin} />
      )}
    </div>
  ) : (
    <div>
      {userContext.token}
      <Welcome />
    </div>
  );
}

export default App;
