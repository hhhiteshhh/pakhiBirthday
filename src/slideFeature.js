import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideFeature.css";
import s1 from "./images/pakhi/4.png";
import s2 from "./images/pakhi/7.jpg";
import s3 from "./images/pakhi/3.jpg";
import s4 from "./images/pakhi/6.jpg";
import s5 from "./images/pakhi/5.png";
import s6 from "./images/pakhi/8.jpg";

const properties = {
  duration: 3500,
  transitionDuration: 700,
  infinite: true,
  pauseOnHover: false,
  scale: 1.5,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        <div className="each-fade">
          <div>
            
            <img src={s1} className="s1" alt=""></img>
          </div>
        </div>
        <div className="each-fade">
          <div>
            <img src={s2} className="s2" alt=""></img>
          </div>
        </div>
        <div className="each-fade">
          <div>
            <img src={s3} className="s3" alt=""></img>
          </div>
        </div>
        <div className="each-fade">
          <div>
            <img src={s5} className="s4" alt=""></img>
          </div>
        </div>
        <div className="each-fade">
          <div>
            <img src={s4} className="s5" alt=""></img>
          </div>
        </div>
        
        <div className="each-fade">
          <div>
            <img src={s6} className="s6" alt=""></img>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
