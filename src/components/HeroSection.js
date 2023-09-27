import React from "react";
import AmazonIcon from "../assets/amazon.png";
import FlipkartIcon from "../assets/flipkart.jpg";
import Shoe from "../assets/shoe.png";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button1}>Shop Now</button>
          <button className={classes.button2}>Category</button>
        </div>
        <div className={classes.availbleContainer}>
          <p>Also Avaiible on</p>
          <div className={classes.imageConatiner}>
            <img src={FlipkartIcon} alt="flipkartLogo" />
            <img src={AmazonIcon} alt="AmazonIcon" />
          </div>
        </div>
      </div>
      <div className={classes.shoeContainer}>
        <img src={Shoe} alt="shoe" className={classes.shoe} />
      </div>
    </main>
  );
};

export default HeroSection;
