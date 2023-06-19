import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";

import apiClient from "../services/api-client";

type Game = {
  id: string;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setGames(res.data.results);
      })
      .catch((error) => {
        console.error(error);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
