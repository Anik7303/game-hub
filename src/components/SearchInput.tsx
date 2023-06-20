import { FormEventHandler, useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

type Props = {
  onSearch: (searchText: string) => void;
};

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
