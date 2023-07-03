import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import useGame from "../hooks/useGame";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (!game) return null;
  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
}

export default GameDetails;
