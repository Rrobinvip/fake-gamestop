import React, { useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import LoadingComponent from "../../UI/Loading";
import GameItemForm from "./GameItemForm";
import CartContext from "../../../context/cart-context";
import classes from "./GameDetailDisplay.module.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "@aws-amplify/ui-react";

const GameDetailDisplay = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHanlder = (amount) => {
    // console.log("amount, cartHandler:" + amount);
    cartCtx.addItem({
      id: props.info.id,
      name: props.info.name,
      amount: amount,
      price: 69.99,
    });
  };

  const handleStoreClick = (url) => () => {
    window.open(`https://${url}`);
  };

  const gameDetailUrl = `https://api.rawg.io/api/games/${props.info.id}?`;
  const gameScreenshotUrl = `https://api.rawg.io/api/games/${props.info.slug}/screenshots?`;

  const { data: gameDetailData, error: gameDetailError } =
    useFetch(gameDetailUrl);
  const { data: gameScreenshotData, error: gameScreenshotError } =
    useFetch(gameScreenshotUrl);

  if (gameDetailError || gameScreenshotError) {
    return (
      <React.Fragment>
        <p>Error fetching game details or screenshots.</p>
      </React.Fragment>
    );
  }

  if (!gameDetailData || !gameScreenshotData) {
    return <LoadingComponent />;
  }

  const screenshotUrlList = Object.values(gameScreenshotData["results"]).map(
    (item) => {
      return {
        key: item.id,
        original: item.image,
      };
    }
  );

  const digitalStoresList = Object.values(gameDetailData["stores"]).map(
    (item) => {
      return (
        <Button key={item.id} onClick={handleStoreClick(item.store.domain)}>
          {item.store.name}
        </Button>
      );
    }
  );

  return (
    <React.Fragment>
      <div className={classes["game-detail-display-container"]}>
        <div>
          <h2>{gameDetailData["name"]}</h2>
        </div>
        <div>
          <GameItemForm id={props.info.id} onAddToCart={addToCartHanlder} />
        </div>
      </div>
      <div className={classes.description}>
        Metacritic: {gameDetailData["metacritic"]}
        <br />
        Release Data: {gameDetailData["released"]}
      </div>
      <h3>Purchase digital version at: </h3>
      <div className={classes.storeBtnGroup}>{digitalStoresList}</div>

      <ImageGallery items={screenshotUrlList} loading="lazy" />
    </React.Fragment>
  );
};

export default GameDetailDisplay;
