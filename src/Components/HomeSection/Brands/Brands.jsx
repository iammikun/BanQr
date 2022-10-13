import React from "react";
import classes from "./Brands.module.css";

const Brands = () => {
  return (
    <div className={classes.main}>
      <div className={classes.brandsContent}>
        <h2>Our Business is Brands</h2>
        <p>As cliche as it sounds, BanQR is a different breed of agency.</p>
        <p>
          We’re pretty sure there are a thousand and one other ways to get your
          website, and they all probably awesome, fast or whatever.{" "}
        </p>
        <p>
          Here’s our deal, we don’t just want to build a website, we need your
          brand to scream awesome at every touch point!.{" "}
        </p>
        <p>And we want credits!</p>
        <div className={classes.greyPee}>
          <p>
            We’ll spend less than an hour on-boarding you, and then we skip
            straight to strategizing and delivering results. This is possible
            because of the No bullshit Systems we’ve developed.
          </p>
          <p>
            These systems allows for breathtaking results, frequent upgrades, a
            rapid workflow, and prices based on logic instead of guesswork.
          </p>
          <p>
            BanQr likes everything to be seamless. We put our clients
            first...Obviously
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
