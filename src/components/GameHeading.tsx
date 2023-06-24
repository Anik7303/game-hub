import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms.find(
    (platform) => platform.id === gameQuery.platformId
  );

  return (
    <Heading marginBottom={5} fontSize="5xl">
      {`${genre?.name || ""} ${platform?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
