import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  children: string;
  maxChar?: number;
};

function ExpandableText({ children, maxChar = 300 }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) return null;

  if (children.length <= maxChar) return <Text>{children}</Text>;

  const summary = isOpen ? children : `${children.substring(0, maxChar)}...`;

  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        marginLeft={2}
        onClick={() => setIsOpen((s) => !s)}
        size="xs"
      >
        {isOpen ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
