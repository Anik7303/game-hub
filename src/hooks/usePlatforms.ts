import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/list/parents")
        .then((res) => res.data.results),
    staleTime: 86_400_000, // 24 * 60 * 60 * 1000 ms = 24h
    initialData: platforms,
  });

export default usePlatforms;
