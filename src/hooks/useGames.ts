import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import { FetchResponse } from "../services/api-client";
import gameService from "../services/game-service";
import useGameQuery from "../store";
import { Platform } from "./usePlatforms";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  description: string;
  description_raw: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  slug: string;
};

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.get({
        params: {
          genres: gameQuery.genreId,
          parent_platform: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("10m"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    keepPreviousData: true,
  });
};

export default useGames;
