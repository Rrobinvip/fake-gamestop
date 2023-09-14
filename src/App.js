import React from "react";
import Header from "./components/Layout/Header";
import GamesSummary from "./components/Games/GamesSummary";
import AvaliableGames from "./components/Games/AvaliableGames";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <GamesSummary/>
      <AvaliableGames/>
    </React.Fragment>
  );
}

export default App;
