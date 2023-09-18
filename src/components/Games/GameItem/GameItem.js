import React, { useContext } from "react";
import classes from "./GameItem.module.css";

import GameItemForm from "./GameItemForm";
import CartContext from "../../../context/cart-context";

const GameItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHanlder = (amount) => {
    // console.log("amount, cartHandler:" + amount);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: 69.99,
    });
  };
  return (
    <li className={classes.game}>
      {/* {props.id} */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>Metacritic: {props.desc}</div>
        <div className={classes.price}>$69.99</div>
      </div>
      <div>
        <GameItemForm id={props.id} onAddToCart={addToCartHanlder} />
      </div>
    </li>
  );
};

export default GameItem;
