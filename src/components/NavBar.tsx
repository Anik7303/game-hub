import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize="60px" />
    </HStack>
  );
}

export default NavBar;
