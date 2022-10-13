import React from "react";
import classes from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import herobg from "../../../Assets/Images/herobg.jpg";

const HeroSection = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heroSection}>
        <h1>We bring businesses to our clients through Web building.</h1>
        <p>With breathtaking conversions!</p>
        <div className={classes.heroBtn}>
          <Link to="/">Book a free strategy call</Link>
        </div>
        <div className={classes.heroImg}>
          {/* <img src={herobg} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
