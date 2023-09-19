import React from "react";
import useFetch from "../../hooks/useFetch";

import LoadingComponent from "../UI/Loading";

import GameItem from "./GameItem/GameItem";
import Card from "../UI/Card";

const AvaliableGames = (props) => {
  const { data, error } = useFetch(
    "https://api.rawg.io/api/games?ordering=release&page_size=10&platform=2&"
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

  const results = data["results"];
  const resultsList = Object.values(results);
  //   resultsList.map(item=>console.log(item.id));

  const gameList = resultsList.map((game) => {
    return (
      <GameItem
        onClickGameDetail={props.onClickGameDetail}
        key={game.id}
        id={game.id}
        name={game.name}
        desc={game.metacritic}
        slug={game.slug}
      />
    );
  });

  return (
    <section>
      <Card>
        <ul>{gameList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableGames;
