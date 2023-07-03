import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function GameCardContainer({ children }: PropsWithChildren) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 200ms ease-in-out",
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
