import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import Game from "../entities/Game";
import gameService from "../services/game-service";

const useGame = (slug: string) =>
  useQuery<Game, Error, Game>({
    queryKey: ["games", slug],
    queryFn: () => gameService.getOne(slug),
    staleTime: ms("24h"),
  });

export default useGame;
