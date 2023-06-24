import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 86_400_000, // 24 * 60 * 60 * 1000 ms = 24h
    initialData: genres,
  });

export default useGenres;
