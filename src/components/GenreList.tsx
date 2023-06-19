import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

type Props = {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

function GenreList({ onSelect, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  return (
    <List>
      {isLoading ? (
        <Spinner />
      ) : (
        data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelect(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))
      )}
    </List>
  );
}

export default GenreList;
