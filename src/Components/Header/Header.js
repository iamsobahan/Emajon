import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useContext";

import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="header-part">
      <img className="img" src={logo} alt="" />
      <nav>
        <li>
          <Link to="/shop">Shop</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/inventory">Manage inventory Here</Link>
          {user.email && <img className="photo" src={user.photoURL} alt="" />}

          {user.email ? (
            <Link to="/shop" onClick={logOut}>
              logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </nav>
    </div>
  );
};

export default Header;
