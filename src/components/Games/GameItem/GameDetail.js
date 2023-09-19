import React from "react";

import Modal from "../../UI/Modal";
import GameDetailDisplay from "./GameDetailDisplay";

// TODO: demonstrate a details game page, showing screenshots.
const GameDetails = (props) => {
  return (
    <Modal onClose={props.onClickClose}>
      <GameDetailDisplay info={props.info} />
    </Modal>
  );
};

export default GameDetails;
