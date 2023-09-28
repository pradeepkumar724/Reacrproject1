import React, { useState } from "react";
import NikeLogo from "../assets/nikelogo.png";
import classes from "./Navigation.module.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navigation = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  // console.log(openHamburger);
  return (
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

        <div
          onClick={() => setOpenHamburger((prev) => !prev)}
          className={classes.menuContainer}
        >
          <span className={classes.menu}>
            <HiMenuAlt1 />
          </span>
        </div>
      </div>

      <div
        className={`${
          openHamburger ? classes.hamburgerMobile : classes.hamburger
        }`}
      >
        <ul className={classes.menuOptions}>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <span
          className={classes.menuCross}
          onClick={() => setOpenHamburger((prev) => !prev)}
        >
          <RxCross2 />
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
