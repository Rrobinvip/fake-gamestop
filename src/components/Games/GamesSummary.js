import React from "react";
import classes from "./GamesSummary.module.css"

const GamesSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>The largest (fake) video game retailer in Canada.</h2>
            <p>Buy video games!</p>
        </section>
    );
}

export default GamesSummary;
