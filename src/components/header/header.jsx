import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Svg.svg";
import "tachyons";
import { auth } from "../../firebase/firebase.utils.js";
import "./header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option f5 dim pointer shadow-3 washed-blue" to="/shop">
        Shop
      </Link>
      <Link className="option f5 dim pointer shadow-3 washed-blue" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div
          className="option f5 dim pointer shadow-3 washed-blue"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </div>
      ) : (
        <Link className="option f5 dim pointer shadow-3 washed-blue" to="/sign">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
