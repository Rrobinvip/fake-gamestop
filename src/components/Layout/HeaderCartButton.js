import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, btnIsHighLightedUpdate] = useState(false);
  const cartCtx = useContext(CartContext);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    btnIsHighLightedUpdate(true);

    const timer = setTimeout(()=>{
        btnIsHighLightedUpdate(false);
    }, 300);

    return (()=>{
        clearTimeout(timer);
    });
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClickCartIcon}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>
        {cartCtx.items.reduce((curNumber, item) => {
          return curNumber + item.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
