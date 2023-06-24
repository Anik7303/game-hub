import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreService from "../services/genre-service";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genre"],
    queryFn: () => genreService.get().then((res) => res.results),
    staleTime: 86_400_000, // 24 * 60 * 60 * 1000 ms = 24h
    initialData: genres,
  });

export default useGenres;
