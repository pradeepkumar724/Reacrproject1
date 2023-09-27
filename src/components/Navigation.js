import React from "react";
import NikeLogo from "../assets/nikelogo.png";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <div>
          <img src={NikeLogo} alt="nikelogo" className={classes.logo} />
        </div>
        <ul className={classes.lists}>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className={classes.button}>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
