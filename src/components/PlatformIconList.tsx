import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/usePlatforms";

type PlatformIconListProps = {
  platforms: Platform[];
};

function PlatformIconList({ platforms }: PlatformIconListProps) {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };
  return (
    <HStack marginY={1} wrap="wrap">
      {platforms.map(({ id, name, slug }) => (
        <Icon key={id} as={iconMap[slug]} title={name} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
