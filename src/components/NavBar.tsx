import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack p="10px" justify="space-between">
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput onSearch={(text) => console.log(text)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
