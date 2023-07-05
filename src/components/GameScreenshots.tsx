import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

import useScreenshots from "../hooks/useScreenshots";

type Props = {
  gameId: number;
};

function GameScreenshots({ gameId }: Props) {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {screenshots?.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.image}
        />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
