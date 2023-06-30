import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../store";

function GameHeading() {
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading marginBottom={5} fontSize="5xl">
      {`${genre?.name || ""} ${platform?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
