import React from "react";
import "./Navbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import unicorn from "./images/unicorn.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={unicorn} alt="" className="unicorn__logo"></img>
          <span className="navbar__logo__title">HAPPY B'DAY!!!</span>
        </Link>
      </div>
      <div className="nav__option">
        <Link to="/" className="nav__option__home">
          Home
        </Link>
        <Link to="/about__you" className="nav__option__2">
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

export default Navbar;
