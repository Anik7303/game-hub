import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformService from "../services/platform-service";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => platformService.get().then((res) => res.results),
    staleTime: 86_400_000, // 24 * 60 * 60 * 1000 ms = 24h
    initialData: platforms,
  });

export default usePlatforms;
