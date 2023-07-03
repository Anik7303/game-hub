import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";
import platformService from "../services/platform-service";

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => platformService.get().then((res) => res.results),
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
