import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [];
  // TODO: map cartItems to JSX.
  return (
    <Modal>
      cartitems
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>22222</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
