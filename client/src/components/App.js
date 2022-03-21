import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "../styles/style.css";

function App() {
  const [renderLogin, setRenderLogin] = useState(true);

  return (
    <div>
      {renderLogin ? (
        <Login
          changeView={setRenderLogin}
        />
      ) : (
        <SignUp
          changeView={setRenderLogin}
        />
      )}
    </div>
  );
}

export default App;
