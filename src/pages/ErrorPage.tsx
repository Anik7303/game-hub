import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? "This page does not exist"
    : error instanceof Error
    ? error.message
    : "An unexpected error occured.";

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>{message}</Text>
      </Box>
    </>
  );
}

export default ErrorPage;
