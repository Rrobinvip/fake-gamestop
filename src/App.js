import React, {useState} from "react";
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
  }

  const hideCartHandler = () => {
    showCartUpdate(false);
  }


  return (
    <CartProvider>
      {showCart && <Cart onClickClose={hideCartHandler}/>}
      {/* <GameDetails/> */}
      <Header onClickCartIcon={showCartHandler}/>
      <GamesSummary/>
      <AvaliableGames/>
    </CartProvider>
  );
}

export default App;
