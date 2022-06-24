import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  const context = useContext(UserContext);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => context.onLoggedIn("username")}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
