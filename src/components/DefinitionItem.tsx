import { Box, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  term: string;
};

function DefinitionItem({ children, term }: PropsWithChildren<Props>) {
  return (
    <Box marginY={5}>
      <Heading as="dt" color="gray.600" fontSize="md">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
