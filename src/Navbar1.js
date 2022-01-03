import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import unicorn from "./images/unicorn.png";
import { Link } from "react-router-dom";
import "./Navbar1.css";

function Navbar1(props) {
  return (
    <div className="navbar1">
      <div className="navbar__logo">
        <Link to="/">
          <img src={unicorn} alt="" className="unicorn__logo"></img>
          <span className="navbar__logo__title">HAPPY B'DAY!!!</span>
        </Link>
      </div>
      <div className="nav__option">
        <Link to="/" className="nav__option__1">
          Home
        </Link>
        <Link to="/about__you" className="nav__option__aboutyou">
          About You
        </Link>
        <Link to="/badtameeziyan" className="nav__option__3">
          (Bad)tameeziyan
        </Link>
      </div>
      <DrawerToggleButton
        click={props.drawerClickHandler}
        className="header__toggle__button"
      />
    </div>
  );
}

export default Navbar1;
