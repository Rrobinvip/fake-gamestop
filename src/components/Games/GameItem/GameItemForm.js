import React, { useRef, useState } from "react";
import classes from "./GameItemForm.module.css";

import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import { Button } from "@aws-amplify/ui-react";

const GameItemForm = (props) => {
  const [isFormInputValid, formInputValidUpdate] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // Convert string number to a real number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      formInputValidUpdate(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const onClickCloseHanlder = (props) => {
    formInputValidUpdate(true);
  };

  const amountInputRef = useRef();

  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!isFormInputValid && (
        <Modal onClose={onClickCloseHanlder}>
          <p>Please enter a correct amount (1-5)</p>
          <div>
            <Button onClick={onClickCloseHanlder}>OK</Button>
          </div>
        </Modal>
      )}
    </form>
  );
};

export default GameItemForm;
