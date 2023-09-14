import { isTextFile } from "@aws-amplify/core";
import React from "react";
import useFetch from "../../hooks/useFetch";

import LoadingComponent from "../UI/Loading";

import Games from "./Games";

const AvaliableGames = (props) => {
  const { data, error } = useFetch(
    "https://api.rawg.io/api/games?ordering=release&page_size=10&platform=2"
  );
  if (error) {
    return (
      <React.Fragment>
        <p>Error fetching games.</p>
      </React.Fragment>
    );
  }
  if (!data) {
    return <LoadingComponent />;
  }

  const results = data['results'];
  const resultsList = Object.values(results);
//   resultsList.map(item=>console.log(item.id));

  const gameList = resultsList.map((game) => {
    return(<Games key={game.id} id={game.id} />);
  });

  return (
    <section>
      <ul>
        {gameList}
      </ul>
    </section>
  );
};

export default AvaliableGames;
