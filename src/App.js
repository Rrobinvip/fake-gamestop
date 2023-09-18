import React from "react";
import Header from "./components/Layout/Header";
import GamesSummary from "./components/Games/GamesSummary";
import AvaliableGames from "./components/Games/AvaliableGames";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header/>
      <GamesSummary/>
      <AvaliableGames/>
    </React.Fragment>
  );
}

export default App;
