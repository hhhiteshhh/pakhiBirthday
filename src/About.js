import React from "react";
import "./About.css";
import banner from "./images/bunting.png";
import p from "./images/pakhi/p.jpg";
import a from "./images/pakhi/a.jpg";
import k from "./images/pakhi/k.jpg";
import h from "./images/pakhi/h.png";
import i from "./images/pakhi/i.jpg";
import img from "./images/pakhi/9.png";
import me from "./images/pakhi/me.jpg";
import Slideshow from "./slideFeature";

function About() {
  return (
    <div className="about">
      <Slideshow className="carousel" />
      <div className="about__container__1">
        <div className="about__container__1__1">
          {" "}
          The Hidden Meaning behind your Name
        </div>
        <div className="about__container__1__2">
          <img
            src={banner}
            alt=""
            className="about__container1__2__image"
          ></img>
        </div>
        <div className="about__container__1__3">
          {" "}
          People with your name are very creative and are just overflowing with
          fantastic ideas!!! Your talent lies in the fact that you can perceive
          things from a whole different angle and therefore are able to come up
          with unimaginable possibilities.
        </div>
        <div className="about__container__1__4">
          {" "}
          Don't believe me??? Okay, let's
          <br /> find the truth then!!!
        </div>
      </div>
      <div className="about__container__2">
        <div className="about__container__2__1">
          <div className="about__container__2__image">
            <img src={p} alt="" className="about__container1__2__image"></img>
            Passionate
          </div>
          <div className="about__container__2__text">
            Everything you do... whether it's guitar, whether it's designing,
            Whether crafting, Everything you do so passionately{" "}
          </div>
        </div>
        <div className="about__container__2__1" id="con2">
          <div className="about__container__2__text">
            She's the eldest and most "laadli" sibling in the family!!!
          </div>
          <div className="about__container__2__image">
            <img src={a} alt="" className="about__container1__2__image"></img>
            Adorable
          </div>
        </div>
        <div className="about__container__2__1">
          <div className="about__container__2__image">
            <img src={k} alt="" className="about__container1__2__image"></img>
            Kind
          </div>
          <div className="about__container__2__text">
            She does little things that makes everyone else around her happy!!!
            <br />
            <br />
            Takes care of her parents and siblings in a way that nobody could
            imagine!!!
            <br /> But forgets that she needs to be kind to herself too!!!
          </div>
        </div>
        <div className="about__container__2__1" id="con2">
          <div className="about__container__2__text">
            Shaam hui, bhuk lagi madam ko aur sab chiz ek saath khaana hai
            <br />
            pasta, momos, maggi, patties, gupchup etc.
          </div>
          <div className="about__container__2__image">
            <img src={h} alt="" className="about__container1__2__image"></img>
            Hungry
          </div>
        </div>
        <div className="about__container__2__1">
          <div className="about__container__2__image">
            <img src={i} alt="" className="about__container1__2__image"></img>
            Intelligent
          </div>
          <div className="about__container__2__text" id="con3">
            You are beauty with Intelligence
          </div>
        </div>
      </div>
      <div className="about__container__3">
        <div>
          <img src={img} alt="" className="about__container1__3__image"></img>
          <span className="text">Like sister</span>
        </div>
        <div className="safar">
          {" "}
          You have proven yourself to be a very skilled individual who has the
          capacity to do great things in life. Continue to make us proud as you
          face new challenges and adventures
        </div>
        <div>
          <img src={me} alt="" className="about__container1__3__image"></img>
          <span className="text">Like brother</span>
        </div>
      </div>
    </div>
  );
}
export default About;
