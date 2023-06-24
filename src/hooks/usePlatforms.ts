import { useQuery } from "@tanstack/react-query";
import ms from "ms";

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
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
