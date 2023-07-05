import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import genres from "../data/genres";
import Genre from "../entities/Genre";
import genreService from "../services/genre-service";

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genre"],
    queryFn: () => genreService.get().then((res) => res.results),
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
