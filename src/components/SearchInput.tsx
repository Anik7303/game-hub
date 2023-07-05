import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEventHandler, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import useGameQuery from "../store";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery((s) => s.setSearchText);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      ref.current.value = "";
      navigate("/");
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
