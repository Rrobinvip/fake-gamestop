import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { getElementError } from "@testing-library/react";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
