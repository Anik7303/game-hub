import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading marginBottom={5} fontSize="5xl">
      {`${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
