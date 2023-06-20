import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

type Props = {
  onSearch: (searchText: string) => void;
};

function SearchInput(props: Props) {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search..." variant="filled" />
    </InputGroup>
  );
}

export default SearchInput;
