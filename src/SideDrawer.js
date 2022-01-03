import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

function SideDrawer(props) {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }

  return (
    <div className={drawerClasses}>
      <Link to="/" className="sidedrawer__home">
        Home
      </Link>
      <Link to="/about__you" className="sidedrawer__aboutyou">
        About You
      </Link>
      <Link to="/badtameeziyan" className="sidedrawer__caption">
        (Bad)tameeziyan
      </Link>
    </div>
  );
}

export default SideDrawer;
