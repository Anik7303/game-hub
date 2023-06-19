import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

function GameCardContainer({ children }: PropsWithChildren) {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;