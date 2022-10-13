import React from "react";
import classes from "./MethodCards.module.css";

const MethodCards = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.cardsContent}>
        <img src={props.Image} alt="icon" />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MethodCards;
