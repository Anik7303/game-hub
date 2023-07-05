import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

function GameDetails() {
  const { slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game, error, isLoading } = useGame(slug!);

  if (!game) return null;
  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
}

export default GameDetails;
