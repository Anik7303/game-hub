import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

type Game = {
  id: string;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
}

export default useGames;
