import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <div>
        <img style={{ height: "50px" }} src={logo} alt="" />
        <form onSubmit="">
          <h2>Sign up</h2>
          <input type="text" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <input type="password" placeholder="Re-enter password" />
          <br />
          <Link>
            <button>sign up</button>
          </Link>
        </form>
        <h4>
          Already user? <Link to="/login">Login</Link>
        </h4>

        <div className="google">
          <p>------------------or---------------------</p>
          <Link>
            <button>sign up with google</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
