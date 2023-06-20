import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  onSearch: (searchText: string) => void;
};

function NavBar({ onSearch }: Props) {
  return (
    <HStack p="10px" justify="space-between">
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
