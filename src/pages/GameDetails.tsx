import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpandableText";
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
      <ExpandableText>{game?.description_raw}</ExpandableText>
    </>
  );
}

export default GameDetails;
