import { HStack, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack p="10px" justify="space-between">
      <Link to="/">
        <Image src={logo} alt="Logo" boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
