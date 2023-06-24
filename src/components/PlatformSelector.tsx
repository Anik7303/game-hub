import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  onSelect: (platform: Platform) => void;
  selectedPlatformId?: number;
};

function PlatformSelector({ onSelect, selectedPlatformId }: Props) {
  const { data, error } = usePlatforms();

  const selectedPlatform = data.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
