import useData from "./useData";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platform: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
