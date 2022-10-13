import React from "react";
import classes from "./Method.module.css";
import MethodCards from "../MethodCards/MethodCards";
import methodsdata from "./methodsdata";
import Donts from "../MethodCards/Donts";

const Method = () => {
  const MethodCard = methodsdata.map((item) => {
    return <MethodCards key={item.id} {...item} />;
  });

  const Dont = methodsdata.map((item) => {
    return <Donts key={item.id} {...item} />;
  });

  return (
    <div className={classes.main}>
      <div className={classes.methodContent}>
        <h2>The BanQR Method</h2>
        <h3>What we do</h3>
      </div>
      <div className={classes.Methods}>{MethodCard}</div>
      <div className={classes.methodContent2}>
        <h3>What we don't do</h3>
      </div>
      <div className={classes.methods2}>{Dont}</div>
    </div>
  );
};

export default Method;
