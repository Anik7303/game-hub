import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing={2}>
      <Icon as={BsFillSunFill} boxSize={5} />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={BsFillMoonFill} boxSize={4} />
    </HStack>
  );
}

export default ColorModeSwitch;
