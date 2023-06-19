import { Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  return (
    <ul>
      {isLoading ? (
        <Spinner />
      ) : (
        data.map(({ id, name }) => <li key={id}>{name}</li>)
      )}
    </ul>
  );
}

export default GenreList;
