import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";

const Nav = () => {
  return (
    <div className={classes.main}>
      <div className={classes.navContent}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <img src={Logo} alt="banqr" />
        <Link to="about">
          <li>About</li>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
