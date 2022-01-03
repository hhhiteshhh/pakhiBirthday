import React, { useState } from "react";
import "./App.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Homepage from "./Homepage";
import Footer from "./Footer";
import About from "./About";
import Badtameej from "./Badtameej";

function App() {
  const [state, setState] = useState(false);

  const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let backdrop;

  if (state.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <Router>
      <div className="App" style={{ height: "100%" }}>
        <Switch>
          <Route path="/about__you">
            <Navbar1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <About />
            <Footer />
          </Route>
          <Route path="/badtameeziyan">
            <Navbar2 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <Badtameej />
            <Footer />
          </Route>

          <Route path="/">
            <Navbar drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <Homepage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
