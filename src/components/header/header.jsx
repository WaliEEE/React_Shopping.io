import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Svg.svg";
import "tachyons";
import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option f4 dim pointer shadow-3 washed-blue" to="/shop">Shop</Link>
      <Link className="option f4 dim pointer shadow-3 washed-blue" to="/shop">Contact</Link>
      <Link className="option f4 dim pointer shadow-3 washed-blue" to="/shop">About</Link>
    </div>
  </div>
);

export default Header;
