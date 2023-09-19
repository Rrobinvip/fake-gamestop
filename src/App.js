import React, { useState } from "react";
import Header from "./components/Layout/Header";
import GamesSummary from "./components/Games/GamesSummary";
import AvaliableGames from "./components/Games/AvaliableGames";
import Cart from "./components/Cart/Cart";
import GameDetails from "./components/Games/GameItem/GameDetail";
import CartProvider from "./context/CartProvider";

function App() {
  const [showCart, showCartUpdate] = useState(false);

  const showCartHandler = () => {
    showCartUpdate(true);
  };

  const hideCartHandler = () => {
    showCartUpdate(false);
  };

  const [showGameDeatil, showGameDeatilUpdate] = useState(false);
  const [gameDetailInfo, gameDetailUpdate] = useState({
    id: null,
    slug: null,
    name: null
  });

  const showGameDetailHandler = (id, slug, name) => {
    showGameDeatilUpdate(true);
    gameDetailUpdate((prevState) => {
      return { ...prevState, id: id, slug: slug, name: name };
    });
  };

  const hideGameDetailHanlder = () => {
    showGameDeatilUpdate(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClickClose={hideCartHandler} />}
      {showGameDeatil && <GameDetails onClickClose={hideGameDetailHanlder} info={gameDetailInfo}/>}
      <Header onClickCartIcon={showCartHandler} />
      <GamesSummary />
      <AvaliableGames onClickGameDetail={showGameDetailHandler} />
    </CartProvider>
  );
}

export default App;
