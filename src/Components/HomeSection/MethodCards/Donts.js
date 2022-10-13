import React from 'react'
import classes from "./Donts.module.css";

const Donts = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.cardsContent}>
                <img src={props.subImage} alt="" />
                <p>{props.subTitle}</p>
            </div>
        </div>
    )
}

export default Donts