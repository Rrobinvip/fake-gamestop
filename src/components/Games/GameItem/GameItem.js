import React from "react";
import classes from "./GameItem.module.css";

import GameItemForm from "./GameItemForm";

const GameItem = (props) => {
  return (
    <li className={classes.game}>
      {/* {props.id} */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>Metacritic: {props.desc}</div>
        <div className={classes.price}>$69.99</div>
      </div>
      <div>
        <GameItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default GameItem;
