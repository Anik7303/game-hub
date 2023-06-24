import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

type Props = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: Props) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <Heading marginBottom={5} fontSize="5xl">
      {`${genre?.name || ""} ${platform?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
