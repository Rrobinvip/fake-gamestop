import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  // TODO: map cartItems to JSX.
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  //   console.log(JSON.stringify(cartCtx));
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const hasItem = cartCtx.items.length > 0;
  let totalAmount;
  if (cartCtx.totalAmount <= 0) {
    totalAmount = `$0.00`;
  } else {
    totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  }

  return (
    <Modal onClose={props.onClickClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClickClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
