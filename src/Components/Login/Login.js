import React from "react";
import logo from "../../images/logo.png";

import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import useAuth from "../../Hooks/useContext";

const Login = () => {
  const { googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/shop";

  const clickGoogle = () => {
    googleSignIn().then((result) => {
      history.push(redirect);
    });
  };
  return (
    <div className="login">
      <div>
        <img style={{ height: "50px" }} src={logo} alt="" />
        <form onSubmit="">
          <h2>Login in</h2>
          <input type="text" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <Link>
            <button>login</button>
          </Link>
        </form>
        <h4>
          New to Emajon? <Link to="/register">create account</Link>
        </h4>
        <div className="google">
          <p>------------------or---------------------</p>

          <button onClick={clickGoogle}>Login with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
