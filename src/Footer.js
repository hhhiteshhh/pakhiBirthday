import React from "react";
import "./Footer.css";
import divider from "./images/divider.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__1">Stay Blessed</div>
      <div className="footer__2">
        <img src={divider} className="footer__2__image" alt=""></img>
      </div>
      <div
        className="footer__3"
        onClick={() => window.scrollTo(0, 0)}
        variant="outlined"
      >
        Hitesh
      </div>
      <div className="footer__4">P.S. I LOVE YOU LADDUU</div>
    </div>
  );
}

export default Footer;
